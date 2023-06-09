import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

function Animator({ children }) {
  const pathname = usePathname()
  const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
    exit: { opacity: 0},
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear', delay: 0.02 }} // Set the transition to linear
            key={pathname}
        >
            {children}
        </motion.main>
    </AnimatePresence>
  )
}

export default Animator;