
import { useState } from "react";
import { CoinMascot } from "@/components/CoinMascot";
import { FunButton } from "@/components/FunButton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  type: "user" | "bot";
  content: string;
}

const AIBudget = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hey there, money wizard! 🧙‍♂️ I'm FinBot, your super cool AI buddy! Tell me your budget and I'll give you the most fun advice ever! 💰✨"
    }
  ]);
  const [input, setInput] = useState("");

  const funResponses = [
    "You can buy {samosas} plates of samosa or invest it and buy 1 BMW in 47 years 🚗😂",
    "That's enough for {pizzas} pizzas! But wait... what if you save ₹{saveAmount} and only eat {lessPizzas} pizzas? Future you will thank present you! 🍕💝",
    "Woah! With ₹{amount}, you could either buy {chocolates} chocolates OR plant money seeds and grow a money tree! 🌳💰",
    "₹{amount}? That's {icecreams} ice creams! But let's be smart - save ₹{saveAmount} for emergencies (like when ice cream truck breaks down) 🍦🚨"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const amount = parseInt(input.match(/\d+/)?.[0] || "5000");
      const saveAmount = Math.floor(amount * 0.4);
      const spendAmount = amount - saveAmount;
      
      const responses = [
        `Okay so you have ₹${amount}! 🤩 Here's my super smart plan:\n\n💰 Save ₹${saveAmount} in SIP 🐷\n🚨 Emergency jar ₹${Math.floor(amount * 0.2)} 💊\n🎉 YOLO Spend ₹${spendAmount} 💃\n\nThis way you'll have fun AND be responsible! Win-win! 🏆`,
        `₹${amount}? You're rich! 🤑 Let's make this money work:\n\n🎯 Investment goal: ₹${saveAmount}\n🛡️ Safety net: ₹${Math.floor(amount * 0.2)}\n🎮 Fun budget: ₹${spendAmount}\n\nRemember: Today's samosa or tomorrow's bike? Choose wisely! 🏍️🥟`,
        `Wow ₹${amount}! You could buy ${Math.floor(amount/35)} samosas OR be smart and save ${Math.floor(amount*0.6/35)} samosa-worth for future! 🥟💡\n\nMy suggestion:\n📈 Invest: ₹${saveAmount}\n🏥 Emergency: ₹${Math.floor(amount * 0.2)}\n🎉 Enjoy: ₹${spendAmount}\n\nBe the money boss! 👑💪`
      ];

      const botResponse: Message = {
        type: "bot",
        content: responses[Math.floor(Math.random() * responses.length)]
      };

      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-pacifico fun-blue sparkle">
          Meet FinBot! 🤖💰
        </h1>
        <p className="text-xl font-fredoka text-gray-600">
          Your AI buddy who makes money decisions fun! 
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-96 bg-white/90 backdrop-blur-md border-4 border-fun-blue rounded-3xl shadow-2xl overflow-hidden">
            <ScrollArea className="h-80 p-6">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs p-4 rounded-2xl font-fredoka ${
                        message.type === "user"
                          ? "bg-fun-purple text-white"
                          : "bg-fun-yellow text-gray-800"
                      }`}
                    >
                      {message.type === "bot" && <span className="text-xl mr-2">🤖</span>}
                      <span className="whitespace-pre-line">{message.content}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {/* Input */}
            <div className="p-4 border-t-4 border-fun-blue bg-white/50">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="I have ₹5000. What to do? 🤔"
                  className="flex-1 border-2 border-fun-blue rounded-xl font-fredoka"
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <FunButton onClick={handleSend} variant="primary">
                  Send! 🚀
                </FunButton>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <CoinMascot 
            message="I'm FinBot! Ask me anything about money and I'll give you the coolest advice! 🎯"
            emotion="cool"
            size="sm"
          />

          {/* Quick Suggestions */}
          <Card className="p-6 bg-gradient-to-br from-green-100 to-blue-100 border-4 border-fun-green rounded-3xl">
            <h3 className="text-xl font-pacifico text-green-800 mb-4">💡 Try asking me:</h3>
            <div className="space-y-2">
              {[
                "I have ₹10,000. Help me plan!",
                "How to save for a gaming laptop?",
                "Budget for college student?",
                "Emergency fund kya hai?"
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="w-full text-left p-3 bg-white/70 rounded-xl font-fredoka text-sm hover:bg-white/90 transition-all hover:scale-105"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </Card>

          {/* AI Features */}
          <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-fun-purple rounded-3xl">
            <h3 className="text-xl font-pacifico text-purple-800 mb-4">🎯 What I can do:</h3>
            <ul className="space-y-2 font-fredoka text-sm text-purple-700">
              <li>💰 Budget planning</li>
              <li>🎯 Goal setting</li>
              <li>📊 Expense analysis</li>
              <li>💡 Money-saving tips</li>
              <li>🎮 Fun financial games</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIBudget;
