import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

import {
  Bot,
  Code2,
  Database,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-primary to-primary-glow",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive UI",
      "Reusable Components",
      "Form Handling",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "from-secondary to-primary",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "API Integration",
      "Server Routing",
      "Middleware",
      "CRUD Operations",
    ],
  },
  {
    title: "Database Development",
    icon: Database,
    color: "from-primary to-secondary",
    skills: [
      "MongoDB",
      "MySQL",
      "Data Handling",
      "Data Storage",
      "Data Retrieval",
      "Database Integration",
      "CRUD Workflows",
      "Database-Driven UI",
    ],
  },
  {
    title: "AI & Development Tools",
    icon: Bot,
    color: "from-secondary to-primary-glow",
    skills: [
      "AI-Assisted Coding",
      "Prompt Engineering",
      "AI API Integration",
      "Workflow Automation",
      "ChatGPT",
      "GitHub Copilot",
      "Git & GitHub",
      "Figma",
    ],
  },
];

const Skills = () => {
  const headingRef = useRef(null);
  const lineControls = useAnimation();

  const isHeadingVisible = useInView(headingRef, {
    amount: 0.6,
    once: false,
  });

  useEffect(() => {
    if (isHeadingVisible) {
      lineControls.start("visible");
    } else {
      lineControls.set("hidden");
    }
  }, [isHeadingVisible, lineControls]);

  const lineVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-glow opacity-40 blur-3xl" />

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-glow/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Header */}
        <motion.div
          ref={headingRef}
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-4xl text-center sm:mb-16"
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            // My Toolkit
          </p>

          {/* Single Heading */}
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="relative inline-block pb-3">
              <span className="text-gradient relative z-10">
                Technologies
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
                  variants={lineVariants}
                  initial="hidden"
                  animate={lineControls}
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
                  variants={lineVariants}
                  initial="hidden"
                  animate={lineControls}
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

          {/* Single Short Paragraph */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            Technologies and development tools I use to build responsive
            interfaces, REST APIs, database-driven applications and reliable
            full-stack solutions.
          </motion.p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.55,
                  delay: groupIndex * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass-card group relative overflow-hidden rounded-3xl p-5 sm:p-6"
              >
                {/* Hover Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Gradient Line */}
                <div
                  className={`mb-5 h-1 w-12 rounded-full bg-gradient-to-r ${group.color} transition-all duration-500 group-hover:w-24`}
                />

                {/* Card Header */}
                <div className="relative z-10 mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-display text-lg font-semibold leading-6 text-foreground transition-colors duration-300 group-hover:text-primary">
                    {group.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: false,
                      }}
                      transition={{
                        duration: 0.35,
                        delay:
                          groupIndex * 0.08 +
                          skillIndex * 0.035,
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      className="cursor-default rounded-full border border-border bg-muted/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary sm:text-xs"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Decorative Glow */}
                <div
                  className={`absolute inset-x-6 bottom-0 h-px bg-gradient-to-r ${group.color} opacity-0 transition-opacity duration-500 group-hover:opacity-80`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
