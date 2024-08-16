import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import { cn } from "@/lib/utils";
import SiteFooter from "@/components/footer/site-footer";
import NavigationBar from "@/components/navbar/NavigationBar";


const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ThankFul Art",
  description: "Choose, Customize, and Download with Just a Few Clicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
        suppressHydrationWarning={true}
      >
          <NavigationBar/>
          <div className="main"></div>
          <div className="gradient"></div>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SiteFooter />
          </ThemeProvider>
      </body>
    </html>
  );
}
