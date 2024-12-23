import { Cpu, Users, Network } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">AIMarketer</h3>
          <p className="text-muted-foreground">© 2024 Multi-Agent AI Marketing Solutions</p>
        </div>
        <div className="flex space-x-4">
          <Cpu className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          <Users className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          <Network className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 