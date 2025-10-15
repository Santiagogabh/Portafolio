import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle } from 'lucide-react'; // Changed Mail to MessageCircle
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Santiagogabh' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/santiago-gabriel-hern%C3%A1ndez-a55aa0317/' },
    { icon: MessageCircle, label: 'WhatsApp', url: 'https://wa.link/sqwe9u' }, // Changed to WhatsApp
  ];

  const handleSocialClick = (social) => {
    if (social.url) {
      window.open(social.url, '_blank');
    } else {
      toast({
        title: `¡Conectemos! 🤝`,
        description: `🚧 El enlace a ${social.label} aún no está implementado—¡pero no te preocupes! Puedes solicitarlo en tu próximo mensaje! 🚀`,
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Portfolio</h3>
            <p className="text-gray-300">
              Transformando ideas en soluciones digitales innovadoras
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              <a href="#proyectos" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Proyectos
              </a>
              <a href="#sobre-mi" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Sobre Mí
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-purple-400 transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  onClick={() => handleSocialClick(social)}
                  className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portafolio Profesional. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;