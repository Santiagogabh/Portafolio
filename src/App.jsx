import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 1],
    ['#ffffff', '#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe']
  );

  return (
    <>
      <Helmet>
        <title>Portafolio Profesional | Programación & Marketing</title>
        <meta name="description" content="Portafolio profesional de programación y marketing. Descubre mis proyectos, servicios y cómo podemos trabajar juntos." />
      </Helmet>
      
      <motion.div 
        className="min-h-screen"
        style={{ backgroundColor }}
      >
        <Navigation />
        <Hero />
        <Projects />
        <About />
        <FAQ />
        <Footer />
        <Toaster />
      </motion.div>
    </>
  );
}

export default App;