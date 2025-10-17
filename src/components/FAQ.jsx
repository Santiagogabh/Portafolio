import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué servicios ofreces?',
      answer: 'Ofrezco desarrollo web completo, diseño UI/UX y marketing digital enfocado unicamente en Instagram y Facebook.',
    },
    {
      question: '¿Cuánto tiempo toma completar un proyecto?',
      answer: 'El tiempo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que proyectos más complejos pueden requerir 2-3 meses. Siempre establecemos plazos claros desde el inicio.',
    },
    {
      question: '¿Trabajas con clientes internacionales?',
      answer: 'Sí, trabajo con clientes de todo el mundo. Utilizo herramientas para entregar el servicio de la mejor calidad posible',
    },
    {
      question: '¿Ofreces soporte post-lanzamiento?',
      answer: 'Absolutamente. Todos mis proyectos incluyen un período de soporte post-lanzamiento, que esta detallado en el acuerdo cuando lanzamos el proyecto.',
    },
    {
      question: '¿Cuál es tu proceso de trabajo?',
      answer: 'Mi proceso es el siguiente: 1) Consulta inicial y analisis de problemas 2) Propuesta y planificación, 3) Diseño y desarrollo, 4) Revisiones y ajustes, 5) Lanzamiento y soporte.',
    },
    {
      question: '¿Cuanto cobras por el servicio?',
      answer: 'Los modelos de trabajo son personalizados y el precio depende de la complejidad y el cliente.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Preguntas Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Respuestas a tus preguntas
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-purple-200 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-purple-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-purple-600 flex-shrink-0" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;