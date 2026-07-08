import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useDemo } from '../../context/DemoModalContext'

const steps = [
  {
    title: 'Step 1: What is your primary auction category?',
    options: [
      { label: 'Heavy Machinery & Equipment', sub: 'Construction, Industrial, & Plant' },
      { label: 'Vehicles & Salvage', sub: 'Personal & Commercial fleets' },
    ],
  },
  {
    title: 'Step 2: What is your estimated monthly volume?',
    options: [
      { label: 'Under 50 Units' },
      { label: '50 - 200 Units' },
      { label: '200 - 1,000 Units' },
      { label: '1,000+ Units' },
    ],
  },
  {
    title: 'Step 3: How are you managing auctions today?',
    options: [
      { label: 'Manual / Paper-based' },
      { label: 'Legacy In-house Software' },
      { label: 'Generic Marketplace App' },
      { label: 'Physical Events Only' },
    ],
  },
]

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.25 } },
}

export default function Assessment() {
  const { openModal } = useDemo()
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleOption = () => {
    if (step < steps.length - 1) setStep((s) => s + 1)
    else setDone(true)
  }

  return (
    <section ref={ref} className="py-14 md:py-24 px-6 max-w-[1440px] mx-auto" id="assessment">
      <motion.div
        className="text-center mb-10 md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[26px] md:text-[40px] leading-[1.2] tracking-[-0.01em] font-bold mb-4">
          See what Auctara looks like for your business
        </h2>
        <p className="text-[#bacbbf] text-sm md:text-base max-w-2xl mx-auto">
          Configure your operational needs to see our customized module recommendations and
          estimated ROI.
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto rounded-2xl p-6 md:p-12"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          background: 'rgba(17, 26, 20, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid #1e2e22',
        }}
      >
        {/* Progress bar */}
        {!done && (
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-[#2e3731]">
                <motion.div
                  className="h-full bg-[#6effc0] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: i < step ? '100%' : i === step ? '30%' : '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="min-h-[300px] md:min-h-[400px] flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                <h3 className="text-[18px] md:text-[28px] font-semibold leading-[1.3]">
                  {steps[step].title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {steps[step].options.map((opt) => (
                    <motion.button
                      key={opt.label}
                      whileHover={{
                        borderColor: '#6effc0',
                        backgroundColor: 'rgba(110,255,192,0.05)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleOption}
                      className="text-left border border-[#3b4a41] p-4 md:p-6 rounded-xl transition-all"
                    >
                      <p className="font-bold text-[#dbe5dd] text-sm md:text-base">{opt.label}</p>
                      {opt.sub && <p className="text-xs md:text-sm text-[#bacbbf] mt-1">{opt.sub}</p>}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-6"
              >
                <div
                  className="p-5 md:p-8 rounded-2xl border border-[#6effc0]/30"
                  style={{ background: 'rgba(110,255,192,0.05)' }}
                >
                  <h3 className="text-[18px] md:text-[28px] font-semibold mb-3 text-[#6effc0]">
                    Your Optimization Plan is Ready
                  </h3>
                  <p className="text-[#bacbbf] text-sm md:text-base mb-5">
                    Based on your scale, we recommend the{' '}
                    <strong className="text-[#dbe5dd]">Enterprise Lifecycle Module</strong> with
                    integrated <strong className="text-[#dbe5dd]">Live-Bid Max</strong>.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: '90% Faster Intake',
                        desc: 'Digital inventory sync will replace manual logging.',
                      },
                      {
                        title: 'Bilingual Auto-Docs',
                        desc: 'Arabic/English contracts generated on final bid.',
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#6effc0] text-[20px]">
                          check_circle
                        </span>
                        <div>
                          <p className="font-bold text-sm md:text-base">{item.title}</p>
                          <p className="text-xs text-[#bacbbf]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 0.97 }}
                      whileTap={{ scale: 0.93 }}
                      onClick={openModal}
                      className="bg-[#00e5a0] text-[#003824] px-6 py-3 rounded-lg font-bold flex-1 text-sm md:text-base"
                    >
                      Book a demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 0.97 }}
                      whileTap={{ scale: 0.93 }}
                      className="border border-[#3b4a41] text-[#dbe5dd] px-6 py-3 rounded-lg font-bold flex-1 text-sm md:text-base"
                    >
                      See case study
                    </motion.button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setStep(0)
                    setDone(false)
                  }}
                  className="text-sm text-[#bacbbf] hover:text-[#6effc0] transition-colors"
                >
                  ← Start over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
