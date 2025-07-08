
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { FloatingStickers } from "./FloatingStickers";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden">
      <FloatingStickers />
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
    </div>
  );
};
