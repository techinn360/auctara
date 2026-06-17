import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="py-14 md:py-24"
      style={{ background: 'linear-gradient(to bottom, #0d1511, #151d19)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <motion.h2
          className="text-[26px] md:text-[40px] leading-[1.2] tracking-[-0.01em] font-bold mb-8 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Ready to modernize your auction house?
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.93 }}
            className="w-full sm:w-auto bg-[#00e5a0] text-[#003824] px-10 py-4 rounded-lg font-bold text-lg"
          >
            Book a demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.97, backgroundColor: 'rgba(25,33,29,0.8)' }}
            whileTap={{ scale: 0.93 }}
            className="w-full sm:w-auto border border-[#3b4a41] text-[#dbe5dd] px-10 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Take the 2-min tour
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
