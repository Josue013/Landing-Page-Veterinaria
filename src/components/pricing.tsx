import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Básico",
    price: "49",
    description: "Prevención esencial para mascotas sanas",
    features: [
      "Consulta general anual",
      "Vacunación básica",
      "Desparasitación interna",
      "10% dto. en medicamentos",
    ],
  },
  {
    name: "Salud Plus",
    price: "99",
    description: "Cobertura completa de prevención y cuidado",
    features: [
      "Consultas ilimitadas",
      "Vacunación completa",
      "Desparasitación interna y externa",
      "Análisis de sangre anual",
      "Limpieza dental básica",
      "20% dto. en medicamentos",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "149",
    description: "Máxima protección y soporte total",
    features: [
      "Todo lo de Salud Plus",
      "Emergencias sin costo",
      "Cirugías con 30% dto.",
      "Hospitalización incluida",
      "Grooming mensual",
      "Nutrición y comportamiento",
    ],
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="precios" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            Planes y Precios
          </Badge>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Elige el Plan Ideal
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-pretty">
            Cobertura flexible para cada etapa y necesidad de tu mascota.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card
                className={`relative h-full ${plan.popular ? "border-primary shadow-lg sm:scale-105" : "border-border"}`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Badge className="text-xs sm:text-sm">Más Popular</Badge>
                  </motion.div>
                )}
                <CardHeader className="text-center pb-6 sm:pb-8 pt-6 sm:pt-8">
                  <CardTitle className="font-serif text-xl sm:text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-pretty">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-bold">Q{plan.price}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                    >
                      <Check className="w-4 sm:w-5 h-4 sm:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </CardContent>
                <CardFooter>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button
                      size="lg"
                      variant={plan.popular ? "default" : "outline"}
                      className="w-full text-sm sm:text-base"
                    >
                      Seleccionar Plan
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}