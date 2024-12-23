import { ReactNode } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Zap, Shield, Users } from 'lucide-react';

interface Technology {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TechnologiesProps {
  technologies: Technology[];
}

const iconColors = {
  ai: "text-yellow-500 dark:text-yellow-400",
  privacy: "text-red-500 dark:text-red-400",
  behavioral: "text-blue-500 dark:text-blue-400"
};

const cardGradients = {
  ai: "hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 dark:hover:from-yellow-950 dark:hover:to-orange-950",
  privacy: "hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 dark:hover:from-red-950 dark:hover:to-pink-950",
  behavioral: "hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950 dark:hover:to-indigo-950"
};

const Technologies = ({ technologies }: TechnologiesProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Advanced AI Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`transition-all duration-300 ${cardGradients.ai} border-t-4 border-t-yellow-500/50`}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 ${iconColors.ai}`}>
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400">
                  AI-Driven Personalization
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Machine learning models that continuously adapt and refine marketing strategies based on individual user interactions.
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-all duration-300 ${cardGradients.privacy} border-t-4 border-t-red-500/50`}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-red-100 dark:bg-red-900/30 ${iconColors.privacy}`}>
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400">
                  Privacy-First Design
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Robust data protection and ethical AI principles ensuring compliance and customer trust.
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-all duration-300 ${cardGradients.behavioral} border-t-4 border-t-blue-500/50`}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 ${iconColors.behavioral}`}>
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Behavioral Insights
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Deep psychological profiling and contextual understanding of customer motivations and preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technologies; 