import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Cta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <motion.h2
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Agenda una Consulta Gratuita
          </motion.h2>

          <motion.p
            className="text-sm sm:text-lg md:text-xl text-primary-foreground/90 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tu mascota merece la mejor atención. Reserva hoy y descubre cómo
            podemos cuidar su salud, prevenir problemas y acompañarla en cada etapa.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="text-sm sm:text-base w-full sm:w-auto">
                Agendar Ahora
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Llamar Ahora
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}