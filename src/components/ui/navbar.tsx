import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import logoColor from "@/assets/finding-trails-logo-color.png";

interface NavItem {
  title: string;
  url: string;
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: NavItem[];
  cta?: {
    text: string;
    url: string;
  };
}

export default function Navbar({
  logo = { url: "#top", src: logoColor, alt: "Finding Trails" },
  menu = [
    { title: "Trails", url: "#trails" },
    { title: "Upcoming", url: "#upcoming" },
    { title: "Gallery", url: "#gallery" },
    { title: "About Us", url: "#about" },
  ],
  cta = { text: "Book a Trek", url: "#upcoming" },
}: NavbarProps) {
  const [active, setActive] = useState(menu[0]?.url ?? "");

  // Scroll-spy: highlight the link whose section is currently in view.
  useEffect(() => {
    const sections = menu
      .map((m) => m.url)
      .filter((u) => u.startsWith("#") && u.length > 1)
      .map((u) => document.getElementById(u.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [menu]);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-3 md:px-10">
      <nav className="relative flex items-center justify-between gap-4">
        {/* Logo */}
        <a href={logo.url} className="flex shrink-0 items-center">
          <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain md:h-16" />
        </a>

        {/* Centered pill (desktop) */}
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-[color:var(--color-outline-variant)] bg-white/75 px-2 py-1.5 shadow-sm backdrop-blur-md lg:flex">
          {menu.map((item) => {
            const isActive = active === item.url;
            return (
              <li key={item.title}>
                <a
                  href={item.url}
                  onClick={() => setActive(item.url)}
                  className={cn(
                    "relative inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-[color:var(--color-forest-deep)]"
                      : "text-[color:var(--color-granite-gray)] hover:text-[color:var(--color-forest-deep)]",
                  )}
                >
                  {isActive && (
                    <>
                      {/* Active pill background */}
                      <span className="absolute inset-0 -z-10 rounded-full bg-[color:var(--color-earth-linen)] shadow-sm" />
                      {/* Tubelight indicator + glow */}
                      <span className="absolute -top-1.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[color:var(--color-sunset-vivid)]">
                        <span className="absolute -top-2 left-1/2 h-6 w-12 -translate-x-1/2 rounded-full bg-[color:var(--color-sunset-vivid)]/30 blur-md" />
                        <span className="absolute -top-1 left-1/2 h-4 w-8 -translate-x-1/2 rounded-full bg-[color:var(--color-sunset-vivid)]/20 blur-md" />
                      </span>
                    </>
                  )}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-2">
          {cta && (
            <a
              href={cta.url}
              className="hidden items-center gap-2 rounded-full bg-[color:var(--color-forest-deep)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-[color:var(--color-sunset-vivid)] sm:inline-flex"
            >
              {cta.text}
            </a>
          )}

          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-outline-variant)] bg-white p-2.5 text-[color:var(--color-forest-deep)] shadow-sm lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center">
                    <img src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain" />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                {menu.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    onClick={() => setActive(item.url)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-semibold transition-colors",
                      active === item.url
                        ? "bg-[color:var(--color-earth-linen)] text-[color:var(--color-forest-deep)]"
                        : "text-[color:var(--color-granite-gray)] hover:bg-[color:var(--color-earth-linen)] hover:text-[color:var(--color-forest-deep)]",
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              {cta && (
                <a
                  href={cta.url}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--color-forest-deep)] px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-[color:var(--color-sunset-vivid)]"
                >
                  {cta.text}
                </a>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
