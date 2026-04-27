# 🍔 Guía de Referencia CSS - Burger Fit

> Documentación de estilos y arquitectura para el proyecto Burger Fit (Proyecto Universitario).

## 📁 Estructura de Archivos

```
css/
├── 1-base/
│   ├── variables.css      # Definición de colores, fuentes y espaciados
│   ├── reset.css          # Limpieza de estilos del navegador
│   └── typography.css     # Estilos de títulos (Montserrat) y párrafos
├── 2-layout/
│   ├── main-layout.css    # Contenedores generales y secciones
│   ├── header.css         # Header fijo (Sticky) y navegación
│   ├── sidebar.css        # (Opcional) Menú lateral para móviles
│   └── footer.css         # Pie de página y datos de contacto
├── 3-components/
│   ├── buttons.css        # Estilos para CTAs y botones de compra
│   ├── forms.css          # Estilos para la sección de contacto
│   ├── cards.css          # Cards de productos del menú
│   ├── floating.css       # Botón de WhatsApp y elementos flotantes
│   └── utilities.css      # Clases de ayuda (márgenes, paddings)
├── 4-pages/
│   └── home.css           # Estilos exclusivos de la landing page
├── 5-responsive/
│   └── responsive.css     # Media queries para tablets y móviles
└── main.css               # Archivo maestro que importa todo el sistema
```

---

## 🎨 Variables CSS (`1-base/variables.css`)

### Colores de Marca

| Variable            | Valor     | Uso                               |
| ------------------- | --------- | --------------------------------- |
| `--primary-green`   | `#1c913e` | Color principal (Saludable/Fit)   |
| `--primary-hover`   | `#146e2f` | Estados hover en botones verdes   |
| `--brand-brown`     | `#472302` | Color secundario (Artesanal/Carne)|
| `--light-bg`        | `#f9f9f9` | Fondos de sección                 |
| `--white`           | `#ffffff` | Blanco puro                       |
| `--dark-text`       | `#1a1a1a` | Títulos y texto principal         |
| `--whatsapp-color`  | `#25d366` | Color oficial de WhatsApp         |

### Tipografía y Dimensiones

| Variable            | Valor     | Descripción                       |
| ------------------- | --------- | --------------------------------- |
| `--font-main`       | Montserrat| Fuente principal del proyecto     |
| `--header-height`   | `80px`    | Altura del header fijo            |
| `--z-fixed`         | `1000`    | Nivel de capa para el Header      |
| `--z-floating`      | `2000`    | Nivel de capa para el Botón WA    |

---

## 🔘 Botones (`3-components/buttons.css`)

| Clase           | Descripción                            |
| --------------- | -------------------------------------- |
| `.btn`          | Estilos base (transición, padding)     |
| `.btn-primary`  | Fondo verde, texto blanco (Pedir ahora)|
| `.btn-outline`  | Borde marrón, sin fondo (Ver menú)     |
| `.btn-whatsapp` | Estilo circular para el botón flotante |

---

## 🎴 Componentes Específicos

### Cards de Menú (`3-components/cards.css`)
Contenedores para las hamburguesas.
- `.card-burger`: Contenedor con borde redondeado y sombra.
- `.card-img`: Ajuste de imagen a la parte superior.
- `.card-info`: Información nutricional y precio.

### Elementos Fijos (`3-components/floating.css` & `2-layout/header.css`)
- **Header:** Utiliza `position: sticky; top: 0;` para mantenerse siempre visible.
- **WhatsApp:** Utiliza `position: fixed; bottom: 20px; right: 20px;` para el botón flotante.

---

## 📱 Responsive (`5-responsive/responsive.css`)

### Breakpoints Sugeridos
- **Desktop:** > 1024px
- **Tablet:** 768px - 1023px
- **Mobile:** < 767px

### Comportamiento
- En móviles, el `.header-content` puede pasar a un diseño de columna o activar un menú hamburguesa.
- El grid de productos en el menú pasa de `3 columnas` a `1 columna`.

---

## 🚀 Orden de Importación (`main.css`)

```css
/* 1. BASE */
@import url("./1-base/variables.css");
@import url("./1-base/reset.css");
@import url("./1-base/typography.css");

/* 2. LAYOUT */
@import url("./2-layout/header.css");
@import url("./2-layout/main-layout.css");
@import url("./2-layout/footer.css");

/* 3. COMPONENTS */
@import url("./3-components/buttons.css");
@import url("./3-components/cards.css");
@import url("./3-components/floating.css");

/* 4. PAGES */
@import url("./4-pages/home.css");

/* 5. RESPONSIVE */
@import url("./5-responsive/responsive.css");