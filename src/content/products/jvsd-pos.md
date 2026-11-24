---
title: "JVSD POS & KDS"
tagline: "Sistema gastronómico Local-First con comandas QR, KDS, escandallo y cierre ciego"
category: "local-first"
categoryLabel: "Gastronomía · Local-First"
client: "Restaurantes, Bares & Gastrobares"
status: "Demo interactiva KDS"
order: 4
featured: true
summary: "Punto de venta, pedidos QR en mesa y pantalla de cocina (KDS) sobre red LAN local con Fastify 5, Socket.io y SQLite WAL: cero caídas en picos de fin de semana incluso sin internet."
problem: "En noches de alta demanda (jueves a domingo y festivos), un corte de internet paraliza los POS en la nube, desordena la cocina y expone la caja a descuadres en el cierre."
solution: "Creamos un servidor local en Fastify 5 + Socket.io + node:sqlite (WAL + SAVEPOINT) compilado para Windows y Linux, con semáforo automático KDS, escandallo reversible de inventario y cierre ciego hasta las 04:00 AM."
results:
  - "Mesas por QR, meseros y cocina KDS sincronizados en tiempo real sobre Wi-Fi local sin internet."
  - "Semáforo automático en cocina (<8m verde, 8–14m amarillo, >15m alerta roja) y escandallo reversible."
  - "Cierre ciego anti-fraude con corte contable nocturno hasta las 04:00 AM."
metrics:
  - value: "0 ms"
    label: "Dependencia de internet"
  - value: "KDS + QR"
    label: "Semáforo en vivo"
  - value: "SQLite WAL"
    label: "Escandallo atómico"
stack:
  - "Fastify 5"
  - "Socket.io"
  - "React / Vite"
  - "node:sqlite (WAL)"
  - "Windows .exe / Linux"
embedDemo: false
interactiveWidget: "kds"
serviceInterest: "Software a Medida & Local-First"
---

## Contexto del proyecto

Diseñado específicamente para los picos reales de hostelería en Colombia (jueves, viernes, sábado, domingo y festivos), **JVSD POS & KDS** mantiene mesas, barra y cocina operando sin interrupciones sobre un Mini PC o equipo local.

## Decisiones de arquitectura

- **Red LAN soberana con Fastify 5 + Socket.io:** Las órdenes escaneadas por QR en cada mesa llegan en milisegundos al monitor KDS de cocina sin salir a la nube.
- **Escandallo reversible en SQLite WAL:** Descuento atómico de ingredientes por receta al confirmar la comanda y reintegro automático mediante `SAVEPOINT` si se cancela un plato.
- **Cierre ciego y corte nocturno:** El turno contable abarca hasta las 04:00 AM para gastrobares, exigiendo conteo físico antes de revelar el cuadre del sistema.
