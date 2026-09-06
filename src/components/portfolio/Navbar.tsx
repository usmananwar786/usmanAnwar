import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/usman-anwar-0a4952326",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    // Apna Facebook profile link yahan lagayen
    href: "https://www.facebook.com/profile.php?id=61550631736520",
    label: "Facebook",
    icon: Facebook,
  },
  {
    // Apna Instagram profile link yahan lagayen
    href: "https://www.instagram.com/masoom_no_01/",
    label: "Instagram",
    icon: Instagram,
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });

      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigation = (event, href) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 90;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-t border-border transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/95 py-3 shadow-lg backdrop-blur-xl"
            : "bg-background/90 py-4 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            {/* Left Side Logo */}
            <a
              href="#home"
              onClick={(event) => handleNavigation(event, "#home")}
              className="group flex w-fit items-center gap-3"
              aria-label="Usman Anwar Home"
            >
              {/* Custom Logo */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                {/* Logo glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-emerald-500 opacity-30 blur-md transition-opacity duration-300 group-hover:opacity-60" />

                {/* Main logo box */}
<div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-primary/50 bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-primary/40">
                  <img
                    src="/ua-logo.png"
                    alt=""
                    aria-hidden="true"
                    className="relative z-10 h-8 w-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Decorative circle */}
                  <span className="absolute -bottom-3 -right-3 h-7 w-7 rounded-full border border-white/30" />
                  <span className="absolute -left-2 -top-2 h-5 w-5 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Name */}
              <div className="hidden flex-col sm:flex">
                <span className="font-display text-base font-bold leading-none tracking-tight text-foreground lg:text-lg">
                  Usman
                  <span className="text-primary"> Anwar</span>
                </span>

                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:text-[10px]">
                  MERN Stack Developer
                </span>
              </div>
            </a>

            {/* Center Navigation */}
            <nav
              className="hidden items-center justify-center gap-6 lg:gap-8 md:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) =>
                      handleNavigation(event, link.href)
                    }
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative whitespace-nowrap py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Social Icons */}
            <div className="hidden items-center justify-self-end gap-2 md:flex">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setOpen((previous) => !previous)}
              className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end rounded-xl border border-border bg-background text-foreground shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Background Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-3xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="p-4">
          {/* Mobile Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
            className="mb-4 flex items-center gap-3 rounded-2xl border border-border bg-muted/30 p-3"
          >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-teal-700 text-background shadow-lg">
              <img
                src="/ua-logo.png"
                alt=""
                aria-hidden="true"
                className="h-7 w-7 object-contain"
              />
            </div>

            <div>
              <p className="font-display font-bold text-foreground">
                Usman <span className="text-primary">Anwar</span>
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                MERN Stack Developer
              </p>
            </div>
          </a>

          {/* Mobile Navigation */}
          <nav
            className="flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(event, link.href)
                  }
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>

                  <span className="text-xs opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Social Icons */}
          <div className="mt-4 border-t border-border pt-4">
            <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Follow Me
            </p>

            <div className="flex items-center justify-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
