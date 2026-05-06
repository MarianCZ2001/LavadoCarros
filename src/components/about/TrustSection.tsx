import { Button } from "@/components/ui/button";
import iconProtection from "@/assets/icon-protection.png";
import iconBottle from "@/assets/icon-bottle.png";

const features = [
  {
    icon: iconProtection,
    title: "Our Vision",
    body: "Lorem opsum dolor sit amet consectotur. Mauris mauris tortor aliquam adipiscing",
  },
  {
    icon: iconBottle,
    title: "Our Mission",
    body: "Lorem opsum dolor sit amet consectotur. Mauris mauris tortor aliquam adipiscing",
  },
  {
    icon: iconProtection,
    title: "Award Winning",
    body: "Lorem opsum dolor sit amet consectotur. Mauris mauris tortor aliquam adipiscing",
  },
];

export const TrustSection = () => {
  return (
    <section id="services" className="bg-teal text-teal-foreground pt-28 pb-24 scroll-mt-20">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6 lg:pt-8">
          <p className="text-foreground/80 text-sm font-semibold tracking-[0.2em]">WE ARE THE BEST</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Trust the professionals for Car Wash
          </h2>
          <p className="text-foreground/80 max-w-md">
            E-Learning Adventures is committed to transforming the traditional learning
            landscape. With a blend of engaging content, interactive exercises, and
            cutting-edge technology, we ensure every learner finds their path to success
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="rounded-full px-7 h-12">Learn More</Button>
            <Button variant="outline" className="rounded-full px-7 h-12 bg-transparent border-foreground/40 text-foreground hover:bg-foreground/10">
              Contact us
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          {features.map((f) => (
            <article key={f.title} className="bg-primary text-primary-foreground rounded-2xl p-6 flex gap-5 items-start">
              <div className="shrink-0">
                <img src={f.icon} alt="" width={48} height={48} loading="lazy" className="h-12 w-12 object-contain" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-sm text-primary-foreground/80">{f.body}</p>
                <a href="#" className="inline-block text-sm font-semibold underline underline-offset-4 pt-1">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
