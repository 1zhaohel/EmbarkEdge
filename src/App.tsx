import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import { LearningModule } from './components/LearningModule';
import { EmbarkEdgeDashboard } from './components/EmbarkEdgeDashboard';
import { EmbarkAccountConnect } from './components/EmbarkAccountConnect';
import { EmbarkUnlockCard } from './components/EmbarkUnlockCard';
import { ProgressTracker } from './components/ProgressTracker';
import { BookOpen, TrendingUp, Award, Coins } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const embarkLogo = 'https://a-ca.storyblok.com/f/2000272/653x167/5716779e99/embark-logo.png';

export default function App() {
  const [userPoints, setUserPoints] = useState(250);
  const [isDashboardUnlocked, setIsDashboardUnlocked] = useState(true);
  const [isEmbarkConnected, setIsEmbarkConnected] = useState(false);
  const [showUnlockCard, setShowUnlockCard] = useState(true);

  const handlePointsEarned = (points: number) => {
    setUserPoints(prev => prev + points);
    toast.success(`🎉 You earned ${points} points!`, {
      description: "Keep learning to unlock more features!",
    });
  };

  const handlePointsSpent = (points: number) => {
    setUserPoints(prev => prev - points);
    toast.success(`🎁 Reward redeemed!`, {
      description: `You spent ${points} points.`,
    });
  };

  const handleModuleComplete = () => {
    if (!isDashboardUnlocked) {
      setIsDashboardUnlocked(true);
      toast.success(`🚀 Embark Edge Dashboard Unlocked!`, {
        description: "You can now track your RESP savings and set goals!",
      });
    }
  };

  const handleEmbarkConnect = () => {
    setIsEmbarkConnected(true);
    toast.success(`🎉 Embark Account Connected!`, {
      description: "You can now contribute to your RESP and set savings goals!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-lavender-100">
      {/* Header */}
      <div className="bg-white text-purple-900 p-4 sticky top-0 z-10 shadow-lg border-b border-purple-100">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={embarkLogo} 
              alt="Embark Edge" 
              className="h-8 w-auto"
            />
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Embark Edge
              </h1>
              <p className="text-sm text-purple-600">Learn. Save. Succeed.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!showUnlockCard && !isEmbarkConnected && (
              <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-md text-xs">
                Open RESP
              </Badge>
            )}
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-md">
              <Coins className="w-3 h-3 mr-1" />
              {userPoints.toLocaleString()}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto p-4">
        {/* Unlock Card */}
        {showUnlockCard && !isEmbarkConnected && (
          <EmbarkUnlockCard onDismiss={() => setShowUnlockCard(false)} />
        )}
        
        <Tabs defaultValue="learn" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-purple-100 shadow-lg rounded-xl p-1">
            <TabsTrigger 
              value="learn" 
              className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              <BookOpen className="w-4 h-4" />
              Learn
            </TabsTrigger>
            <TabsTrigger 
              value="dashboard" 
              disabled={!isDashboardUnlocked}
              className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              <TrendingUp className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="progress" 
              className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              <Award className="w-4 h-4" />
              Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="mt-4">
            <LearningModule 
              userPoints={userPoints}
              onPointsEarned={handlePointsEarned}
              onModuleComplete={handleModuleComplete}
            />
          </TabsContent>

          <TabsContent value="dashboard" className="mt-4">
            {isDashboardUnlocked ? (
              isEmbarkConnected ? (
                <EmbarkEdgeDashboard 
                  userPoints={userPoints}
                  onPointsSpent={handlePointsSpent}
                />
              ) : (
                <EmbarkAccountConnect onConnect={handleEmbarkConnect} />
              )
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-lavender-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <TrendingUp className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium text-purple-900">Dashboard Locked</h3>
                  <p className="text-sm text-purple-600 mt-1">
                    Complete 3 learning modules to unlock your RESP dashboard
                  </p>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="progress" className="mt-4">
            <ProgressTracker 
              userPoints={userPoints}
              isDashboardUnlocked={isDashboardUnlocked}
              isEmbarkConnected={isEmbarkConnected}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
