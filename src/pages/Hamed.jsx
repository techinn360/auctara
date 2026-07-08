import { useState } from 'react'
import Layout from '../components/layout/Layout'

const benefitTabs = [
  {
    id: 'importers',
    label: 'Importers & Auction Houses',
    title: 'Own your auction channel instead of paying third-party marketplace fees.',
    description:
      'Aucara gives auction operators and import networks a white-label vehicle auction portal they can launch under their own brand, rules, and revenue model.',
    bullets: [
      'Launch with your own brand, domain, and workflow.',
      'Stop paying recurring listing fees to outside marketplaces.',
      'Go live faster with a ready-made auction platform.',
    ],
  },
  {
    id: 'sellers',
    label: 'Sellers & Dealerships',
    title: 'List vehicles faster and drive stronger selling prices with competitive bidding.',
    description:
      'Dealerships and wholesale sellers can onboard stock quickly, present it professionally, and turn demand into better realized value.',
    bullets: [
      'Capture VIN, specs, media, and inspection details in one flow.',
      'Speed up listing operations with repeatable intake steps.',
      'Reach verified buyers through a clean, trackable sales process.',
    ],
  },
  {
    id: 'buyers',
    label: 'Buyers & Customers',
    title: 'Give buyers a transparent, trusted way to bid with confidence.',
    description:
      'Aucara helps buyers move faster with clear vehicle data, visible auction activity, and structured transaction records.',
    bullets: [
      'See live bid movement and real auction status.',
      'Review specs, media, and inspection details before bidding.',
      'Complete payment and release through secure documented workflows.',
    ],
  },
]

const coreFeatures = [
  {
    title: 'Vehicle Onboarding & Dynamic Payments',
    icon: 'car',
    body:
      'Multi-step listing flows capture VIN, specifications, condition, and media, while integrated payments handle listing fees or buyer deposits.',
    bullets: [
      'Structured vehicle intake',
      'VIN, specs, media, and inspection capture',
      'Integrated fees and deposit payments',
    ],
  },
  {
    title: 'Digital Gate Passes',
    icon: 'qr',
    body:
      'Once payment is complete, the system can flag the lot for release and generate a downloadable gate pass with a unique release reference.',
    bullets: [
      'Automated release approval',
      'Unique pass generation',
      'Secure yard release workflow',
    ],
  },
  {
    title: 'Complete Financial Engine',
    icon: 'wallet',
    body:
      'Give admins full financial visibility with invoices, payout summaries, ledger tracking, and export-ready reporting.',
    bullets: [
      'Buyer invoices and seller payouts',
      'Ledger-ready accounting structure',
      'PDF and CSV export reporting',
    ],
  },
  {
    title: 'Auction Mechanics: Pre-Bidding & Reserve Prices',
    icon: 'gavel',
    body:
      'Support pre-bids and reserve logic so sellers protect pricing while buyers engage before and during the live auction window.',
    bullets: [
      'Pre-bidding before live launch',
      'Reserve checks for sold or passed outcomes',
      'Clear auction state management',
    ],
  },
]

const roadmapItems = [
  {
    title: 'Time-Based Auctions',
    body: 'The architecture is ready to support countdown-based auction events with minimal rework.',
  },
  {
    title: 'Anti-Sniping Extensions',
    body: 'Extend closing time automatically when bids land near the end of an auction.',
  },
  {
    title: 'Live Ticking Status Updates',
    body: 'Support real-time countdown states and live auction status updates across the portal.',
  },
]

const techBadges = [
  'Node.js / Laravel Backend',
  'React / Next.js Frontend',
  'PostgreSQL / MySQL',
  'Secure RESTful APIs',
  'White-Label Ready',
]

const heroPills = [
  'Source Code Included',
  'Database Schema Included',
  'Admin Architecture Included',
  'Core Auction Logic Included',
]

function Icon({ name, className = 'w-5 h-5' }) {
  const shared = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
    className,
  }

  switch (name) {
    case 'car':
      return (
        <svg {...shared}>
          <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5" />
          <path d="M5 13h14a1 1 0 0 1 1 1v4h-2v-1H6v1H4v-4a1 1 0 0 1 1-1Z" />
          <circle cx="7.5" cy="15.5" r="1.5" />
          <circle cx="16.5" cy="15.5" r="1.5" />
        </svg>
      )
    case 'qr':
      return (
        <svg {...shared}>
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
          <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2zM16 16h2v2h-2z" />
        </svg>
      )
    case 'wallet':
      return (
        <svg {...shared}>
          <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H18a2 2 0 0 1 2 2v1H3z" />
          <path d="M3 9h17a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16.5z" />
          <path d="M16 13h5" />
        </svg>
      )
    case 'gavel':
      return (
        <svg {...shared}>
          <path d="M14 4l6 6" />
          <path d="M11 7l6 6" />
          <path d="M8 10l6 6" />
          <path d="M5 13l6 6" />
          <path d="M2 22h12" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...shared}>
          <path d="M12 3l7 3v5c0 4.5-2.9 8.5-7 10-4.1-1.5-7-5.5-7-10V6z" />
          <path d="M9.5 12.5l1.7 1.7 3.3-3.7" />
        </svg>
      )
    case 'building':
      return (
        <svg {...shared}>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-4h6v4" />
          <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
        </svg>
      )
    default:
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      )
  }
}

function SectionHeading({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl mb-12">
      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-[30px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#dbe5dd] mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-[#bacbbf] leading-relaxed">{body}</p>
    </div>
  )
}

function FeatureCard({ feature }) {
  return (
    <div
      className="rounded-[28px] border border-[#3b4a41] p-6 md:p-7"
      style={{ background: 'rgba(17, 26, 20, 0.8)', backdropFilter: 'blur(12px)' }}
    >
      <div className="w-12 h-12 rounded-2xl bg-[#19211d] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] mb-5">
        <Icon name={feature.icon} className="w-6 h-6" />
      </div>
      <h3 className="text-[22px] font-semibold leading-[1.25] text-[#dbe5dd] mb-3">{feature.title}</h3>
      <p className="text-sm md:text-base leading-relaxed text-[#bacbbf] mb-5">{feature.body}</p>
      <div className="space-y-3">
        {feature.bullets.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm text-[#dbe5dd]">
            <span className="w-2 h-2 rounded-full bg-[#6effc0] mt-1.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BenefitTabs() {
  const [activeTab, setActiveTab] = useState(benefitTabs[0].id)
  const current = benefitTabs.find((item) => item.id === activeTab) ?? benefitTabs[0]

  return (
    <div
      className="rounded-[32px] border border-[#3b4a41] p-6 md:p-8"
      style={{ background: 'rgba(17, 26, 20, 0.82)', backdropFilter: 'blur(12px)' }}
    >
      <div className="flex flex-wrap gap-3 mb-8">
        {benefitTabs.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#00e5a0] text-[#003824]'
                  : 'bg-[#19211d] text-[#bacbbf] border border-[#3b4a41] hover:border-[#6effc0]'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
        <div className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] p-6 md:p-7">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6effc0] mb-3">
            Value Proposition
          </p>
          <h3 className="text-[24px] md:text-[32px] font-semibold leading-[1.18] text-[#dbe5dd] mb-4">
            {current.title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#bacbbf]">
            {current.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {current.bullets.map((item) => (
            <div key={item} className="rounded-[22px] border border-[#3b4a41] bg-[#151d19] p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#19211d] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] shrink-0">
                  <Icon name="shield" className="w-5 h-5" />
                </div>
                <p className="text-sm md:text-base leading-relaxed text-[#dbe5dd]">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardPreview() {
  return (
    <div
      className="rounded-[32px] border border-[#1e2e22] p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] relative overflow-hidden"
      style={{
        background: 'rgba(17, 26, 20, 0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 40px -10px rgba(0, 229, 160, 0.12)',
      }}
    >
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,255,192,0.16) 0%, transparent 70%)' }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6effc0] mb-1">
              Live Auction Lane
            </p>
            <h3 className="text-[20px] font-semibold text-[#dbe5dd]">Aucara Control Center</h3>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[#19211d] border border-[#3b4a41] text-[#6effc0] text-xs font-semibold">
            Live Bidding
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] p-5">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#bacbbf] mb-2">Featured Lot</p>
                <h4 className="text-[22px] font-semibold text-[#dbe5dd] mb-2">
                  2020 Toyota Land Cruiser ZX
                </h4>
                <p className="text-sm text-[#bacbbf]">
                  Verified condition report, reserve-enabled sale, import-ready documentation.
                </p>
              </div>
              <div className="w-16 h-16 rounded-3xl bg-[linear-gradient(180deg,#223129,#151d19)] border border-[#3b4a41]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#3b4a41] bg-[#0d1511] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#bacbbf] mb-2">Current Bid</p>
                <p className="text-[28px] font-bold text-[#6effc0]">$48,500</p>
              </div>
              <div className="rounded-2xl border border-[#3b4a41] bg-[#0d1511] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#bacbbf] mb-2">Reserve Status</p>
                <p className="text-[28px] font-bold text-[#dbe5dd]">Met</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#bacbbf]">Recent Bid Activity</p>
              <p className="text-xs text-[#6effc0]">Synchronized in real time</p>
            </div>
            <div className="space-y-3">
              {[
                ['Bidder 214', '$47,200', '2m ago'],
                ['Bidder 091', '$47,900', '1m ago'],
                ['Bidder 188', '$48,500', 'now'],
              ].map(([bidder, amount, time]) => (
                <div
                  key={`${bidder}-${amount}`}
                  className="flex items-center justify-between rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#dbe5dd]">{bidder}</p>
                    <p className="text-xs text-[#bacbbf]">{time}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#6effc0]">{amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hamed() {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  function setField(key, value) {
    setInquiry((current) => ({ ...current, [key]: value }))
  }

  function handleInquirySubmit(e) {
    e.preventDefault()

    const subject = encodeURIComponent('Aucara Portal Inquiry')
    const body = encodeURIComponent(
      `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nOrganization: ${inquiry.organization}\n\nMessage:\n${inquiry.message}`
    )

    window.location.href = `mailto:acquisitions@skytradeauto.com?subject=${subject}&body=${body}`
  }

  return (
    <Layout>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(110,255,192,0.12), transparent 32%), linear-gradient(180deg, #0d1511 0%, #111a14 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6effc0] mb-4">Aucara</p>
              <h1 className="text-[38px] md:text-[62px] font-bold tracking-[-0.03em] leading-[1.02] text-[#dbe5dd] mb-6 max-w-4xl">
                Launch your own{' '}
                <span className="text-[#6effc0]">vehicle auction portal</span> with a complete,
                production-ready platform.
              </h1>
              <p className="text-base md:text-[20px] leading-[1.65] text-[#bacbbf] max-w-3xl mb-8">
                Aucara is a white-label auction platform for auction houses, dealership groups, JDM
                importers, and automotive entrepreneurs who want to go live fast with a secure,
                scalable portal under their own brand.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {heroPills.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full border border-[#3b4a41] bg-[#151d19] text-sm font-medium text-[#dbe5dd]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#core-features"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-[#00e5a0] text-[#003824] font-bold text-base hover:bg-[#6effc0] transition-colors"
                >
                  Explore Full Features
                </a>
                <a
                  href="#acquire"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-lg border border-[#3b4a41] text-[#dbe5dd] font-bold text-base hover:bg-[#19211d] transition-colors"
                >
                  Request Demo / Inquiry
                </a>
              </div>
            </div>

            <DashboardPreview />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Benefit Matrix"
            title="Who wins with Aucara"
            body="Aucara helps every side of the auction workflow move faster, sell better, and operate with more control."
          />
          <BenefitTabs />
        </div>
      </section>

      <section id="core-features" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Core Functional Features"
            title="Built-in modules that make the platform ready to sell"
            body="Aucara combines bidding, operations, payments, and release workflows in one product-ready portal."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Future Roadmap"
            title="A product you can grow after launch"
            body="Aucara is ready for today and structured for future timed-auction expansion."
          />

          <div
            className="rounded-[34px] border border-[#3b4a41] p-8 md:p-10 relative overflow-hidden"
            style={{ background: 'rgba(17, 26, 20, 0.82)', backdropFilter: 'blur(12px)' }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(110,255,192,0.14), transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#19211d] border border-[#3b4a41] text-[#6effc0] text-xs font-semibold tracking-[0.16em] uppercase mb-6">
                Future Expansion Pack
              </div>
              <h3 className="text-[30px] md:text-[44px] font-bold leading-[1.08] text-[#dbe5dd] mb-4">
                Time-Based Auctions
                <span className="text-[#6effc0]"> ready for next-stage rollout</span>
              </h3>
              <p className="text-sm md:text-base text-[#bacbbf] leading-relaxed max-w-3xl mb-8">
                The platform structure is ready for countdown auctions, anti-sniping extensions,
                and live ticking updates without a full rebuild.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {roadmapItems.map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] p-6">
                    <h4 className="text-[20px] font-semibold text-[#dbe5dd] mb-3">{item.title}</h4>
                    <p className="text-sm text-[#bacbbf] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Technical Stack"
            title="Built on a stack buyers can trust"
            body="Aucara is positioned as a deployable, customizable white-label product for serious auction operators."
          />

          <div className="flex flex-wrap gap-4 mb-12">
            {techBadges.map((item) => (
              <div
                key={item}
                className="px-5 py-3 rounded-2xl border border-[#3b4a41] bg-[#151d19] text-sm font-semibold text-[#dbe5dd]"
              >
                {item}
              </div>
            ))}
          </div>

          <div
            id="acquire"
            className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-6 items-start rounded-[34px] border border-[#3b4a41] p-6 md:p-8"
            style={{ background: 'rgba(17, 26, 20, 0.82)', backdropFilter: 'blur(12px)' }}
          >
            <div className="rounded-[28px] border border-[#3b4a41] bg-[#151d19] p-6 md:p-8">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0] mb-3">
                Final Action
              </p>
              <h3 className="text-[30px] md:text-[40px] font-bold leading-[1.08] text-[#dbe5dd] mb-4">
                Launch Aucara faster
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#bacbbf] mb-6">
                If you want to launch a vehicle auction brand without building from scratch, Aucara
                gives you a faster route to market with a production-ready foundation.
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#3b4a41] bg-[#19211d] p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#151d19] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] shrink-0">
                      <Icon name="building" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#dbe5dd] mb-1">Best fit buyers</p>
                      <p className="text-sm text-[#bacbbf] leading-relaxed">
                        Auction houses, dealership groups, automotive marketplaces, JDM importers,
                        and digital automotive founders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#3b4a41] bg-[#19211d] p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#151d19] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] shrink-0">
                      <Icon name="shield" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#dbe5dd] mb-1">Included in the solution</p>
                      <p className="text-sm text-[#bacbbf] leading-relaxed">
                        Product UI, portal architecture, feature modules, core auction logic, and a
                        white-label-ready base for commercialization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleInquirySubmit}
              className="rounded-[28px] border border-[#3b4a41] bg-[#151d19] p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Name
                  </label>
                  <input
                    value={inquiry.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder="Hamed Al Rashidi"
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={inquiry.email}
                    onChange={(e) => setField('email', e.target.value)}
                    placeholder="hamed@yourcompany.com"
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                  Organization
                </label>
                <input
                  value={inquiry.organization}
                  onChange={(e) => setField('organization', e.target.value)}
                  placeholder="Aucara Auto Auctions"
                  className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  value={inquiry.message}
                  onChange={(e) => setField('message', e.target.value)}
                  placeholder="We want to launch Aucara for our auction business and would like to discuss licensing, deployment, and handover scope."
                  className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#00e5a0] text-[#003824] py-4 font-bold text-base hover:bg-[#6effc0] transition-colors"
              >
                Start Your Inquiry
              </button>
              <p className="text-xs text-[#bacbbf] leading-relaxed mt-4">
                Submitting this form opens your email client with a structured inquiry for Aucara.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
