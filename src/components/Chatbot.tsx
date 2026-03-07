import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal, Loader2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: 'Greetings. I am the system assistant. Ask me anything about Hrishikesh\'s projects, skills, or experience.'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Context about Hrishikesh for the AI
      const systemContext = `
        You are an AI assistant for Gavinolla Hrishikesh Reddy's portfolio website.
        
        Here is his profile data:
        - Name: Gavinolla Hrishikesh Reddy
        - Role: CSE Student, AI/ML Enthusiast, Full Stack Developer
        - Location: Hyderabad, India
        - Education: B.Tech CSE at Mahindra University (CGPA 6/10)
        - Skills: AI/ML (Python, Scikit-learn, NLP), FPGA (AMD Xilinx), Web Dev (React, FastAPI), Core CS (DSA, OS, DBMS).
        - Projects: 
          1. UAV Threat Classifier (FPGA, CNN, 93.97% accuracy)
          2. Eco Tracker (React, FastAPI, PaddleOCR, Gemini API)
          3. Quantum Pharma Discovery Platform
          4. Digital Menu System
        - Experience: AI/ML Workshop at IIIT Hyderabad (24 weeks).
        - Contact: hrishikeshreddyg@gmail.com, +91 7799889259.
        
        Style: Keep responses concise, professional, and slightly technical/terminal-themed.
        If you don't know something, say "Data not found in system archives."
      `;

      const model = ai.models.getGenerativeModel({ 
        model: "gemini-2.5-flash-lite-preview",
        systemInstruction: systemContext
      });

      // Construct history for the API
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const chat = model.startChat({
        history: history
      });

      const result = await chat.sendMessage(userMessage.text);
      const response = result.response.text();

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: response
      }]);

    } catch (error) {
      console.error("Chat error:", error);
      // Fallback response if API fails
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: "SYSTEM_ALERT: Neural Core Offline. The AI assistant is currently inactive (API Key missing or limit reached). Please contact Hrishikesh directly via email."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-terminal-green text-terminal-black p-4 rounded-full shadow-lg hover:bg-white transition-colors border border-terminal-black"
          >
            <MessageSquare className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-[500px] bg-terminal-black border border-terminal-green/30 shadow-2xl flex flex-col rounded-lg overflow-hidden backdrop-blur-sm bg-opacity-95"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-terminal-green">
                <Terminal className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wider">SYSTEM_ASSISTANT</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-white/10 text-white border border-white/10'
                        : 'bg-terminal-green/10 text-terminal-green border border-terminal-green/20'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-terminal-green/10 text-terminal-green p-3 rounded-lg border border-terminal-green/20 flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span className="text-xs">PROCESSING...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command..."
                className="flex-1 bg-black/20 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-terminal-green transition-colors font-mono"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-terminal-green text-terminal-black p-2 rounded hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
