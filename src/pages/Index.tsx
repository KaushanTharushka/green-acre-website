
import { useEffect, useMemo, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

// Lazy load components for better performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SolutionsSection = lazy(() => import("@/components/SolutionsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const ChatSupport = lazy(() => import("@/components/ChatSupport"));

// Loading component for suspense
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sourcing-green"></div>
  </div>
);

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll to hash on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    }
  }, []);

  const sectionVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }), []);

  // Reduced floating elements for better performance
  const floatingElements = useMemo(() => 
    [...Array(2)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-sourcing-green/5 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-10, 10, -10],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 3
        }}
      />
    )), []
  );

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Enhanced Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sourcing-green via-sourcing-orange to-sourcing-green z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Optimized Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingElements}
      </div>

      <Header />
      
      <main className="flex-grow relative">
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
            id="about"
          >
            <AboutSection />
          </motion.div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <SolutionsSection />
          </motion.div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <ServicesSection />
          </motion.div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <ProcessSection />
          </motion.div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
            id="contact"
          >
            <ContactSection />
          </motion.div>
        </Suspense>
      </main>
      
      <Footer />
      <Suspense fallback={null}>
        <ChatSupport />
      </Suspense>
    </div>
  );
};

export default Index;
