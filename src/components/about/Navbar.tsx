import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-car.png";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services", chevron: true },
  { label: "Pages", href: "#pages", chevron: true },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" aria-label="SparkWash home" className="flex items-center">
          <img src={logo} alt="SparkWash logo" className="h-7 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground/90">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                {l.label}
                {l.chevron && <ChevronDown className="h-4 w-4" />}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild className="hidden md:inline-flex rounded-full px-6">
          <a href="#pages">Contact</a>
        </Button>
        <button className="md:hidden text-foreground" aria-label="Open menu">
          <Menu />
        </button>
      </nav>
    </header>
  );
};
