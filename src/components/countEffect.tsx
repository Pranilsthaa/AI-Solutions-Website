import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CountEffect = ({ from = 0, to = 100, duration = 1 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <motion.div ref={ref} viewport={{ once: true }}>
      {count}
    </motion.div>
  );
};

export default CountEffect;
