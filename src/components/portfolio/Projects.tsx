import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
  Sparkles,
} from "lucide-react";

import projectBusinessGenie from "@/assets/project-businessgenie.jpg";
import projectPerfume from "@/assets/project-perfume.jpg";
import projectAgency from "@/assets/project-agency.jpg";
import Ecommerce from "@/assets/Ecommerce.jpg";

// Mobile showcase images
// Create this folder inside your project:
// src/assets/mobile-showcase-assets/
import mobileShowcase01 from "@/assets/mobile-showcasemobile-showcase-01.webp";
import mobileShowcase02 from "@/assets/mobile-showcasemobile-showcase-02.webp";
import mobileShowcase03 from "@/assets/mobile-showcasemobile-showcase-03.webp";
import mobileShowcase04 from "@/assets/mobile-showcasemobile-showcase-04.webp";
import mobileShowcase05 from "@/assets/mobile-showcasemobile-showcase-05.webp";
import mobileShowcase06 from "@/assets/mobile-showcasemobile-showcase-06.webp";
import mobileShowcase07 from "@/assets/mobile-showcasemobile-showcase-07.webp";
import mobileShowcase08 from "@/assets/mobile-showcasemobile-showcase-08.webp";
import mobileShowcase09 from "@/assets/mobile-showcasemobile-showcase-09.webp";
import mobileShowcase10 from "@/assets/mobile-showcasemobile-showcase-10.webp";

const projects = [
  {
    title: "Business Genie Consulting",
    description:
      "A professional corporate website developed for a business consulting company, featuring responsive service pages, modern layouts, smooth interactions and a conversion-focused user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
    image: projectBusinessGenie,
    live: "https://www.businessgenie.net/",
    featured: true,
  },
  {
    title: "StyleShop Express",
    description:
      "A modern e-commerce platform developed for a premium clothing brand, featuring responsive product layouts, smooth animations and an optimized shopping experience.",
    tech: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    image: Ecommerce,
    live: "https://styleshop-express.vercel.app/",
  },
  {
    title: "Lumina Design Studio",
    description:
      "A premium digital storefront combining elegant visual design, responsive layouts, product presentation and refined user interactions for a modern lifestyle brand.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    image: projectPerfume,
    live: "https://lumina-design-studio-mocha.vercel.app/",
  },
  {
    title: "Business Transformation Hub",
    description:
      "A modern business platform created to present consulting, automation and digital transformation services through structured content and responsive interfaces.",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    image: projectAgency,
    live: "https://business-transformation-hub.vercel.app/",
  },
];

const mobileShowcaseSlides = [
  {
    image: mobileShowcase01,
    title: "Premium Fashion & Dashboard Experience",
    label: "Responsive Showcase",
  },
  {
    image: mobileShowcase02,
    title: "Business Automation Landing Page",
    label: "Corporate Mobile UI",
  },
  {
    image: mobileShowcase03,
    title: "Guided Tour & Pricing Experience",
    label: "SaaS Mobile UI",
  },
  {
    image: mobileShowcase04,
    title: "AI-Powered Sales Workspace",
    label: "Dashboard UI",
  },
  {
    image: mobileShowcase05,
    title: "Luxury Fashion Storefront",
    label: "E-commerce UI",
  },
  {
    image: mobileShowcase06,
    title: "Responsive Product Shopping Experience",
    label: "Product UI",
  },
  {
    image: mobileShowcase07,
    title: "Premium Account & Login Experience",
    label: "Authentication UI",
  },
  {
    image: mobileShowcase08,
    title: "Business Dashboard in Real Use",
    label: "Mobile Application",
  },
  {
    image: mobileShowcase09,
    title: "Storefront & Account Interface",
    label: "Responsive Design",
  },
  {
    image: mobileShowcase10,
    title: "Complete Multi-Industry Mobile Showcase",
    label: "Featured Collection",
  },
];

const Projects = () => {
  const [{ index: currentSlide, direction }, setSliderState] = useState({
    index: 0,
    direction: 1,
  });

  const goToPreviousSlide = () => {
    setSliderState((previousState) => ({
      index:
        previousState.index === 0
          ? mobileShowcaseSlides.length - 1
          : previousState.index - 1,
      direction: -1,
    }));
  };

  const goToNextSlide = () => {
    setSliderState((previousState) => ({
      index:
        previousState.index === mobileShowcaseSlides.length - 1
          ? 0
          : previousState.index + 1,
      direction: 1,
    }));
  };

  // Preload all slider images so no blank screen appears between slides.
  useEffect(() => {
    mobileShowcaseSlides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  // Automatically move to the next image every 3 seconds.
  useEffect(() => {
    const sliderInterval = window.setInterval(() => {
      setSliderState((previousState) => ({
        index:
          previousState.index === mobileShowcaseSlides.length - 1
            ? 0
            : previousState.index + 1,
        direction: 1,
      }));
    }, 3000);

    return () => window.clearInterval(sliderInterval);
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary-glow/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative">
        {/* Main Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono text-sm text-primary">
            // Selected Work
          </p>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Featured{" "}
            <span className="relative inline-block pb-3">
              <span className="text-gradient relative z-10">Projects</span>

              <svg
                viewBox="0 0 320 28"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-1/2 h-5 w-[108%] -translate-x-1/2 overflow-visible"
              >
                <motion.path
                  d="M6 17C58 9 105 12 153 15C205 18 251 9 314 19"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{
                    pathLength: {
                      duration: 0.9,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: { duration: 0.2 },
                  }}
                />

                <motion.path
                  d="M13 22C70 17 119 18 169 20C220 21 266 14 308 22"
                  fill="none"
                  stroke="rgba(239, 68, 68, 0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{
                    pathLength: {
                      duration: 0.75,
                      delay: 0.4,
                      ease: "easeOut",
                    },
                    opacity: { duration: 0.2 },
                  }}
                />
              </svg>
            </span>
          </h2>

          <p className="text-muted-foreground">
            A selection of responsive websites and modern web applications
            developed to deliver strong user experiences and real business
            value.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="mx-auto max-w-5xl space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card hover-lift hover-glow group relative overflow-hidden rounded-2xl p-5 md:p-6"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

              <div className="relative grid items-center gap-5 md:grid-cols-[260px_1fr] md:gap-7">
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border transition-colors duration-300 group-hover:border-primary/40 md:aspect-[4/3] md:w-[260px]">
                  <div className="absolute inset-0 z-10 bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-15" />

                  <img
                    src={project.image}
                    alt={`${project.title} website project`}
                    width={520}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  {project.featured && (
                    <span className="animate-pulse-glow absolute left-2 top-2 z-20 rounded-full bg-gradient-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground shadow-glow">
                      ⭐ Client Project
                    </span>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </p>

                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold transition-all duration-300 group-hover:text-gradient md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-all duration-300 group-hover:border-primary/40 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Live Project Button */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105"
                    >
                      <ExternalLink size={13} />
                      View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View Showcase */}
        <div className="mx-auto mt-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-8 max-w-2xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
              <Smartphone size={15} />
              Fully Responsive Experience
            </div>

            <h3 className="font-display text-3xl font-bold md:text-4xl">
              Mobile View{" "}
              <span className="text-gradient">Showcase</span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Explore responsive mobile interfaces designed with clean layouts,
              smooth interactions and a professional user experience across
              modern devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group/slider relative mx-auto w-full max-w-[280px] sm:max-w-[360px] md:max-w-[430px]"
            aria-roledescription="carousel"
            aria-label="Responsive mobile website showcase"
          >
            {/* Outer glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gradient-primary opacity-10 blur-2xl transition-opacity duration-500 group-hover/slider:opacity-20" />

            <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-border/70 p-2 shadow-xl sm:p-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted/30">
                <AnimatePresence mode="sync" initial={false} custom={direction}>
                  <motion.img
                    key={currentSlide}
                    custom={direction}
                    src={mobileShowcaseSlides[currentSlide].image}
                    alt={mobileShowcaseSlides[currentSlide].title}
                    width={1122}
                    height={1402}
                    loading="eager"
                    decoding="async"
                    variants={{
                      enter: (slideDirection: number) => ({
                        x: slideDirection > 0 ? "100%" : "-100%",
                      }),
                      center: {
                        x: "0%",
                      },
                      exit: (slideDirection: number) => ({
                        x: slideDirection > 0 ? "-100%" : "100%",
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 h-full w-full object-cover will-change-transform"
                  />
                </AnimatePresence>

                {/* Image overlays */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-medium text-white shadow-lg backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
                  <Sparkles size={13} className="text-primary" />
                  {mobileShowcaseSlides[currentSlide].label}
                </div>

                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 font-mono text-[10px] text-white backdrop-blur-md sm:right-6 sm:top-6 sm:text-xs">
                  {String(currentSlide + 1).padStart(2, "0")} /{" "}
                  {String(mobileShowcaseSlides.length).padStart(2, "0")}
                </div>

                <div
                  aria-live="polite"
                  className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5"
                >
                  <h4 className="max-w-xl font-display text-lg font-bold leading-tight sm:text-2xl">
                    {mobileShowcaseSlides[currentSlide].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={goToPreviousSlide}
              aria-label="Show previous mobile design"
              className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground sm:-left-4 sm:h-10 sm:w-10"
            >
              <ChevronLeft size={21} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Show next mobile design"
              className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground sm:-right-4 sm:h-10 sm:w-10"
            >
              <ChevronRight size={21} />
            </button>
          </motion.div>

          {/* Slider Dots */}
          <div
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Select mobile showcase image"
          >
            {mobileShowcaseSlides.map((slide, index) => {
              const isActive = currentSlide === index;

              return (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Open slide ${index + 1}: ${slide.title}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "w-8 bg-primary shadow-glow"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-primary/60"
                  }`}
                />
              );
            })}
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Use the arrows or dots to explore all mobile designs.
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center font-mono text-xs text-muted-foreground"
        >
          More projects coming soon — stay tuned ✨
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
