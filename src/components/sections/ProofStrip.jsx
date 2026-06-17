import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const clients = [
  { name: 'Khat Al Jazeera', stat: '+22% Bidding Volume' },
  { name: 'Sky Auto', stat: '99.9% Live Uptime' },
  { name: 'Alqaryah', stat: 'Full Auto-Intake' },
]

export default function ProofStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-[#08100c] py-10 md:py-16 border-y border-[#3b4a41]">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.p
          className="text-center text-[11px] font-semibold tracking-widest uppercase text-[#bacbbf] mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted by Market Leaders in the Region
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 0.6, y: 0 } : {}}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-lg md:text-2xl font-bold text-[#dbe5dd]">{client.name}</span>
              <p className="text-xs text-[#6effc0]">{client.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
