import { Navbar } from "@/components/about/Navbar";
import { HeroAbout } from "@/components/about/HeroAbout";
import { AboutIntro } from "@/components/about/AboutIntro";
import { LogoBar } from "@/components/about/LogoBar";
import { TrustSection } from "@/components/about/TrustSection";
import { NewsletterCTA } from "@/components/about/NewsletterCTA";
import { SiteFooter } from "@/components/about/SiteFooter";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroAbout />
      <AboutIntro />
      <LogoBar />
      <TrustSection />
      <NewsletterCTA />
      <SiteFooter />
    </main>
  );
};

export default Index;
