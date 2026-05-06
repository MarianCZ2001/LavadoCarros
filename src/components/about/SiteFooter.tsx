import { Facebook, Twitter, Youtube, Instagram, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-car.png";
import footerBg from "@/assets/footer-bg.jpg";

const otherPages = ["Home", "About us", "Service", "Contact", "Team"];
const quickLinks = ["FAQ", "News", "Coming song", "404", "Credit"];

export const SiteFooter = () => {
  return (
    <footer
      className="relative border-t border-border py-16 bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(hsl(var(--background) / 0.75), hsl(var(--background) / 0.75)), url(${footerBg})` }}
    >
      <div className="container relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <img src={logo} alt="SparkWash" className="h-5 w-auto" />
          <p className="text-muted-foreground text-sm max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur
            adipiscing elit tellus, luctus nec.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" strokeWidth={2.5} stroke="black" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-5">Other page</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {otherPages.map((l) => (
              <li key={l}>
                <a href="#" className="inline-flex items-center gap-2 hover:text-primary">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5">Quick links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="inline-flex items-center gap-2 hover:text-primary">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Subscribe to newsletter</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <Input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="h-11 rounded-full bg-foreground text-background placeholder:text-background/50 px-5 border-transparent"
            />
            <Button className="w-full h-11 rounded-full">Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
};
