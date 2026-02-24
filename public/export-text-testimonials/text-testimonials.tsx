"use client";

import Image from "next/image";
import { Star } from "lucide-react";

/* ================================================================
   SECCION: "Mas y mas testimonios"
   15 cards de texto con avatar, nombre, estrellas Trustpilot,
   link a LinkedIn y quote en italica.
   ================================================================ */

const testimonials = [
  {
    name: "Henry",
    avatar: "/images/testimonials-text/henry.png",
    text: "Aprendí metodologías que aplicaré siempre. La parte de validación fue clave para mí: conseguí mis primeros clientes antes de lanzar. Es un programa serio, sin verso.",
    linkedin: "https://www.linkedin.com/in/frangeary/",
  },
  {
    name: "Tatiana Domínguez",
    avatar: "/images/testimonials-text/tatiana-dominguez.png",
    text: "Nos ayudaron a validar el producto antes de desarrollarlo, ahorramos meses de trabajo. El nivel de feedback es brutal, te dicen la verdad sin filtros.",
    linkedin:
      "https://www.linkedin.com/in/tatiana-teresa-dominguez-rojas-65392415/",
  },
  {
    name: "Luciano Schillagi",
    avatar: "/images/testimonials-text/luciano-schillagi.png",
    text: "Arranqué con dudas enormes sobre mi idea. Hoy tengo claridad total sobre qué hacer y cómo escalar. El equipo de Novolabs es increíble, te empujan a dar lo mejor.",
    linkedin: "https://www.linkedin.com/in/lucianoschillagi/",
  },
  {
    name: "Gerónimo Mársico",
    avatar: "/images/testimonials-text/geronimo-marsico.png",
    text: "Logré pivotar mi proyecto y encontrar product-market fit gracias al programa. La red de contactos que armé acá vale oro. Super recomendable para cualquier founder.",
    linkedin: "https://www.linkedin.com/in/geronimomarsico/",
  },
  {
    name: "Isabel Darsin",
    avatar: "/images/testimonials-text/isabel-darsin.png",
    text: "Los chicos de Novo son excelentes profesionales, tienen muchísima experiencia y un método para emprendedores que garantiza el éxito de tu start-up.",
    linkedin: "https://www.linkedin.com/in/isabeldarsin/",
  },
  {
    name: "Ignacio Ferreira",
    avatar: "/images/testimonials-text/ignacio-ferreira.png",
    text: "Me ayudaron a estructurar mi startup desde cero. Aprendí a vender antes de tener producto. El networking con otros founders fue un plus enorme.",
    linkedin: "https://www.linkedin.com/in/ignacio-ferreira/",
  },
  {
    name: "Adrián Dutra",
    avatar: "/images/testimonials-text/adrian-dutra.png",
    text: "Pasé de estar perdido a tener un roadmap claro y ejecutable. Los mentores son cracks, te guían sin darte todo servido. Salís con habilidades reales.",
    linkedin: "https://www.linkedin.com/in/adrian-dutra/",
  },
  {
    name: "Camila Aguado",
    avatar: "/images/testimonials-text/camila-aguado.png",
    text: "Me ayudó de forma práctica y clara a llevar adelante mi emprendimiento. Novo es muy bueno!",
    linkedin: "https://www.linkedin.com/in/camilaaguado/",
  },
  {
    name: "Pol López",
    avatar: "/images/testimonials-text/pol-lopez.png",
    text: "El acompañamiento fue increíble, por el conocimiento y la cercanía del equipo. Pero lo mejor es la comunidad: todos comparten, ayudan y suman. Emprender acompañado hace toda la diferencia.",
    linkedin: "https://www.linkedin.com/in/paullopezreyes/",
  },
  {
    name: "Maximiliano Fabián",
    avatar: "/images/testimonials-text/maximiliano-fabian.png",
    text: "El nivel de profundidad en las sesiones es impresionante. Te ayudan a pensar estratégicamente y ejecutar de forma táctica. Los resultados hablan solos.",
    linkedin: "https://www.linkedin.com/in/maxifabian",
  },
  {
    name: "Silvina Fernandez",
    avatar: "/images/testimonials-text/silvina-fernandez.png",
    text: "Entre en el programa buscando orientación para poder llevar a cabo mi proyecto\u2026 Y al finalizar logre validar mi idea y lanzar mi MVP al mercado. A todos los que estén pensando en emprender no duden en que Novo es la mejor opción.",
    linkedin: "https://www.linkedin.com/in/silfernandez-liderarte/",
  },
  {
    name: "Juan Martín Cavallari",
    avatar: "/images/testimonials-text/juan-martin-cavallari.png",
    text: "Novolabs me ayudó a pasar del concepto a la ejecución. Aprendí herramientas concretas que uso todos los días. La comunidad es un diferencial enorme.",
    linkedin:
      "https://www.linkedin.com/in/juan-mart%C3%ADn-cavallari-b25850ba",
  },
  {
    name: "Lisandro Belmonte",
    avatar: "/images/testimonials-text/lisandro-belmonte.png",
    text: "Tuve una gran experiencia en Novo, me enseñaron mucho y la comunidad siempre está dispuesta a ayudar. Muy recomendable!!",
    linkedin: "https://www.linkedin.com/in/lisandro-belmonte-942335279/",
  },
  {
    name: "Mercedes Rey",
    avatar: "/images/testimonials-text/mercedes-rey.png",
    text: "Cambió mi forma de pensar los negocios. Aprendí a testear rápido, fallar barato y validar antes de invertir. Hoy mi startup está creciendo gracias a lo que aprendí acá.",
    linkedin: "https://www.linkedin.com/in/mercedes-rey82/",
  },
  {
    name: "Lucas Zoppi",
    avatar: "/images/testimonials-text/lucas-zoppi.png",
    text: "Arranqué sin un norte claro y salí entendiendo por completo si mi emprendimiento va a funcionar o no. El nivel de atención es excelente y en cada clase me he llevado cosas que no tenía en consideración.",
    linkedin: "https://www.linkedin.com/in/zoppi/",
  },
];

export default function TextTestimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white px-4 sm:px-6 border-t border-gray-200">
      <div className="mx-auto max-w-6xl">
        {/* Titulo */}
        <h2
          className="mb-10 text-center font-sans text-3xl text-black sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl"
          style={{ fontWeight: 800 }}
        >
          {"Más y "}
          <span className="text-[rgb(255,58,32)]">{"más testimonios"}</span>
        </h2>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-lime-400/50 sm:p-6"
            >
              {/* Header: avatar + nombre + estrellas + LinkedIn */}
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover sm:h-14 sm:w-14"
                />
                <div className="flex-1">
                  <p
                    className="mb-1 text-gray-900"
                    style={{ fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    {/* 5 estrellas Trustpilot */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-[#00b67a] text-[#00b67a] sm:h-4 sm:w-4"
                        />
                      ))}
                    </div>
                    {/* Icono LinkedIn */}
                    {t.linkedin && (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/testimonials-text/linkedin-icon.png"
                          alt="LinkedIn"
                          width={20}
                          height={20}
                          className="h-5 w-5 flex-shrink-0 cursor-pointer transition-opacity hover:opacity-80"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Texto del testimonio */}
              <p className="text-sm italic leading-relaxed text-gray-700 sm:text-base">
                {`"${t.text}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
