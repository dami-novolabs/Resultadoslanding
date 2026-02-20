# 📸 Guía de Exportación de Assets para v0.dev

Esta guía te ayudará a exportar todas las imágenes necesarias del proyecto actual de Figma Make para usarlas en v0.dev.

---

## 🎯 Assets Críticos que Necesitas

### 1. LOGO
**Archivo**: `logo.png`
- **Uso**: Navbar y Footer
- **Formato recomendado**: PNG transparente
- **Dimensiones sugeridas**: 200x60px (mantener proporción)
- **Asset ID actual**: `figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png`

**Cómo exportar**:
1. Busca el logo en tu proyecto de Figma Make
2. Exporta como PNG con fondo transparente
3. Renombra como: `novolabs-logo.png`

---

### 2. VIDEO HERO THUMBNAIL
**Archivo**: `hero-video-thumbnail.png`
- **Uso**: Thumbnail del video principal en Hero
- **Formato**: PNG o JPG
- **Aspect Ratio**: 9:16 (vertical)
- **Dimensiones sugeridas**: 350x620px
- **Asset ID actual**: `figma:asset/1285ebb228475e053fedfecc078cb53ffc8038f5.png`

**Alternativa si no tienes**:
- Tomar un screenshot del video de Streamable (https://streamable.com/5jmnc2)
- O crear un placeholder con el rostro del fundador

---

### 3. AVATARES - INTRO TESTIMONIALS (3 imágenes)

#### Avatar 1: Alexy Narváez
- **Asset ID actual**: `figma:asset/357fa7d0bd0c713763f827a98c33205e9666498c.png`
- **Dimensiones**: 120x120px
- **Formato**: PNG o JPG circular

#### Avatar 2: Magdalena Laplacette
- **Asset ID actual**: `figma:asset/d7f6dc7f3678521bf318d48e23e875a7bc7d12b6.png`
- **Dimensiones**: 120x120px
- **Formato**: PNG o JPG circular

#### Avatar 3: Hernán Farruggia
- **Asset ID actual**: `figma:asset/cc20f02b3368e45eabae3306d5a7f50e9135f793.png`
- **Dimensiones**: 120x120px
- **Formato**: PNG o JPG circular

**Solución temporal**:
Usa UI Avatars API:
```
https://ui-avatars.com/api/?name=Alexy+Narvaez&background=random&size=120
https://ui-avatars.com/api/?name=Magdalena+Laplacette&background=random&size=120
https://ui-avatars.com/api/?name=Hernan+Farruggia&background=random&size=120
```

---

### 4. THUMBNAILS - VIDEO TESTIMONIALS (6 imágenes horizontales)

Estos son los thumbnails para los videos testimoniales con formato horizontal (16:9):

#### Thumbnail 1: Magdalena Biassuto (Salud)
- **Asset ID**: `figma:asset/26edca017d0b259ab49e6b9b2fb01fba3a4a5b1f.png`
- **Dimensiones**: 640x360px
- **Video**: https://www.youtube.com/embed/ESUN3E3aX3g

#### Thumbnail 2: Raul Monge (Logística)
- **Asset ID**: `figma:asset/0ba2a044bcbab16554a443a7fac72d4b2c7a312f.png`
- **Dimensiones**: 640x360px
- **Video**: https://www.youtube.com/embed/7F4_lbbzPKM

#### Thumbnail 3: Roberto Jimenez (Legales)
- **Asset ID**: `figma:asset/4e4b0c8392cb0766884cddd12062ccce9944ae58.png`
- **Dimensiones**: 640x360px
- **Video**: https://www.youtube.com/embed/XOs8wzErvVw

#### Thumbnail 4: Laura Martinez (Energías Renovables)
- **Asset ID**: `figma:asset/9ac1a6ccf4f8b46511a94807695c5955f8ba4cda.png`
- **Dimensiones**: 640x360px
- **Video**: https://www.youtube.com/embed/83F0dm9QVmY

#### Thumbnail 5: Valentín Llorens (Educación)
- **Asset ID**: `figma:asset/a5581dba223bb0c9bac7da1e88237b4c316ea876.png`
- **Dimensiones**: 640x360px
- **Video**: https://www.youtube.com/embed/_cnUn0Q0uEs

#### Thumbnail 6: Gabriel Vicentin (Deporte)
- **Asset ID**: `figma:asset/0eab3d0d9a32a51b77ee917ad85ce002873b059e.png`
- **Dimensiones**: 640x360px
- **Video**: https://www.youtube.com/embed/uloRdBDJsHw

**Cómo obtener thumbnails de YouTube**:
Puedes usar esta URL para obtener thumbnails automáticamente de YouTube:
```
https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg
```

Ejemplos:
```
https://img.youtube.com/vi/ESUN3E3aX3g/maxresdefault.jpg
https://img.youtube.com/vi/7F4_lbbzPKM/maxresdefault.jpg
https://img.youtube.com/vi/XOs8wzErvVw/maxresdefault.jpg
https://img.youtube.com/vi/83F0dm9QVmY/maxresdefault.jpg
https://img.youtube.com/vi/_cnUn0Q0uEs/maxresdefault.jpg
https://img.youtube.com/vi/uloRdBDJsHw/maxresdefault.jpg
```

---

### 5. AVATARES - TEXT TESTIMONIALS (12-15 imágenes)

Lista de avatares necesarios para la sección de testimonios de texto:

1. **Henry** - Asset ID: `figma:asset/964b10b9ea451d0fd690274625429339b1f2c7f0.png`
2. **Tatiana Domínguez** - Asset ID: `figma:asset/4d3051c79f854bfcc463fa10ed872e9632c25a4e.png`
3. **Luciano Schillagi** - Asset ID: `figma:asset/92034f3f453dcbbcd59dc236074a9ff3dc9a8b2d.png`
4. **Gerónimo Mársico** - Asset ID: `figma:asset/fe6d4fc2f2b788fa313fa171409f26d209cac85a.png`
5. **Isabel Darsin** - Asset ID: `figma:asset/3cec8a9aed714105533cf3d6f87782199a5ee850.png`
6. **Ignacio Ferreira** - Asset ID: `figma:asset/cd26386d497430d5b3d55b670351f85a39709627.png`
7. **Adrián Dutra** - Asset ID: `figma:asset/a9faa141ce6b7072194c3610b313d0098cbabe96.png`
8. **Camila Aguado** - Asset ID: `figma:asset/49811de49086e223b178d332ade284d72aaa6e2a.png`
9. **Pol López** - Asset ID: `figma:asset/da64513542d0aaa8ed00a6f2af46d59d767fd194.png`
10. **Maximiliano Fabián** - Asset ID: `figma:asset/aa6664c278abde05fecbc925a3ded2b41c7fb1ef.png`
11. **Silvina Fernandez** - Asset ID: `figma:asset/b3ee8196152f5d99415fdff09cbf6c1d5d725b10.png`
12. **Juan Martín Cavallari** - Asset ID: `figma:asset/8eeba2d5fefc9f40d05ed7f2287c23d746b8336e.png`

**Dimensiones**: 120x120px cada uno
**Formato**: PNG o JPG

**Alternativa con UI Avatars**:
Puedes generar avatares automáticamente con los nombres reales:
```javascript
const getAvatarUrl = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=120&bold=true`
}
```

---

### 6. ÍCONO DE LINKEDIN
**Archivo**: `linkedin-icon.png`
- **Uso**: Links a perfiles de LinkedIn en testimonios
- **Asset ID actual**: `figma:asset/e280c21258be5c310610d636aa1c8547c9bbf4d9.png`
- **Dimensiones**: 24x24px
- **Formato**: PNG transparente o SVG

**Alternativa - Usar SVG inline**:
```html
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
</svg>
```

---

## 📁 Estructura de Carpetas Recomendada para Next.js

```
public/
├── assets/
│   ├── logo/
│   │   └── novolabs-logo.png
│   ├── hero/
│   │   └── hero-video-thumbnail.png
│   ├── testimonials/
│   │   ├── avatars/
│   │   │   ├── alexy-narvaez.png
│   │   │   ├── magdalena-laplacette.png
│   │   │   ├── hernan-farruggia.png
│   │   │   ├── henry.png
│   │   │   ├── tatiana-dominguez.png
│   │   │   └── ... (otros avatares)
│   │   └── video-thumbnails/
│   │       ├── magdalena-biassuto.png
│   │       ├── raul-monge.png
│   │       ├── roberto-jimenez.png
│   │       ├── laura-martinez.png
│   │       ├── valentin-llorens.png
│   │       └── gabriel-vicentin.png
│   └── icons/
│       └── linkedin.png
```

---

## 🚀 Cómo Exportar Assets de Figma Make

### Método 1: Descargar desde el Browser
1. Abre las DevTools de Chrome (F12)
2. Ve a la pestaña "Network"
3. Filtra por "Img"
4. Recarga la página
5. Busca las URLs que empiezan con `figma:asset` o los blobs de las imágenes
6. Click derecho → "Open in new tab"
7. Guarda la imagen (Click derecho → "Save image as...")

### Método 2: Screenshot de Alta Calidad
1. Usa una herramienta como "GoFullPage" (extensión de Chrome)
2. Haz zoom al elemento que necesitas
3. Toma screenshot
4. Recorta en un editor de imágenes

### Método 3: Acceso al Storage de Figma Make
Si Figma Make guarda las imágenes en local storage o IndexedDB:
1. Abre DevTools → Application
2. Busca en "Local Storage", "Session Storage" o "IndexedDB"
3. Busca las URLs o data URLs de las imágenes

---

## 🔄 Migración a v0.dev - Opciones de Assets

### Opción 1: Assets Reales (Recomendado)
Exporta todas las imágenes como se describe arriba y súbelas a v0.dev cuando te lo solicite.

### Opción 2: Placeholders Temporales
Usa placeholders mientras consigues las imágenes reales:

```javascript
// Logo
<div className="text-white text-xl font-bold">NOVOLABS</div>

// Avatares
<div className="w-14 h-14 rounded-full bg-gray-300" />
// O usa: https://ui-avatars.com/api/?name=Name&background=random&size=120

// Thumbnails de video
<div className="w-full h-full bg-gray-700" />
// O usa: https://placehold.co/640x360/1a1a1a/white?text=Video+Testimonio

// Thumbnail hero
<div className="w-full h-full bg-gray-800" />
```

### Opción 3: Hybrid Approach
1. Usa el logo real (crítico para branding)
2. Usa thumbnails de YouTube directamente (método automático)
3. Usa UI Avatars API para avatares de testimonios
4. Reemplaza con assets reales más adelante

---

## 💡 Tips de Optimización

### Para Next.js Image Component
Si usas `<Image>` de Next.js, asegúrate de:
1. Definir width y height en todas las imágenes
2. Usar formatos optimizados (WebP cuando sea posible)
3. Agregar loading="lazy" para lazy loading
4. Agregar alt text descriptivo para SEO

```jsx
import Image from 'next/image'

<Image
  src="/assets/testimonials/avatars/alexy-narvaez.png"
  alt="Alexy Narváez - Testimonio Novolabs"
  width={120}
  height={120}
  className="rounded-full"
  loading="lazy"
/>
```

### Para Thumbnails de Video
Considera usar la API de YouTube para thumbnails automáticos:
```javascript
const getYouTubeThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}
```

---

## ✅ Checklist de Exportación

Antes de importar a v0.dev, asegúrate de tener:

- [ ] Logo de Novolabs (PNG transparente)
- [ ] Thumbnail del video hero (9:16)
- [ ] 3 avatares para IntroTestimonials
- [ ] 6 thumbnails horizontales para VideoTestimonials (16:9)
- [ ] 12-15 avatares para TextTestimonials
- [ ] Ícono de LinkedIn (opcional, puede ser SVG inline)
- [ ] Todas las imágenes optimizadas (comprimidas)
- [ ] Nombres de archivo descriptivos y consistentes

---

## 🆘 Solución de Problemas

### "No puedo exportar las imágenes de Figma Make"
**Solución**: Usa las alternativas de placeholders:
- UI Avatars para avatares: `https://ui-avatars.com`
- Thumbnails de YouTube: `https://img.youtube.com/vi/{ID}/maxresdefault.jpg`
- Placeholders genéricos: `https://placehold.co`

### "Las imágenes son muy pesadas"
**Solución**: Comprime las imágenes:
- Usa TinyPNG: https://tinypng.com
- O ImageOptim (Mac): https://imageoptim.com
- O Squoosh: https://squoosh.app

### "No tengo acceso a las imágenes originales"
**Solución**: Toma screenshots de alta calidad:
1. Aumenta el zoom al 200%
2. Usa extensiones como "GoFullPage"
3. Recorta y ajusta en Photoshop/Figma/Canva

---

## 📞 Recursos Útiles

- **UI Avatars**: https://ui-avatars.com
- **Placeholder Images**: https://placehold.co
- **YouTube Thumbnails**: `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`
- **TinyPNG** (compresión): https://tinypng.com
- **Squoosh** (optimización): https://squoosh.app
- **Remove.bg** (remover fondos): https://remove.bg

---

**Última actualización**: Enero 2026  
**Para**: Proyecto Novolabs Startup School - Migración a v0.dev

¡Buena suerte con la exportación! 🚀
