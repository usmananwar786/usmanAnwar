import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import LogoCarousel from "@/components/portfolio/LogoCarousel";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ChatWidget from "@/components/portfolio/ChatWidget";
import CustomCursor from "@/components/portfolio/CustomCursor";
import testimonials from "@/components/portfolio/Testimonials";

import { useEffect } from "react";
import Testimonials from "@/components/portfolio/Testimonials";

const Index = () => {
  useEffect(() => {
    document.title = "Usman Anwar — MERN Stack Developer | Portfolio";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Usman Anwar — MERN Stack Developer with 2+ years of experience building responsive React, Node.js & MongoDB applications. View projects & live demos.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <LogoCarousel />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
