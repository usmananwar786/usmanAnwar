import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Skills", label: "Skills" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

const services = [
  "MERN Development",
  "React Applications",
  "REST API Design",
  "WordPress Sites",
  "UI/UX Implementation",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 border-t border-border overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-glow opacity-50 pointer-events-none" />

      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 animate-fade-up">
            <a href="#home" className="inline-flex items-center gap-2 group mb-4">
              <span className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground shadow-glow group-hover:rotate-12 group-hover:scale-110 transition-transform">
                U
              </span>
              <span className="font-display font-semibold text-lg tracking-tight">
                Usman<span className="text-gradient">Anwar</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-5">
              MERN Stack Developer crafting fast, responsive, and beautifully
              animated web experiences from Lahore, Pakistan.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/usmananwar786/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/usman-anwar-0a4952326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:usmanali22181@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-mono">
            © {year} Usman Anwar · Built with{" "}
            <Heart size={12} className="inline text-primary fill-primary animate-pulse" />{" "}
            in Lahore
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:text-primary hover:-translate-y-1 transition-all group"
          >
            Back to top
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
