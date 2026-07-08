import { useEffect, useRef } from 'react'
import Layout from '../components/layout/Layout'
import { useDemo } from '../context/DemoModalContext'

const solutions = [
  { num: '01', title: 'Live Bidding Engine', body: 'Low-latency auction stream allowing remote users to bid in sub-millisecond real-time against on-site participants.', active: true },
  { num: '02', title: 'Pre-bidding', body: 'Proxy bidding system allowing buyers to set maximum offers days before the hammer drops.' },
  { num: '03', title: 'Auction Management Portal', body: 'A single mission-control dashboard for auctioneers to monitor lots, manage pauses, and settle disputes.' },
  { num: '04', title: 'Vehicle Inventory Management', body: 'Automated listing generation with image uploading and status tracking from warehouse to final sale.' },
  { num: '05', title: 'Inspection Reports', body: 'Digital 150-point inspection logs embedded directly into every lot listing for complete transparency.' },
  { num: '06', title: 'Buyer Verification', body: 'Automated KYC and financial vetting to ensure only qualified bidders can participate in high-value auctions.' },
  { num: '07', title: 'Gate Pass Management', body: 'QR-code-based release system that automates the vehicle handover process post-payment.' },
  { num: '08', title: 'Mobile-optimized Experience', body: 'Native-feel web interface for dealers bidding from mobile devices while on the go.' },
]

const stats = [
  { value: '350%', label: 'Bidder Participation' },
  { value: '65%', label: 'Admin Reduction' },
  { value: '12', label: 'Regional Expansion' },
  { value: '1.2k+', label: 'Monthly Lots Sold' },
]

const challenges = [
  { title: 'Limited Reach', body: 'Bidding restricted to regional buyers physically present at the site.' },
  { title: 'Manual Workflows', body: 'Inventory, payments, and gate passes handled via physical paperwork.' },
  { title: 'No Live Bidding', body: 'Lack of a real-time digital engine to facilitate remote high-speed trades.' },
  { title: 'Growth Limited', body: 'Scaling required exponential increases in administrative personnel.' },
]

function useStickyNav() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[data-section]')
    const navLinks = document.querySelectorAll('[data-nav-link]')

    const onScroll = () => {
      let current = ''
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 150) {
          current = section.getAttribute('data-section')
        }
      })
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('data-nav-link') === current
        const line = link.querySelector('[data-line]')
        link.classList.toggle('text-[#6effc0]', isActive)
        link.classList.toggle('text-[#bacbbf]', !isActive)
        if (line) {
          line.classList.toggle('w-8', isActive)
          line.classList.toggle('bg-[#6effc0]', isActive)
          line.classList.toggle('w-4', !isActive)
          line.classList.toggle('bg-[#3b4a41]', !isActive)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

export default function LuxuryAuction() {
  useStickyNav()
  const { openModal } = useDemo()

  return (
    <Layout>
      {/* HERO */}
      <section className="min-h-[820px] flex items-center px-8 max-w-[1440px] mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#19211d] border border-[#3b4a41]/30 text-[#6effc0] uppercase font-semibold tracking-[0.2em] text-[10px]">
              Case Study · Vehicle Auctions · Kurdistan, Iraq
            </div>
            <h1 className="text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-[#dbe5dd] max-w-xl">
              Sky Auto Auction brought its vehicle auctions online and opened bidding to buyers across the region
            </h1>
            <p className="text-base text-[#bacbbf] max-w-lg leading-relaxed">
              Transforming a traditional brick-and-mortar operation into a digital-first powerhouse, Sky Auto Auction leveraged Auctara to scale bid volume by 350% in the first quarter post-launch.
            </p>
            <div className="flex items-center gap-4">
              <button onClick={openModal} className="bg-[#00e5a0] text-[#003824] px-8 py-4 rounded-lg font-bold text-lg active:scale-95 transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.4)]">
                Book a demo
              </button>
              <button className="flex items-center gap-2 text-[#dbe5dd] font-semibold px-8 py-4 border border-[#3b4a41] rounded-lg hover:bg-[#19211d] transition-colors">
                View all studies
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#6effc0]/10 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-[#3b4a41]/30 bg-[#232c27] shadow-2xl">
              <div className="h-8 bg-[#2e3731] flex items-center px-4 gap-1.5 border-b border-[#3b4a41]/30">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#d7ead8]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#6effc0]/40" />
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw60IAS_YJenZkTfPvDVLndQRQTgO5_upCRBiGFs_m_kdpTsnyhSkgEynLfVTkgU3bIc6p9uRMnr3AzNbv4u41EZS70NTxBF_-CL1votnRnY-JyHE7LqVA4sFLJQq1fLFFDk-y-lsVb-vhQGjqQXSuK2cRAGTC7juBHPZU0tiAOIkDfKijcD2B-NI5P7AiBqzbVX6v7qEsdkkVTWq7srQcE1-ra0vuI7rf1wpBoUn4Ji1A1QrsxJjzf2toYEbQBYivuxH6NZ67WGk"
                alt="Dashboard Preview"
                className="w-full object-cover aspect-[4/3] opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT SNAPSHOT */}
      <section className="border-y border-[#3b4a41]/20 bg-[#08100c] py-8">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            ['Client', 'Sky Auto Auction'],
            ['Industry', 'Vehicle Auctions'],
            ['Region', 'Kurdistan, Iraq'],
            ['Platform', 'Auctara'],
            ['Go-live', 'Q4 2024'],
          ].map(([label, value]) => (
            <div key={label} className="space-y-1">
              <p className="text-[#bacbbf] text-[10px] uppercase tracking-[0.2em] font-semibold">{label}</p>
              <p className="text-[20px] font-semibold text-[#dbe5dd]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-[1440px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sticky sidebar nav */}
        <aside className="hidden md:block md:col-span-3">
          <nav className="sticky top-[120px] space-y-4">
            {[
              ['challenge', 'The Challenge'],
              ['solution', 'The Solution'],
              ['results', 'The Results'],
              ['outcome', 'Strategic Outcome'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                data-nav-link={id}
                className="group flex items-center gap-3 text-[#bacbbf] hover:text-[#6effc0] transition-colors"
              >
                <span
                  data-line
                  className="w-4 h-px bg-[#3b4a41] group-hover:bg-[#6effc0] group-hover:w-8 transition-all"
                />
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em]">{label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Narrative */}
        <div className="md:col-span-9 space-y-24">
          {/* CHALLENGE */}
          <section
            id="challenge"
            data-section="challenge"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-mt-32"
          >
            <div className="space-y-6">
              <h2 className="text-[40px] font-bold leading-[1.2] text-[#6effc0]">The Challenge</h2>
              <p className="text-base text-[#bacbbf] leading-relaxed">
                For years, Sky Auto Auction operated as a traditional physical auction house. While successful, their physical limitations were becoming a ceiling for growth. Bidders had to be on-site, inventory was tracked in disparate spreadsheets, and the high manual overhead made scaling impossible without a massive increase in headcount. They needed to digitize without losing the trust and urgency of live bidding.
              </p>
            </div>
            <div className="space-y-4">
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ background: 'rgba(17,26,20,0.8)', border: '1px solid #1E2E22', backdropFilter: 'blur(12px)' }}
                >
                  <span className="material-symbols-outlined text-[#ffb4ab] mt-1">remove_circle</span>
                  <div>
                    <h4 className="font-bold text-[#dbe5dd]">{c.title}</h4>
                    <p className="text-[13px] text-[#bacbbf]">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SOLUTION */}
          <section id="solution" data-section="solution" className="scroll-mt-32">
            <h2 className="text-[40px] font-bold leading-[1.2] text-[#6effc0] mb-12">The Solution</h2>
            <div className="border-l border-[#3b4a41]/30">
              {solutions.map((s, i) => (
                <div key={s.num} className={`relative pl-12 ${i < solutions.length - 1 ? 'pb-12' : ''}`}>
                  <div
                    className={`absolute -left-3.5 top-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      s.active
                        ? 'bg-[#6effc0] text-[#003824]'
                        : 'bg-[#19211d] border border-[#6effc0] text-[#6effc0]'
                    }`}
                  >
                    {s.num}
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#dbe5dd] mb-2">{s.title}</h3>
                  <p className="text-base text-[#bacbbf] max-w-2xl">{s.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* RESULTS */}
      <section
        id="results"
        data-section="results"
        className="bg-[#6effc0]/5 border-y border-[#6effc0]/20 py-24 scroll-mt-20"
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#6effc0]/20">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:px-4 py-8 md:py-0">
                <p className="text-4xl font-bold text-[#6effc0] mb-2">{s.value}</p>
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#dbe5dd]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-[#6effc0] text-6xl opacity-50 mb-8 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>
        <blockquote className="text-[40px] font-bold leading-tight italic text-[#dbe5dd] mb-12">
          "Auctara didn't just give us a website; they gave us a high-performance engine for our entire business. Our operational overhead dropped almost immediately while our auction volume tripled. We are now the regional standard for vehicle trading."
        </blockquote>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-[#19211d] border border-[#3b4a41] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWnL7MBMlaGlNWxZ4tJMtd0A7DWvGQhRU4Dai2ZgXK9nRe3zj2YnA6Miofm8rm47OQ1eJ5iW7hc7lgMhzL_eVZJRk_XzA2Q9oZMVU7-q4Qo9-MVkfP7-1h6KHh5hZ3E9bMbNcHp68ShUbeWpPQk5Hcw7lHIzuDrZNVcyzbTga2vFrg1_3hhm9u7m9oJGqyR8luIBBUHcvfM2XTeK5zF01pIbHm1R-a-l_c2wdoFY4oYxErDbEG1sJlKedqhchtn0RnKC7Q-savrWY"
              alt="CEO Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold text-[#dbe5dd]">Saman K.</p>
          <p className="text-[#bacbbf] text-sm">CEO, Sky Auto Auction</p>
        </div>
      </section>

      {/* STRATEGIC OUTCOME */}
      <section
        id="outcome"
        data-section="outcome"
        className="py-24 px-8 max-w-[1440px] mx-auto scroll-mt-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-[40px] font-bold leading-[1.2] text-[#6effc0]">Strategic Outcome</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-base text-[#bacbbf] leading-relaxed">
              The shift to Auctara marked a fundamental change in Sky Auto Auction's identity. No longer bound by the geography of their physical yard, they transitioned into a regional marketplace. By automating the verification and gate-pass logic, the company was able to redeploy staff from administrative data entry to strategic dealer acquisitions.
            </p>
            <p className="text-base text-[#bacbbf] leading-relaxed">
              Today, Sky Auto Auction handles 4x more vehicle turnover than their physical footprint could have ever supported. The digital transparency provided by integrated inspection reports has built unprecedented trust among buyers, leading to higher average bid values and faster payment settlements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-8 rounded-2xl bg-[#19211d] border border-[#3b4a41]/30">
                <h4 className="font-bold text-[#6effc0] mb-4">Digital-First Operations</h4>
                <p className="text-sm text-[#bacbbf]">The yard now functions primarily as a logistics hub rather than a sales floor, optimizing land use and security.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#19211d] border border-[#3b4a41]/30">
                <h4 className="font-bold text-[#6effc0] mb-4">Regional Expansion</h4>
                <p className="text-sm text-[#bacbbf]">Plans are underway to open secondary intake hubs across the country, all fed into the central Auctara engine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#151d19] border-t border-[#3b4a41]/20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 text-center relative z-10 space-y-8">
          <h2 className="text-[40px] font-bold text-[#dbe5dd] max-w-2xl mx-auto">
            Run an auction business? See what going digital looks like.
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button onClick={openModal} className="bg-[#00e5a0] text-[#003824] px-10 py-5 rounded-xl font-bold text-lg active:scale-95 transition-all hover:shadow-[0_0_30px_rgba(0,229,160,0.5)]">
              Request a demo
            </button>
            <button className="bg-[#2e3731] text-[#dbe5dd] px-10 py-5 rounded-xl font-bold text-lg border border-[#3b4a41]/30 hover:bg-[#323b36] transition-all">
              Talk to an expert
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
