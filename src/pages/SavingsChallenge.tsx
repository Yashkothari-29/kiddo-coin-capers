
import { useState } from "react";
import { CoinMascot } from "@/components/CoinMascot";
import { FunButton } from "@/components/FunButton";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SavingsChallenge = () => {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const challenges = [
    {
      id: 1,
      title: "Daily Saver 🐷",
      description: "Save ₹100 daily for 7 days",
      reward: "1 virtual pizza 🍕",
      progress: 57,
      maxProgress: 100,
      difficulty: "Easy",
      color: "bg-fun-green"
    },
    {
      id: 2,
      title: "No-Spend Week 🚫💸",
      description: "7 days without unnecessary purchases",
      reward: "Party hat for avatar 🎉",
      progress: 28,
      maxProgress: 100,
      difficulty: "Medium",
      color: "bg-fun-orange"
    },
    {
      id: 3,
      title: "Biryani Resistance 🍚",
      description: "Skip ordering biryani for 5 days",
      reward: "Superhero cape 🦸‍♂️",
      progress: 80,
      maxProgress: 100,
      difficulty: "Hard",
      color: "bg-fun-pink"
    },
    {
      id: 4,
      title: "Coin Collector 🪙",
      description: "Collect ₹500 in coins",
      reward: "Golden piggy bank 🐷✨",
      progress: 15,
      maxProgress: 100,
      difficulty: "Easy",
      color: "bg-fun-yellow"
    },
    {
      id: 5,
      title: "Budget Master 📊",
      description: "Stick to budget for 30 days",
      reward: "Money wizard title 🧙‍♂️",
      progress: 33,
      maxProgress: 100,
      difficulty: "Expert",
      color: "bg-fun-purple"
    },
    {
      id: 6,
      title: "Emergency Fund Builder 🆘",
      description: "Build ₹5000 emergency fund",
      reward: "Shield of Protection 🛡️",
      progress: 65,
      maxProgress: 100,
      difficulty: "Medium",
      color: "bg-fun-blue"
    }
  ];

  const handleCompleteChallenge = (challengeId: number) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges([...completedChallenges, challengeId]);
      // Play celebration sound/animation here
      alert("🎉 Challenge completed! You're amazing! 🏆");
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-200 text-green-800";
      case "Medium": return "bg-yellow-200 text-yellow-800";
      case "Hard": return "bg-orange-200 text-orange-800";
      case "Expert": return "bg-red-200 text-red-800";
      default: return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-pacifico fun-purple sparkle">
          DARE TO SAVE? 🏆
        </h1>
        <p className="text-xl font-fredoka text-gray-600">
          Complete challenges and become a savings superhero! 💪✨
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-pink-100 to-pink-200 border-4 border-fun-pink rounded-3xl text-center">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-2xl font-pacifico text-pink-800">{completedChallenges.length}</div>
          <div className="font-fredoka text-pink-700">Completed</div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-fun-blue rounded-3xl text-center">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-2xl font-pacifico text-blue-800">5</div>
          <div className="font-fredoka text-blue-700">Active</div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-green-100 to-green-200 border-4 border-fun-green rounded-3xl text-center">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-2xl font-pacifico text-green-800">₹8,450</div>
          <div className="font-fredoka text-green-700">Total Saved</div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-fun-yellow rounded-3xl text-center">
          <div className="text-3xl mb-2">🎖️</div>
          <div className="text-2xl font-pacifico text-yellow-800">Level 7</div>
          <div className="font-fredoka text-yellow-700">Money Ninja</div>
        </Card>
      </div>

      {/* Mascot */}
      <div className="flex justify-center">
        <CoinMascot 
          message="You're doing amazing! Every challenge completed makes you stronger! 💪🌟"
          emotion="excited"
          size="md"
        />
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => {
          const isCompleted = completedChallenges.includes(challenge.id);
          
          return (
            <Card 
              key={challenge.id} 
              className={`p-6 rounded-3xl border-4 shadow-xl transform transition-all hover:scale-105 ${
                isCompleted ? 'bg-gradient-to-br from-green-200 to-green-300 border-green-500' : 'bg-white/90 backdrop-blur-md border-gray-300'
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-fredoka font-bold text-gray-800">
                    {challenge.title}
                  </h3>
                  <Badge className={`${getDifficultyColor(challenge.difficulty)} font-fredoka`}>
                    {challenge.difficulty}
                  </Badge>
                </div>

                {/* Description */}
                <p className="font-fredoka text-gray-600">
                  {challenge.description}
                </p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-fredoka text-sm text-gray-600">Progress</span>
                    <span className="font-fredoka text-sm font-bold">{challenge.progress}%</span>
                  </div>
                  <Progress 
                    value={challenge.progress} 
                    className={`h-3 ${challenge.color}`}
                  />
                </div>

                {/* Reward */}
                <div className="bg-yellow-100 rounded-2xl p-3 border-2 border-yellow-300">
                  <div className="text-center">
                    <div className="text-sm font-fredoka text-yellow-800 mb-1">🎁 Reward</div>
                    <div className="font-fredoka font-bold text-yellow-900">{challenge.reward}</div>
                  </div>
                </div>

                {/* Action Button */}
                <FunButton
                  onClick={() => handleCompleteChallenge(challenge.id)}
                  variant={isCompleted ? "success" : "primary"}
                  className="w-full"
                  disabled={isCompleted}
                >
                  {isCompleted ? "Completed! 🎉" : "Mark Complete! ✅"}
                </FunButton>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <Card className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-fun-purple rounded-3xl text-center">
        <h2 className="text-3xl font-pacifico text-purple-800 mb-4">🚀 Ready for More?</h2>
        <p className="font-fredoka text-lg text-purple-700 mb-6">
          Complete all challenges to unlock the ultimate "Money Master" badge! 🏅
        </p>
        <FunButton variant="primary" size="lg">
          View All Rewards 🎁
        </FunButton>
      </Card>
    </div>
  );
};

export default SavingsChallenge;
