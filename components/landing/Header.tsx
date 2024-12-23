import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {description}
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
          >
            Learn More
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 