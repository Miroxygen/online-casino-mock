import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar";
import Header from "./components/ui/header";
import { ThemeProvider } from "./components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casino",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Header title="My Casino" icon="/images/img.webp" />
        <div className="flex h-screen">
          <Navbar />
          <div className="flex-1 p-4 blur-content">{children}</div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
