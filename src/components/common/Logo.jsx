import { motion } from "framer-motion";

export const Logo = () => {
  const boxVariants = {
    checked: {
      opacity: 1,
      pathLength: 1,
      transition: { delay: 0.75, duration: 0.5, ease: "easeInOut" },
    },
    unchecked: {
      opacity: 0,
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  return (
    <div className="flex items-end space-x-1">
      <svg className="h-7 w-7 2xl:h-9 2xl:w-9" viewBox="0 0 100 100">
        {/* Static checkbox */}
        <circle
          cx="50"
          cy="50"
          r={40}
          width="80"
          height="80"
          strokeWidth="8"
          className="fill-color-background stroke-color-primary"
        />

        {/* Animated checkmark */}
        <motion.path
          d="M 27 50 L 42 68 L 70 30"
          fill="none"
          strokeWidth="8"
          initial="unchecked"
          animate="checked"
          variants={boxVariants}
          className="stroke-color-primary"
        />
      </svg>

      <motion.h1
        initial={{ x: 0 }}
        animate={{ x: [0, 50, 0] }}
        transition={{ delay: 1.3, duration: 0.3 }}
        className="font-logo text-xl font-semibold tracking-tighter text-color-primary transition-all duration-100 xl:text-2xl 2xl:text-4xl"
      >
        TodoTick
      </motion.h1>
    </div>
  );
};
