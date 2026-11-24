---
title: "InventarioADN"
tagline: "Gemelo digital 3D multi-tenant para control logístico de bodegas y eventos"
category: "saas"
categoryLabel: "Enterprise SaaS · 3D"
client: "Operación Logística & Bodegas de Distribución"
status: "Validado en operación real"
order: 2
featured: true
summary: "Plataforma SaaS B2B para gestión logística en tiempo real con gemelo digital 3D de racks en Three.js, backend asíncrono en FastAPI + PostgreSQL e integración QR con ERPs externos."
problem: "En bodegas de gran volumen, localizar referencias en estanterías multinivel con hojas de cálculo genera errores de picking, descuadres de inventario y curva de aprendizaje alta para operarios."
solution: "Construimos un gemelo digital 3D en Three.js que colorea racks, pasillos y niveles por ocupación, respaldado por FastAPI asíncrono, PostgreSQL indexado, trazabilidad completa y conectores QR para ERPs como SAMERP."
results:
  - "Ubicación espacial inmediata de mercancía por rack, pasillo y nivel."
  - "Trazabilidad completa de Entradas, Salidas, Alistamientos, Despacho y Liquidación."
  - "Backend FastAPI con paginación, GZip, 11 índices en PostgreSQL y conector QR para ERP."
metrics:
  - value: "3D WebGL"
    label: "Racks y pasillos en vivo"
  - value: "FastAPI"
    label: "Backend async + PG"
  - value: "QR + ERP"
    label: "Integración SAMERP"
stack:
  - "Three.js (WebGL)"
  - "FastAPI (Python)"
  - "PostgreSQL"
  - "Astro / Vue"
  - "Integración ERP QR"
embedDemo: false
interactiveWidget: "warehouse"
serviceInterest: "Software a Medida & Local-First"
---

## Contexto del proyecto

Controlar miles de referencias en bodegas de distribución y eventos masivos exige velocidad visual y trazabilidad exacta. **InventarioADN** convierte listados complejos de SKU en un **gemelo digital 3D** comprensible al instante para coordinadores y operadores de piso.

## Decisiones de arquitectura

- **Visualizador 3D en Three.js:** Representación interactiva de racks, pasillos y niveles con códigos de color según ocupación y rotación.
- **Backend FastAPI asíncrono:** Endpoints optimizados con autenticación JWT, compresión GZip y 11 índices especializados en PostgreSQL.
- **Ciclo operativo completo e integración ERP:** Módulos de Entradas, Salidas, Alistamientos, Despacho y Liquidación preparados para enlazarse mediante QR con sistemas como SAMERP.
