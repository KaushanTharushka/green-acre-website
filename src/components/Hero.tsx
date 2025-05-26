
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Globe, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Empowering Growth Through Strategic Sourcing",
    "Agro Innovation",
    "Business Excellence"
  ];

  const features = [
    { icon: Globe, text: "Global Sourcing", delay: 0.2 },
    { icon: Sparkles, text: "Agro Products", delay: 0.4 },
    { icon: TrendingUp, text: "Business & Supply Chain Consultancy", delay: 0.6 },
    { icon: TrendingUp, text: "Branding", delay: 0.8 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="hero-content max-w-6xl mx-auto text-center">
          {/* Animated Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 sm:mb-8"
          >
            <motion.div
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-2" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">Welcome to Revive Agro</span>
            </motion.div>

            <div className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTitle}
                  initial={{ 
                    y: 60, 
                    opacity: 0,
                    rotateX: -90,
                    scale: 0.8
                  }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    rotateX: 0,
                    scale: 1
                  }}
                  exit={{ 
                    y: -60, 
                    opacity: 0,
                    rotateX: 90,
                    scale: 0.8
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    perspective: '1000px'
                  }}
                >
                  {titles[currentTitle]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Animated Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 px-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: feature.delay + 0.8,
                  type: "spring",
                  stiffness: 150,
                  damping: 10
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                className="flex items-center justify-center space-x-2 sm:space-x-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer group touch-manipulation"
              >
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-yellow-300 transition-colors duration-300 flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-sm lg:text-base text-center">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-2"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Transforming Operations, Building Brands, and Driving Growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-sourcing-yellow text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group touch-manipulation"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Get Started Today</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 touch-manipulation"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-xs sm:text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-b from-sourcing-green/70 via-sourcing-green/60 to-sourcing-green/80 pointer-events-none" />
    </section>
  );
};

export default Hero;
