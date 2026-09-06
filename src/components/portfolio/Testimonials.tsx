import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Quote,
  Star,
} from "lucide-react";

/*
  Sample client details ko publish karne se pehle
  real client names aur verified reviews se replace karein.
*/

const testimonials = [
  {
    name: "Client Name",
    role: "Managing Director",
    company: "BusinessGenie Consulting",
    initials: "BG",
    review:
      "Usman delivered a responsive and professional business website with clean layouts and smooth functionality. He handled revisions efficiently and completed the project with strong attention to detail.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Business Owner",
    company: "StyleShop Express",
    initials: "SE",
    review:
      "The e-commerce interface was developed with a modern layout, responsive product sections and smooth interactions. Communication remained clear throughout the complete project.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Project Manager",
    company: "Lumina Design Studio",
    initials: "LD",
    review:
      "Usman transformed our design requirements into a clean and responsive digital experience. His frontend development skills and attention to visual details were impressive.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Operations Manager",
    company: "Business Transformation Hub",
    initials: "BT",
    review:
      "The website was structured professionally with responsive sections and user-friendly navigation. Usman remained cooperative and delivered the required improvements efficiently.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What web development services do you provide?",
    answer:
      "I develop responsive business websites, landing pages, React interfaces, dashboards, forms, REST API integrations and database-driven MERN Stack applications.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I work with React.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL and REST APIs.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes. Every website is optimized and tested for desktop, tablet and mobile screens to provide a consistent user experience.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. I can improve the layout, responsiveness, navigation, forms, components and overall user experience of an existing website.",
  },
  {
    question: "Can you integrate APIs and databases?",
    answer:
      "Yes. I can connect React interfaces with Node.js and Express.js APIs and integrate MongoDB or MySQL for complete CRUD functionality.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "A standard business website usually takes one to three weeks. The final timeline depends on the number of pages, features and required integrations.",
  },
];

/* Red animated underline */
const AnimatedRedUnderline = () => {
  const lineRef = useRef(null);
  const controls = useAnimation();

  const isVisible = useInView(lineRef, {
    once: false,
    amount: 0.7,
  });

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.set("hidden");
    }
  }, [isVisible, controls]);

  const variants = {
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
    <svg
      ref={lineRef}
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
        variants={variants}
        initial="hidden"
        animate={controls}
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
        stroke="rgba(239, 68, 68, 0.4)"
        strokeWidth="2"
        strokeLinecap="round"
        variants={variants}
        initial="hidden"
        animate={controls}
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
  );
};

const Testimonials = () => {
  /*
    4 reviews ko 2 slides mein divide kiya hai.
    Har slide mein 2 client reviews hain.
  */
  const reviewsPerSlide = 2;
  const totalSlides = Math.ceil(
    testimonials.length / reviewsPerSlide
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  const startIndex = activeSlide * reviewsPerSlide;

  const visibleReviews = testimonials.slice(
    startIndex,
    startIndex + reviewsPerSlide
  );

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const toggleFaq = (index) => {
    setActiveFaq((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-primary-glow/10 blur-[120px]" />

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
        {/* Testimonials Header */}
        <motion.div
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono text-sm text-primary">
            // Client Feedback
          </p>

          {/* Same font size as Projects heading */}
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What My{" "}
            <span className="relative inline-block pb-3">
              <span className="text-gradient relative z-10">
                Clients Say
              </span>

              <AnimatedRedUnderline />
            </span>
          </h2>

          {/* Same paragraph size as Projects section */}
          <p className="text-muted-foreground">
            Feedback from clients and teams I have worked with on
            responsive websites and modern web-development projects.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -35,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {visibleReviews.map((testimonial) => (
                <motion.article
                  key={testimonial.company}
                  whileHover={{
                    y: -7,
                  }}
                  className="glass-card group relative overflow-visible rounded-2xl border border-border/70 p-5 md:p-6"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15" />

                  {/* Quote Icon */}
                  <Quote
                    size={56}
                    strokeWidth={2.5}
                    className="absolute -top-6 right-6 fill-primary text-primary opacity-90"
                  />

                  <div className="relative z-10">
                    {/* Client Information */}
                    <div className="flex flex-col gap-5 border-b border-border/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
                          {testimonial.initials}
                        </div>

                        <div>
                          <h3 className="font-display text-lg font-bold text-foreground md:text-xl">
                            {testimonial.name}
                          </h3>

                          <p className="mt-1 text-xs text-muted-foreground">
                            {testimonial.role}
                          </p>

                          <p className="mt-1 font-mono text-[11px] text-primary">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Five Stars */}
                      <div
                        className="flex items-center gap-1"
                        aria-label={`${testimonial.rating} out of 5 stars`}
                      >
                        {Array.from({
                          length: testimonial.rating,
                        }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={16}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Same content size as Project descriptions */}
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      “{testimonial.review}”
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Show previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Only 2 dots because there are 2 slides */}
            <div className="flex items-center gap-2">
              {Array.from({
                length: totalSlides,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show testimonial slide ${
                    index + 1
                  }`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Show next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-24 max-w-5xl">
          {/* FAQ Header */}
          <motion.div
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <p className="mb-3 font-mono text-sm text-primary">
              // Frequently Asked Questions
            </p>

            {/* Same font size as Project heading */}
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Common{" "}
              <span className="relative inline-block pb-3">
                <span className="text-gradient relative z-10">
                  Questions
                </span>

                <AnimatedRedUnderline />
              </span>
            </h2>

            <p className="text-muted-foreground">
              Quick answers about my development services,
              technologies and project process.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-background/40 backdrop-blur-xl">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <motion.div
                  key={faq.question}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="border-b border-border/70 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors duration-300 hover:bg-primary/5 md:px-6"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        }`}
                      >
                        <HelpCircle size={18} />
                      </div>

                      {/* Reduced FAQ title font */}
                      <h3
                        className={`font-display text-sm font-semibold leading-6 transition-colors duration-300 md:text-base ${
                          isOpen
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-muted-foreground transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-primary"
                          : "group-hover:text-primary"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 pl-[80px] text-sm leading-relaxed text-muted-foreground md:px-6 md:pl-[88px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
