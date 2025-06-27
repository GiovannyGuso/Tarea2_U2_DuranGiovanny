```markdown
# 🟢 Componente Web: `<espe-button>`

Este proyecto consiste en un **Web Component personalizado** desarrollado como parte del laboratorio de la asignatura **Programación Integrativa de Componentes Web** en la Universidad de las Fuerzas Armadas ESPE.

El componente `<espe-button>` representa un botón reutilizable, estilizado con la imagen institucional de la ESPE, y con soporte para estados dinámicos como `disabled` y `loading`.

## 📦 Estructura del Proyecto

```

espe-button-lit/
├── index.html                 # Página de prueba con el componente
├── README.md                  # (Este archivo)
├── package.json               # Configuración del proyecto con Vite
├── src/
│   ├── main.js                # Archivo de entrada principal
│   └── components/
│       └── EspeButton.js      # Definición del Custom Element

````

## 🧩 Funcionalidades

- Basado en **LitElement**.
- Uso de `@property` para:
  - `label`: texto dinámico del botón.
  - `disabled`: desactiva el botón.
  - `loading`: muestra un indicador de carga.
- Estilos encapsulados con **Shadow DOM**.
- Paleta y tipografía institucional:
  - Azul primario: `#003C71`
  - Tipografía: **Arial/Roboto**
- Evento personalizado `task-sent` al finalizar el proceso.
- Accesible con `aria-label` y soporte a teclado.

## 🎮 Demo del Componente

```html
<espe-button label="Guardar"></espe-button>
````

## ⚙️ Cómo Ejecutarlo

1. Clona el repositorio o descarga el proyecto.
2. Instala las dependencias:

   ```bash
   npm install
   ```
3. Inicia el entorno de desarrollo:

   ```bash
   npm run dev
   ```
4. Abre el navegador en [http://localhost:5173](http://localhost:5173) y verás el componente en acción.

## 📸 Captura

> Asegúrate de colocar una imagen de la ejecución en la carpeta `docs/` con nombre `demo.png`.

```markdown
![Vista previa del componente parte 1](img/capt1.jpg)
![Vista previa del componente parte 2](img/capt2.jpg)
```

## 📚 Créditos

* Autor: **Giovanny Durán Sánchez**
* Docente: Ing. Paulo Galarza, Mgs.
* Asignatura: Programación integrativa de componentes
* Universidad de las Fuerzas Armadas ESPE – Sede Santo Domingo

## 📝 Licencia

Este proyecto fue desarrollado con fines **educativos y académicos**.

```
