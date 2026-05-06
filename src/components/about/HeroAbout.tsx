import heroBg from "@/assets/hero-bg.jpg";

export const HeroAbout = () => {
  return (
    <section
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-background/40" aria-hidden />
      <div className="container relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">About</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};
