import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsletterBg from "@/assets/newsletter-bg.png";

export const NewsletterCTA = () => {
  return (
    <section
      id="pages"
      className="relative py-28 overflow-hidden scroll-mt-20 bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(hsl(var(--background) / 0.55), hsl(var(--background) / 0.55)), url(${newsletterBg})` }}
    >
      <div className="container relative z-10 text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold">Get the lastest update!</h2>
        <p className="mt-4 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Input
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            className="h-14 rounded-full bg-foreground text-background placeholder:text-background/50 px-6 sm:w-80 border-transparent"
          />
          <Button className="h-14 rounded-full px-8">Sign Up</Button>
        </form>

        <p className="mt-14 font-bold text-lg">www.DownloadNewThemes.com</p>
      </div>
    </section>
  );
};
