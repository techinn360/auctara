import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const footerCols = [
  { title: 'Product', links: ['Platform', 'Bidding Engine', 'Inventory', 'Mobile App'] },
  { title: 'Company', links: ['About Us', 'Case Studies', 'Careers'] },
  { title: 'Enterprise', links: ['Solutions', 'Security', 'Uptime API'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer ref={ref} className="bg-[#08100c] py-12 md:py-24 border-t border-[#3b4a41]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Brand block — full width on mobile */}
        <motion.div
          className="mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#6effc0] font-bold text-xl tracking-tight mb-4 block">Auctara</span>
          <p className="text-[#bacbbf] text-sm mb-4 max-w-xs leading-relaxed">
            Institutional-grade auction management systems for high-stakes online marketplaces.
          </p>
          <p className="text-[#bacbbf] text-sm">
            © 2024 Auctara. All rights reserved.
          </p>
        </motion.div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-0 md:mt-10 border-t border-[#3b4a41] pt-10">
          {footerCols.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h4 className="font-bold mb-4 text-[#dbe5dd] text-sm md:text-base">{col.title}</h4>
              <ul className="space-y-3 text-sm text-[#bacbbf]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#dbe5dd] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}
