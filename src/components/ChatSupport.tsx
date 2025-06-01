
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MessageSquare, Send } from 'lucide-react';

const ChatSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Array<{type: 'user' | 'bot', text: string}>>([
    { type: 'bot', text: 'Hello! How can I help you today with Revive Agro products or services?' }
  ]);

  // Website knowledge base
  const websiteKnowledge = {
    services: [
      "Global Sourcing - We connect you with reliable suppliers worldwide",
      "Agro Products - High-quality agricultural products and solutions", 
      "Business Consultancy - Strategic guidance for business growth",
      "Supply Chain Management - Efficient logistics and distribution",
      "Branding - Build and enhance your brand identity"
    ],
    aboutUs: "Revive Agro empowers growth through strategic sourcing, agro innovation, and business excellence. We are committed to sustainability and ethics with a global network and extensive expertise.",
    whyChooseUs: [
      "Proven track record of success",
      "Tailored solutions for your specific needs", 
      "Commitment to sustainability and ethics",
      "Global network and extensive expertise"
    ],
    contactInfo: {
      email: "harandra@reviveagro.com",
      phones: ["+44 203 375 5533", "+44 746 349 1010"],
      address: "123 Business Avenue, Suite 100, London, UK"
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Services related queries
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return `We offer comprehensive business solutions including:\n\n${websiteKnowledge.services.map(service => `• ${service}`).join('\n')}\n\nFor detailed information about any specific service, please contact us at harandra@reviveagro.com or call +44 203 375 5533.`;
    }
    
    // About company queries
    if (lowerMessage.includes('about') || lowerMessage.includes('who are you') || lowerMessage.includes('company')) {
      return `${websiteKnowledge.aboutUs}\n\nWhy partner with us?\n${websiteKnowledge.whyChooseUs.map(reason => `• ${reason}`).join('\n')}\n\nGet in touch: harandra@reviveagro.com | +44 203 375 5533`;
    }
    
    // Sourcing related queries
    if (lowerMessage.includes('sourcing') || lowerMessage.includes('supplier')) {
      return `Our Global Sourcing service connects you with reliable suppliers worldwide. We help businesses find the right partners and ensure quality supply chains.\n\nFor sourcing inquiries, contact harandra@reviveagro.com or call +44 203 375 5533 for immediate assistance.`;
    }
    
    // Agro products queries
    if (lowerMessage.includes('agro') || lowerMessage.includes('agriculture') || lowerMessage.includes('farming')) {
      return `We specialize in high-quality agricultural products and innovative agro solutions. Our expertise covers the entire agricultural value chain.\n\nFor agro product information, reach out to harandra@reviveagro.com or call +44 746 349 1010.`;
    }
    
    // Consultancy queries
    if (lowerMessage.includes('consult') || lowerMessage.includes('advice') || lowerMessage.includes('strategy')) {
      return `Our Business Consultancy service provides strategic guidance for business growth. We offer tailored solutions based on your specific needs and industry requirements.\n\nSchedule a consultation: harandra@reviveagro.com | +44 203 375 5533`;
    }
    
    // Supply chain queries
    if (lowerMessage.includes('supply chain') || lowerMessage.includes('logistics') || lowerMessage.includes('distribution')) {
      return `We provide efficient Supply Chain Management services including logistics optimization and distribution solutions to streamline your operations.\n\nDiscuss your supply chain needs: harandra@reviveagro.com | +44 203 375 5533`;
    }
    
    // Branding queries
    if (lowerMessage.includes('brand') || lowerMessage.includes('marketing') || lowerMessage.includes('identity')) {
      return `Our Branding service helps build and enhance your brand identity. We create compelling brand strategies that resonate with your target audience.\n\nExplore branding solutions: harandra@reviveagro.com | +44 203 375 5533`;
    }
    
    // Contact queries
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('address')) {
      return `Here are our contact details:\n\n📧 Email: harandra@reviveagro.com\n📞 Phone: +44 203 375 5533\n📞 Alternative: +44 746 349 1010\n📍 Address: 123 Business Avenue, Suite 100, London, UK\n\nWe're here to help with all your business needs!`;
    }
    
    // Pricing queries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return `We provide customized pricing based on your specific requirements and project scope. Every solution is tailored to deliver maximum value.\n\nFor a detailed quote, please contact harandra@reviveagro.com or call +44 203 375 5533.`;
    }
    
    // Hello/greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return `Hello! Welcome to Revive Agro. We specialize in Global Sourcing, Agro Products, Business Consultancy, Supply Chain Management, and Branding services.\n\nHow can we help you today? For immediate assistance, contact harandra@reviveagro.com or call +44 203 375 5533.`;
    }
    
    // Default response
    return `Thank you for your inquiry! Revive Agro offers comprehensive solutions in Global Sourcing, Agro Products, Business Consultancy, Supply Chain Management, and Branding.\n\nFor personalized assistance with your specific needs, please contact:\n📧 harandra@reviveagro.com\n📞 +44 203 375 5533 | +44 746 349 1010\n\nOur team will provide detailed information and tailored solutions for your business.`;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      const newChat = [...chat, { type: 'user' as const, text: message }];
      setChat(newChat);
      
      // Generate and add bot response
      setTimeout(() => {
        const botResponse = generateBotResponse(message);
        setChat(currentChat => [
          ...currentChat,
          { type: 'bot' as const, text: botResponse }
        ]);
      }, 1000);
      
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="rounded-full h-14 w-14 bg-sourcing-green hover:bg-sourcing-green-light shadow-lg"
            size="icon"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90%] sm:w-[380px] h-[500px] flex flex-col p-0">
          <SheetHeader className="bg-sourcing-green text-white p-4">
            <SheetTitle className="text-white">Chat Support</SheetTitle>
          </SheetHeader>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chat.map((msg, index) => (
              <div 
                key={index} 
                className={`${
                  msg.type === 'user' ? 'ml-auto bg-blue-100' : 'mr-auto bg-gray-100'
                } p-3 rounded-lg max-w-[80%] whitespace-pre-line`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="border-t p-4">
            <div className="flex items-center">
              <textarea 
                className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-sourcing-green resize-none"
                placeholder="Ask about our services..."
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <Button 
                className="bg-sourcing-green hover:bg-sourcing-green-light rounded-l-none"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatSupport;
