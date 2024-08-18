import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import SiteFooter from "@/components/footer/site-footer";
import NavigationBar from "@/components/navbar/NavigationBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThankFul Art",
  description: "Choose, Customize, and Download Thankful Art with Just a few clicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
      <NavigationBar/>
        <div className="flex min-h-screen flex-col">
        {children}
        </div>
      
        <SiteFooter />
      </ThemeProvider>
      </body>
    </html>
  );
}
