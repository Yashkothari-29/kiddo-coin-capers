
import { Link, useLocation } from "react-router-dom";
import { Home, Plus, Bot, Trophy } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "🏠 Home", color: "bg-fun-pink" },
    { path: "/add-expense", icon: Plus, label: "💸 Add Expense", color: "bg-fun-orange" },
    { path: "/ai-budget", icon: Bot, label: "🤖 AI Buddy", color: "bg-fun-blue" },
    { path: "/savings-challenge", icon: Trophy, label: "🏆 Challenges", color: "bg-fun-green" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-fun-purple shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 animate-bounce-slow">
            <div className="text-4xl animate-wiggle">💰</div>
            <span className="text-2xl font-pacifico fun-purple">KiddoFinance</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full font-fredoka font-semibold text-white
                    transition-all duration-300 hover:scale-110 hover:shadow-lg transform
                    ${isActive ? `${item.color} shadow-lg scale-105` : 'bg-gray-400 hover:bg-gray-500'}
                  `}
                >
                  <item.icon size={18} />
                  <span className="hidden sm:block">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
