const techLogos = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Express", icon: "🚂" },
  { name: "WordPress", icon: "📝" },
  { name: "Git", icon: "🔀" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Figma", icon: "🎯" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "💎" },
  { name: "REST API", icon: "🔌" },
];

const LogoCarousel = () => {
  // duplicate list for seamless infinite scroll
  const items = [...techLogos, ...techLogos];

  return (
    <section className="py-16 relative overflow-hidden border-y border-border/50 bg-card/30">
      <div className="container mb-8">
        <div className="text-center animate-fade-up">
          <p className="font-mono text-xs text-primary mb-2">// Core Tech Stack</p>
          <h3 className="text-2xl md:text-3xl font-display font-semibold">
            Powered by <span className="text-gradient">Modern Tech</span>
          </h3>
        </div>
      </div>

      {/* Row 1 - left scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee-left whitespace-nowrap">
          {items.map((t, i) => (
            <div
              key={`r1-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card hover:border-primary/60 hover:scale-110 hover:-rotate-2 transition-all duration-300 shrink-0 group"
            >
              <span className="text-2xl group-hover:animate-spin-slow">{t.icon}</span>
              <span className="font-mono text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - right scroll */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee-right whitespace-nowrap">
          {[...items].reverse().map((t, i) => (
            <div
              key={`r2-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card hover:border-secondary/60 hover:scale-110 hover:rotate-2 transition-all duration-300 shrink-0 group"
            >
              <span className="text-2xl group-hover:animate-bounce-slow">{t.icon}</span>
              <span className="font-mono text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
