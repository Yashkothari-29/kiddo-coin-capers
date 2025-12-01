
import { useState } from "react";
import { CoinMascot } from "@/components/CoinMascot";
import { FunButton } from "@/components/FunButton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<Date>();

  const categories = [
    "Fun Stuff 🎮",
    "Regret Purchase 😅", 
    "Mom's Orders 🧕",
    "Biryani & Food 🍚",
    "Gadgets & Tech 🤖",
    "Shopping Spree 🛍️",
    "Emergency 🆘",
    "Education 📚",
    "Transport 🚗",
    "Others 🤷‍♂️"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ amount, category, date });
    alert("Expense added! Don't forget to save some money next time! 😜");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-pacifico fun-orange sparkle">
          Add Your Expense 💸
        </h1>
        <p className="text-xl font-fredoka text-gray-600">
          Track where your money went (again!) 🕵️‍♀️
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <Card className="p-8 bg-white/90 backdrop-blur-md border-4 border-fun-purple rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label className="text-lg font-fredoka font-bold text-purple-800 flex items-center gap-2">
                💰 Amount (₹)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl font-bold text-green-600">₹</span>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="How much did you spend?"
                  className="pl-10 text-lg font-fredoka border-3 border-fun-purple rounded-xl h-12"
                  required
                />
              </div>
            </div>

            {/* Category Select */}
            <div className="space-y-2">
              <Label className="text-lg font-fredoka font-bold text-purple-800 flex items-center gap-2">
                📝 Category
              </Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger className="text-lg font-fredoka border-3 border-fun-purple rounded-xl h-12">
                  <SelectValue placeholder="What did you buy? 🤔" />
                </SelectTrigger>
                <SelectContent className="bg-white border-3 border-fun-purple rounded-xl">
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat} className="text-lg font-fredoka">
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <Label className="text-lg font-fredoka font-bold text-purple-800 flex items-center gap-2">
                📅 Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <FunButton
                    variant="secondary"
                    className={cn(
                      "w-full justify-start text-left font-normal border-3 border-fun-blue",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date 📆</span>}
                  </FunButton>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border-3 border-fun-blue rounded-2xl" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Submit Button */}
            <FunButton 
              type="submit" 
              variant="success" 
              size="lg" 
              className="w-full text-xl mt-8"
            >
              Add it before I forget! 🙃
            </FunButton>
          </form>
        </Card>

        {/* Mascot */}
        <div className="lg:sticky lg:top-8">
          <CoinMascot 
            message="Spent again?! Control yaar 😤 But don't worry, tracking is the first step to saving! 💪"
            emotion="worried"
            size="md"
          />
          
          <div className="mt-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 border-4 border-fun-yellow">
            <h3 className="text-2xl font-pacifico text-orange-800 mb-4">💡 Fun Tip!</h3>
            <p className="font-fredoka text-lg text-orange-700">
              Every ₹100 you save can buy you 3 extra samosas or save towards that dream gadget! 🏆
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
