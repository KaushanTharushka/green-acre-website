
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch soon!",
    });
  };
  
  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-sourcing-green to-sourcing-yellow bg-clip-text text-transparent">
          LET'S CONNECT
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
          Partner with us to elevate your business, supply chain, and personal brand to new heights
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-sourcing-green">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="w-full text-sm sm:text-base py-2 sm:py-3"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full text-sm sm:text-base py-2 sm:py-3"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">Company Name</label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="w-full text-sm sm:text-base py-2 sm:py-3"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  required 
                  className="w-full text-sm sm:text-base py-2 sm:py-3"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Your Message</label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Please provide details about your inquiry..." 
                  required 
                  className="w-full text-sm sm:text-base resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-sourcing-green hover:bg-sourcing-green-light text-white py-3 sm:py-4 text-sm sm:text-base font-semibold touch-manipulation"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-sourcing-green">Contact Information</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-sourcing-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">harandra@reviveagro.com</span>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-sourcing-green mr-3 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base text-gray-700">
                  <p>+44 203 375 5533</p>
                  <p>+44 746 349 1010</p>
                </div>
              </div>
              
              <div className="pt-4 sm:pt-6">
                <h4 className="font-medium text-base sm:text-lg mb-3 text-gray-900">Connect With Us</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="#" className="p-2 sm:p-3 bg-sourcing-green text-white rounded-full hover:bg-sourcing-green-light transition touch-manipulation">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-2 sm:p-3 bg-sourcing-green text-white rounded-full hover:bg-sourcing-green-light transition touch-manipulation">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-2 sm:p-3 bg-sourcing-green text-white rounded-full hover:bg-sourcing-green-light transition touch-manipulation">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-sourcing-green">Why Partner With Us?</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-sourcing-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Proven track record of success</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-sourcing-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Tailored solutions for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-sourcing-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Commitment to sustainability and ethics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-sourcing-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Global network and extensive expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
