import { ReactNode } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Target, Network, BarChart2 } from 'lucide-react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const iconColors = {
  targeting: "text-purple-500 dark:text-purple-400",
  coordination: "text-emerald-500 dark:text-emerald-400",
  analytics: "text-cyan-500 dark:text-cyan-400"
};

const cardGradients = {
  targeting: "hover:bg-gradient-to-br hover:from-purple-900/40 hover:to-pink-900/40 dark:hover:from-purple-800/20 dark:hover:to-pink-800/20",
  coordination: "hover:bg-gradient-to-br hover:from-emerald-900/40 hover:to-teal-900/40 dark:hover:from-emerald-800/20 dark:hover:to-teal-800/20",
  analytics: "hover:bg-gradient-to-br hover:from-cyan-900/40 hover:to-blue-900/40 dark:hover:from-cyan-800/20 dark:hover:to-blue-800/20"
};

const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Revolutionary Marketing Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`transition-all duration-300 ${cardGradients.targeting} border-t-4 border-t-purple-500/50 bg-slate-800/50 dark:bg-slate-900/50`}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-purple-100/10 ${iconColors.targeting}`}>
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Hyper-Targeting
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 dark:text-gray-200">
                Ultra-precise audience segmentation using advanced AI algorithms that go beyond traditional demographic targeting.
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-all duration-300 ${cardGradients.coordination} border-t-4 border-t-emerald-500/50 bg-slate-800/50 dark:bg-slate-900/50`}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-emerald-100/10 ${iconColors.coordination}`}>
                  <Network className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                  Multi-Agent Coordination
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 dark:text-gray-200">
                Intelligent agents working in synchronized harmony to optimize marketing strategies across multiple channels and touchpoints.
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-all duration-300 ${cardGradients.analytics} border-t-4 border-t-cyan-500/50 bg-slate-800/50 dark:bg-slate-900/50`}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-cyan-100/10 ${iconColors.analytics}`}>
                  <BarChart2 className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  Predictive Analytics
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 dark:text-gray-200">
                Real-time insights and predictive modeling that anticipate customer behaviors and market trends with unprecedented accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features; 