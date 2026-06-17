import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const sideFeatures = [
  {
    icon: 'phone_iphone',
    title: 'Bidder Mobile App',
    titleColor: '#6effc0',
    desc: 'Real-time low-latency bidding from anywhere in the world. Fully branded as your auction house.',
    borderColor: '#6effc0',
  },
  {
    icon: 'inventory_2',
    title: 'Inventory Control',
    titleColor: '#dbe5dd',
    desc: 'Integrated mobile app for yard staff to capture photos, record data, and generate gate passes instantly.',
    borderColor: '#b7ccbc',
  },
]

export default function ProductPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 md:py-24 px-6 max-w-[1440px] mx-auto">
      <motion.div
        className="text-center mb-10 md:mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[26px] md:text-[40px] leading-[1.2] tracking-[-0.01em] font-bold mb-4 md:mb-6">
          How much time does your team lose to manual registration and gate passes?
        </h2>
        <p className="text-[#bacbbf] text-sm md:text-base leading-relaxed">
          Stop the paper trail. Auctara digitizes the high-friction touchpoints of your auction
          house, from bidder vetting to final vehicle release.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
        {/* Main dashboard screenshot */}
        <motion.div
          className="w-full lg:flex-1 relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="bg-[#19211d] p-2 rounded-2xl border border-[#3b4a41] shadow-2xl">
            <div className="bg-[#0d1511] rounded-xl overflow-hidden border border-[#3b4a41]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkJvM1S4gUmvRaBQ0lmMTmCbp8LYVDASJvbVz_eZW8MyKkdOpRYgDTr_50Gh8ndzEX8ZXPy1FrW-fpUoSsV0qSV5v1rSIvPkwNkHX2PZnc4Ff4cuLIv_LA3ik8a7PASdXZQPch7QNGOVn7s4w5jcIzlwXRo7OKMD7ARgE12yXyPqLT_oTP-5pxrXqbbQjw0nDgLijtdiT4vHTcOhb_8KkvD8G8Es3S90EAwcI6yO5zNhZjxR-6IkrHm9azSt0mTv0TLrR4tqAB19o"
                alt="Auction management dashboard"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Side feature panels */}
        <div className="w-full lg:w-1/3 space-y-4 md:space-y-6">
          {sideFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-5 md:p-6 rounded-2xl"
              style={{
                background: 'rgba(17, 26, 20, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #1e2e22',
                borderLeft: `4px solid ${feature.borderColor}`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.15 }}
              whileHover={{ x: -4, transition: { duration: 0.2 } }}
            >
              <h4
                className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base"
                style={{ color: feature.titleColor }}
              >
                <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                {feature.title}
              </h4>
              <p className="text-xs md:text-sm text-[#bacbbf]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
