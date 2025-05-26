
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  Zap, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Eye, 
  DollarSign, 
  ShoppingCart,
  MapPin,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Target,
  Globe
} from 'lucide-react';

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: ClipboardList,
      title: "Audit",
      description: "Conduct in-depth operational assessments to identify inefficiencies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Optimize", 
      description: "Apply process re-engineering and technological solutions to streamline workflows",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ArrowRight,
      title: "Implement",
      description: "Roll out tailored strategies for sustainable growth",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: BookOpen,
      title: "Train",
      description: "Provide tools and training to empower teams for long-term success",
      color: "from-orange-500 to-red-500"
    }
  ];

  const keyServices = [
    "Supply chain strategy and design",
    "Agile project management and transformation", 
    "Demand planning and sales forecasting",
    "ERP system selection and integration"
  ];

  const whyChooseItems = [
    {
      icon: Heart,
      title: "Commitment to Sustainability",
      description: "Every product we offer is designed with environmental impact in mind, from sourcing to packaging.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description: "We use only the finest natural ingredients, ensuring our customers enjoy premium products that align with their health goals.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "By continuously developing new products and flavors, we stay ahead of market trends to meet consumer demand.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Our traceability systems and ethical practices build trust with consumers and partners alike.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Holistic Approach",
      description: "We don't just sell products—we inspire lifestyle changes through education, community support, and sustainable practices.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Understanding client challenges and goals"
    },
    {
      number: "2", 
      title: "Strategy Development",
      description: "Creating tailored solutions"
    },
    {
      number: "3",
      title: "Implementation", 
      description: "Rolling out changes with full support"
    },
    {
      number: "4",
      title: "Follow-up",
      description: "Monitoring and refining strategies for sustained success"
    }
  ];

  const distributionChannels = [
    {
      icon: Eye,
      title: "Direct-to-Consumer (DTC)",
      description: "Through our e-commerce platform, we deliver directly to customers worldwide."
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Available at health-focused grocery stores, specialty vegan shops, and online marketplaces."
    },
    {
      icon: DollarSign,
      title: "Wholesale and B2B",
      description: "Collaborating with distributors, cafés, gyms, and subscription box services to bring our products to a larger audience."
    },
    {
      icon: MapPin,
      title: "International Markets",
      description: "Expanding into Europe, North America, and Asia-Pacific regions, where plant-based products are in high demand."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sourcing-green/8 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* BUSINESS & SUPPLY CHAIN CONSULTANCY */}
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
            <span className="text-sourcing-green font-medium">Our Process</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
              BUSINESS & SUPPLY CHAIN CONSULTANCY
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-sourcing-green transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-sourcing-green">Key Services</h3>
            <div className="space-y-4">
              {keyServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group"
                >
                  <div className="w-3 h-3 rounded-full bg-sourcing-orange mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium text-gray-800 group-hover:text-sourcing-green transition-colors">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h4 className="text-2xl font-bold mb-6 text-sourcing-green">Success Stories</h4>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start p-4 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-3 h-3 rounded-full bg-sourcing-green mt-2 mr-4"></div>
                <p className="font-medium text-gray-800">Reduced lead times by 25% for an organic product exporter</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start p-4 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-3 h-3 rounded-full bg-sourcing-green mt-2 mr-4"></div>
                <p className="font-medium text-gray-800">Improved manufacturing productivity by 30% for a fashion brand</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* WHY CHOOSE REVIVE AGRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
                WHY CHOOSE REVIVE AGRO?
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-center text-gray-900 group-hover:text-sourcing-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* HOW WE WORK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
                HOW WE WORK
              </span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-sourcing-green to-sourcing-orange text-white flex items-center justify-center text-3xl font-bold mx-auto shadow-lg"
                    >
                      {step.number}
                    </motion.div>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-24 h-0.5 bg-gradient-to-r from-sourcing-green to-sourcing-orange"></div>
                    )}
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-sourcing-green">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* OUR MARKET REACH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
                OUR MARKET REACH
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-sourcing-green">Global Distribution Channels</h3>
              
              <div className="space-y-6">
                {distributionChannels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                  >
                    <div className="p-3 bg-gradient-to-r from-sourcing-green to-sourcing-orange rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-sourcing-green transition-colors">
                        {channel.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{channel.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-br from-sourcing-green to-sourcing-green-dark p-12 rounded-3xl text-center text-white relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative z-10"
                >
                  <Globe className="w-24 h-24 mx-auto mb-6 text-sourcing-orange" />
                  <h3 className="font-bold text-3xl mb-4">REVIVE AGRO</h3>
                  <p className="text-white/90">Global Reach, Local Impact</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
