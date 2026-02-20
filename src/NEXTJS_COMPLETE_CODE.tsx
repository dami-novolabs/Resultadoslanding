// =============================================================================
// NOVOLABS STARTUP SCHOOL - LANDING PAGE
// Código completo adaptado para Next.js 14+ (App Router)
// =============================================================================

"use client"

import React, { useState } from 'react'
import { Play, Star, ChevronRight, X } from 'lucide-react'
import { motion } from 'motion/react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

// =============================================================================
// NAVBAR COMPONENT
// =============================================================================

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
      {/* Reemplazar con tu logo real */}
      <div className="text-white text-xl font-bold font-[Geist]">NOVOLABS</div>
    </div>
  </nav>
)

// =============================================================================
// HERO COMPONENT
// =============================================================================

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="inline-block py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs tracking-widest uppercase text-gray-400 mb-4 sm:mb-6 font-[Geist]">
              Tu entrevista esta confirmada ✅
            </span>
            
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tight mb-4 sm:mb-6 leading-[1.2] font-[Geist]" style={{ fontWeight: 800 }}>
              <span className="block whitespace-nowrap text-[48px]">Estás más cerca de</span>
              <span className="block text-[rgb(255,58,32)] whitespace-nowrap text-[48px]">
                lanzar tu proyecto
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              <span className="sm:hidden">Quiero darte la bienvenida al proceso de selección personalmente.</span>
              <span className="hidden sm:inline">Quiero darte la bienvenida personalmente al proceso de inscripción a Novolabs Startup School.</span>
            </p>
          </motion.div>

          {/* Video Right - Vertical Format */}
          <div className="relative overflow-visible">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-full max-w-[350px] mx-auto aspect-[9/16] bg-black rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
              onClick={() => !isVideoPlaying && setIsVideoPlaying(true)}
            >
              {!isVideoPlaying ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lime-400/90 rounded-full flex items-center justify-center pl-1 shadow-lg shadow-lime-400/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black fill-current" />
                    </div>
                  </div>
                  {/* Reemplazar con tu thumbnail real */}
                  <div className="w-full h-full bg-gray-800 opacity-60 group-hover:opacity-40 transition-opacity" />
                </>
              ) : (
                <iframe
                  src="https://streamable.com/e/5jmnc2?autoplay=1&controls=1"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  title="Video del fundador"
                />
              )}
            </motion.div>

            {/* Curved Arrow and Name Label - Desktop Only */}
            {!isVideoPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden lg:block absolute bottom-8 -left-44 pointer-events-none max-w-[180px]"
              >
                <p 
                  className="text-base text-white mb-2 text-left font-[Geist]"
                  style={{ fontWeight: 700, lineHeight: 1.3 }}
                >
                  TOMÁS VOLONTÉ<br />
                  <span className="text-xs">CO-FUNDADOR DE NOVOLABS</span>
                </p>
                
                {/* Curved Arrow SVG */}
                <svg
                  width="240"
                  height="120"
                  viewBox="0 0 240 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-2 left-32"
                >
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
                    stroke="#c4ff00"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 2.1 }}
                  />
                </svg>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// INTRO TESTIMONIALS COMPONENT
// =============================================================================

const IntroTestimonials = () => {
  const testimonials = [
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
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4 font-[Geist]" style={{ fontWeight: 800 }}>
            Antes de seguir, <span className="text-[rgb(255,58,32)]">leé esto:</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Algunas de las +300 personas que ya pasaron por Novolabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-lime-400/50 transition-colors shadow-sm"
            >
              {/* Header with Avatar and Name */}
              <div className="flex items-center gap-3 mb-4">
                {/* Placeholder avatar - reemplazar con imagen real */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 border-2 border-gray-200" />
                
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-1" style={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    {/* Trustpilot Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    {/* LinkedIn Icon */}
                    <a 
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trustpilot Rating */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-black text-base sm:text-lg" style={{ fontWeight: 600 }}>4.8</span>
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b67a] fill-[#00b67a]" />
              ))}
              {/* Half star */}
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 fill-gray-300 absolute" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b67a] fill-[#00b67a]" />
                </div>
              </div>
            </div>
            <span className="text-black text-base sm:text-lg">en</span>
            <a 
              href="https://www.trustpilot.com/review/novolabs.xyz?languages=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black text-base sm:text-lg underline hover:text-lime-400 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// VIDEO TESTIMONIALS COMPONENT
// =============================================================================

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Magdalena Biassuto",
      industry: "Salud",
      quote: "Mejoré mi idea original y encontré a mi socio tech dentro del Programa...",
      videoUrl: "https://www.youtube.com/embed/ESUN3E3aX3g"
    },
    {
      id: 2,
      name: "Raul Monge",
      industry: "Logística",
      quote: "Conseguí mis primeros 15 clientes recurrentes en menos de 4 meses...",
      videoUrl: "https://www.youtube.com/embed/7F4_lbbzPKM"
    },
    {
      id: 3,
      name: "Roberto Jimenez",
      industry: "Legales",
      quote: "Tengo una idea mucho más sólida y los primeros clientes...",
      videoUrl: "https://www.youtube.com/embed/XOs8wzErvVw"
    },
    {
      id: 4,
      name: "Laura Martinez",
      industry: "Energías Renovables",
      quote: "Me gustó tanto el Programa que le cuento a todos de Novolabs...",
      videoUrl: "https://www.youtube.com/embed/83F0dm9QVmY"
    },
    {
      id: 5,
      name: "Valentín Llorens",
      industry: "Educación",
      quote: "Descubrí una nueva forma de emprender, me cambiaron la cabeza...",
      videoUrl: "https://www.youtube.com/embed/_cnUn0Q0uEs"
    },
    {
      id: 6,
      name: "Gabriel Vicentin",
      industry: "Deporte",
      quote: "Ojalá hubiera conocido Novolabs hace muchos años atrás...",
      videoUrl: "https://www.youtube.com/embed/uloRdBDJsHw"
    }
  ]

  const activeTestimonial = testimonials.find(t => t.id === playingVideo)

  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 bg-neutral-950 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 px-2 font-[Geist]" style={{ fontWeight: 800 }}>
              Opiniones reales, <span className="text-[rgb(255,58,32)]">sin humo.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
              Nada mejor que escuchar directamente a las personas que ya pasaron por lo que vos estás pasando ahora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="relative bg-neutral-900 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-lime-400/50 active:scale-[0.98] transition-all w-full touch-manipulation"
                onClick={() => setPlayingVideo(testimonial.id)}
              >
                {/* Industry Badge - Top Left */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 bg-black/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-[10px] sm:text-xs text-white tracking-wide" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    {testimonial.industry}
                  </span>
                  <div className="h-[1px] w-full bg-lime-400/40 mt-1" />
                  <p className="text-white text-xs sm:text-sm mt-2" style={{ fontWeight: 500 }}>{testimonial.name}</p>
                </div>

                {/* Thumbnail Cover - Horizontal Aspect */}
                <div className="aspect-[16/9] relative">
                  {/* Reemplazar con thumbnail real */}
                  <div className="w-full h-full bg-gray-700 opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                </div>
                
                {/* Play Button - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#c4ff00] group-hover:border-[#c4ff00] transition-all">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-black fill-current ml-1" />
                  </div>
                </div>

                {/* Quote - Bottom */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p className="text-white text-sm sm:text-base md:text-lg leading-snug" style={{ fontWeight: 600, fontStyle: 'italic' }}>
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={playingVideo !== null} onOpenChange={(open) => !open && setPlayingVideo(null)}>
        <DialogContent className="!max-w-md !p-0 bg-transparent border-0 shadow-none [&>button]:hidden" aria-describedby={undefined}>
          <DialogTitle className="sr-only">
            Video Testimonio
          </DialogTitle>
          
          <button 
            onClick={() => setPlayingVideo(null)}
            className="absolute -top-12 right-0 z-50 rounded-full p-2.5 bg-white/90 backdrop-blur-sm text-black hover:bg-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>
          
          {activeTestimonial && (
            <div className="w-full aspect-[9/16] max-h-[80vh] bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={`${activeTestimonial.videoUrl}?autoplay=1&fs=1&modestbranding=1&rel=0`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title={`Testimonio de ${activeTestimonial.name}`}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

// =============================================================================
// TEXT TESTIMONIALS COMPONENT
// =============================================================================

const TextTestimonials = () => {
  const testimonials = [
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
      text: "Entre en el programa buscando orientación para poder llevar a cabo mi proyecto… Y al finalizar logre validar mi idea y lanzar mi MVP al mercado.",
      linkedin: "https://www.linkedin.com/in/silfernandez-liderarte/"
    },
    {
      name: "Juan Martín Cavallari",
      text: "Novolabs me ayudó a pasar del concepto a la ejecución. Aprendí herramientas concretas que uso todos los días. La comunidad es un diferencial enorme.",
      linkedin: "https://www.linkedin.com/in/juan-martín-cavallari-b25850ba"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-10 sm:mb-12 md:mb-16 text-center font-[Geist]" style={{ fontWeight: 800 }}>
          Más y <span className="text-[rgb(255,58,32)]">más testimonios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-lime-400/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 border-2 border-gray-200" />
                
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-1" style={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    <a 
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

const Footer = () => (
  <footer className="py-8 sm:py-10 md:py-12 bg-black border-t border-white/10 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
      <div className="text-white text-xl font-bold font-[Geist]">NOVOLABS</div>
      <div className="text-gray-500 text-xs sm:text-sm text-center">
        {new Date().getFullYear()} Novolabs Startup School. All rights reserved.
      </div>
    </div>
  </footer>
)

// =============================================================================
// MAIN PAGE COMPONENT
// =============================================================================

export default function NovolabsLandingPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-lime-400 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <IntroTestimonials />
      <VideoTestimonials />
      <TextTestimonials />
      
      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center bg-black">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-[Geist] text-white mb-4 sm:mb-6 px-2 text-[32px]">
          ¿Ready para la Entrevista?
        </h3>
        <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
          Aprovecha al máximo los 45 minutos para demostrarnos por qué deberías quedar entre los 20 equipos de la Próxima Edición.
        </p>
        <div className="inline-flex items-center gap-2 text-sm sm:text-base text-[#FF3A20] border-b border-[#FF3A20]/30 pb-0.5">
          Nos vemos pronto 🫡 <ChevronRight size={16} className="sm:w-5 sm:h-5" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

// =============================================================================
// NOTAS PARA IMPLEMENTACIÓN EN V0 / NEXT.JS:
// =============================================================================

/*
1. INSTALAR DEPENDENCIAS:
   npm install lucide-react motion embla-carousel-react embla-carousel-autoplay

2. CONFIGURAR shadcn/ui:
   npx shadcn-ui@latest init
   npx shadcn-ui@latest add dialog

3. CREAR layout.tsx CON FUENTES:
   
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
         <body className="font-[Satoshi]">{children}</body>
       </html>
     )
   }

4. AGREGAR A globals.css:
   
   @import url('https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap');
   
   body {
     font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
   }

5. REEMPLAZAR PLACEHOLDERS:
   - Avatares de testimonios (usar imágenes reales o https://ui-avatars.com)
   - Thumbnails de videos
   - Logo de Novolabs
   - Thumbnail del video hero

6. OPTIMIZACIONES NEXT.JS:
   - Usar <Image> de next/image para todas las imágenes
   - Agregar metadata para SEO en page.tsx
   - Lazy loading para videos testimoniales
   - Optimizar fuentes con next/font

7. COMPONENTES UI:
   - Dialog component necesita estar en /components/ui/dialog.tsx
   - Puedes usar shadcn/ui: npx shadcn-ui@latest add dialog
*/
