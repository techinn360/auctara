import { useEffect, useRef } from 'react'
import Layout from '../components/layout/Layout'
import { useDemo } from '../context/DemoModalContext'

const stats = [
  { value: '3×', label: 'Bidder participation' },
  { value: '~60%', label: 'Less admin time', small: false },
  { value: 'Global Reach', label: 'Expanded beyond UAE', headline: true },
  { value: '1', label: 'Unified platform' },
]

const challenges = [
  { title: 'Reach capped by geography', body: 'Bidders had to be physically present at the Sharjah yard, excluding international investors.' },
  { title: 'Heavy manual overhead', body: 'Paper-based workflows for vehicle documentation and inventory tracking led to errors.' },
  { title: 'No real-time participation', body: 'Static bidding formats prevented the competitive tension required for top asset prices.' },
  { title: 'Scaling required headcount', body: 'Every increase in auction volume necessitated more administrative staff on the ground.' },
]

const timeline = [
  { num: '1', label: 'Phase 1', week: 'Week 1-2', desc: 'Discovery & Audit of existing workflows and technical requirements.', active: true },
  { num: '2', label: 'Phase 2', week: 'Week 3-4', desc: 'Configuration & Branding of the Auctara Enterprise white-label portal.' },
  { num: '3', label: 'Phase 3', week: 'Week 5', desc: 'Data Migration & Staff Training on auction management tools.' },
  { num: null, label: 'Go-Live', week: 'Week 6', desc: 'Platform Launch and inaugural global digital vehicle auction.', rocket: true },
]

const solutions = [
  { icon: 'gavel', title: 'Live bidding engine', body: 'Low-latency real-time bidding for energetic, competitive auctions.' },
  { icon: 'timer', title: 'Pre-bidding', body: 'Allow participants to place proxy bids before the live event begins.' },
  { icon: 'dashboard', title: 'Auction portal', body: 'Centralized dashboard to manage multiple live sales simultaneously.' },
  { icon: 'inventory', title: 'Vehicle management', body: 'Comprehensive tracking from yard entry to buyer collection.' },
  { icon: 'description', title: 'Inspection reports', body: 'Digital multi-point inspections with high-resolution image uploads.' },
  { icon: 'verified_user', title: 'Buyer verification', body: 'Automated KYC and deposit management to ensure bidder quality.' },
  { icon: 'meeting_room', title: 'Gate pass management', body: 'Automated digital passes for streamlined vehicle pick-up logistics.' },
  { icon: 'smartphone', title: 'Mobile experience', body: 'Fully responsive bidding interface for buyers on the move.' },
]

const outcomes = [
  { title: 'Expanded market reach', body: 'By removing geographic constraints, Khat Al Jazeera saw a 300% increase in registered bidders, with significant participation from neighboring GCC countries and international salvage exporters.' },
  { title: 'Reduced admin workload', body: 'Automation of vehicle intake, bidder vetting, and invoicing reduced the administrative headcount requirement by 60%, allowing staff to focus on strategic asset sourcing.' },
  { title: 'Increased buyer trust', body: 'Standardized digital inspection reports and transparent bid histories built institutional-level trust, attracting higher-value corporate fleets to the platform.' },
  { title: 'Scalable operations', body: 'The Auctara cloud infrastructure supports an unlimited volume of simultaneous auctions, enabling Khat Al Jazeera to double their monthly liquidation volume without additional technical investment.' },
]

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-8')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '' }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`transition-all duration-700 opacity-0 translate-y-8 ${className}`}>
      {children}
    </div>
  )
}

export default function SalvageCars() {
  const { openModal } = useDemo()
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,229,160,0.08) 0%, transparent 70%)' }} />
        <Reveal className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0] mb-6">
              Case Study · Vehicle &amp; Salvage Auctions · UAE
            </span>
            <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-[#dbe5dd] mb-8">
              How Khat Al Jazeera Auctions expanded bidder reach and cut manual workload with a live digital auction platform.
            </h1>
            <p className="text-base text-[#bacbbf] max-w-2xl mb-12 leading-relaxed">
              A comprehensive digital transformation moving from manual yards to a global bidding audience, redefining vehicle liquidation in the Middle East.
            </p>
            <div className="flex flex-wrap gap-y-6 gap-x-12 pt-10 border-t border-[#3b4a41]">
              {[
                ['Client', 'Khat Al Jazeera Auctions'],
                ['Industry', 'Vehicle & Salvage'],
                ['Region', 'UAE'],
                ['Platform', 'Auctara Enterprise'],
                ['Go-live', 'Q3 2024'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#84958a] mb-1">{label}</p>
                  <p className="text-base text-[#dbe5dd]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="py-16 bg-[#151d19]">
        <Reveal className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="p-8 bg-[#0d1511] border border-[#3b4a41] rounded-xl group hover:border-[#6effc0] transition-colors">
                {s.headline ? (
                  <p className="text-[#6effc0] text-[28px] font-bold uppercase leading-none mb-4 mt-2 group-hover:scale-105 transition-transform duration-300">{s.value}</p>
                ) : (
                  <p className="text-[#6effc0] text-[56px] font-bold leading-[1.1] tracking-[-0.02em] mb-2 group-hover:scale-105 transition-transform duration-300">{s.value}</p>
                )}
                <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf]">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CHALLENGE */}
      <section className="py-24">
        <Reveal className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] font-semibold text-[#dbe5dd] mb-6">The Challenge</h2>
              <p className="text-base text-[#bacbbf] leading-relaxed">
                Operating as a traditional physical auction yard, Khat Al Jazeera faced critical scalability hurdles. Physical attendance was mandatory, which limited their buyer pool to the immediate vicinity of the yard. Administrative burdens, from gate pass issuance to manual record-keeping, were draining resources and slowing growth.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((c) => (
                  <div key={c.title} className="p-6 bg-[#0d1511] border-l-4 border-l-[#b7ccbc]/40 border border-[#3b4a41] rounded-lg">
                    <h3 className="text-[20px] font-semibold text-[#dbe5dd] mb-2">{c.title}</h3>
                    <p className="text-[13px] text-[#bacbbf]">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-[#151d19] border-y border-[#3b4a41]">
        <Reveal className="max-w-[1440px] mx-auto px-8 text-center mb-16">
          <h2 className="text-[28px] font-semibold text-[#dbe5dd]">Implementation Timeline</h2>
          <p className="text-base text-[#bacbbf] mt-4">A streamlined 6-week transition to full digital operations.</p>
        </Reveal>
        <Reveal className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {timeline.map((step) => (
              <div key={step.label} className="relative pb-8 md:pb-0">
                {step.rocket ? (
                  <div className="w-12 h-12 bg-[#00e5a0] rounded-full flex items-center justify-center text-[#003824] font-bold mb-6">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                ) : step.active ? (
                  <div className="w-12 h-12 bg-[#6effc0] rounded-full flex items-center justify-center text-[#003824] font-bold mb-6">{step.num}</div>
                ) : (
                  <div className="w-12 h-12 bg-[#2e3731] border border-[#3b4a41] rounded-full flex items-center justify-center text-[#6effc0] font-bold mb-6">{step.num}</div>
                )}
                <h4 className="text-[20px] font-semibold text-[#dbe5dd] mb-2">{step.label}</h4>
                <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6effc0] mb-2">{step.week}</p>
                <p className="text-[13px] text-[#bacbbf]">{step.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SOLUTION */}
      <section className="py-24">
        <Reveal className="max-w-[1440px] mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-[28px] font-semibold text-[#dbe5dd] mb-4">The Solution</h2>
            <p className="text-base text-[#bacbbf] max-w-2xl">
              Auctara deployed a custom Enterprise instance for Khat Al Jazeera, integrating physical yard management with a high-performance bidding engine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="p-6 bg-[#0d1511] border-l-2 border-l-[#6effc0] border border-[#3b4a41] rounded-lg hover:bg-[#151d19] transition-colors">
                <div className="mb-4 text-[#6effc0]">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h4 className="text-[20px] font-semibold text-[#dbe5dd] mb-2">{s.title}</h4>
                <p className="text-[13px] text-[#bacbbf]">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-[#19211d] relative overflow-hidden">
        <Reveal className="max-w-[1440px] mx-auto px-8 text-center relative z-10">
          <span className="material-symbols-outlined text-[#6effc0] text-6xl opacity-20 mb-8 block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <blockquote className="text-[28px] md:text-[56px] font-bold leading-tight italic text-[#dbe5dd] max-w-5xl mx-auto mb-10">
            "The transition to Auctara wasn't just a software upgrade; it was a fundamental shift in how we do business. We've gone from being a local player to a digital-first auction house with international reach."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#3b4a41] mb-4 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbAd7ItTcM164Cb7quMq920w0LRkG_MtlsmGlVwTWP2VA3pvty--8m7bIRaAkEZE79LO38sqkjq4ykPKdTOSuy6wV5zO7GkkwdxEuwcBp0HYxCJCtNul2R7XFpsXfmhVD6XN3Hs-eBZULwPghGNuzz43qvuzqITOUA05PE03E-PRRunrsYVFxUwxuJ9CvOOQRgLUoz76UJKq9ogMEqT-oxz3dxFoYMkLRAOzq4XOnIGkomm_SduYRO7tq605Kg6ZsjURH9Ad2ABwc"
                alt="Hamad A."
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[20px] font-semibold text-[#dbe5dd]">Hamad A.</p>
            <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6effc0]">CEO, Khat Al Jazeera Auctions</p>
          </div>
        </Reveal>
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full opacity-50 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,229,160,0.08) 0%, transparent 70%)' }} />
      </section>

      {/* OUTCOMES */}
      <section className="py-24">
        <Reveal className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-[28px] font-semibold text-[#dbe5dd]">Business Outcomes</h2>
            <p className="text-base text-[#bacbbf] mt-4">The tangible impact of digital transformation on operational efficiency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <div key={o.title} className="p-10 bg-[#0d1511] border border-[#3b4a41] rounded-xl">
                <h4 className="text-[20px] font-semibold text-[#dbe5dd] mb-4">{o.title}</h4>
                <p className="text-base text-[#bacbbf] leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Reveal className="max-w-[1440px] mx-auto px-8">
          <div className="bg-[#232c27] rounded-3xl p-12 md:p-20 text-center border border-[#3b4a41] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,229,160,0.08) 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="text-[40px] font-bold text-[#dbe5dd] mb-6">Running a vehicle or salvage auction operation?</h2>
              <p className="text-base text-[#bacbbf] mb-12 max-w-2xl mx-auto">
                Discover how Auctara can digitize your workflows and connect your inventory to a global audience of verified buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={openModal} className="bg-[#00e5a0] text-[#003824] px-8 py-4 rounded-xl font-bold text-lg hover:scale-95 transition-transform">
                  Book a demo
                </button>
                <button className="border border-[#3b4a41] text-[#dbe5dd] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0d1511] transition-colors">
                  See more case studies
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  )
}
