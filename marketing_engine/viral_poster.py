import time
import urllib.request
import urllib.parse
import json

GROQ_KEY = "os.getenv("GROQ_API_KEY")
FB_TOKEN = "os.getenv("FB_ACCESS_TOKEN")
PAGE_ID = "112603561747066"

temas = [
    "Descargar videos de YouTube con yt-dlp desde Pydroid 3 en el celular.",
    "Crear un generador de contraseñas súper seguras en Python desde Termux.",
    "Cómo extraer los metadatos ocultos (EXIF) de una foto que te mandan, usando Python en tu móvil."
]

def generar_post(tema):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "curl/7.68.0"
    }
    prompt = f"""
    Escribe un post de Facebook MUY VIRAL para la página NeuralJira.
    Tema: {tema}
    El tono debe ser de un hacker/developer experto ("te enseño un truco que no quieren que sepas").
    Incluye un bloque de código Python CORTO (max 6 líneas) que funcione.
    Pide explícitamente a los usuarios que lo prueben descargando 'Pydroid 3' o 'Termux' en su celular Android.
    Usa emojis y no incluyas textos como 'Aquí tienes el post'.
    """
    data = json.dumps({
        "model": "llama-3.1-8b-instant",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.8
    }).encode("utf-8")
    
    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode("utf-8"))
            return res["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"Error generando post con Groq: {e}")
        return None

def publicar_fb(mensaje):
    url = f"https://graph.facebook.com/v19.0/{PAGE_ID}/feed"
    data = urllib.parse.urlencode({"message": mensaje, "access_token": FB_TOKEN}).encode("utf-8")
    req = urllib.request.Request(url, data=data, method="POST")
    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode("utf-8"))
            print(f"Publicado exitosamente: ID {res['id']}")
            return True
    except Exception as e:
        print(f"Error publicando en FB: {e}")
        return False

for i, tema in enumerate(temas):
    print(f"Generando post {i+1}...")
    texto = generar_post(tema)
    if texto:
        print(f"Publicando post {i+1}...")
        publicar_fb(texto)
    else:
        print("Saltando post por error en generación.")
    
    if i < len(temas) - 1:
        print("Esperando 10 minutos para el próximo post...")
        time.sleep(600) # 10 minutos
