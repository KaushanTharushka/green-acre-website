
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Globe, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Empowering Growth Through Strategic Sourcing",
    "Agro Innovation", 
    "Business Excellence"
  ];

  const features = useMemo(() => [
    { icon: Globe, text: "Global Sourcing", delay: 0.2 },
    { icon: Sparkles, text: "Agro Products", delay: 0.4 },
    { icon: TrendingUp, text: "Business & Supply Chain Consultancy", delay: 0.6 },
    { icon: TrendingUp, text: "Branding", delay: 0.8 }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToNextSection = useCallback(() => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Reduced floating elements for better performance
  const floatingElements = useMemo(() => 
    [...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/5 rounded-full"
        style={{
          left: `${20 + i * 30}%`,
          top: `${30 + (i % 2) * 40}%`,
        }}
        animate={{
          y: [-5, 10, -5],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5
        }}
      />
    )), []
  );

  // Simplified title animation variants
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const titleWordVariants = {
    hidden: { 
      y: 30, 
      opacity: 0
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const splitTitle = useCallback((title: string) => {
    return title.split(' ').map((word, index) => (
      <motion.span
        key={`${word}-${index}`}
        variants={titleWordVariants}
        className="inline-block mr-4 last:mr-0"
      >
        {word}
      </motion.span>
    ));
  }, []);

  return (
    <section className="hero-section py-20 md:py-32 relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-content max-w-6xl mx-auto text-center">
          {/* Optimized Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 0.2, 
                type: "spring", 
                stiffness: 150,
                damping: 12
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
              <span className="text-white/90 text-sm font-medium">Welcome to Revive Agro</span>
            </motion.div>

            {/* Optimized Title Animation Container */}
            <div className="h-32 md:h-36 lg:h-40 mb-6 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTitle}
                  variants={titleContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight flex flex-wrap justify-center"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                  {splitTitle(titles[currentTitle])}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Simplified underline effect */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </motion.div>

          {/* Optimized Features */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: feature.delay + 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer"
              >
                <feature.icon className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm md:text-base">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Optimized Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-white/90 text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Transforming Operations, Building Brands, and Driving Growth.
          </motion.p>
        </div>
      </div>

      {/* Optimized Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Optimized Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sourcing-green/70 via-sourcing-green/60 to-sourcing-green/80 pointer-events-none" />
    </section>
  );
};

export default React.memo(Hero);
