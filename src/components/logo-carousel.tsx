import { Card } from "@/components/ui/card";

const vetBrands = [
  { name: "Acana", id: "acana", format: "jpg" },
  { name: "Advance", id: "advance", format: "png" },
  { name: "NutriSource", id: "nutrisource", format: "jpg" },
  { name: "Royal Canin", id: "royalcanin", format: "png" },
] as const;

export function LogoCarousel() {
  return (
    <section className="pb-8 sm:pb-12 lg:pb-20 pt-6 sm:pt-8 bg-secondary/20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-6 sm:mb-8">
            Marcas premium que recomendamos
          </p>

          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-r from-secondary/20 to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-l from-secondary/20 to-transparent z-10 pointer-events-none" />

            {/* Logo Container */}
            <div className="overflow-hidden">
              <div className="flex animate-logo-scroll space-x-8 sm:space-x-16 lg:space-x-20">
                {/* First set of logos */}
                {vetBrands.map((brand, index) => (
                  <Card
                    key={`first-${index}`}
                    className="shrink-0 flex items-center justify-center h-20 sm:h-32 w-40 sm:w-56 opacity-85 hover:opacity-100 transition-opacity duration-300 border-border/50 shadow-sm bg-background/50 backdrop-blur"
                  >
                    <img
                      src={`${brand.id}.${brand.format}`}
                      alt={brand.name}
                      className="h-16 sm:h-24 w-32 sm:w-44 object-contain"
                    />
                  </Card>
                ))}
                {/* Second set for seamless loop */}
                {vetBrands.map((brand, index) => (
                  <Card
                    key={`second-${index}`}
                    className="shrink-0 flex items-center justify-center h-20 sm:h-32 w-40 sm:w-56 opacity-85 hover:opacity-100 transition-opacity duration-300 border-border/50 shadow-sm bg-background/50 backdrop-blur"
                  >
                    <img
                      src={`${brand.id}.${brand.format}`}
                      alt={brand.name}
                      className="h-16 sm:h-24 w-32 sm:w-44 object-contain"
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}