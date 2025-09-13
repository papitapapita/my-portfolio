import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { TransitionPage } from "@/components/TransitionPage";
import { StairTransition } from "@/components/StairTransition";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { siteConfig } from "@/config/site";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.className}`}>
      <body className="antialiased">
        <NavigationProvider>
          <Header />
          <StairTransition />
          <TransitionPage>{children}</TransitionPage>
        </NavigationProvider>
      </body>
    </html>
  );
}
