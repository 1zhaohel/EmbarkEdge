import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  PiggyBank, 
  Target, 
  TrendingUp, 
  Gift, 
  School, 
  DollarSign,
  Calendar,
  Award,
  Plus,
  Coins
} from 'lucide-react';

interface EmbarkEdgeDashboardProps {
  userPoints: number;
  onPointsSpent: (points: number) => void;
}

export function EmbarkEdgeDashboard({ userPoints, onPointsSpent }: EmbarkEdgeDashboardProps) {
  const [savingsGoal, setSavingsGoal] = useState(25000);
  const [currentSavings, setCurrentSavings] = useState(8750);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [contributionAmount, setContributionAmount] = useState('');
  const [newGoalAmount, setNewGoalAmount] = useState('');
  const [showContributeForm, setShowContributeForm] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);

  const savingsProgress = (currentSavings / savingsGoal) * 100;
  const monthsToGoal = Math.ceil((savingsGoal - currentSavings) / monthlyContribution);

  const recentTransactions = [
    { id: 1, description: 'Part-time job earnings', amount: 320, date: '2024-01-15', type: 'deposit' },
    { id: 2, description: 'Babysitting money', amount: 60, date: '2024-01-10', type: 'deposit' },
    { id: 3, description: 'Birthday gift from grandparents', amount: 100, date: '2024-01-05', type: 'deposit' },
    { id: 4, description: 'Allowance contribution', amount: 50, date: '2024-01-01', type: 'deposit' }
  ];

  const educationPrograms = [
    { name: 'Computer Science - University of Toronto', cost: 58000, duration: '4 years' },
    { name: 'Business Administration - UBC', cost: 42000, duration: '4 years' },
    { name: 'Engineering - McGill University', cost: 48000, duration: '4 years' },
    { name: 'Graphic Design - Sheridan College', cost: 28000, duration: '3 years' }
  ];

  const rewards = [
    { id: 1, name: 'Tim Hortons $10 Gift Card', points: 500, category: 'Food' },
    { id: 2, name: 'Amazon $25 Gift Card', points: 1200, category: 'Shopping' },
    { id: 3, name: 'Spotify Premium (3 months)', points: 800, category: 'Entertainment' },
    { id: 4, name: 'Nike 20% Off Coupon', points: 600, category: 'Apparel' }
  ];

  const handleRedeemReward = (reward: typeof rewards[0]) => {
    if (userPoints >= reward.points) {
      onPointsSpent(reward.points);
    }
  };

  const handleContribute = () => {
    const amount = parseFloat(contributionAmount);
    if (amount > 0) {
      setCurrentSavings(prev => prev + amount);
      setContributionAmount('');
      setShowContributeForm(false);
    }
  };

  const handleSetGoal = () => {
    const amount = parseFloat(newGoalAmount);
    if (amount > 0) {
      setSavingsGoal(amount);
      setNewGoalAmount('');
      setShowGoalForm(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Embark Edge Dashboard</h1>
            <p className="opacity-90">Enhanced RESP Account Access</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-green-400 text-green-900 border-0 font-semibold">
                ✓ Account Connected
              </Badge>
              <Badge className="bg-white/20 text-white border-0">
                Premium Features
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <School className="w-12 h-12 opacity-80 mx-auto mb-2" />
            <p className="text-xs opacity-75">Real-time sync</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="savings" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="savings" className="space-y-4">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PiggyBank className="w-5 h-5" />
                  RESP Account Balance
                </div>
                <Badge className="bg-white/20 text-white border-0">
                  Connected
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-2">
                ${currentSavings.toLocaleString()}
              </div>
              <p className="text-sm opacity-90 mb-4">
                +${monthlyContribution} this month from contributions
              </p>
              <Button 
                onClick={() => setShowContributeForm(true)}
                className="bg-white text-green-600 hover:bg-green-50 font-semibold shadow-md"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Contribution
              </Button>
            </CardContent>
          </Card>

          {showContributeForm && (
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Add Your Contribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contribution" className="text-green-800">Contribution Amount</Label>
                  <Input
                    id="contribution"
                    type="number"
                    placeholder="Enter amount (e.g., 50)"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(e.target.value)}
                    className="border-green-300 focus:border-green-500"
                  />
                </div>
                <div className="bg-green-100 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-green-700">
                    💡 <strong>Government Match:</strong> The government will add 20% to your contribution (up to annual limits)!
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowContributeForm(false)}
                    className="flex-1 border-green-300 text-green-700"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleContribute}
                    disabled={!contributionAmount || parseFloat(contributionAmount) <= 0}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Add ${contributionAmount || '0'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recent Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="text-green-600 font-semibold">
                      +${transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Your Savings Goal
                </div>
                <Button 
                  onClick={() => setShowGoalForm(true)}
                  className="bg-white/20 text-white hover:bg-white/30 border-0"
                  size="sm"
                >
                  Update Goal
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span>Progress to Goal</span>
                  <span className="font-semibold">${currentSavings.toLocaleString()} / ${savingsGoal.toLocaleString()}</span>
                </div>
                <Progress value={savingsProgress} className="h-3 bg-white/20" />
                <p className="text-sm opacity-90 mt-2">
                  {savingsProgress.toFixed(1)}% complete • ~{monthsToGoal} months to goal
                </p>
              </div>
            </CardContent>
          </Card>

          {showGoalForm && (
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Set Your Savings Goal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="new-goal" className="text-blue-800">New Goal Amount</Label>
                  <Input
                    id="new-goal"
                    type="number"
                    placeholder="Enter your goal amount"
                    value={newGoalAmount}
                    onChange={(e) => setNewGoalAmount(e.target.value)}
                    className="border-blue-300 focus:border-blue-500"
                  />
                </div>
                <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700">
                    🎯 <strong>Smart Goal Tip:</strong> Consider your target education program cost and timeline when setting your goal.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowGoalForm(false)}
                    className="flex-1 border-blue-300 text-blue-700"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSetGoal}
                    disabled={!newGoalAmount || parseFloat(newGoalAmount) <= 0}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Set Goal: ${newGoalAmount || '0'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="w-5 h-5" />
                Canadian Post-Secondary Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {educationPrograms.map((program, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{program.name}</h3>
                      <Badge variant="outline">{program.duration}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-600">
                        ${program.cost.toLocaleString()}
                      </span>
                      <div className="text-sm text-muted-foreground">
                        {program.cost > currentSavings ? 
                          `$${(program.cost - currentSavings).toLocaleString()} more needed` : 
                          'Fully funded!'}
                      </div>
                    </div>
                    <Progress 
                      value={Math.min((currentSavings / program.cost) * 100, 100)} 
                      className="h-2 mt-2" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="opacity-90">Available Points</p>
                  <p className="text-2xl font-semibold">{userPoints.toLocaleString()}</p>
                </div>
                <Award className="w-8 h-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Rewards Store
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {rewards.map((reward) => {
                  const canAfford = userPoints >= reward.points;
                  return (
                    <div key={reward.id} className={`border rounded-lg p-4 ${!canAfford && 'opacity-50'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{reward.name}</h3>
                          <Badge variant="secondary" className="mt-1">
                            {reward.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-purple-600 font-semibold">
                            <Coins className="w-4 h-4" />
                            {reward.points.toLocaleString()}
                          </div>
                          <Button 
                            size="sm" 
                            disabled={!canAfford}
                            onClick={() => handleRedeemReward(reward)}
                            className="mt-2"
                          >
                            {canAfford ? 'Redeem' : 'Not enough points'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
