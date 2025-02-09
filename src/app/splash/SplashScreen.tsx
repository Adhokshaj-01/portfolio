// app/splash-screen/SplashScreen.tsx
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import { useSplashScreen } from '../../context/SplashScreenContext';

const SplashScreen = () => {
  const { setShowSplash } = useSplashScreen();

  // Motion animation for logo
  const logoAnimation = {
    initial: { opacity: 1, scale: 1 }, // Initial state: full opacity and full scale
    animate: { opacity: 0, scale: 0.5 }, // End state: shrink and fade out
    transition: { duration: 3, ease: "easeOut" }, // Smooth transition
    onAnimationComplete: () => setShowSplash(false), // Hide splash screen once the animation completes
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-background flex justify-center items-center z-50"
      initial={{ opacity: 1 }} // Splash screen fades in at start
      animate={{ opacity: 0 }} // Splash screen fades out
      transition={{ duration: 2, ease: "easeOut" }} // Duration of splash fade-out
    >
      <motion.span
        // src="/logo.svg" // Your logo file
        // alt="Logo"
        className="text-3xl" // Tailwind classes for logo size
        {...logoAnimation} // Apply the animation for the logo
      >𝑓𝑥</motion.span>
    </motion.div>
  );
};

export default SplashScreen;
