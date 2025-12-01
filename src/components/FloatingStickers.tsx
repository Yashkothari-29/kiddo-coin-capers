
export const FloatingStickers = () => {
  const stickers = [
    { emoji: "✨", top: "10%", left: "10%", delay: "0s" },
    { emoji: "💫", top: "20%", right: "15%", delay: "1s" },
    { emoji: "🌟", top: "60%", left: "5%", delay: "2s" },
    { emoji: "⭐", top: "70%", right: "10%", delay: "0.5s" },
    { emoji: "💎", top: "30%", left: "80%", delay: "1.5s" },
    { emoji: "🎊", top: "80%", left: "15%", delay: "2.5s" },
    { emoji: "🎉", top: "15%", left: "70%", delay: "3s" },
    { emoji: "🌈", top: "50%", right: "5%", delay: "0.8s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className="absolute text-2xl animate-pulse-fun opacity-30"
          style={{
            top: sticker.top,
            left: sticker.left,
            right: sticker.right,
            animationDelay: sticker.delay,
          }}
        >
          {sticker.emoji}
        </div>
      ))}
    </div>
  );
};
