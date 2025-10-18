import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const projects = [
    {
      title: 'Seth',
      description: 'Asistente de inteligencia artificial que permite chatear y crear imagenes.',
      image: 'seth_imagen.png',
      logo: '',
      link: '#',
    },
    {
      title: 'Eco Misiones',
      description: 'Juego interactivo para aprender y tomar accion para cuidar el medio ambiente, incluye retos, misiones y tareas',
      image: 'eco_misiones.png',
      logo: '',
      link: '#',
    },
    {
      title: 'Eco Clay',
      description: 'Aplicacion Ecologica para organizar eventos de limpieza en las ciudades',
      image: 'eco_clay_imagen.png',
      logo: '',
      link: '#',
    },
    {
      title: 'Plata Bruta',
      description: 'Permite gestionar tus finanzas para observar la comparacion visual entre ingresos y gastos',
      image: 'plata_bruta.png',
      logo: '',
      link: '#',
    },
    {
      title: 'Recovery CK Abogados',
      description: 'Pagina web enfocada en conversiones para una firma de abogados especializada en recuperacion de activos',
      image: 'recovery_abogados_imagen.png',
      logo: '',
      link: '#',
    },
    {
      title: 'Innolvidablez',
      description: 'Pagina web enfocada en ventas para una perfumeria',
      image: 'innolvidablez_imagen.png',
      logo: '',
      link: '#',
    },
  ];

  const handleProjectClick = (projectTitle) => {
    toast({
      title: `¡Interesante! 👀`,
      description: `🚧 El enlace a "${projectTitle}" aún no está implementado—¡pero no te preocupes! Puedes solicitarlo en tu próximo mensaje! 🚀`,
    });
  };

  return (
    <section id="proyectos" className="py-24 bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Proyectos Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={`${project.title} preview`}
                   src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                    <img 
                      className="w-8 h-8"
                      alt={`${project.title} logo`}
                     src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                    <span className="mr-2">Ver Proyecto</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;