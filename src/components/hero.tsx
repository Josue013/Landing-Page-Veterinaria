import { Button } from "@/components/ui/button";
import { Image3D } from "@/components/image-3d";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="pt-20 pb-12 sm:pt-32 sm:pb-24 md:pt-32 md:pb-24 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                Tu Clínica Veterinaria de Confianza
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Salud y Bienestar para tus Mascotas
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Cuidado integral con diagnósticos precisos, prevención, emergencias y atención humana
              para que tu compañero viva más feliz y saludable.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Button size="lg" className="text-sm sm:text-base w-full sm:w-auto">
                  Agendar Consulta
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Button size="lg" variant="outline" className="text-sm sm:text-base bg-transparent w-full sm:w-auto">
                  Ver Servicios
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden sm:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Image3D
              lightSrc="happy-healthy-dog-with-vet.jpg"
              darkSrc="happy-healthy-dog-with-vet.jpg"
              alt="Cuidado veterinario integral"
              direction="right"
              className="aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}