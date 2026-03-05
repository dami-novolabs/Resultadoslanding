"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

// ---------------------------------------------------------------------------
// DATA
// Place the 6 thumbnail images in /public/images/testimonials/
// with the filenames listed below.
// ---------------------------------------------------------------------------
const videoTestimonials = [
  {
    id: 1,
    thumbnail: "/images/testimonials/magdalena-biassuto.png",
    videoUrl: "https://www.youtube.com/embed/ESUN3E3aX3g",
    name: "Magdalena Biassuto",
    industry: "Salud",
    quote:
      "Mejore mi idea original y encontre a mi socio tech dentro del Programa...",
  },
  {
    id: 2,
    thumbnail: "/images/testimonials/raul-monge.png",
    videoUrl: "https://www.youtube.com/embed/7F4_lbbzPKM",
    name: "Raul Monge",
    industry: "Logistica",
    quote:
      "Consegui mis primeros 15 clientes recurrentes en menos de 4 meses...",
  },
  {
    id: 3,
    thumbnail: "/images/testimonials/roberto-jimenez.png",
    videoUrl: "https://www.youtube.com/embed/XOs8wzErvVw",
    name: "Roberto Jimenez",
    industry: "Legales",
    quote:
      "Tengo una idea mucho mas solida y los primeros clientes...",
  },
  {
    id: 4,
    thumbnail: "/images/testimonials/laura-martinez.png",
    videoUrl: "https://www.youtube.com/embed/83F0dm9QVmY",
    name: "Laura Martinez",
    industry: "Energias Renovables",
    quote:
      "Me gusto tanto el Programa que le cuento a todos de Novolabs ...",
  },
  {
    id: 5,
    thumbnail: "/images/testimonials/valentin-llorens.png",
    videoUrl: "https://www.youtube.com/embed/_cnUn0Q0uEs",
    name: "Valentin Llorens",
    industry: "Educacion",
    quote:
      "Descubri una nueva forma de emprender, me cambiaron la cabeza...",
  },
  {
    id: 6,
    thumbnail: "/images/testimonials/gabriel-vicentin.png",
    videoUrl: "https://www.youtube.com/embed/uloRdBDJsHw",
    name: "Gabriel Vicentin",
    industry: "Deporte",
    quote:
      "Ojala hubiera conocido Novolabs hace muchos anos atras...",
  },
];

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------
export default function VideoTestimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const activeTestimonial = videoTestimonials.find(
    (t) => t.id === playingVideo
  );

  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 bg-neutral-950 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* ---------- Header ---------- */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 px-2 text-balance"
              style={{ fontWeight: 800 }}
            >
              {"Opiniones reales, "}
              <span className="text-[rgb(255,58,32)]">{"sin humo."}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
              {
                "Nada mejor que escuchar directamente a las personas que ya pasaron por lo que vos estas pasando ahora."
              }
            </p>
          </div>

          {/* ---------- Grid ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {videoTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-neutral-900 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-lime-400/50 active:scale-[0.98] transition-all w-full touch-manipulation"
                onClick={() => setPlayingVideo(testimonial.id)}
              >
                {/* Industry Badge - Top Left */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 bg-black/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                  <span
                    className="text-[10px] sm:text-xs text-white tracking-wide"
                    style={{ fontWeight: 400, letterSpacing: "0.05em" }}
                  >
                    {testimonial.industry}
                  </span>
                  <div className="h-[1px] w-full bg-lime-400/40 mt-1" />
                  <p
                    className="text-white text-xs sm:text-sm mt-2"
                    style={{ fontWeight: 500 }}
                  >
                    {testimonial.name}
                  </p>
                </div>

                {/* Thumbnail Cover - Horizontal 16:9 */}
                <div className="aspect-[16/9] relative">
                  <Image
                    src={testimonial.thumbnail}
                    alt={`Testimonio de ${testimonial.name}`}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                </div>

                {/* Play Button - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#c4ff00] group-hover:border-[#c4ff00] group-active:bg-[#c4ff00] group-active:border-[#c4ff00] transition-all">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-black group-active:text-black fill-current ml-1" />
                  </div>
                </div>

                {/* Quote - Bottom */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p
                    className="text-white text-sm sm:text-base md:text-lg leading-snug"
                    style={{ fontWeight: 600, fontStyle: "italic" }}
                  >
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Video Modal (vertical 9:16) ---------- */}
      <Dialog
        open={playingVideo !== null}
        onOpenChange={(open) => !open && setPlayingVideo(null)}
      >
        <DialogContent
          className="!max-w-md !p-0 bg-transparent border-0 shadow-none [&>button]:hidden"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Video Testimonio</DialogTitle>

          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute -top-12 right-0 z-50 rounded-full p-2.5 bg-white/90 backdrop-blur-sm text-black hover:bg-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>

          {activeTestimonial && (
            <div className="w-full aspect-[9/16] max-h-[80vh] bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={`${activeTestimonial.videoUrl}${
                  activeTestimonial.videoUrl.includes("?") ? "&" : "?"
                }autoplay=1&fs=1&modestbranding=1&rel=0`}
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
  );
}
