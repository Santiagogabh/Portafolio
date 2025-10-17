import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import iconCode from '@/assets/icons/github_logo.png';
import iconMarketing from '@/assets/icons/meta_logo.png';

const Hero = () => {
  const handleCTA = () => {
  window.open("https://wa.link/sqwe9u", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100 opacity-70"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239D4EDD' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-2xl shadow-xl"
              >
                <Code className="text-white" size={32} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-2xl shadow-xl"
              >
                <TrendingUp className="text-white" size={32} />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Programación</span>
              <span className="text-gray-800"> & </span>
              <span className="gradient-text">Marketing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Soluciono problemas con tecnologias innovadoras.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleCTA}
              className="gradient-button text-white px-8 py-6 rounded-full text-lg font-semibold shadow-2xl"
            >
              Ver Mis Proyectos
            </Button>
            <Button
              onClick={handleCTA}
              variant="outline"
              className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 px-8 py-6 rounded-full text-lg font-semibold"
              href=" https://wa.link/sqwe9u"
            
            >
              Trabaja Conmigo
            </Button>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;