import os, sys, json, base64, urllib.request, urllib.error
KEY=os.environ['GEMINI_API_KEY']
URL='https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent'
REF='/home/user/Zaibase/ahiru/marketing/sns/instagram/ads_2026-11/manga_25x36_carousel_1080x1350/panels_raw/panel_1.png'
STYLE=("Japanese manga-style illustration for an educational app, soft pastel colors, clean friendly line art, warm and cheerful mood, simple background, vertical 4:5 composition. "
       "Draw exactly ONE single scene filling the whole frame: NOT a comic page, no panel borders, no multiple frames, no collage, no inset pictures. IMPORTANT: absolutely no text, no sound-effect lettering, no symbols such as currency signs, no letters, no numbers, no speech bubbles, no writing of any kind anywhere in the image (notebooks, papers and boards must be blank or show only abstract scribbles or plain shapes without any marks).")
CHARS=("Characters (keep identical in every panel, exactly like the reference image): a cheerful elementary-school girl about 10 years old with short black bob hair, a small yellow hair clip, "
       "a red cardigan over a white shirt; and her kind mother with shoulder-length brown hair tied back, a light green apron, gentle smile.")
P={
 'm99x27':[
  "Panel 1: The girl sits at the living-room table with a notebook, wide-eyed and overwhelmed as if facing a big hard calculation, pencil in hand, sweat drop beside her head. The mother watches kindly from behind.",
  "Panel 2: The mother leans over and points at the notebook with a finger, smiling; floating beside them a thought-cloud holds a plain blank round disc with no marks or symbols at all, suggesting the idea of 'just a bit less than a round number'. The girl looks up curious.",
  "Panel 3: Close-up on the girl: a glowing light bulb above her head, eyes sparkling, pencil raised, she has just understood a clever trick; sparkles around.",
  "Panel 4: The girl proudly holds up her notebook with a huge smile, the mother clapping her hands together, delighted. Confetti-like sparkles.",
 ],
 'm345':[
  "Panel 1: The girl sits at the table with a geometry notebook showing a simple plain right-triangle outline, looking confused with a question-mark feeling (head tilted, one hand on cheek). The mother stands behind her kindly.",
  "Panel 2: The mother points at the plain right triangle drawn in the notebook and smiles, as if giving a hint; the girl looks at it curiously. A small sparkle near the triangle.",
  "Panel 3: Close-up on the girl: a glowing light bulb above her head, eyes wide with discovery, holding a triangular ruler (set square) in one hand and a pencil in the other; sparkles.",
  "Panel 4: The girl proudly shows her notebook with the triangle, smiling widely, while the mother has her hands on her cheeks, impressed and delighted. Confetti-like sparkles.",
 ],
 'm23x27':[
  "Panel 1: The girl sits at the table with a notebook, tired of a long calculation, resting her chin on her hand; a long messy scribble of calculation in the notebook. The mother brings a cup of tea and smiles.",
  "Panel 2: The mother sits beside her and points at the notebook with a finger, smiling, whispering a hint; the girl turns toward her with curious wide eyes. A few sparkles.",
  "Panel 3: Close-up on the girl: a glowing light bulb above her head, mouth open in surprise, finger pointing up in a 'got it' pose; sparkles around.",
  "Panel 4: The girl holds up her notebook with a big grin, the mother amazed with her hands on her cheeks, then smiling proudly. Confetti-like sparkles.",
 ],
}
name=sys.argv[1]; n=int(sys.argv[2])
parts=[{"text":"Use the girl and mother in this reference image as the exact same characters (same faces, hair, clothes)."},
       {"inlineData":{"mimeType":"image/png","data":base64.b64encode(open(REF,'rb').read()).decode()}},
       {"text":f"{STYLE}\n{CHARS}\n{P[name][n-1]}"}]
body={"contents":[{"parts":parts}],"generationConfig":{"responseModalities":["TEXT","IMAGE"],"imageConfig":{"aspectRatio":"4:5"}}}
req=urllib.request.Request(URL,data=json.dumps(body).encode(),headers={'Content-Type':'application/json','x-goog-api-key':KEY})
try:
    resp=json.load(urllib.request.urlopen(req,timeout=180))
except urllib.error.HTTPError as e:
    print('HTTP',e.code,e.read().decode()[:200]); sys.exit(1)
for c in resp.get('candidates',[]):
    for p in c.get('content',{}).get('parts',[]):
        d=p.get('inlineData') or p.get('inline_data')
        if d:
            os.makedirs(name,exist_ok=True)
            open(f'{name}/raw_{n}.png','wb').write(base64.b64decode(d['data'])); print('ok',name,n); sys.exit(0)
print('no image'); sys.exit(1)
