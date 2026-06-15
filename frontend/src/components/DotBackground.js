import React from "react";

// Generates a fixed set of dots with randomized vertical position,
// horizontal start delay, size and speed for a subtle "data flow" effect.
const DOTS = Array.from({ length: 28 }, (_, i) => {
  const top = Math.random() * 100;
  const duration = 20 + Math.random() * 25; // 20s - 45s base speed
  const delay = Math.random() * -duration; // negative delay = mid-animation start
  const size = 2 + Math.random() * 3; // 2px - 5px
  const opacity = 0.25 + Math.random() * 0.35;
  return { id: i, top, duration, delay, size, opacity };
});

/**
 * Subtle moving-dot background.
 * Pass `active` = true while a transaction is processing to speed up the dots;
 * they return to normal speed automatically once `active` becomes false.
 */
const DotBackground = ({ active = false }) => {
  return (
    <div className={`dot-bg${active ? " fast" : ""}`}>
      {DOTS.map((dot) => (
        <span
          key={dot.id}
          style={{
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
            "--dot-duration": `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DotBackground;
