import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Dueño de Max",
    content:
      "El equipo salvó la vida de mi perro. Atención clara, seguimiento cercano y mucha empatía.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
  },
  {
    name: "Laura Fernández",
    role: "Humana de Luna y Milo",
    content:
      "Vacunas y chequeos siempre a tiempo. Me explican todo y mis gatos están felices y sanos.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
  },
  {
    name: "Roberto Silva",
    role: "Dueño de Rocky",
    content:
      "Tuvieron una emergencia nocturna y respondieron en minutos. Profesionales y muy humanos.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rocky",
  },
  {
    name: "Ana Torres",
    role: "Humana de Kira",
    content:
      "Los planes preventivos nos ahorraron sustos. Nutrición, vacunas y control de parásitos impecables.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kira",
  },
  {
    name: "Miguel Rojas",
    role: "Humano de Coco",
    content:
      "Instalaciones limpias, diagnósticos rápidos y un trato cariñoso. Confío plenamente en ellos.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Coco",
  },
  {
    name: "Patricia Núñez",
    role: "Humana de Toby",
    content:
      "Excelente seguimiento post-operatorio. Me sentí acompañada en cada paso de la recuperación.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Toby",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" className="py-12 sm:py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            Testimonios
          </Badge>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-pretty">
            Historias reales de dueños de mascotas que confían en nuestro cuidado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Card className="border-border break-inside-avoid hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <motion.div
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </motion.div>

                  <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}