import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "Web Developer & MERN Stack Developer",
    experiences: [
      {
        org: "BusinessGenie Consulting",
        period: "January 2026 — Present",
        desc: "Developing responsive business websites, dashboards and API-connected interfaces, while applying AI-assisted coding, prompt engineering and automation to improve delivery quality.",
      },
      {
        org: "House of Perfection",
        period: "February 2025 — August 2025",
        desc: "Worked on responsive interfaces, reusable React components, form handling, API integration and database-driven applications.",
      },
      {
        org: "GrowBusinessDigital / Portfolio Projects",
        period: "2024",
        desc: "Built portfolio-ready MERN applications with frontend interfaces, backend APIs, authentication and CRUD functionality.",
      },
    ],
    points: [
      "Develop responsive websites and modern interfaces for desktop, tablet and mobile devices.",
      "Build reusable React components including navigation bars, cards, forms, dashboards and search sections.",
      "Connect frontend interfaces with Node.js, Express.js and REST APIs.",
      "Work with MongoDB and MySQL for data storage, retrieval and CRUD operations.",
      "Integrate AI-powered features and use modern AI workflows for research, development, debugging and content automation.",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "ICS — Computer Science",
    org: "Commerce College, Kamalia",
    period: "2022 — 2024",
    points: [
      "Completed Intermediate in Computer Science with a focus on programming and computer fundamentals.",
      "Started learning practical web development alongside formal computer science studies.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24"
    >
      <div className="container">
        {/* Section Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono text-sm text-primary">
            // My Journey
          </p>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Experience &{" "}
            <span className="relative inline-block pb-3">
              <span className="text-gradient relative z-10">
                Education
              </span>

              {/* Repeating Red Animated Line */}
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
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.8,
                  }}
                  transition={{
                    pathLength: {
                      duration: 0.9,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                />

                <motion.path
                  d="M13 22C70 17 119 18 169 20C220 21 266 14 308 22"
                  fill="none"
                  stroke="hsl(var(--secondary) / 0.55)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.8,
                  }}
                  transition={{
                    pathLength: {
                      duration: 0.75,
                      delay: 0.4,
                      ease: "easeOut",
                    },
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Timeline Line */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            return (
              <div
                key={`${item.title}-${index}`}
                className={`relative mb-16 items-start md:grid md:grid-cols-2 md:gap-20 ${
                  isEven
                    ? ""
                    : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-4 z-10 -translate-x-1/2 md:left-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="h-4 w-4 rounded-full bg-primary shadow-glow ring-4 ring-background"
                  />

                  <div className="absolute left-0 top-0 h-4 w-4 animate-ping rounded-full border-2 border-primary/40" />
                </div>

                {/* Title, Company and Period */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className={`pl-16 md:pl-0 ${
                    isEven
                      ? "md:text-right"
                      : "md:text-left"
                  }`}
                >
                  <h3 className="mb-3 font-display text-2xl font-bold">
                    {item.title}
                  </h3>

                  {item.experiences ? (
                    <div className="space-y-5">
                      {item.experiences.map(
                        (experience, experienceIndex) => (
                          <div
                            key={`${experience.org}-${experienceIndex}`}
                          >
                            <span className="block font-mono text-xs text-primary">
                              {experience.period}
                            </span>

                            <p className="mt-1 text-sm font-semibold text-foreground">
                              {experience.org}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                              {experience.desc}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <>
                      <span className="mb-2 inline-block font-mono text-xs text-primary">
                        {item.period}
                      </span>

                      <p className="text-sm text-muted-foreground">
                        {item.org}
                      </p>
                    </>
                  )}
                </motion.div>

                {/* Details Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="mt-4 pl-16 md:mt-0 md:pl-0"
                >
                  <div className="glass-card hover-lift rounded-2xl border border-white/5 p-6">
                    <Icon className="mb-4 h-5 w-5 text-primary" />

                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-1 text-primary">
                            ▹
                          </span>

                          <span className="leading-6">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
