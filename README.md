# inmobiliaria
Portal de Inmobiliaria

# Inmobiliaria ADL — Desafío 4

Aplicación web estática que renderiza dinámicamente propiedades inmobiliarias en venta y en alquiler utilizando arreglos de objetos, DOM e interpolación de templates en JavaScript vanilla.

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Cómo ejecutar](#cómo-ejecutar)
- [Requerimientos implementados](#requerimientos-implementados)
- [Arquitectura JavaScript](#arquitectura-javascript)
- [Detalle de los arreglos de datos](#detalle-de-los-arreglos-de-datos)

---

## Descripción

**Inmobiliaria ADL** es una plataforma web de tres páginas que permite explorar propiedades disponibles para compra o arriendo. La información de cada propiedad se almacena en arreglos de objetos JavaScript y se inyecta dinámicamente en el DOM mediante `innerHTML` y template literals, eliminando la necesidad de HTML estático y repetitivo.

---

## Estructura del proyecto

```
codigos/
├── index.html                        # Página principal (3 propiedades por sección)
├── propiedades_venta.html            # Listado completo de propiedades en venta
├── propiedades_alquiler.html         # Listado completo de propiedades en alquiler
└── assets/
    ├── css/
    │   └── estilos.css               # Estilos personalizados
    ├── img/
    │   └── img-main.jpeg             # Imagen de fondo del hero
    └── js/
        ├── helpers.js                # Funciones reutilizables: generarCard / renderizarPropiedades
        ├── propiedades_venta.js      # Arreglo con 6 propiedades en venta
        ├── propiedades_alquiler.js   # Arreglo con 6 propiedades en alquiler
        └── index.js                  # Lógica de renderización para index.html (límite de 3)
```

---

## Tecnologías

| Tecnología     | Versión  | Uso                                      |
|----------------|----------|------------------------------------------|
| HTML5          | —        | Estructura semántica de las páginas      |
| CSS3           | —        | Estilos y layout complementarios        |
| JavaScript ES6 | —        | Arrays, objetos, template literals, DOM  |
| Bootstrap      | 5.3.1    | Sistema de grilla y componentes (cards)  |
| Font Awesome   | Kit CDN  | Iconografía (cama, baño, ubicación…)     |

---

## Cómo ejecutar

No requiere instalación ni servidor. Basta con abrir `index.html` en cualquier navegador moderno:

```
codigos/index.html  →  doble clic o arrastrar al navegador
```

> **Recomendación:** usar la extensión **Live Server** de VS Code para evitar restricciones CORS con imágenes locales.

---

## Requerimientos implementados

| # | Requerimiento | Estado |
|---|---------------|--------|
| 1 | Crear `propiedades_venta.html` y `propiedades_alquiler.html` conectadas a sus scripts | ✅ |
| 2 | Dos arreglos de objetos con al menos 4 propiedades cada uno (`nombre`, `src`, `descripcion`, `ubicacion`, `habitaciones`, `costo`, `smoke`, `pets`) | ✅ (6 cada uno) |
| 3 | Ciclos + interpolación + `innerHTML` para renderizar las tarjetas en el HTML | ✅ |
| 4 | Condicionales para `smoke` y `pets`: icono y mensaje cambian según `true`/`false` | ✅ |
| 5 | `index.html` muestra máximo 3 por sección; botones enlazan a las páginas completas | ✅ |

---

## Arquitectura JavaScript

### `helpers.js`

Contiene dos funciones globales reutilizadas por todas las páginas:

```js
generarCard(propiedad)
// Recibe un objeto de propiedad y retorna el HTML de una Bootstrap card.
// Aplica condicionales para smoke y pets: cambia ícono y clase CSS (text-success / text-danger).

renderizarPropiedades(propiedades, containerId, limite)
// Recorre el arreglo con slice(0, limite) si se especifica límite,
// concatena los HTML generados por generarCard e inyecta en el contenedor mediante innerHTML.
```

### Lógica de condicionales (Req. 4)

```js
const smokeHtml = propiedad.smoke
  ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
  : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;

const petsHtml = propiedad.pets
  ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
  : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`;
```

### Orden de carga de scripts

**`index.html`**
```html
<script src="assets/js/helpers.js"></script>
<script src="assets/js/propiedades_venta.js"></script>
<script src="assets/js/propiedades_alquiler.js"></script>
<script src="assets/js/index.js"></script>   <!-- renderiza máximo 3 de cada arreglo -->
```

**`propiedades_venta.html`**
```html
<script src="assets/js/helpers.js"></script>
<script src="assets/js/propiedades_venta.js"></script>
<script>/* renderiza todas las propiedades_venta */</script>
```

**`propiedades_alquiler.html`**
```html
<script src="assets/js/helpers.js"></script>
<script src="assets/js/propiedades_alquiler.js"></script>
<script>/* renderiza todas las propiedades_alquiler */</script>
```

---

## Detalle de los arreglos de datos

### `propiedades_venta` — 6 objetos

| Nombre | Habitaciones | Precio USD | Smoke | Pets |
|--------|:---:|---:|:---:|:---:|
| Apartamento de lujo en zona exclusiva | 4 | 5.000 | ❌ | ❌ |
| Apartamento acogedor en la montaña | 2 | 1.200 | ✅ | ✅ |
| Penthouse de lujo con terraza panorámica | 3 | 4.500 | ❌ | ✅ |
| Casa familiar con amplio jardín | 5 | 3.200 | ❌ | ✅ |
| Dúplex moderno en barrio histórico | 3 | 2.800 | ❌ | ❌ |
| Villa mediterránea con piscina | 6 | 9.500 | ❌ | ✅ |

### `propiedades_alquiler` — 6 objetos

| Nombre | Habitaciones | Precio USD/mes | Smoke | Pets |
|--------|:---:|---:|:---:|:---:|
| Apartamento en el centro de la ciudad | 2 | 2.000 | ❌ | ✅ |
| Apartamento luminoso con vista al mar | 3 | 2.500 | ✅ | ✅ |
| Condominio moderno en zona residencial | 2 | 2.200 | ❌ | ❌ |
| Loft industrial en barrio creativo | 1 | 1.800 | ✅ | ❌ |
| Estudio acogedor cerca de universidad | 1 | 900 | ❌ | ❌ |
| Casa adosada con patio privado | 3 | 2.700 | ❌ | ✅ |

---

*Desafío 4 — Módulo 3: Arrays y Objetos con DOM · Desafío Latam*
