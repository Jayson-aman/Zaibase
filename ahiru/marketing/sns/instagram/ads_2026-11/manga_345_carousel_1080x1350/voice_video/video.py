import sys, os, json, wave, subprocess, shutil
sys.path.insert(0,'.')
import tts
ADS='/home/user/Zaibase/ahiru/marketing/sns/instagram/ads_2026-11'
SUM={'manga_25x36_carousel_1080x1350':'25かける36は、25かける4かける9。100かける9で、900です。',
 'manga_99x27_carousel_1080x1350':'99かける27は、100かける27ひく27。2700ひく27で、2673です。',
 'manga_345_carousel_1080x1350':'たて9、しゃへん15は、3対4対5の、3倍。残りの辺は、4かける3で、12センチです。',
 'manga_23x27_carousel_1080x1350':'23かける27は、600たす21で、621です。じゅうのくらいが同じで、いちのくらいの和が10のときに、使えます。'}
LINES={ # slide -> wav list
 'manga_25x36_carousel_1080x1350':[['25x36_1_1'],['25x36_2_1'],['25x36_3_1'],['25x36_4_1','25x36_4_2']],
 'manga_99x27_carousel_1080x1350':[['99x27_1_1'],['99x27_2_1'],['99x27_3_1'],['99x27_4_1','99x27_4_2']],
 'manga_345_carousel_1080x1350':[['345_1_1'],['345_2_1'],['345_3_1'],['345_4_1','345_4_2']],
 'manga_23x27_carousel_1080x1350':[['23x27_1_1'],['23x27_2_1'],['23x27_3_1'],['23x27_4_1','23x27_4_2']]}
def wavname(mk,si,li): return f'wav/{mk[:11]}_{si}_{li}.wav'
def find(mk,si,li):
    p=wavname(mk,si,li); return p
def read(p):
    with wave.open(p) as w: return w.readframes(w.getnframes())
def silence(sec): return b'\x00\x00'*int(24000*sec)
def write(p,pcm):
    with wave.open(p,'wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)
os.makedirs('out',exist_ok=True)
for mk in SUM:
    # まとめ（ナレーション）を作り直す
    sp=f'wav/{mk[:11]}_5_sum.wav'; tts.speak('語',SUM[mk],sp); print(mk[:14],'sum heard:',tts.transcribe(sp))
    slides=[]
    for si in range(1,5):
        lines=[find(mk,si,li) for li in range(1,(2 if si==4 else 1)+1)]
        pcm=silence(0.4)
        for k,p in enumerate(lines):
            pcm+=read(p)+(silence(0.35) if k<len(lines)-1 else b'')
        pcm+=silence(0.8); slides.append(pcm)
    slides.append(silence(0.4)+read(sp)+silence(0.3)+read('wav/cta_1.wav')+silence(1.2))
    segs=[]
    for si,pcm in enumerate(slides,1):
        wp=f'out/{mk[:11]}_s{si}.wav'; write(wp,pcm)
        img=f'{ADS}/{mk}/slide_{si}.png'
        for kind,vf in (('reel',"scale=1080:1350,pad=1080:1920:0:285:color=0xCFE5FF,format=yuv420p"),('feed',"scale=1080:1350,format=yuv420p")):
            sp_=f'out/{mk[:11]}_s{si}_{kind}.mp4'
            subprocess.run(['ffmpeg','-y','-loglevel','error','-loop','1','-framerate','30','-i',img,'-i',wp,'-vf',vf,'-c:v','libx264','-tune','stillimage','-r','30','-c:a','aac','-b:a','160k','-shortest',sp_],check=True)
    for kind in ('reel','feed'):
        lst=f'out/{mk[:11]}_{kind}.txt'
        open(lst,'w').write(''.join(f"file '{mk[:11]}_s{si}_{kind}.mp4'\n" for si in range(1,6)))
        subprocess.run(['ffmpeg','-y','-loglevel','error','-f','concat','-safe','0','-i',lst,'-c','copy',f'out/{mk}_{kind}.mp4'],check=True)
    full=b''.join(slides); write(f'out/{mk}.wav',full)
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',f'out/{mk}.wav','-b:a','128k',f'out/{mk}.mp3'],check=True)
    d=subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'out/{mk}_reel.mp4']).decode().strip()
    print(mk[:14],'動画の長さ',round(float(d),1),'秒')
