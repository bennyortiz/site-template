'use client';

import { Header1 } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer-section";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
} 