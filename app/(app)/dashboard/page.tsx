"use client";

import React, { useState, useEffect } from 'react';
import { Send, Bot, User, Moon, Sun } from 'lucide-react';
import Navigation from '@/components/landing/Navigation';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI marketing assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Mock AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: `I understand you're asking about "${input}". As your AI marketing assistant, I'd be happy to help with that. What specific aspects would you like to know more about?`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        setActiveSection={() => {}}
      />

      <div className="pt-20 px-4 max-w-4xl mx-auto">
        {/* Chat Container */}
        <div className={`
          rounded-lg shadow-lg 
          ${darkMode ? 'bg-gray-800' : 'bg-white'}
          p-4 min-h-[80vh] 
          flex flex-col
        `}>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`
                  p-2 rounded-full 
                  ${message.role === 'user' 
                    ? 'bg-blue-500' 
                    : darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }
                `}>
                  {message.role === 'user' 
                    ? <User className="w-5 h-5 text-white" />
                    : <Bot className="w-5 h-5" />
                  }
                </div>
                <div className={`
                  max-w-[80%] p-3 rounded-lg
                  ${message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'
                  }
                `}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-500">
                <Bot className="w-5 h-5" />
                <div className="animate-pulse">Typing...</div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className={`
                flex-1 p-3 rounded-lg
                ${darkMode 
                  ? 'bg-gray-700 text-gray-100' 
                  : 'bg-gray-100 text-gray-800'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`
                p-3 rounded-lg
                ${isLoading 
                  ? 'bg-gray-400' 
                  : 'bg-blue-500 hover:bg-blue-600'
                }
                text-white transition-colors
              `}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;