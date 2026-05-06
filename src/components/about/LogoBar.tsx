import { Clock, Zap, Sun, Star } from "lucide-react";

const items = [
  { icon: Clock, label: "Logoipsum" },
  { icon: Zap, label: "Logoipsum" },
  { icon: Sun, label: "Logoipsum" },
  { icon: Star, label: "Logoipsum" },
];

export const LogoBar = () => {
  return (
    <div className="container -mb-10 relative z-20">
      <div
        className="rounded-3xl px-8 py-6 shadow-2xl"
        style={{ backgroundImage: "var(--gradient-logo-bar)" }}
      >
        <div className="flex flex-wrap items-center justify-around gap-6 text-teal">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-2 text-lg font-semibold">
              <it.icon className="h-5 w-5" />
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
