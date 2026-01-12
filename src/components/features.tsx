import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Scissors, Pill, Home } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Scissors,
    title: "Grooming",
    description:
      "Baño, corte especializado y cuidado estético completo con productos dermatológicos seguros para la piel sensible de tu mascota.",
  },
  {
    icon: Pill,
    title: "Farmacia Veterinaria",
    description:
      "Dispensario completo con medicinas, suplementos nutricionales y tratamientos especializados respaldados por nuestros veterinarios.",
  },
  {
    icon: HeartPulse,
    title: "Cirugías y Emergencias",
    description:
      "Quirófano equipado para procedimientos de rutina y emergencias, con monitoreo avanzado y cuidados post-operatorios personalizados.",
  },
  {
    icon: Home,
    title: "Hospedaje",
    description:
      "Centro de alojamiento con ambiente tranquilo, actividades recreativas supervisadas y monitoreo constante de salud y comportamiento.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Nuestros Servicios Veterinarios
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-pretty">
            Atención integral con equipos modernos y un equipo que cuida a tus
            mascotas como familia.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <motion.div
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}