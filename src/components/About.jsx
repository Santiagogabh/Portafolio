import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '5', label: 'Proyectos Completados' },
    { icon: Users, value: '2', label: 'Años de Experiencia' },
    { icon: Zap, value: '', label: 'Años de Experiencia' },
    { icon: Target, value: '95%', label: 'Tasa de Éxito' },
  ];

  const skills = [
    { name: 'Desarrollo Web', level: 95 },
    { name: 'Marketing Digital', level: 90 },
    { name: 'SEO & Analytics', level: 88 },
    { name: 'UI/UX Design', level: 85 },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

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