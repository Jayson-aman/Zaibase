import os, sys, json, base64, wave, urllib.request, urllib.error
KEY=os.environ['GEMINI_API_KEY']
TTS='https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent'
ASR='https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent'
VOICE={'子':('Leda','元気で明るい、小学生の女の子の声で、'),'母':('Kore','やさしく、あたたかい、お母さんの声で、'),'語':('Aoede','明るく、はきはきした、ナレーションの声で、')}
def post(url,body):
    req=urllib.request.Request(url,data=json.dumps(body).encode(),headers={'Content-Type':'application/json','x-goog-api-key':KEY})
    return json.load(urllib.request.urlopen(req,timeout=180))
def speak(who,text,path):
    voice,style=VOICE[who]
    body={"contents":[{"parts":[{"text":f"{style}次の文を、読んでください：{text}"}]}],
          "generationConfig":{"responseModalities":["AUDIO"],"speechConfig":{"voiceConfig":{"prebuiltVoiceConfig":{"voiceName":voice}}}}}
    r=post(TTS,body)
    for c in r.get('candidates',[]):
        for p in c.get('content',{}).get('parts',[]):
            d=p.get('inlineData')
            if d:
                pcm=base64.b64decode(d['data'])
                with wave.open(path,'wb') as w:
                    w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)
                return len(pcm)/2/24000
    raise RuntimeError('no audio '+json.dumps(r)[:200])
def transcribe(path):
    b=base64.b64encode(open(path,'rb').read()).decode()
    r=post(ASR,{"contents":[{"parts":[{"text":"この音声を、聞こえたとおりに、日本語で、書き起こしてください。説明は不要で、書き起こしだけ出力。"},{"inlineData":{"mimeType":"audio/wav","data":b}}]}]})
    return r['candidates'][0]['content']['parts'][0]['text'].strip()
if __name__=='__main__':
    who,text,out=sys.argv[1:4]
    d=speak(who,text,out); print('sec',round(d,2)); print('heard:',transcribe(out))
