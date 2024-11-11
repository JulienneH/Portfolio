import React, { useEffect, useRef } from "react";
import "../App.css";

const FadeInSection = ({ children }) => {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fade-in-section" ref={domRef}>
      {children}
    </div>
  );
};

export default FadeInSection;
