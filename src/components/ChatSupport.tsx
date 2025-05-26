
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

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      setChat([...chat, { type: 'user', text: message }]);
      
      // Simulate bot response
      setTimeout(() => {
        setChat(currentChat => [
          ...currentChat,
          { 
            type: 'bot', 
            text: "Thank you for your message. One of our team members will get back to you shortly. You can also reach us directly at contact@reviveagro.com or call us at +44 203 375 5533."
          }
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
                } p-3 rounded-lg max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="border-t p-4">
            <div className="flex items-center">
              <textarea 
                className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-sourcing-green resize-none"
                placeholder="Type your message here..."
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
