"use client";

import React from 'react';
import { 
  Target, 
  Network, 
  BarChart2, 
  Zap, 
  Shield, 
  Users
} from 'lucide-react';

import Navigation from '@/components/landing/Navigation';
import Header from '@/components/landing/Header';
import Features from '@/components/landing/Features';
import Technologies from '@/components/landing/Technologies';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const MarketingAIWebsite = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  const sections = {
    home: {
      title: "HyperPersonalized AI Marketing Intelligence",
      subtitle: "Transforming Marketing with Advanced Multi-Agent AI Systems",
      description: "Leverage cutting-edge AI to create unprecedented marketing precision and personalization."
    },
    features: [
      {
        icon: <Target className="w-12 h-12" />,
        title: "Hyper-Targeting",
        description: "Ultra-precise audience segmentation using advanced AI algorithms that go beyond traditional demographic targeting."
      },
      {
        icon: <Network className="w-12 h-12" />,
        title: "Multi-Agent Coordination",
        description: "Intelligent agents working in synchronized harmony to optimize marketing strategies across multiple channels and touchpoints."
      },
      {
        icon: <BarChart2 className="w-12 h-12" />,
        title: "Predictive Analytics",
        description: "Real-time insights and predictive modeling that anticipate customer behaviors and market trends with unprecedented accuracy."
      }
    ],
    technologies: [
      {
        icon: <Zap className="w-12 h-12" />,
        title: "AI-Driven Personalization",
        description: "Machine learning models that continuously adapt and refine marketing strategies based on individual user interactions."
      },
      {
        icon: <Shield className="w-12 h-12" />,
        title: "Privacy-First Design",
        description: "Robust data protection and ethical AI principles ensuring compliance and customer trust."
      },
      {
        icon: <Users className="w-12 h-12" />,
        title: "Behavioral Insights",
        description: "Deep psychological profiling and contextual understanding of customer motivations and preferences."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation setActiveSection={setActiveSection} />
      <Header 
        title={sections.home.title}
        description={sections.home.description}
      />
      <Features features={sections.features} />
      <Technologies technologies={sections.technologies} />
      <Contact />
      <Footer />
    </div>
  );
};

export default MarketingAIWebsite;