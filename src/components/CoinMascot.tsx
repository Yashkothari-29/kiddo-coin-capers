
interface CoinMascotProps {
  message: string;
  emotion?: "happy" | "excited" | "worried" | "cool";
  size?: "sm" | "md" | "lg";
}

export const CoinMascot = ({ message, emotion = "happy", size = "md" }: CoinMascotProps) => {
  const sizeClasses = {
    sm: "text-6xl",
    md: "text-8xl",
    lg: "text-12xl",
  };

  const emotionFaces = {
    happy: "😊",
    excited: "🤩",
    worried: "😤",
    cool: "😎",
  };

  return (
    <div className="flex flex-col items-center space-y-4 animate-bounce-slow">
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-wiggle`}>💰</div>
        <div className="absolute -top-2 -right-2 text-2xl">{emotionFaces[emotion]}</div>
        <div className="absolute -bottom-2 -left-2 text-lg">👑</div>
      </div>
      <div className="bg-white/90 backdrop-blur-md rounded-3xl px-6 py-4 shadow-lg border-4 border-fun-yellow max-w-sm">
        <p className="text-center font-fredoka font-semibold text-lg text-gray-800">
          {message}
        </p>
      </div>
    </div>
  );
};
