
import React, { useState, useEffect, useMemo } from 'react';
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

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced floating elements with smoother animations
  const floatingElements = useMemo(() => 
    [...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-white/10 rounded-full"
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [-8, 12, -8],
          opacity: [0.1, 0.4, 0.1],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 5 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.8
        }}
      />
    )), []
  );

  // Creative title animation variants
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const titleWordVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: -90,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.8
      }
    },
    exit: {
      y: -30,
      opacity: 0,
      rotateX: 90,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Split titles into words for stagger animation
  const splitTitle = (title: string) => {
    return title.split(' ').map((word, index) => (
      <motion.span
        key={`${word}-${index}`}
        variants={titleWordVariants}
        className="inline-block mr-4 last:mr-0"
        style={{
          transformOrigin: "center center",
          perspective: "1000px"
        }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section className="hero-section py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements}
        {/* Additional ambient particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-content max-w-6xl mx-auto text-center">
          {/* Animated Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.2, 
                type: "spring", 
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.1)"
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
              <span className="text-white/90 text-sm font-medium">Welcome to Revive Agro</span>
            </motion.div>

            {/* Enhanced Title Animation Container */}
            <div className="h-32 md:h-36 lg:h-40 mb-6 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTitle}
                  variants={titleContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight flex flex-wrap justify-center"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    perspective: "1000px"
                  }}
                >
                  {splitTitle(titles[currentTitle])}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Animated underline effect */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.6 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Enhanced Animated Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: feature.delay + 0.6,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  mass: 0.8
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -4,
                  rotateY: 5,
                  boxShadow: "0 15px 35px rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <feature.icon className="w-5 h-5 text-white group-hover:text-yellow-300 transition-colors duration-300" />
                </motion.div>
                <span className="text-white font-medium text-sm md:text-base">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Main Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="text-white/90 text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Transforming Operations, Building Brands, and Driving Growth.
            </motion.span>
          </motion.p>
        </div>
      </div>

      {/* Enhanced Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          whileHover={{ 
            scale: 1.2,
            y: -2
          }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <motion.span 
            className="text-sm mb-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-sourcing-green/70 via-sourcing-green/60 to-sourcing-green/80 pointer-events-none"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 0.9, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default React.memo(Hero);
