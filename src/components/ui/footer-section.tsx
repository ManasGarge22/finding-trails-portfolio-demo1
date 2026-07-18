import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import logoColor from "@/assets/finding-trails-logo-color.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t bg-background text-foreground">
      <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + newsletter */}
          <div className="relative">
            <img src={logoColor} alt="Finding Trails" className="mb-4 h-16 w-auto object-contain" />
            <p className="mb-6 max-w-sm text-muted-foreground">
              Curated trekking expeditions across the Sahyadri and Himalayas. Join our list for
              upcoming treks and stories from the trail.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="pointer-events-none absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <nav className="space-y-2 text-sm">
              <a href="#trails" className="block transition-colors hover:text-primary">
                Trails
              </a>
              <a href="#upcoming" className="block transition-colors hover:text-primary">
                Upcoming Treks
              </a>
              <a href="#gallery" className="block transition-colors hover:text-primary">
                Expedition Gallery
              </a>
              <a href="#about" className="block transition-colors hover:text-primary">
                About Us
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Sahyadri &middot; Himalayas, India</p>
              <p>Phone: +91 99213 80894</p>
              <p>Phone: +91 94054 88089</p>
              <p>Email: info@findingtrails.in</p>
            </address>
          </div>

          {/* Social */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.facebook.com/profile.php?id=61569425964501"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "icon" }),
                        "rounded-full",
                      )}
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/finding.trails_/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "icon" }),
                        "rounded-full",
                      )}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://wa.me/919921380894"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "icon" }),
                        "rounded-full",
                      )}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Chat with us on WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Finding Trails Adventure Co. Built for the wild.
          </p>
          <nav className="flex gap-4 text-sm">
            <a
              href="https://maps.app.goo.gl/QcLw7WwpTsFUT6GK9"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              Find us on Maps
            </a>
            <a
              href="mailto:findingtrails1@gmail.com"
              className="transition-colors hover:text-primary"
            >
              Join the Team
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
