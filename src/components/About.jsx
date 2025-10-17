import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {


  const skills = [
    { name: '5 aplicaciones desarrolladas', level: 37 },
    { name: 'Mas de 4 millones generados', level: 38 },
    { name: 'Certificado por Google en 7 ocasiones', level: 45 },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-gradient-to-br from-purple-100 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre Mí</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Me gusta la tecnologia y crear proyectos nuevos e innovadores.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Mi Experiencia</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Llevo 2 años completamente dedicado a la programacion y el marketing digital. Estoy muy inmerso en el mundo de la Inteligencia Artificial, las automatizaciones y el desarrollo de software.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Por ello, me enfoco en crear sistemas que mejoren el posicionamiento o generen ventas para mis clientes.Implemento una estrategia de publicidad exclusivamente en Meta Ads y combino automatizaciones para aumentar la rentabilidad.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="font-bold gradient-text">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;