import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDemo } from '../../context/DemoModalContext'

const auctionTypes = [
  { icon: 'directions_car', label: 'Vehicle' },
  { icon: 'minor_crash', label: 'Salvage' },
  { icon: 'construction', label: 'Equipment' },
  { icon: 'account_balance', label: 'Government' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function Hero() {
  const [selected, setSelected] = useState(null)
  const { openModal } = useDemo()

  return (
    <section className="relative px-6 pt-8 pb-16 lg:py-24 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Left column */}
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block bg-[#6effc0]/10 text-[#6effc0] px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
        >
          Institutional Grade Platform
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em] font-bold text-[#dbe5dd] mb-5"
        >
          Run your auctions online —{' '}
          <span className="text-[#6effc0]">under your own brand.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-[20px] leading-[1.5] font-semibold text-[#bacbbf] mb-8 max-w-xl"
        >
          Auctara is the white-label auction management and live bidding platform built for how
          auction houses actually operate.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.93 }}
            className="bg-[#00e5a0] text-[#003824] px-8 py-4 rounded-lg font-bold text-base md:text-lg flex items-center justify-center gap-2"
          >
            Book a demo
            <span className="material-symbols-outlined">chevron_right</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.97, backgroundColor: 'rgba(25,33,29,0.8)' }}
            whileTap={{ scale: 0.93 }}
            className="border border-[#3b4a41] text-[#dbe5dd] px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-colors"
          >
            Watch Product Tour
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right column */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Auction type picker */}
        <div
          className="p-5 md:p-8 rounded-xl relative z-10"
          style={{
            background: 'rgba(17, 26, 20, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid #1e2e22',
            boxShadow: '0 0 40px -10px rgba(0, 229, 160, 0.15)',
          }}
        >
          <h3 className="text-base md:text-[20px] font-semibold leading-[1.4] mb-5">
            What type of auctions do you run?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {auctionTypes.map((type) => (
              <motion.button
                key={type.label}
                onClick={() => setSelected(type.label)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg transition-all border ${
                  selected === type.label
                    ? 'border-[#6effc0] bg-[#6effc0]/10'
                    : 'bg-[#19211d] border-[#3b4a41] hover:border-[#6effc0]'
                }`}
              >
                <span className="material-symbols-outlined text-[#6effc0] text-[20px]">{type.icon}</span>
                <span className="font-medium text-sm md:text-base">{type.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Floating live bidding terminal — desktop only */}
        <motion.div
          className="absolute -bottom-10 -right-10 z-20 hidden md:block max-w-[300px]"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            background: 'rgba(17, 26, 20, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(110,255,192,0.3)',
            borderRadius: '0.75rem',
            padding: '24px',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#bacbbf]">
              Live Bidding Engine
            </span>
            <span className="flex h-2 w-2 rounded-full bg-[#6effc0] animate-pulse" />
          </div>
          <div className="space-y-3">
            {[
              { id: '#4920', amount: '+$500', active: false },
              { id: '#4921', amount: '+$1,000', active: true },
            ].map((bid) => (
              <motion.div
                key={bid.id}
                animate={bid.active ? { opacity: [1, 0.7, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`flex justify-between items-center bg-[#2e3731]/50 p-2 rounded ${
                  bid.active ? 'border-l-2 border-[#6effc0]' : ''
                }`}
              >
                <span className="text-xs text-[#bacbbf] font-mono">{bid.id}</span>
                <span className="text-xs font-bold text-[#6effc0]">{bid.amount}</span>
              </motion.div>
            ))}
            <div className="h-1 bg-[#2e3731] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#6effc0] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '67%' }}
                transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
