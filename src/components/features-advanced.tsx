import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Image3D } from "@/components/image-3d";
import { Stethoscope, HeartPulse, Syringe, Leaf } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mainFeatures = [
  {
    icon: Stethoscope,
    title: "Diagnóstico Avanzado",
    description: "Laboratorio, imagen y chequeos completos para un plan claro.",
  },
  {
    icon: HeartPulse,
    title: "Emergencias 24/7",
    description: "Respuesta inmediata, soporte crítico y monitoreo constante.",
  },
  {
    icon: Syringe,
    title: "Prevención Integral",
    description: "Vacunas, desparasitación y control de parásitos externos.",
  },
  {
    icon: Leaf,
    title: "Bienestar y Nutrición",
    description: "Planes nutricionales y consejos de cuidado diario.",
  },
];

export function FeaturesAdvanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tratamientos" className="py-12 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="mx-auto max-w-2xl text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            Cuidado Integral
          </Badge>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Tratamientos y Atención de Clase Mundial
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-pretty">
            Protocolos basados en evidencia, tecnología moderna y un equipo
            dedicado al bienestar de tu mascota.
          </p>
        </motion.div>

        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-12 sm:mb-24">
          <motion.div
            className="hidden sm:block"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image3D
              lightSrc="lovely-woman-taking-care-of-her-dog-at-home-in-the-bathroom-pets-hygiene.jpg"
              darkSrc="lovely-woman-taking-care-of-her-dog-at-home-in-the-bathroom-pets-hygiene.jpg"
              alt="Chequeo veterinario premium"
              direction="left"
            />
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-2 sm:space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
                Planes hechos para su salud
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                Desde la prevención hasta la cirugía, combinamos experiencia
                clínica y calidez humana para que tu mascota reciba el mejor
                cuidado.
              </p>
            </div>

            <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="shrink-0 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <feature.icon className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Reservar Consulta
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                  Ver todos los servicios
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}