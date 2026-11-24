---
title: "CactusNet"
tagline: "Landing page comercial trilingüe, SpeedTest y mapa de cobertura ISP"
category: "web"
categoryLabel: "Landing Page · ISP"
client: "CactusNet · Operador Fibra Óptica & Radioenlace"
status: "En producción · Cliente activo"
order: 1
featured: true
summary: "Landing page comercial para operador de fibra óptica (FTTH) y radioenlace en La Guajira con soporte en Wayuunaiki, Español e Inglés, mapa MapLibre GL, medidor SpeedTest y embudo directo hacia WhatsApp."
problem: "El operador necesitaba captar clientes residenciales y empresariales en zonas urbanas y rurales, verificando cobertura y atendiendo comunidades locales en Wayuunaiki sin plantillas lentas."
solution: "Diseñamos una landing page en Astro 5 de carga inferior a 1 segundo, internacionalización trilingüe (ES, EN y Wayuunaiki), mapa interactivo de cobertura con MapLibre GL, simulador SpeedTest y contratación directa por WhatsApp."
results:
  - "Experiencia ultrarrápida (LCP < 1.2 s) incluso en redes móviles rurales."
  - "Inclusión digital pionera con glosario técnico en lengua Wayuunaiki."
  - "Embudo de selección de planes hogar y empresa directo hacia asesores en WhatsApp."
metrics:
  - value: "3 idiomas"
    label: "ES · EN · Wayuunaiki"
  - value: "< 1.0 s"
    label: "Carga en red móvil"
  - value: "MapLibre"
    label: "Cobertura + SpeedTest"
stack:
  - "Astro 5"
  - "TypeScript"
  - "MapLibre GL"
  - "i18n Trilingüe"
  - "SpeedTest Web Worker"
screenshot: "../../assets/products/cactusnet.png"
screenshotAlt: "Captura real de la landing page comercial de CactusNet mostrando planes de conectividad rural y urbana en La Guajira"
liveUrl: "https://cactusnet.com.co"
embedDemo: true
interactiveWidget: "none"
serviceInterest: "Landing Pages & Sitios Web"
---

## Contexto del proyecto

CactusNet presta servicio de internet de banda ancha por fibra óptica (FTTH) y radioenlace en zonas urbanas y rurales de La Guajira. Su sitio web debía actuar como **canal principal de captación comercial**, cargando al instante en celulares y respetando la identidad cultural de la región.

## Decisiones de arquitectura

- **Renderizado estático en Astro 5:** Cero dependencias innecesarias para mantener métricas Core Web Vitals limpias incluso en conexiones 4G inestables.
- **Mapa interactivo y SpeedTest:** Capas vectoriales con MapLibre GL para consultar cobertura urbana/rural y prueba de velocidad directa en el navegador.
- **Pertinencia lingüística:** Sistema i18n con diccionario en Español, Inglés y Wayuunaiki (*Pütchi Anasü*, *Apüshii Mma*, *Piichi*, *A'yatawaa*) con fallback automático.
