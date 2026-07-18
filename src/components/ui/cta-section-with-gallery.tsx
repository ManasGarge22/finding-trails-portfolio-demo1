import * as React from "react";

import { cn } from "@/lib/utils";

/** Fires once when the element first scrolls into view. */
function useInViewOnce<T extends HTMLElement>(threshold = 0.15) {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Shared reveal signal for the staggered children. */
const RevealContext = React.createContext(false);

const areaClasses = [
  "col-start-2 col-end-3 row-start-1 row-end-3", // .div1
  "col-start-1 col-end-2 row-start-2 row-end-4", // .div2
  "col-start-1 col-end-2 row-start-4 row-end-6", // .div3
  "col-start-2 col-end-3 row-start-3 row-end-5", // .div4
];

const revealBase = "transition-all duration-500 ease-out will-change-[opacity,filter]";
const staggerDelay = (index: number) => `${0.2 + index * 0.15}s`;

type StaggerProps = React.HTMLAttributes<HTMLDivElement>;

/** Reveals its children with a staggered blur-in as it enters the viewport. */
export function ContainerStagger({ className, children, ...props }: StaggerProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <RevealContext.Provider value={inView}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </RevealContext.Provider>
  );
}

interface AnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position in the stagger sequence (controls the reveal delay). */
  index?: number;
}

/** A single element that fades + un-blurs into view. */
export function ContainerAnimated({ className, index = 0, style, ...props }: AnimatedProps) {
  const inView = React.useContext(RevealContext);
  return (
    <div
      className={cn(revealBase, inView ? "opacity-100 blur-0" : "opacity-0 blur-[10px]", className)}
      style={{ transitionDelay: staggerDelay(index), ...style }}
      {...props}
    />
  );
}

type GridProps = React.HTMLAttributes<HTMLDivElement>;

/** The asymmetric 2-column gallery grid; reveals its cells on scroll. */
export function GalleryGrid({ className, children, ...props }: GridProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <RevealContext.Provider value={inView}>
      <div
        ref={ref}
        className={cn("grid grid-cols-2 grid-rows-[70px_200px_70px_200px_70px] gap-4", className)}
        {...props}
      >
        {children}
      </div>
    </RevealContext.Provider>
  );
}

interface GalleryGridCellProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

/** A positioned cell in the gallery grid. */
export function GalleryGridCell({ className, index, style, ...props }: GalleryGridCellProps) {
  const inView = React.useContext(RevealContext);
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-xl",
        revealBase,
        inView ? "opacity-100 blur-0" : "opacity-0 blur-[10px]",
        areaClasses[index],
        className,
      )}
      style={{ transitionDelay: staggerDelay(index), ...style }}
      {...props}
    />
  );
}
