import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow",
  description:
    "TaskFlow is a task management app built with Next.js and Tailwind CSS.",
  keywords: ["TaskFlow", "TaskFlow app", "TaskFlow task management" , "Todo app", "Task app"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            inter.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative flex flex-col min-h-screen">
              <Navbar/>
              <div className="flex-grow flex-1">{children}</div>
              <Footer />
              <Toaster />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
