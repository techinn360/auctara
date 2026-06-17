import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: 'public',
    title: 'Regional Fit',
    desc: 'Specifically engineered for UAE and Kurdistan workflows. Support for multi-currency bidding, local payment gateways, and bilingual documentation requirements.',
  },
  {
    icon: 'verified_user',
    title: 'White-label Ownership',
    desc: "It's your brand, your data, and your clients. We provide the infrastructure; you maintain the 1:1 relationship with your bidders without platform interference.",
  },
  {
    icon: 'settings_input_component',
    title: 'Full Lifecycle',
    desc: 'From digital intake and automated inventory grading to automated gate pass generation and settlement. Eliminate the administrative bottleneck.',
  },
]

export default function WhyAuctara() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 md:py-24 bg-[#151d19]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 md:p-10 bg-[#19211d] border border-[#3b4a41] rounded-2xl"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#6effc0]/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[#6effc0]">{feature.icon}</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.4] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#bacbbf] leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
