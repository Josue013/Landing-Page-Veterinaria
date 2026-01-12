import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqItems = [
  {
    value: "item-1",
    question: "¿Necesito cita previa?",
    answer:
      "Recomendamos agendar para asegurar horario, pero atendemos urgencias sin cita. Puedes reservar por teléfono o web.",
  },
  {
    value: "item-2",
    question: "¿Qué vacunas necesita mi mascota?",
    answer:
      "Depende de su edad, especie y estilo de vida. Evaluamos el esquema y te entregamos un plan de vacunación personalizado.",
  },
  {
    value: "item-3",
    question: "¿Atienden emergencias 24/7?",
    answer:
      "Sí, contamos con atención de urgencias y quirófano disponible. Llámanos y acude de inmediato si es un caso crítico.",
  },
  {
    value: "item-4",
    question: "¿Ofrecen planes o membresías?",
    answer:
      "Sí, tenemos planes Básico, Salud Plus y Premium con consultas, vacunas, preventivos y descuentos en procedimientos.",
  },
  {
    value: "item-5",
    question: "¿Hacen limpiezas dentales?",
    answer:
      "Sí, realizamos profilaxis dental con anestesia segura y monitoreo. Incluye evaluación previa para descartar riesgos.",
  },
  {
    value: "item-6",
    question: "¿Qué incluye el seguimiento post-operatorio?",
    answer:
      "Revisiones programadas, control del dolor, curaciones y línea directa para dudas durante la recuperación.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-12 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="mx-auto max-w-2xl text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            FAQ
          </Badge>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-pretty">
            Respuestas a las preguntas más comunes sobre nuestros servicios y tratamientos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-transparent">
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={item.value} className="border-border">
                    <AccordionTrigger className="hover:no-underline hover:text-primary text-sm sm:text-base py-3 sm:py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          <motion.div
            className="text-center mt-10 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              ¿Tienes más preguntas? Estamos aquí para ayudarte.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="text-sm sm:text-base">
                Contáctanos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}