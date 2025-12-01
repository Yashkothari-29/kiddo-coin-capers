
import { CoinMascot } from "@/components/CoinMascot";
import { FunButton } from "@/components/FunButton";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const Index = () => {
  const chartData = [
    { name: "Biryani 🍚", value: 2500, color: "#FF6B6B" },
    { name: "Gadgets 🤖", value: 1800, color: "#4ECDC4" },
    { name: "Mom's Shopping 👗", value: 1200, color: "#45B7D1" },
    { name: "Regret Purchase 😅", value: 800, color: "#F7DC6F" },
    { name: "Fun Stuff 🎮", value: 700, color: "#BB8FCE" },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-pacifico fun-purple animate-bounce">
          Welcome to KiddoFinance! 🎉
        </h1>
        <p className="text-2xl md:text-3xl font-fredoka font-semibold text-gray-700">
          Heya! Let's waste—oops, SAVE some money today! 💰😜
        </p>
        
        <CoinMascot 
          message="Hey Yash! Ready to become a money wizard? 🧙‍♂️✨" 
          emotion="excited"
          size="lg"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <Link to="/add-expense">
          <FunButton variant="danger" size="lg" className="text-2xl px-12 py-6">
            💸 Track Expense
          </FunButton>
        </Link>
        
        <Link to="/ai-budget">
          <FunButton variant="success" size="lg" className="text-2xl px-12 py-6">
            🤑 Smart Save Plan
          </FunButton>
        </Link>
      </div>

      {/* Money Chart */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-fun-orange mx-auto max-w-4xl">
        <h2 className="text-4xl font-pacifico text-center mb-8 fun-orange sparkle">
          Where Did Your Money Go!? 🕵️‍♂️💸
        </h2>
        
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label={({ name, value }) => `${name}: ₹${value}`}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {chartData.map((item, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-md">
              <div className="text-2xl mb-2">{item.name.split(' ')[1]}</div>
              <div className="font-fredoka font-bold text-lg" style={{ color: item.color }}>
                ₹{item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-6 text-center shadow-xl border-4 border-fun-pink">
          <div className="text-4xl mb-4">🐷</div>
          <h3 className="text-2xl font-fredoka font-bold text-pink-800">Total Saved</h3>
          <p className="text-3xl font-pacifico text-pink-900">₹12,450</p>
          <p className="text-sm text-pink-700 mt-2">You're doing great! 🌟</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-6 text-center shadow-xl border-4 border-fun-blue">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-2xl font-fredoka font-bold text-blue-800">This Month</h3>
          <p className="text-3xl font-pacifico text-blue-900">₹7,000</p>
          <p className="text-sm text-blue-700 mt-2">Spent on fun stuff! 🎮</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-6 text-center shadow-xl border-4 border-fun-green">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-fredoka font-bold text-green-800">Goal Progress</h3>
          <p className="text-3xl font-pacifico text-green-900">67%</p>
          <p className="text-sm text-green-700 mt-2">Almost there! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
