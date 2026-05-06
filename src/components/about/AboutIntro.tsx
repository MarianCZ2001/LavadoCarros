import { Button } from "@/components/ui/button";
import collage from "@/assets/about-collage.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const AboutIntro = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img
            src={collage}
            alt="Professional car detailing in action"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
            loading="lazy"
          />
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-4 rounded-full border border-border bg-card/60 backdrop-blur pl-2 pr-5 py-2">
            <div className="flex -space-x-3">
              <img src={avatar1} alt="Happy client" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover ring-2 ring-background" />
              <img src={avatar2} alt="Happy client" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover ring-2 ring-background" />
              <img src={avatar3} alt="Happy client" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover ring-2 ring-background" />
            </div>
            <span className="text-sm text-foreground">Mostly clients happy!</span>
          </div>

          <p className="text-primary text-sm font-semibold tracking-[0.2em]">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            More than Just a <br className="hidden md:block" />
            Car Wash
          </h2>
          <p className="text-muted-foreground max-w-xl">
            E-Learning Adventures is committed to transforming the traditional learning
            landscape. With a blend of engaging content, interactive exercises, and
            cutting-edge technology, we ensure every learner finds their path to success
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="rounded-full px-7 h-12">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
