import Hero from "../components/Hero/Hero";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Gallery/Gallery";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import ButtomBanner from "@/components/ButtomBanner/ButtomBanner";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <Features/>
      <Reviews/>
      <HowItWorks/>
      <ButtomBanner/>
    </main>
  );
}
