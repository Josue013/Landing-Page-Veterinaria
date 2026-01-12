import { cn, assetUrl } from "@/lib/utils";

interface Image3DProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
  direction?: "left" | "right";
}

export function Image3D({
  lightSrc,
  alt,
  className,
  direction = "left",
}: Image3DProps) {
  const isRight = direction === "right";

  return (
    <div className={cn("group relative aspect-4/3 w-full", className)}>
      <div className="perspective-distant transform-3d">
        <div className="absolute sm:-inset-8 rounded-3xl bg-linear-to-r from-primary/10 via-sky-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-2xl" />
        <div className="relative size-full transform-3d group-hover:rotate-x-8 group-hover:rotate-y-12 group-hover:translate-z-16 transition-all duration-700 ease-out">
          <div className="absolute inset-0 translate-y-4 translate-x-2 -translate-z-8 rounded-2xl">
            <div className="size-full rounded-2xl bg-linear-to-br from-primary/10 via-background/40 to-secondary/10 shadow-xl" />
          </div>
          <div className="relative z-10 size-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
            <div
              className={cn(
                "absolute inset-0 z-20 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-1000 ease-out pointer-events-none",
                isRight
                  ? "translate-x-full group-hover:-translate-x-full"
                  : "-translate-x-full group-hover:translate-x-full"
              )}
            />
            <div
              className={cn(
                "absolute inset-0 z-15 pointer-events-none",
                isRight
                  ? "bg-linear-to-l from-background from-0% via-background/85 via-15% to-transparent to-40%"
                  : "bg-linear-to-r from-background from-0% via-background/85 via-15% to-transparent to-40%"
              )}
            />
            <img
              src={assetUrl(lightSrc)}
              alt={`${alt} - Light Mode`}
              className={cn(
                "block size-full object-cover transition-transform duration-700 group-hover:scale-105",
                isRight ? "object-center" : "object-left"
              )}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-primary/40 transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}