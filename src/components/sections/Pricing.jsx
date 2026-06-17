import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 md:py-24 px-6 max-w-[1440px] mx-auto text-center">
      <motion.div
        className="p-8 md:p-20 rounded-[2rem] border border-[#6effc0]/20 relative overflow-hidden"
        style={{ background: 'rgba(17, 26, 20, 0.8)', backdropFilter: 'blur(12px)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10">
          <h2 className="text-[26px] md:text-[40px] leading-[1.2] tracking-[-0.01em] font-bold mb-4 md:mb-6">
            Pricing tailored to your operation.
          </h2>
          <p className="text-[#bacbbf] text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10">
            Auctara is built to scale with your volume. Whether you run 20 auctions a month or
            2,000, our modular pricing ensures you only pay for the infrastructure you utilize.
          </p>
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.93 }}
            className="w-full sm:w-auto bg-[#00e5a0] text-[#003824] px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold text-base md:text-xl shadow-lg"
          >
            Get a Custom Quote
          </motion.button>
        </div>
        {/* Watermark icon — hidden on small screens to avoid overflow */}
        <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 pointer-events-none select-none hidden sm:block">
          <span className="material-symbols-outlined" style={{ fontSize: '200px' }}>
            payments
          </span>
        </div>
      </motion.div>
    </section>
  )
}
