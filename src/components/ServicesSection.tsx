
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Sparkles,
  ChevronRight,
  Star,
  CheckCircle2,
  Zap,
  Target,
  Globe
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("products");
  
  const specialistServices = [
    {
      icon: Award,
      title: "Agricultural Consulting",
      description: "Expertise in sustainable farming practices, crop optimization, and resource management.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Advisory",
      description: "Helping businesses implement transparent and efficient supply chain solutions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Sustainability Audits",
      description: "Assessing and improving the environmental impact of farming and production operations.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Workshops and training sessions for farmers and businesses to enhance productivity and adopt eco-conscious practices.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const productFeatures = [
    "High protein, low sugar",
    "Made with sustainable and ethically sourced ingredients",
    "Available in unique flavors"
  ];

  const cinnamonFeatures = [
    "Powdered Cinnamon for culinary and medicinal uses",
    "Cinnamon sticks for teas, desserts, and aromatics",
    "Bulk and retail packaging available"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sourcing-green/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sourcing-green/10 to-sourcing-orange/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-sourcing-green mr-2" />
            <span className="text-sourcing-green font-medium">Our Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
              PRODUCT AND SERVICE PORTFOLIO
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive your business forward
          </p>
        </motion.div>
        
        <Tabs defaultValue="products" className="w-full mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto bg-gray-100 p-2 rounded-2xl">
              <TabsTrigger 
                value="products" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
              >
                Products
              </TabsTrigger>
              <TabsTrigger 
                value="services"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
              >
                Services
              </TabsTrigger>
            </TabsList>
          </motion.div>
          
          <TabsContent value="products">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Plant-based Nut Butters */}
              <motion.div variants={itemVariants} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src="/lovable-uploads/72f8e389-b1da-421c-b3be-52fcc9c8dbdb.png" 
                      alt="Plant-based nut butters" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white">PLANT-BASED NUT BUTTERS</h3>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Leaf className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold mb-3 text-sourcing-green">VEGAN HIGH-PROTEIN NUT BUTTER</p>
                    <p className="text-sm mb-6 text-gray-600 leading-relaxed">
                      Crafted with premium ingredients like almonds, cashews, pea protein, and chocolate liquor, our nut butter offers 14g of plant protein per 40g serving.
                    </p>
                    <p className="font-semibold mb-4 text-gray-900">Key Features:</p>
                    <div className="space-y-3 mb-6">
                      {productFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <CheckCircle2 className="w-5 h-5 mr-3 text-sourcing-green" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-gradient-to-r from-sourcing-orange to-yellow-500 hover:from-sourcing-orange-light hover:to-yellow-400 text-white border-0 rounded-xl py-3 font-medium">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* True Ceylon Cinnamon */}
              <motion.div variants={itemVariants} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src="/lovable-uploads/d36e6b8d-5a0d-4897-b265-e10812847f0f.png" 
                      alt="True Ceylon Cinnamon" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white">TRUE CEYLON CINNAMON</h3>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold mb-3 text-sourcing-green">AUTHENTIC TRUE CEYLON CINNAMON</p>
                    <p className="text-sm mb-6 text-gray-600 leading-relaxed">
                      Sourced directly from sustainable farms in Sri Lanka.
                    </p>
                    <p className="font-semibold mb-4 text-gray-900">Product Range:</p>
                    <div className="space-y-3 mb-6">
                      {cinnamonFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <CheckCircle2 className="w-5 h-5 mr-3 text-sourcing-green" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-gradient-to-r from-sourcing-orange to-yellow-500 hover:from-sourcing-orange-light hover:to-yellow-400 text-white border-0 rounded-xl py-3 font-medium">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Animal Feed Solutions */}
              <motion.div variants={itemVariants} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src="/lovable-uploads/f4bd3fd8-3464-4cf8-832b-4aa31b74442c.png" 
                      alt="Animal Feed Solutions" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white">ANIMAL FEED SOLUTIONS</h3>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Target className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold mb-2 text-sourcing-green">NUTRITIONAL FEED PRODUCTS:</p>
                        <p className="text-sm text-gray-600">High-quality, plant-based animal feed designed to support healthier livestock and sustainable farming practices.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2 text-sourcing-green">CUSTOMIZED FORMULATIONS:</p>
                        <p className="text-sm text-gray-600">Tailored feed solutions for specific livestock needs, focusing on nutritional balance and cost efficiency.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2 text-sourcing-green">SUSTAINABILITY:</p>
                        <p className="text-sm text-gray-600">Utilizing byproducts from our manufacturing processes to minimize waste and create eco-friendly options.</p>
                      </div>
                    </div>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-gradient-to-r from-sourcing-orange to-yellow-500 hover:from-sourcing-orange-light hover:to-yellow-400 text-white border-0 rounded-xl py-3 font-medium">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="services">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-gradient-to-br from-sourcing-green to-sourcing-green-dark rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Globe className="w-8 h-8 mr-3" />
                    <h3 className="font-bold text-2xl">SUSTAINABLE AGRICULTURE SOLUTIONS</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Farm Partnerships",
                        description: "We collaborate with small-scale farmers, providing them with the tools, training, and resources needed to implement sustainable farming practices."
                      },
                      {
                        title: "Supply Chain Transparency",
                        description: "Our end-to-end traceability system ensures that every product meets the highest standards of quality and ethics."
                      },
                      {
                        title: "Eco-Friendly Packaging",
                        description: "Dedicated to reducing waste, we use biodegradable, recyclable, and reusable packaging across our product lines."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-sourcing-orange" />
                        <div>
                          <span className="font-semibold">{item.title}: </span>
                          <span className="text-white/90">{item.description}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-sourcing-orange to-yellow-500 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Zap className="w-8 h-8 mr-3" />
                    <h3 className="font-bold text-2xl">CUSTOM FOOD PRODUCT DEVELOPMENT</h3>
                  </div>
                  <p className="mb-6 text-white/90 leading-relaxed">
                    Tailored solutions for businesses seeking to develop plant-based or health-focused products under their own brand. Our services include:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Ingredient sourcing",
                      "Recipe formulation", 
                      "Packaging design and branding support",
                      "Manufacturing and distribution"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <CheckCircle2 className="w-5 h-5 mr-3 text-white" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
        
        {/* SPECIALIST SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
                SPECIALIST SERVICES
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert consulting services tailored to your specific industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialistServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient}`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-sourcing-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
