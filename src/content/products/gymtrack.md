---
title: "GymTrack"
tagline: "Software híbrido de gestión fitness con servidor de licencias Go y Ed25519"
category: "saas"
categoryLabel: "SaaS Fitness · Híbrido"
client: "Gimnasios, CrossFit & Centros de Acondicionamiento"
status: "Demo interactiva en vivo"
order: 3
featured: true
summary: "Plataforma de escritorio híbrida para control de socios, turnos, pagos y punto de venta que opera 100% offline y se activa con licencias criptográficas Ed25519 emitidas desde un servidor central en Go 1.24."
problem: "Muchos gimnasios dependen de plataformas en la nube con cobros elevados en dólares que paralizan la recepción y el control de ingresos cada vez que falla el internet."
solution: "Desarrollamos un cliente desktop empaquetado (Python/Flask/SQLite) para operación instantánea sin dependencias y un Servidor Central de Licencias en Go 1.24 + GORM que firma tokens Ed25519 verificables 100% offline."
results:
  - "Recepción, control de vencimientos y POS funcionando a velocidad local incluso sin internet."
  - "Validación offline segura mediante criptografía de curva elíptica Ed25519 y SHA-256."
  - "Panel administrativo embebido en Go (go:embed) para licencias de prueba, mensuales o perpetuas."
metrics:
  - value: "100%"
    label: "Operación offline"
  - value: "Go 1.24"
    label: "License Server cloud"
  - value: "Ed25519"
    label: "Firma criptográfica"
stack:
  - "Python / Flask"
  - "SQLite WAL"
  - "Go 1.24 + GORM"
  - "Ed25519"
  - "Windows & Linux"
screenshot: "../../assets/products/gymtrack.png"
screenshotAlt: "Captura real de la plataforma GymTrack mostrando descarga para Windows y Linux, prueba gratuita y demo interactiva"
liveUrl: "https://demo-html-five.vercel.app/"
embedDemo: true
interactiveWidget: "none"
serviceInterest: "Software a Medida & Local-First"
---

## Contexto del proyecto

Un gimnasio no puede frenar el ingreso de sus socios porque falló el proveedor de internet. **GymTrack** combina la velocidad de una app de escritorio *offline-first* con control centralizado y seguro de licencias en la nube.

## Decisiones de arquitectura

- **Cliente Desktop autónomo:** Empaquetado como ejecutable nativo (Windows y Linux) con SQLite local para administrar socios, turnos, pagos y alertas por vencimiento.
- **Servidor de Licencias en Go 1.24:** Emite tokens firmados con llave privada **Ed25519**; la app desktop verifica la firma con llave pública embebida sin requerir internet en cada arranque.
- **Administración ágil:** Panel web compilado dentro del mismo binario Go (`go:embed`) para emitir pruebas de 7 días, renovaciones o licencias vitalicias en segundos.
