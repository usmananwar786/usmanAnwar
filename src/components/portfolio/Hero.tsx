import {
  ArrowRight,
  Download,
} from "lucide-react";

import heroAvatar from "@/assets/hero-avatar.jpg";
import Typewriter from "./Typewriter";

/*
  Aerial city timelapse background video
*/
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/5625355/5625355-hd_1620_1080_24fps.mp4";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Authentication",
  "AI-Assisted Development",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden lg:h-[100svh] lg:min-h-[680px]"
    >
      {/* Full Hero Background Video */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden bg-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="block h-full w-full object-cover object-center"
          style={{
            filter:
              "brightness(0.72) contrast(1.08) saturate(0.95)",
          }}
        >
          <source
            src={HERO_VIDEO}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Main Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-background/60 lg:bg-background/30" />

      {/* Left Content Readability Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-background/85 via-background/60 to-background/90 lg:bg-gradient-to-r lg:from-background/95 lg:via-background/80 lg:to-background/35" />

      {/* Portfolio Color Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/10" />

      {/* Top Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[4] h-28 bg-gradient-to-b from-background/90 via-background/50 to-transparent" />

      {/* Small Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-20 bg-gradient-to-t from-background/95 to-transparent" />

      {/* Subtle Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main Hero Content */}
      <div className="container relative z-10 grid min-h-[100svh] items-center gap-10 pb-12 pt-28 sm:pb-14 sm:pt-28 md:gap-12 lg:h-full lg:min-h-0 lg:-translate-y-1 lg:grid-cols-2 lg:gap-12 lg:py-16">
        {/* Left Content */}
        <div className="animate-fade-up space-y-6 text-center lg:text-left">
          {/* Main Heading */}
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="mb-3 block font-mono text-xl font-normal text-muted-foreground md:text-2xl">
              Hello, I&apos;m
            </span>

            <span className="text-gradient">
              Usman Anwar
            </span>
          </h1>

          {/* Dynamic Roles */}
          <div className="min-h-[3.5rem] font-display text-2xl font-semibold leading-tight text-foreground/90 md:min-h-[3rem] md:text-3xl lg:text-4xl">
            I build{" "}
            <Typewriter
              className="text-gradient"
              words={[
                "Responsive Web Applications.",
                "Modern MERN Solutions.",
                "AI-Enhanced Web Experiences.",
                "REST API Integrations.",
                "Database-Driven Systems.",
                "Reusable React Components.",
                "Business Web Platforms.",
              ]}
            />
          </div>

          {/* Professional Summary */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Results-driven{" "}
            <span className="font-semibold text-foreground">
              MERN Stack Developer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-primary">
              4+ years of experience
            </span>{" "}
            building responsive React interfaces, reliable Node.js APIs,
            database-driven applications and AI-enhanced digital workflows.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/80 bg-background/55 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-4 pt-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-elegant"
            >
              View My Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Usman-Anwar-CV.pdf"
              download="Usman-Anwar-MERN-Stack-Developer-CV.pdf"
              className="glass-card inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background/50 px-7 py-3 font-medium backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary"
            >
              <Download size={18} />

              Download CV
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div
          className="animate-fade-up relative flex justify-center lg:justify-end"
          style={{
            animationDelay: "0.2s",
          }}
        >
          <div className="relative">
            {/* Main Profile Glow */}
            <div className="animate-pulse-glow pointer-events-none absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl" />

            {/* Rotating Outer Rings */}
            <div className="animate-spin-slow pointer-events-none absolute -inset-4 rounded-full border-2 border-dashed border-primary/30" />

            <div className="animate-spin-reverse pointer-events-none absolute -inset-8 rounded-full border border-primary/15" />

            {/* Original Circular Profile Image */}
            <div className="glow-border group relative h-64 w-64 overflow-hidden rounded-full bg-background/40 transition-transform duration-700 hover:rotate-2 hover:scale-105 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
              {/* Hover Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

              <img
                src={heroAvatar}
                alt="Usman Anwar, MERN Stack Developer"
                width={1024}
                height={1024}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
