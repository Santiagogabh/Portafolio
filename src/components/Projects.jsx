import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Seth',
      description: 'Asistente de inteligencia artificial que permite chatear y crear imagenes.',
      image: '/assets/icons/seth_image.png',
      logo: '/assets/icons/meta_logo.png',
      link: 'https://ejemplo.com/seth', // Edita aquí el link del proyecto
    },
    {
      title: 'Eco Misiones',
      description: 'Juego interactivo para aprender y tomar accion para cuidar el medio ambiente, incluye retos, misiones y tareas',
      image: '/assets/icons/eco_misiones.png',
      logo: '/assets/icons/eco_clay_image.png',
      link: 'https://ejemplo.com/eco-misiones', // Edita aquí el link del proyecto
    },
    {
      title: 'Eco Clay',
      description: 'Aplicacion Ecologica para organizar eventos de limpieza en las ciudades',
      image: '/assets/icons/eco_clay_image.png',
      logo: '/assets/icons/eco_clay_image.png',
      link: 'https://ejemplo.com/eco-clay', // Edita aquí el link del proyecto
    },
    {
      title: 'Plata Bruta',
      description: 'Permite gestionar tus finanzas para observar la comparacion visual entre ingresos y gastos',
      image: '/assets/icons/plata_bruta.png',
      logo: '/assets/icons/plata_bruta.png',
      link: 'https://ejemplo.com/plata-bruta', // Edita aquí el link del proyecto
    },
    {
      title: 'Recovery CK Abogados',
      description: 'Pagina web enfocada en conversiones para una firma de abogados especializada en recuperacion de activos',
      image: '/assets/icons/recovery_abogados_image.png',
      logo: '/assets/icons/github_logo.png',
      link: 'https://ejemplo.com/recovery-abogados', // Edita aquí el link del proyecto
    },
    {
      title: 'Innolvidablez',
      description: 'Pagina web enfocada en ventas para una perfumeria',
      image: '/assets/icons/innolvidablez_image.png',
      logo: '/assets/icons/innolvidablez_image.png',
      link: 'https://ejemplo.com/innolvidablez', // Edita aquí el link del proyecto
    },
  ];

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Proyectos Destacados</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300">
                  <div className="relative h-48 md:h-56 lg:h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                    <img 
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      alt={`${project.title} preview`}
                      src={project.image}
                    />
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white p-2 md:p-3 rounded-full shadow-lg">
                      <img 
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        alt={`${project.title} logo`}
                        src={project.logo}
                      />
                    </div>
                  </div>
                  
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 text-sm md:text-base">
                      <span className="mr-2">Ver Proyecto</span>
                      <ExternalLink size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;