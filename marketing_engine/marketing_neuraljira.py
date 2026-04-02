import urllib.request, urllib.parse, json, time, os
from PIL import Image, ImageDraw, ImageFont

GROQ_KEY = "os.getenv("GROQ_API_KEY")
FB_TOKEN = "os.getenv("FB_ACCESS_TOKEN")
PAGE_ID = "112603561747066"

try:
    font_large = ImageFont.truetype('/root/.openclaw/workspace/fonts/FiraCode.ttf', 70)
    font_medium = ImageFont.truetype('/root/.openclaw/workspace/fonts/FiraCode.ttf', 40)
except:
    font_large = ImageFont.load_default()
    font_medium = font_large

def crear_imagen(texto_principal, subtitulo, filename):
    img = Image.new('RGB', (1080, 1080), color=(15, 23, 42))
    d = ImageDraw.Draw(img)
    # Header NeuralJira
    d.text((50, 80), "NEURALJIRA", fill=(192, 132, 252), font=font_large)
    d.line([(50, 180), (1030, 180)], fill=(56, 189, 248), width=8)
    
    # Main text
    words = texto_principal.split()
    lines = []
    current_line = ""
    for word in words:
        if len(current_line) + len(word) < 20:
            current_line += word + " "
        else:
            lines.append(current_line)
            current_line = word + " "
    lines.append(current_line)
    
    y = 350
    for line in lines:
        d.text((50, y), line, fill=(248, 250, 252), font=font_large)
        y += 100
        
    # Subtitle
    d.text((50, y+100), subtitulo, fill=(56, 189, 248), font=font_medium)
    img.save(filename)
    return filename

posts = [
    {
        "titulo_img": "DESARROLLO DE SOFTWARE A MEDIDA",
        "sub_img": "CONSTRUIMOS TU MVP",
        "prompt": "Escribe un post de Facebook vendiendo el servicio de 'Desarrollo de Software a Medida' de NeuralJira. Menciona que creamos MVPs escalables con código moderno (Astro, Next.js, React) en vez de plantillas lentas. Cero Markdown, usa emojis y espacios dobles. Haz un llamado a la acción para agendar asesoría."
    },
    {
        "titulo_img": "ASESORÍA ESTRATÉGICA TI",
        "sub_img": "OPTIMIZA TU NEGOCIO B2B",
        "prompt": "Escribe un post de Facebook vendiendo 'Asesoría Estratégica TI' de NeuralJira. Enfocado en empresas B2B y logística (como bodegas y restaurantes) que pierden dinero por usar Excel en lugar de un ERP a medida en la nube. Cero Markdown, usa emojis, directo y agresivo."
    },
    {
        "titulo_img": "APRENDE PYTHON Y ASTROJS",
        "sub_img": "NUESTRA ACADEMIA WEB",
        "prompt": "Escribe un post educativo/promocional para NeuralJira. Enseña un tip súper rápido de React o Python, y luego invita a los usuarios a aprender con nosotros en la Academia Web de NeuralJira para que pasen de Junior a Senior. Cero Markdown."
    }
]

def generar_texto(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {GROQ_KEY}", "Content-Type": "application/json", "User-Agent": "curl/7.68.0"}
    data = json.dumps({"model":"llama-3.1-8b-instant", "messages":[{"role":"user", "content":prompt}], "temperature":0.7}).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    with urllib.request.urlopen(req) as res:
        return json.loads(res.read().decode('utf-8'))["choices"][0]["message"]["content"].replace('**', '').replace('`', '')

for i, p in enumerate(posts):
    print(f"Post {i+1}...")
    img_file = crear_imagen(p["titulo_img"], p["sub_img"], f"img_{i}.jpg")
    texto = generar_texto(p["prompt"])
    
    url_fb = f"https://graph.facebook.com/v19.0/{PAGE_ID}/photos"
    # Fallback to curl because urllib multipart is tricky
    os.system(f'curl -s -X POST "{url_fb}" -F "message={texto}" -F "source=@{img_file}" -F "access_token={FB_TOKEN}"')
    
    if i < len(posts) - 1:
        print("Sleep 600...")
        time.sleep(600)
