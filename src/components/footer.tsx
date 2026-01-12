import { Facebook, Instagram, Twitter, PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary flex items-center justify-center">
                <PawPrint className="w-5 sm:w-6 h-5 sm:h-6 text-primary-foreground" />
              </div>
              <span className="font-serif text-lg sm:text-xl font-semibold">VetCare</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Cuidamos la salud de tus mascotas con diagnósticos precisos y un equipo cercano.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Servicios</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#servicios" className="hover:text-primary transition-colors">Consultas y vacunas</a></li>
              <li><a href="#tratamientos" className="hover:text-primary transition-colors">Emergencias y cirugías</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Prevención</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Nutrición</a></li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Compañía</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Sobre VetCare</a></li>
              <li><a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#precios" className="hover:text-primary transition-colors">Planes</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Síguenos</h3>
            <div className="flex gap-2 sm:gap-4">
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2026 VetCare. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}