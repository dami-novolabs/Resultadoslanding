# 🚀 Novolabs Startup School - Landing Page Export para v0.dev

## 📋 Resumen del Proyecto

Landing page moderna y minimalista para Novolabs Startup School con:
- **Paleta de colores**: Negro (#000000), Blanco (#FFFFFF), Rojo acento (#FF3A20), Lime-400 (#c4ff00)
- **Tipografías**: 
  - Geist (Google Fonts) para títulos
  - Satoshi Variable (Fontshare) para textos de cuerpo
- **Estructura**: Hero → IntroTestimonials → VideoTestimonials → TextTestimonials → CTA Final → Footer
- **Framework**: React + Tailwind CSS
- **Componentes UI**: shadcn/ui (Dialog, Carousel con Embla)
- **Animaciones**: Motion (Framer Motion)

---

## 🎨 Estructura de Componentes

La página está dividida en los siguientes componentes principales:

1. **Navbar** - Navbar fija con logo
2. **Hero** - Sección hero con 2 columnas (texto + video vertical) con flecha animada
3. **IntroTestimonials** - 3 testimonios destacados con avatares y rating de Trustpilot
4. **VideoTestimonials** - 6 testimonios en video con thumbnails horizontales
5. **TextTestimonials** - Grid de testimonios en texto
6. **CTA Final** - Llamada a la acción de cierre
7. **Footer** - Footer simple con logo y copyright

---

## 📦 Dependencias Necesarias

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "latest",
    "motion": "latest",
    "embla-carousel-react": "latest",
    "embla-carousel-autoplay": "latest",
    "tailwindcss": "^3.4.0",
    "clsx": "latest",
    "tailwind-merge": "latest"
  }
}
```

---

## 🎯 Instrucciones para v0.dev

### 1. Prompt Principal para v0.dev

```
Crea una landing page moderna para una escuela de startups llamada "Novolabs Startup School" con las siguientes características:

DISEÑO Y ESTILO:
- Paleta de colores: Negro (#000000), Blanco (#FFFFFF), Rojo acento (#FF3A20 o rgb(255,58,32)), Lime-400 (#c4ff00)
- Tipografía: Geist de Google Fonts para títulos (font-weight: 800), Satoshi Variable de Fontshare para textos de cuerpo
- Estética minimalista y moderna
- Totalmente responsive (mobile-first)

ESTRUCTURA DE LA PÁGINA:

1. NAVBAR FIJA (negro con backdrop-blur):
   - Logo de Novolabs a la izquierda
   - Height: 64px en desktop, 56px en mobile
   - Border inferior: border-white/10

2. HERO SECTION (fondo negro):
   - Layout de 2 columnas en desktop, 1 columna en mobile
   - Columna izquierda:
     * Badge pequeño: "Tu entrevista esta confirmada ✅" (bg-white/5, border-white/10)
     * Título grande: "Estás más cerca de" + "lanzar tu proyecto" (este último en color #FF3A20)
     * Párrafo descriptivo en gris
   - Columna derecha:
     * Video vertical (aspect-ratio 9:16) con thumbnail
     * Botón de play centrado (lime-400 con hover effect)
     * Iframe de Streamable: https://streamable.com/e/5jmnc2
     * Flecha curva animada (Motion) que apunta al video con texto "TOMÁS VOLONTÉ / CO-FUNDADOR DE NOVOLABS" (solo desktop)

3. INTRO TESTIMONIALS (fondo blanco):
   - Título: "Antes de seguir, leé esto:" con "leé esto:" en rojo
   - Subtítulo: "Algunas de las +300 personas que ya pasaron por Novolabs"
   - Grid de 3 testimonios con:
     * Avatar circular
     * Nombre
     * 5 estrellas de Trustpilot (color #00b67a)
     * Ícono de LinkedIn
     * Texto del testimonio en itálica
   - Rating de Trustpilot al final: "4.8 ⭐⭐⭐⭐⭐ en Trustpilot" (4.5 estrellas, la última a la mitad)

4. VIDEO TESTIMONIALS (fondo negro - neutral-950):
   - Título: "Opiniones reales, sin humo." con "sin humo." en rojo
   - Subtítulo en gris
   - Grid de 2 columnas (1 en mobile)
   - 6 videos con:
     * Thumbnail horizontal (aspect-ratio 16:9)
     * Badge superior izquierda con industria (bg-black/10)
     * Nombre debajo del badge
     * Play button centrado (blanco con hover a lime-400)
     * Quote en la parte inferior
     * Hover effect: border-lime-400/50
   - Modal fullscreen para reproducir videos de YouTube (formato vertical 9:16)

5. TEXT TESTIMONIALS (fondo blanco):
   - Título: "Más y más testimonios" con "más testimonios" en rojo
   - Grid de 3 columnas responsive
   - Misma estructura que IntroTestimonials

6. CTA FINAL (fondo negro):
   - Título: "¿Ready para la Entrevista?"
   - Texto descriptivo en gris
   - Texto con flecha: "Nos vemos pronto 🫡 →" en rojo con border-bottom

7. FOOTER (fondo negro):
   - Logo a la izquierda
   - Copyright a la derecha
   - Border superior: border-white/10

ANIMACIONES:
- Hero: Fade in + slide up para el texto
- Hero: Scale up para el video
- Flecha animada con pathLength de Motion
- Hover effects en todos los cards de testimonios
- Transitions suaves en todos los elementos interactivos

COMPONENTES UI NECESARIOS:
- Dialog de shadcn/ui para modal de videos
- Lucide-react para íconos (Play, Star, ChevronRight, X, etc.)
- Motion (framer-motion) para animaciones

RESPONSIVE:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Stack en mobile, grids en desktop
- Textos más pequeños en mobile
- Padding y spacing adaptativo
```

### 2. Datos de Ejemplo para Testimonios

**IntroTestimonials (3 testimonios):**

```javascript
const introTestimonials = [
  {
    name: "Alexy Narváez",
    text: "Es un proceso adaptado a cada industria, con acompañamiento real. Aprendí a testear mi idea sin tirar plata antes de tiempo. La comunidad es excelente, todos apoyándose.",
    linkedin: "https://www.linkedin.com/in/alexy-eduardo-narvaez-gonzalez-0958a31a/"
  },
  {
    name: "Magdalena Laplacette",
    text: "Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiandote a ir por todo.",
    linkedin: "https://www.linkedin.com/in/magdalena-laplacette/"
  },
  {
    name: "Hernán Farruggia",
    text: "Entré con ideas vagas y salí con un plan claro. Me ayudaron a evitar errores costosos y a enfocarme en lo que realmente importa. Hoy ya tengo tracción real.",
    linkedin: "https://www.linkedin.com/in/hernanfarruggia/"
  }
];
```

**VideoTestimonials (6 testimonios):**

```javascript
const videoTestimonials = [
  {
    name: "Magdalena Biassuto",
    industry: "Salud",
    quote: "Mejoré mi idea original y encontré a mi socio tech dentro del Programa...",
    videoUrl: "https://www.youtube.com/embed/ESUN3E3aX3g"
  },
  {
    name: "Raul Monge",
    industry: "Logística",
    quote: "Conseguí mis primeros 15 clientes recurrentes en menos de 4 meses...",
    videoUrl: "https://www.youtube.com/embed/7F4_lbbzPKM"
  },
  {
    name: "Roberto Jimenez",
    industry: "Legales",
    quote: "Tengo una idea mucho más sólida y los primeros clientes...",
    videoUrl: "https://www.youtube.com/embed/XOs8wzErvVw"
  },
  {
    name: "Laura Martinez",
    industry: "Energías Renovables",
    quote: "Me gustó tanto el Programa que le cuento a todos de Novolabs...",
    videoUrl: "https://www.youtube.com/embed/83F0dm9QVmY"
  },
  {
    name: "Valentín Llorens",
    industry: "Educación",
    quote: "Descubrí una nueva forma de emprender, me cambiaron la cabeza...",
    videoUrl: "https://www.youtube.com/embed/_cnUn0Q0uEs"
  },
  {
    name: "Gabriel Vicentin",
    industry: "Deporte",
    quote: "Ojalá hubiera conocido Novolabs hace muchos años atrás...",
    videoUrl: "https://www.youtube.com/embed/uloRdBDJsHw"
  }
];
```

**TextTestimonials (15 testimonios):**

```javascript
const textTestimonials = [
  {
    name: "Henry",
    text: "Aprendí metodologías que aplicaré siempre. La parte de validación fue clave para mí: conseguí mis primeros clientes antes de lanzar. Es un programa serio, sin verso.",
    linkedin: "https://www.linkedin.com/in/frangeary/"
  },
  {
    name: "Tatiana Domínguez",
    text: "Nos ayudaron a validar el producto antes de desarrollarlo, ahorramos meses de trabajo. El nivel de feedback es brutal, te dicen la verdad sin filtros.",
    linkedin: "https://www.linkedin.com/in/tatiana-teresa-dominguez-rojas-65392415/"
  },
  {
    name: "Luciano Schillagi",
    text: "Arranqué con dudas enormes sobre mi idea. Hoy tengo claridad total sobre qué hacer y cómo escalar. El equipo de Novolabs es increíble, te empujan a dar lo mejor.",
    linkedin: "https://www.linkedin.com/in/lucianoschillagi/"
  },
  {
    name: "Gerónimo Mársico",
    text: "Logré pivotar mi proyecto y encontrar product-market fit gracias al programa. La red de contactos que armé acá vale oro. Super recomendable para cualquier founder.",
    linkedin: "https://www.linkedin.com/in/geronimomarsico/"
  },
  {
    name: "Isabel Darsin",
    text: "Los chicos de Novo son excelentes profesionales, tienen muchísima experiencia y un método para emprendedores que garantiza el éxito de tu start-up.",
    linkedin: "https://www.linkedin.com/in/isabeldarsin/"
  },
  {
    name: "Ignacio Ferreira",
    text: "Me ayudaron a estructurar mi startup desde cero. Aprendí a vender antes de tener producto. El networking con otros founders fue un plus enorme.",
    linkedin: "https://www.linkedin.com/in/ignacio-ferreira/"
  },
  {
    name: "Adrián Dutra",
    text: "Pasé de estar perdido a tener un roadmap claro y ejecutable. Los mentores son cracks, te guían sin darte todo servido. Salís con habilidades reales.",
    linkedin: "https://www.linkedin.com/in/adrian-dutra/"
  },
  {
    name: "Camila Aguado",
    text: "Me ayudó de forma práctica y clara a llevar adelante mi emprendimiento. Novo es muy bueno!",
    linkedin: "https://www.linkedin.com/in/camilaaguado/"
  },
  {
    name: "Pol López",
    text: "El acompañamiento fue increíble, por el conocimiento y la cercanía del equipo. Pero lo mejor es la comunidad: todos comparten, ayudan y suman. Emprender acompañado hace toda la diferencia.",
    linkedin: "https://www.linkedin.com/in/paullopezreyes/"
  },
  {
    name: "Maximiliano Fabián",
    text: "El nivel de profundidad en las sesiones es impresionante. Te ayudan a pensar estratégicamente y ejecutar de forma táctica. Los resultados hablan solos.",
    linkedin: "https://www.linkedin.com/in/maxifabian"
  },
  {
    name: "Silvina Fernandez",
    text: "Entre en el programa buscando orientación para poder llevar a cabo mi proyecto… Y al finalizar logre validar mi idea y lanzar mi MVP al mercado. A todos los que estén pensando en emprender no duden en que Novo es la mejor opción.",
    linkedin: "https://www.linkedin.com/in/silfernandez-liderarte/"
  },
  {
    name: "Juan Martín Cavallari",
    text: "Novolabs me ayudó a pasar del concepto a la ejecución. Aprendí herramientas concretas que uso todos los días. La comunidad es un diferencial enorme.",
    linkedin: "https://www.linkedin.com/in/juan-martín-cavallari-b25850ba"
  },
  {
    name: "Lisandro Belmonte",
    text: "Tuve una gran experiencia en Novo, me enseñaron mucho y la comunidad siempre está dispuesta a ayudar. Muy recomendable!!",
    linkedin: "https://www.linkedin.com/in/lisandro-belmonte-942335279/"
  },
  {
    name: "Mercedes Rey",
    text: "Cambió mi forma de pensar los negocios. Aprendí a testear rápido, fallar barato y validar antes de invertir. Hoy mi startup está creciendo gracias a lo que aprendí acá.",
    linkedin: "https://www.linkedin.com/in/mercedes-rey82/"
  },
  {
    name: "Lucas Zoppi",
    text: "Arranqué sin un norte claro y salí entendiendo por completo si mi emprendimiento va a funcionar o no. El nivel de atención es excelente y en cada clase me he llevado cosas que no tenía en consideración.",
    linkedin: "https://www.linkedin.com/in/zoppi/"
  }
];
```

---

## 🎨 Especificaciones de Diseño Detalladas

### Colores Principales
```css
Negro principal: #000000
Blanco: #FFFFFF
Rojo acento: #FF3A20 o rgb(255,58,32)
Lime acento: #c4ff00
Verde Trustpilot: #00b67a

Backgrounds:
- Hero/Footer/CTA: bg-black
- IntroTestimonials/TextTestimonials: bg-white
- VideoTestimonials: bg-neutral-950

Borders:
- border-white/10 (sobre fondos oscuros)
- border-gray-200 (sobre fondos blancos)
- border-lime-400/50 (hover states)
```

### Tipografía
```css
/* Importar en layout.tsx o _app.tsx */
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');

/* Aplicar */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Geist', sans-serif;
  font-weight: 800; /* Para títulos principales */
}

body, p, span, a, div {
  font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Espaciado y Padding
```css
Sections:
- py-12 sm:py-16 md:py-20 (IntroTestimonials, TextTestimonials, CTA)
- py-12 sm:py-16 md:py-24 (VideoTestimonials)

Container:
- max-w-6xl mx-auto
- px-4 sm:px-6

Cards:
- rounded-xl sm:rounded-2xl
- p-5 sm:p-6

Gaps:
- gap-5 sm:gap-6 (grids en mobile)
- gap-8 md:gap-12 (hero columns)
```

### Responsive Breakpoints
```
Mobile: < 640px (sm)
Tablet: 640px - 768px (sm - md)
Desktop: > 768px (md)
Large Desktop: > 1024px (lg)
```

---

## 🔧 Configuraciones Especiales

### Animación de la Flecha Curva (Hero)

```jsx
import { motion } from "framer-motion"

// SVG con path animado
<svg width="240" height="120" viewBox="0 0 240 120">
  <motion.path
    d="M 10 100 Q 80 80, 140 40 Q 180 15, 220 10"
    stroke="#c4ff00"
    strokeWidth="3"
    strokeLinecap="round"
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
  />
  <motion.path
    d="M 220 10 L 210 8 L 215 17 Z"
    fill="#c4ff00"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: 2.1 }}
  />
</svg>
```

### Dialog Modal para Videos

```jsx
// Usar shadcn/ui Dialog
<Dialog open={playingVideo !== null} onOpenChange={(open) => !open && setPlayingVideo(null)}>
  <DialogContent className="!max-w-md !p-0 bg-transparent border-0">
    <div className="w-full aspect-[9/16] max-h-[80vh] bg-black rounded-lg overflow-hidden">
      <iframe
        src={`${videoUrl}?autoplay=1&fs=1&modestbranding=1&rel=0`}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  </DialogContent>
</Dialog>
```

### Estrella de Trustpilot Media

```jsx
// Para la mitad de estrella en el rating 4.5
<div className="relative w-5 h-5">
  <Star className="w-5 h-5 text-gray-300 fill-gray-300 absolute" />
  <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
    <Star className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
  </div>
</div>
```

---

## 📸 Assets Necesarios

Para una implementación completa en v0.dev, necesitarás:

### Imágenes Requeridas:
1. **Logo de Novolabs** (PNG transparente)
2. **Thumbnail del video hero** (aspect-ratio 9:16)
3. **Avatares de testimonios** (mínimo 18 imágenes circulares)
4. **Thumbnails de videos testimoniales** (6 imágenes horizontales 16:9)
5. **Ícono de LinkedIn** (SVG o PNG pequeño)

### Placeholders Sugeridos:
Puedes usar placeholders mientras tanto:
- Logo: Texto "NOVOLABS" estilizado
- Avatares: `https://ui-avatars.com/api/?name=${nombre}&background=random`
- Thumbnails: `https://placehold.co/600x400/1a1a1a/white?text=Video+Testimonio`

---

## 🚀 Pasos para Implementar en v0.dev

### Paso 1: Crear el Proyecto Base
1. Ir a v0.dev
2. Copiar el **Prompt Principal** de arriba
3. Generar la primera versión

### Paso 2: Refinamientos
Una vez generado, puedes pedirle ajustes específicos:

```
"Ajusta el hero section para que la flecha animada solo aparezca en desktop (lg:block) y esté posicionada a la izquierda del video"
```

```
"Modifica los testimonios de video para que tengan un overlay degradado de negro desde abajo y el play button cambie a lime-400 en hover"
```

```
"Asegúrate de que todos los títulos usen font-family: 'Geist' con font-weight: 800"
```

### Paso 3: Agregar Datos Reales
Copia y pega los arrays de testimonios de la sección "Datos de Ejemplo" en los componentes generados.

### Paso 4: Testing Responsive
```
"Prueba el diseño en mobile y asegúrate de que:
- El hero sea una sola columna
- Los grids de testimonios sean 1 columna en mobile
- Los textos sean más pequeños (text-sm en lugar de text-base)
- La flecha animada no se muestre en mobile"
```

### Paso 5: Animaciones
```
"Agrega animaciones de entrada con Motion:
- Fade in + slide up para el texto del hero con delay de 0-600ms
- Scale up para el video con delay de 200ms
- Path animation para la flecha curva del hero"
```

---

## 💡 Tips Adicionales

### Para Next.js 14 con App Router:

**Estructura de archivos recomendada:**
```
app/
├── layout.tsx          # Root layout con fonts
├── page.tsx           # Landing page completa
├── globals.css        # Estilos globales + imports de fonts
components/
├── navbar.tsx
├── hero.tsx
├── intro-testimonials.tsx
├── video-testimonials.tsx
├── text-testimonials.tsx
└── footer.tsx
lib/
└── utils.ts          # cn() para class merging
public/
└── assets/          # Imágenes y logos
```

**En layout.tsx:**
```tsx
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-geist'
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={geist.variable}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
      </head>
      <body className="font-satoshi">{children}</body>
    </html>
  )
}
```

### Optimizaciones SEO:

```tsx
// En page.tsx
export const metadata = {
  title: 'Novolabs Startup School - Tu entrevista está confirmada',
  description: 'Estás más cerca de lanzar tu proyecto. Programa de aceleración para startups en Latinoamérica.',
  openGraph: {
    title: 'Novolabs Startup School',
    description: 'Programa de aceleración para startups',
    images: ['/og-image.png'],
  },
}
```

---

## 🐛 Troubleshooting Común

### Si las fuentes no cargan:
- Verificar que los imports estén en el head o en globals.css
- Usar `font-family` inline en elementos críticos
- Agregar fallbacks: `font-family: 'Geist', sans-serif`

### Si las animaciones no funcionan:
- Instalar `motion` (no `framer-motion` en v0)
- Importar como: `import { motion } from "motion/react"`
- Verificar que los initial/animate props estén correctos

### Si el modal de video no abre:
- Verificar que shadcn/ui Dialog esté instalado
- Comprobar que el state `playingVideo` se actualice correctamente
- Asegurarse de que `aria-describedby` esté manejado

### Si el responsive no funciona:
- Verificar breakpoints de Tailwind (sm, md, lg, xl)
- Usar mobile-first approach (base + sm: + md:)
- Testear en Chrome DevTools con diferentes dispositivos

---

## ✅ Checklist Final

Antes de considerar el proyecto completo, verifica:

- [ ] Todas las fuentes (Geist + Satoshi) cargan correctamente
- [ ] Los colores coinciden exactamente (#FF3A20, #c4ff00, #00b67a)
- [ ] La navbar es fija y tiene backdrop-blur
- [ ] El video del hero es vertical (9:16) y se reproduce en modal
- [ ] La flecha animada aparece solo en desktop
- [ ] Los 3 tipos de testimonios se muestran correctamente
- [ ] El rating de Trustpilot muestra 4.5 estrellas (media estrella)
- [ ] Los links de LinkedIn funcionan y se abren en nueva pestaña
- [ ] Los videos testimoniales abren en modal vertical
- [ ] El hover effect en cards cambia border a lime-400/50
- [ ] Todo es responsive en mobile, tablet y desktop
- [ ] Las animaciones de Motion funcionan suavemente
- [ ] El footer tiene el año dinámico
- [ ] No hay errores de consola
- [ ] La página carga rápido (<3s)

---

## 📞 Soporte

Si tienes problemas con la implementación en v0.dev:

1. **Problema con componentes UI**: Asegúrate de que shadcn/ui esté configurado correctamente
2. **Problema con fuentes**: Verifica los imports y usa fallbacks
3. **Problema con animaciones**: Confirma que Motion esté instalado como `motion/react`
4. **Problema responsive**: Usa el inspector de Chrome para debugging

---

## 🎓 Recursos Útiles

- [v0.dev Documentation](https://v0.dev/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev/)
- [Next.js 14 Docs](https://nextjs.org/docs)

---

**Última actualización**: Enero 2026  
**Versión**: 2.0 (Export optimizado para v0.dev)

¡Buena suerte con tu migración a v0! 🚀
