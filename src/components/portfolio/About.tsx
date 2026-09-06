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
  Rocket,
} from "lucide-react";

const stats = [
  {
    icon: Rocket,
    label: "Years Experience",
    value: "4+",
  },
  {
    icon: Code2,
    label: "Projects Built",
    value: "15+",
  },
  {
    icon: Database,
    label: "Database Systems",
    value: "2",
  },
  {
    icon: Bot,
    label: "AI Workflow",
    value: "AI",
  },
];

const About = () => {
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
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

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
        {/* About Header */}
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
          className="mx-auto mb-14 max-w-5xl text-center sm:mb-16"
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            // About Me
          </p>

          {/* Single Heading */}
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Building Modern{" "}
            <span className="relative inline-block pb-3">
              <span className="text-gradient relative z-10">
                Digital Solutions
              </span>

              {/* Repeating Red Underline */}
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

          {/* Single About Paragraph */}
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
            className="mx-auto mt-7 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg md:leading-9"
          >
            Passionate and self-motivated{" "}
            <span className="font-semibold text-foreground">
              MERN Stack Developer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-primary">
              4+ years of experience
            </span>{" "}
            building responsive, user-friendly and database-driven web
            applications using React.js, Node.js, Express.js, MongoDB, MySQL
            and REST APIs. I also use AI-assisted development, prompt engineering
            and intelligent automation to deliver faster, smarter full-stack solutions.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -7,
                }}
                className="glass-card group relative cursor-default overflow-hidden rounded-2xl p-5 text-center sm:p-6"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={23} />
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.15,
                    }}
                    className="text-gradient mb-2 font-display text-3xl font-bold sm:text-4xl"
                  >
                    {stat.value}
                  </motion.div>

                  <p className="text-xs font-medium leading-5 text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
