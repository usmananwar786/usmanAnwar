import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointerMedia = window.matchMedia("(pointer: fine)");

    // Mobile aur touch devices par dot show nahi hoga
    if (!pointerMedia.matches) return;

    const dot = dotRef.current;

    if (!dot) return;

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        /*
          clientX = normal cursor ki horizontal position
          clientY + 18 = normal cursor se 18px neeche dot
        */
        dot.style.transform = `
          translate3d(
            ${event.clientX}px,
            ${event.clientY + 18}px,
            0
          )
          translate(-50%, -50%)
        `;

        dot.style.opacity = "1";
      });
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="normal-cursor-dot hidden md:block"
    />
  );
};

export default CustomCursor;