
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Sprout, 
  Award, 
  BarChart3, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Zap,
  Target,
  Users,
  Crown,
  Leaf,
  Briefcase
} from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const offerItems = [
    {
      icon: Target,
      title: "Supplier Excellence",
      description: "Supplier identification and evaluation tailored to client needs"
    },
    {
      icon: Zap,
      title: "Smart Negotiations",
      description: "Contract negotiation to secure favourable terms and pricing"
    },
    {
      icon: Globe,
      title: "Logistics Integration",
      description: "Integrated logistics management to streamline the procurement process"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Risk assessment and compliance monitoring to meet international standards"
    }
  ];

  const industries = [
    { name: "Retail & Consumer Goods", icon: "🛍️" },
    { name: "Organic & Sustainable Foods", icon: "🌱" },
    { name: "Fashion & Apparel", icon: "👕" }
  ];

  const clientSuccessItems = [
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Efficiently connecting businesses with reliable, cost-effective suppliers worldwide.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sprout,
      title: "Agro Products",
      description: "Exporting premium products, such as True Ceylon Cinnamon, through ethical sourcing practices.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Branding",
      description: "Empowering businesses and professionals to establish themselves as thought leaders in their industries.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: BarChart3,
      title: "Business & Supply Chain Consultancy",
      description: "Designing and implementing optimized workflows, Agile methodologies, and strategic plans.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const specialtyItems = [
    {
      icon: Crown,
      title: "Expertise from over a decade of leadership in operations and supply chains",
      description: "Deep industry knowledge and proven methodologies",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: "Proven track record of enhancing productivity and revenue growth for global clients",
      description: "Measurable results across diverse markets",
      gradient: "from-blue-500 to-purple-500",
      delay: 0.2
    },
    {
      icon: Leaf,
      title: "Commitment to ethical practices and sustainable growth",
      description: "Responsible business solutions for the future",
      gradient: "from-green-500 to-teal-500",
      delay: 0.3
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-sourcing-green/5 to-sourcing-orange/5 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-sourcing-orange/5 to-sourcing-green/5 rounded-full"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* GLOBAL SOURCING SOLUTIONS */}
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
            <Globe className="w-5 h-5 text-sourcing-green mr-2" />
            <span className="text-sourcing-green font-medium">Our Solutions</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
              GLOBAL SOURCING SOLUTIONS
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-sourcing-green">What We Offer:</h3>
            <div className="space-y-6">
              {offerItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                >
                  <div className="p-3 bg-gradient-to-r from-sourcing-green to-sourcing-orange rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-sourcing-green transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-sourcing-green">Key Industries Served:</h3>
            <div className="space-y-4 mb-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <span className="text-2xl mr-4">{industry.icon}</span>
                  <span className="font-medium text-gray-800">{industry.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sourcing-green via-sourcing-green-light to-sourcing-green p-8 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <h4 className="text-2xl font-bold mb-4">Success Story</h4>
              <p className="mb-6 text-white/90 leading-relaxed">
                For a European retailer, we sourced a new supplier network that delivered outstanding results:
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold mb-2 text-sourcing-orange">20%</div>
                  <div className="text-sm text-white/80">Cost Reduction</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold mb-2 text-sourcing-orange">15%</div>
                  <div className="text-sm text-white/80">Lead Time Improvement</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CLIENT SUCCESS section */}
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
                CLIENT SUCCESS
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional results across diverse industries and markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientSuccessItems.map((item, index) => (
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
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.gradient}`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-center text-gray-900 group-hover:text-sourcing-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                  <motion.div
                    className="flex items-center justify-center mt-6 text-sourcing-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* OUR SPECIALTY section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sourcing-green/10 to-sourcing-orange/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-5 h-5 text-sourcing-green mr-2" />
              <span className="text-sourcing-green font-medium">Excellence</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
                OUR SPECIALTY
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in delivering exceptional results
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {specialtyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <item.icon className="w-16 h-16 text-gray-400" />
                </div>
                
                <div className="relative z-10 flex items-start space-x-6">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${item.gradient} flex-shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-sourcing-green transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: item.delay + 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* AGRO BUSINESS section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src="/lovable-uploads/91603dcd-d955-45bb-930c-87699f083e9b.png" 
                      alt="Revive Agro Logo" 
                      className="h-12 w-auto mr-4"
                    />
                    <h2 className="text-4xl font-bold text-gold">AGRO BUSINESS</h2>
                  </div>
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    Revive Agro, a trusted name in sourcing premium agro products, with a strong emphasis on sustainability and quality.
                  </p>
                  <div className="mb-8">
                    <h3 className="text-gold text-2xl font-semibold mb-4">Flagship Product:</h3>
                    <p className="text-white/90 leading-relaxed">
                      True Ceylon Cinnamon under the Cinnatera brand. Known for its unmatched aroma, flavor, and medicinal properties.
                    </p>
                  </div>
                  <motion.button 
                    className="px-8 py-4 bg-gradient-to-r from-sourcing-orange to-yellow-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Products
                  </motion.button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <img 
                      src="/lovable-uploads/5c445bed-2dcc-4189-ba9e-d5290a94ef5e.png" 
                      alt="Cinnatera Cinnamon Products" 
                      className="max-h-[400px] object-contain mx-auto"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-sourcing-orange to-yellow-400 rounded-full blur-2xl opacity-30"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-gold text-xl font-semibold mb-6">Product Range:</h4>
                  <div className="space-y-4">
                    {[
                      "True Ceylon Cinnamon (sticks, powder, oil)",
                      "Organic spices: black pepper, turmeric, cloves",
                      "Coconut products: organic virgin coconut oil, desiccated coconut"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-white"
                      >
                        <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-3"></div>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-gold text-xl font-semibold mb-6">Value Proposition:</h4>
                  <div className="space-y-4">
                    {[
                      "Guaranteed purity with traceable supply chains",
                      "Ethical partnerships with Sri Lankan farmers and producers",
                      "Competitive pricing for high-demand global markets"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-white"
                      >
                        <CheckCircle className="w-5 h-5 text-sourcing-orange mr-3" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
