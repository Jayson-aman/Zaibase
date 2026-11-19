import os, sys, json, base64, urllib.request
KEY=os.environ['GEMINI_API_KEY']
MODEL='gemini-3.1-flash-image'
URL=f'https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent'
STYLE=("Japanese manga-style illustration for an educational app, soft pastel colors, clean friendly line art, warm and cheerful mood, "
       "simple background, vertical 4:5 composition. IMPORTANT: absolutely no text, no letters, no numbers, no speech bubbles, no writing of any kind anywhere in the image (notebooks and papers must be blank or show only abstract scribbles).")
CHARS=("Characters (keep identical in every panel): a cheerful elementary-school girl about 10 years old with short black bob hair, a small yellow hair clip, "
       "a red cardigan over a white shirt; and her kind mother with shoulder-length brown hair tied back, a light green apron, gentle smile.")
PANELS={
 1:"Panel 1: The girl sits at a wooden living-room table with a notebook and pencil, looking tired and frustrated, one hand on her cheek, a messy crumpled eraser pile nearby. In the background the mother is in the kitchen, glancing over with a gentle smile.",
 2:"Panel 2: The mother has come to the table and leans over, pointing at the notebook with one finger and smiling as if giving a helpful hint. The girl looks up at her with curious eyes. A few small sparkles near the notebook.",
 3:"Panel 3: Close-up on the girl: her eyes are wide open with sudden realization, a bright glowing light bulb above her head, sparkles around her, pencil raised in excitement.",
 4:"Panel 4: The girl proudly holds up her notebook toward the viewer with a big happy smile; the mother has her hands on her cheeks looking surprised and delighted. Confetti-like sparkles in the air.",
}
def call(parts):
    body={"contents":[{"parts":parts}],"generationConfig":{"responseModalities":["TEXT","IMAGE"],"imageConfig":{"aspectRatio":"4:5"}}}
    req=urllib.request.Request(URL,data=json.dumps(body).encode(),headers={'Content-Type':'application/json','x-goog-api-key':KEY})
    with urllib.request.urlopen(req,timeout=180) as r: return json.load(r)
def img_of(resp):
    for c in resp.get('candidates',[]):
        for p in c.get('content',{}).get('parts',[]):
            d=p.get('inlineData') or p.get('inline_data')
            if d: return base64.b64decode(d['data'])
    return None
n=int(sys.argv[1]); ref=sys.argv[2] if len(sys.argv)>2 else None
parts=[{"text":f"{STYLE}\n{CHARS}\n{PANELS[n]}"}]
if ref:
    parts.insert(0,{"text":"Use the girl and mother in this reference image as the exact same characters (same faces, hair, clothes)."})
    parts.insert(1,{"inlineData":{"mimeType":"image/png","data":base64.b64encode(open(ref,'rb').read()).decode()}})
try:
    resp=call(parts)
except urllib.error.HTTPError as e:
    print('HTTP',e.code,e.read().decode()[:300]); sys.exit(1)
b=img_of(resp)
if not b:
    print('no image; resp keys:',json.dumps(resp)[:400]); sys.exit(1)
open(f'raw_{n}.png','wb').write(b)
u=resp.get('usageMetadata',{}); print('saved raw_%d.png'%n, len(b), 'tokens:', u.get('totalTokenCount'))
