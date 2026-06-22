import { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

const stats = [
  {
    number: 100,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    number: 60,
    suffix: "+",
    label: "Brands Served",
  },
  {
    number: 300,
    suffix: "%",
    label: "Average Growth",
  },
  {
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

// Reusable Counter component that triggers on scroll view
function Counter({ from, to }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);

  // Detects when this specific element enters the viewport
  // margin: "-100px" delays it slightly so it triggers when well inside the screen
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // ONLY start the animation if the element is visible on screen
    if (!isInView) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                scale: 1.03,
              }}
              className="bg-slate-200 rounded-[28px] p-10 text-center border border-slate-200"
            >
              <h3 className="text-5xl font-black text-blue-600">
                <Counter from={0} to={item.number} />
                {item.suffix}
              </h3>

              <p className="mt-4 text-slate-800 text-sm font-medium tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
