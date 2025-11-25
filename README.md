# NeuralJIRA

Landing page moderna y escalable para NeuralJIRA, una agencia de asesoría y desarrollo de software para negocios.

## 🚀 Características

- **Diseño Premium**: Estética "Dark Mode" con gradientes y glassmorphism.
- **Alto Rendimiento**: Construido con [Astro](https://astro.build) para tiempos de carga mínimos.
- **Contenido Escalable**: Gestión de servicios mediante archivos Markdown.
- **Secciones Clave**:
    - Hero con propuesta de valor.
    - Marquee de clientes (prueba social).
    - Grid de servicios dinámico.
    - Portafolio de proyectos destacados.
    - Formulario de contacto.

## 🛠️ Instalación y Uso

1.  **Instalar dependencias**:
    ```sh
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```sh
    npm run dev
    ```

3.  **Construir para producción**:
    ```sh
    npm run build
    ```

## 📝 Gestión de Contenido

### Agregar un nuevo servicio
Crea un archivo `.md` en `src/content/services/` con el siguiente formato:

```markdown
---
title: "Nombre del Servicio"
description: "Breve descripción para la tarjeta."
order: 3
icon: "🚀"
---
Descripción detallada del servicio...
```

### Personalización
Los colores y tipografía se pueden ajustar en `src/styles/global.css`.
