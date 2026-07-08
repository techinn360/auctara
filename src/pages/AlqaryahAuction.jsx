import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Layout from '../components/layout/Layout'
import { useDemo } from '../context/DemoModalContext'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function StaggerReveal({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

const challenges = [
  { num: '01', title: 'Geographic Limitations', body: 'Traditional physical models limited the buyer pool to regional participants, capping the potential bid ceiling for high-value assets.' },
  { num: '02', title: 'Manual Administrative Drag', body: 'Onboarding buyers and processing bid deposits required significant manpower, slowing the cadence of auction cycles.' },
  { num: '03', title: 'Real-Time Data Parity', body: 'Maintaining zero-latency synchronization between floor bids and digital participants was a critical technological hurdle.' },
  { num: '04', title: 'Brand Integrity', body: 'The need for a white-label solution that preserved the prestigious Alqaryah brand while utilizing world-class auction tech.' },
  { num: '05', title: 'Scalability Constraints', body: 'Legacy systems could not support the concurrent volume required for multi-lane, simultaneous global auctions.' },
]

const vision = [
  { icon: 'public', title: 'Total Participation', body: 'Removing all friction for global bidders to join auctions with localized currency and language support.' },
  { icon: 'speed', title: 'Unified Experience', body: 'A singular digital thread connecting pre-bidding, live bidding, and post-auction settlement.' },
  { icon: 'bolt', title: 'Operational Alpha', body: 'Automating the high-risk administrative tasks to allow the team to focus on asset acquisition.' },
  { icon: 'trending_up', title: 'Infinite Growth', body: 'A modular infrastructure capable of supporting a 10x increase in inventory without system strain.' },
]

const modules = [
  { icon: 'podium', label: 'Live bidding' },
  { icon: 'timer', label: 'Pre-bidding' },
  { icon: 'storefront', label: 'White-label' },
  { icon: 'payments', label: 'Pay Gateway' },
  { icon: 'verified_user', label: 'KYC Engine' },
  { icon: 'analytics', label: 'Market Intel' },
  { icon: 'notifications_active', label: 'Push Alerts' },
  { icon: 'inventory_2', label: 'Stock Mgmt' },
  { icon: 'language', label: 'Multi-lingual' },
  { icon: 'api', label: 'ERP Sync' },
]

const impacts = [
  { icon: 'group_add', title: 'Expanded Participation', body: 'The platform unlocked a 40% increase in international bid volume within the first quarter of deployment.' },
  { icon: 'settings_suggest', title: 'Operational Efficiency', body: 'Administrative processing time reduced by 65%, allowing Alqaryah to run bi-weekly instead of monthly auctions.' },
  { icon: 'visibility', title: 'Market Transparency', body: 'Real-time data feeds increased buyer confidence, resulting in higher final bid values across key asset categories.' },
  { icon: 'security', title: 'Institutional Compliance', body: 'Integrated KYC and automated deposit management eliminated financial risk and manual reconciliation errors.' },
]

const tags = ['Cloud Infrastructure', 'Scalable Architecture', 'Data Sovereignty', 'Global CDN']

export default function AlqaryahAuction() {
  const { openModal } = useDemo()
  return (
    <Layout>
      {/* HERO */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0]">Customer Story</span>
            <span className="text-[#84958a]">/</span>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#bacbbf]">Auctara</span>
          </div>
          <div className="max-w-4xl">
            <h1
              className="text-[56px] md:text-[64px] mb-12 leading-tight text-[#dbe5dd]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How Alqaryah Auction built a{' '}
              <em className="italic" style={{ fontFamily: "'Playfair Display', serif" }}>scalable</em>{' '}
              digital auction marketplace
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#3b4a41]">
            {[
              ['Industry', 'Heavy Equipment'],
              ['Region', 'Middle East'],
              ['Solution', 'Hybrid Marketplace'],
              ['Platform', 'Enterprise Core'],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#84958a] mb-2">{label}</p>
                <p className="text-[20px] font-semibold text-[#dbe5dd]">{val}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* STRATEGIC EVOLUTION */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-12 gap-6 items-start">
          <Reveal className="md:col-span-4">
            <h2
              className="text-[28px] font-semibold italic text-[#6effc0]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Strategic Evolution
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.1}>
            <p
              className="text-[20px] font-semibold leading-relaxed text-[#dbe5dd] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Alqaryah Auction represents the pinnacle of specialized asset liquidation in the region. To maintain their dominance in a rapidly digitizing economy, they required a partner capable of translating high-trust physical auctions into a seamless, high-velocity digital experience.
            </p>
            <p className="text-base text-[#bacbbf] max-w-2xl">
              Operating at the intersection of traditional institutional trust and modern logistics, Alqaryah sought a solution that didn't just digitize their process, but fundamentally enhanced the value proposition for global buyers and sellers alike.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-24 bg-[#08100c] overflow-hidden">
        <div className="px-8 max-w-[1440px] mx-auto">
          <Reveal>
            <h3 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#84958a] mb-12">The Growth Challenge</h3>
          </Reveal>
          <div className="space-y-0">
            {challenges.map((c, i) => (
              <Reveal key={c.num} delay={i * 0.07}>
                <motion.div
                  className="grid md:grid-cols-12 py-12 border-t border-[#3b4a41] group cursor-default"
                  whileHover={{ backgroundColor: 'rgba(25,33,29,0.5)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="md:col-span-1 text-[20px] font-semibold text-[#84958a] group-hover:text-[#6effc0] transition-colors mb-2 md:mb-0"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {c.num}
                  </span>
                  <div className="md:col-span-4 text-[20px] font-semibold text-[#dbe5dd] mb-2 md:mb-0">{c.title}</div>
                  <div className="md:col-span-7 text-base text-[#bacbbf]">{c.body}</div>
                </motion.div>
              </Reveal>
            ))}
            <div className="border-b border-[#3b4a41]" />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <Reveal>
          <h2
            className="text-[40px] font-bold text-[#dbe5dd] mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Strategic Vision
          </h2>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {vision.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              whileHover={{ borderColor: '#6effc0', scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-xl bg-[#151d19] border border-[#3b4a41] cursor-default"
            >
              <span className="material-symbols-outlined text-[#6effc0] mb-6 block" style={{ fontSize: 32 }}>{v.icon}</span>
              <h4 className="text-[20px] font-semibold text-[#dbe5dd] mb-4">{v.title}</h4>
              <p className="text-[13px] text-[#bacbbf]">{v.body}</p>
            </motion.div>
          ))}
        </StaggerReveal>
      </section>

      {/* TRANSFORMATION COMPARISON */}
      <section className="py-24 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4 items-stretch">
            <Reveal>
              <div className="bg-[#232c27] rounded-xl p-12 border border-[#3b4a41] relative overflow-hidden h-full">
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#84958a] mb-8 block">Historical Model</span>
                <h3
                  className="text-[28px] font-semibold text-[#dbe5dd] mb-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Localized Operations
                </h3>
                <ul className="space-y-4">
                  {['Physical attendance required', 'Manual bid entry & tracking', 'Opaque market discovery'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#bacbbf]">
                      <span className="material-symbols-outlined text-[#ffb4ab]" style={{ fontSize: 18 }}>close</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-10 -right-10 opacity-5">
                  <span className="material-symbols-outlined" style={{ fontSize: 240 }}>history</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div
                className="bg-[#6effc0]/5 rounded-xl p-12 border border-[#6effc0]/30 relative overflow-hidden h-full group"
                whileHover={{ boxShadow: '0 0 40px rgba(110,255,192,0.08)' }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, rgba(0,229,160,0.15) 0%, transparent 70%)' }}
                />
                <div className="relative z-10">
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6effc0] mb-8 block">Auctara Transformation</span>
                  <h3
                    className="text-[28px] font-semibold text-[#dbe5dd] mb-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Centralized Digital Marketplace
                  </h3>
                  <ul className="space-y-4">
                    {['Global real-time participation', 'Automated KYC & deposits', 'Transparent ledger of truth'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[#dbe5dd]">
                        <span className="material-symbols-outlined text-[#6effc0]" style={{ fontSize: 18 }}>check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[#6effc0]" style={{ fontSize: 240 }}>language</span>
                </div>
                <div className="absolute top-1/2 -left-6 -translate-y-1/2 hidden md:block">
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                    className="w-12 h-12 rounded-full bg-[#0d1511] border border-[#6effc0] flex items-center justify-center text-[#6effc0] z-20"
                  >
                    <span className="material-symbols-outlined">east</span>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODULES GRID */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16">
          <h2
            className="text-[40px] font-bold text-[#dbe5dd] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Unified Auction Ecosystem
          </h2>
          <p className="text-base text-[#bacbbf] max-w-2xl mx-auto">
            The Alqaryah marketplace leverages the full suite of Auctara modules to create a high-performance bidding environment.
          </p>
        </Reveal>
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {modules.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              whileHover={{ backgroundColor: '#232c27', scale: 1.04 }}
              transition={{ duration: 0.18 }}
              className="p-6 rounded-lg text-center cursor-default"
              style={{ background: 'rgba(17,26,20,0.6)', border: '1px solid #1E2E22', backdropFilter: 'blur(12px)' }}
            >
              <span className="material-symbols-outlined text-[#6effc0] mb-3 block">{m.icon}</span>
              <p className="text-[13px] font-medium text-[#dbe5dd]">{m.label}</p>
            </motion.div>
          ))}
        </StaggerReveal>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="py-24 bg-[#151d19]">
        <div className="px-8 max-w-[1440px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2
              className="text-[40px] font-bold text-[#dbe5dd]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Business Impact
            </h2>
          </Reveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-6">
            {impacts.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ borderColor: '#6effc0' }}
                transition={{ duration: 0.2 }}
                className="flex gap-6 items-start p-8 rounded-xl bg-[#0d1511] border border-[#3b4a41]"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#6effc0]/10 flex items-center justify-center text-[#6effc0]">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-[20px] font-semibold text-[#dbe5dd] mb-2">{item.title}</h4>
                  <p className="text-base text-[#bacbbf]">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* STRATEGIC VALUE */}
      <section className="py-24 bg-[#050807] relative overflow-hidden">
        <Reveal className="px-8 max-w-[1440px] mx-auto relative z-10 text-center">
          <h2
            className="text-[48px] md:text-[72px] text-[#dbe5dd] mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More than an auction platform
          </h2>
          <p className="text-[20px] font-semibold text-[#bacbbf] max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Auctara provided Alqaryah with a strategic foundation for the next decade. By treating the auction process as a data-driven ecosystem rather than a series of events, we enabled a level of institutional scale previously thought impossible.
          </p>
          <StaggerReveal className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                variants={fadeUp}
                whileHover={{ scale: 1.06, backgroundColor: 'rgba(110,255,192,0.12)' }}
                className="px-6 py-2 rounded-full border border-[#6effc0]/40 text-[#6effc0] text-[13px] font-medium bg-[#6effc0]/5 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </StaggerReveal>
        </Reveal>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <Reveal className="max-w-4xl mx-auto text-center">
          <motion.span
            className="material-symbols-outlined text-[#6effc0] mb-8 block"
            style={{ fontSize: 64, fontVariationSettings: "'FILL' 1" }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            format_quote
          </motion.span>
          <blockquote
            className="text-[40px] italic text-[#dbe5dd] leading-tight mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Partnering with Auctara wasn't just about a website upgrade; it was a total reimagining of our business. We now have the technical confidence to challenge any global competitor while maintaining our local expertise."
          </blockquote>
          <div className="flex flex-col items-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwimJfBnAHoMNFUAEvg65ckMPZOl2CRaFUWzkVvoJE1P4GZ6PJRIRxyA3mk_UR8D1anp3ldC7B776o6t91G3uHzbvsqbtLe1-HXCAxpemHsuGIlEM1beSNUL_aCFxNumB-56O9HP-FIILwJ0BorSZ_09Y6AXdX-J94M1UUFP9gqPlbEO_Him1ih6Pw4DXcZ7eZNrL9PvbSp0zidn5QzOWAAWKcCAdaQipzG4F3Vx7IyCpGcui0UjWSTCTZf0PeJ8A_wbK-sVbAlDk"
              alt="Saeed Al-Qaryah"
              className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[#6effc0]"
            />
            <p className="font-bold text-[#dbe5dd]">Saeed Al-Qaryah</p>
            <p className="text-[13px] text-[#84958a] uppercase tracking-[0.08em]">Chief Executive Officer, Alqaryah Auction</p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-[#08100c] border-t border-[#3b4a41]">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2
            className="text-[56px] font-bold leading-[1.1] text-[#dbe5dd] mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Building the next generation of auction businesses
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 0.97, boxShadow: '0 0 24px rgba(0,229,160,0.3)' }}
              whileTap={{ scale: 0.94 }}
              className="bg-[#00e5a0] text-[#003824] px-10 py-4 rounded-lg font-bold text-base"
            >
              Book a strategy session
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.97, backgroundColor: 'rgba(219,229,221,0.08)' }}
              whileTap={{ scale: 0.94 }}
              className="border border-[#dbe5dd] text-[#dbe5dd] px-10 py-4 rounded-lg font-bold text-base"
            >
              View more stories
            </motion.button>
          </div>
        </Reveal>
      </section>
    </Layout>
  )
}
