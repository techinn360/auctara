import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '../components/layout/Layout'
import { useDemo } from '../context/DemoModalContext'

const navItems = [
  { id: 'benefits', label: 'Benefits' },
  { id: 'industries', label: 'Who We Serve' },
  { id: 'workflow', label: 'How It Works' },
  { id: 'modules', label: 'Modules' },
  { id: 'showcase', label: 'Product' },
  { id: 'security', label: 'Security' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

const heroHighlights = [
  'Launch faster under your own brand',
  'Remove marketplace commissions',
  'Automate buyer, seller, and payment workflows',
  'Scale with enterprise controls and security',
]

const trustedLogos = [
  'Auction Group Placeholder',
  'Dealer Network Placeholder',
  'Fleet Remarketing Placeholder',
  'Insurance Auctions Placeholder',
  'Government Sales Placeholder',
]

const trustStats = [
  { value: '25+', label: 'Auction Businesses', note: 'Placeholder metric' },
  { value: '120,000+', label: 'Vehicles Listed', note: 'Placeholder metric' },
  { value: '3.5M+', label: 'Bids Processed', note: 'Placeholder metric' },
  { value: '98.9%', label: 'Platform Uptime', note: 'Placeholder metric' },
  { value: '15', label: 'Countries', note: 'Placeholder metric' },
]

const businessBenefits = [
  {
    title: 'Increase Auction Revenue',
    description:
      'Create more competitive bidding environments, expand buyer reach, and protect seller value with reserve and pre-bid controls.',
    features: ['Live auctions', 'Pre-bidding', 'Reserve prices'],
    icon: 'chart',
  },
  {
    title: 'Automate Payments',
    description:
      'Reduce manual follow-up with structured invoicing, payment collection, payout workflows, and settlement visibility.',
    features: ['Buyer invoices', 'Payment gateway', 'Seller settlements'],
    icon: 'wallet',
  },
  {
    title: 'Sell Vehicles Faster',
    description:
      'Move vehicles from intake to auction to release in a single operating flow that keeps inventory moving.',
    features: ['Vehicle onboarding', 'Inspection reports', 'Digital gate pass'],
    icon: 'car',
  },
  {
    title: 'Reduce Manual Operations',
    description:
      'Replace disconnected spreadsheets, manual approvals, and ad hoc release processes with one controlled system.',
    features: ['Workflow automation', 'Role management', 'Audit trails'],
    icon: 'workflow',
  },
  {
    title: 'Improve Buyer Engagement',
    description:
      'Give buyers a modern bidding experience with real-time activity, clear vehicle information, and account visibility.',
    features: ['Buyer portal', 'Auction room', 'Notifications'],
    icon: 'users',
  },
  {
    title: 'Launch Under Your Own Brand',
    description:
      'Own the marketplace experience, customer relationship, and revenue model with a white-label-ready platform.',
    features: ['Custom branding', 'Own domain', 'Flexible workflows'],
    icon: 'spark',
  },
]

const audienceCards = [
  {
    title: 'Vehicle Auction Houses',
    description: 'Run branded auctions, centralize operations, and grow buyer participation without relying on third-party marketplaces.',
    icon: 'building',
  },
  {
    title: 'Dealer Groups',
    description: 'Move wholesale stock faster with controlled listing, bidding, payment, and release workflows across multiple teams.',
    icon: 'car',
  },
  {
    title: 'Vehicle Importers',
    description: 'Launch a trusted buying channel with inspection visibility, documented transactions, and clear reserve controls.',
    icon: 'globe',
  },
  {
    title: 'Banks',
    description: 'Sell repossessed assets through a secure, traceable process with role-based controls and auditable records.',
    icon: 'bank',
  },
  {
    title: 'Insurance Companies',
    description: 'Remarket salvage inventory with faster intake, clearer condition data, and scalable digital auction workflows.',
    icon: 'shield',
  },
  {
    title: 'Fleet Companies',
    description: 'Dispose of fleet inventory efficiently with structured listings, buyer reach, and streamlined settlement processes.',
    icon: 'layers',
  },
  {
    title: 'Government Agencies',
    description: 'Support controlled public or private auction events with security, transparency, and clear release approvals.',
    icon: 'document',
  },
]

const workflowSteps = [
  'Seller Lists Vehicle',
  'Inspection Uploaded',
  'Vehicle Published',
  'Live Auction',
  'Buyers Bid',
  'Reserve Price Met',
  'Winner Pays',
  'Digital Gate Pass Generated',
  'Vehicle Released',
]

const modules = [
  {
    title: 'Vehicle Management',
    benefit: 'Organize inventory in one controlled system.',
    description: 'Centralize listings, specifications, documents, media, and operational status for every lot.',
    capabilities: ['VIN capture', 'Media library', 'Status management'],
    icon: 'car',
  },
  {
    title: 'Auction Management',
    benefit: 'Run events with more control and less admin overhead.',
    description: 'Configure auction rules, lanes, states, and approvals for each sale format.',
    capabilities: ['Auction setup', 'Lane controls', 'State management'],
    icon: 'gavel',
  },
  {
    title: 'Live Auctions',
    benefit: 'Drive competitive bidding in real time.',
    description: 'Give buyers a responsive live auction room with clear status and bid movement.',
    capabilities: ['Real-time bidding', 'Live activity feed', 'Bid visibility'],
    icon: 'pulse',
  },
  {
    title: 'Reserve Prices',
    benefit: 'Protect seller value during every sale.',
    description: 'Keep pricing controls in place so vehicles are only sold when business thresholds are met.',
    capabilities: ['Hidden reserves', 'Sold or passed logic', 'Seller safeguards'],
    icon: 'shield',
  },
  {
    title: 'Pre-Bidding',
    benefit: 'Build demand before the main event starts.',
    description: 'Let qualified buyers place bids early and create momentum before live auction begins.',
    capabilities: ['Early bid phase', 'Bid capture', 'Auction momentum'],
    icon: 'clock',
  },
  {
    title: 'Buyer Portal',
    benefit: 'Improve buyer trust and participation.',
    description: 'Offer account-level access to bids, purchases, payments, and vehicle information.',
    capabilities: ['Buyer dashboard', 'Bid history', 'Purchase tracking'],
    icon: 'users',
  },
  {
    title: 'Seller Portal',
    benefit: 'Give sellers better visibility and control.',
    description: 'Help sellers monitor inventory, auction outcomes, and financial progress from one place.',
    capabilities: ['Listing oversight', 'Auction results', 'Settlement visibility'],
    icon: 'building',
  },
  {
    title: 'Financial Management',
    benefit: 'Reduce friction in invoicing and reconciliation.',
    description: 'Handle buyer invoices, seller payouts, and financial tracking in structured workflows.',
    capabilities: ['Invoices', 'Payouts', 'Ledger support'],
    icon: 'wallet',
  },
  {
    title: 'Payment Gateway',
    benefit: 'Speed up collections and reduce payment delays.',
    description: 'Connect payment flows for fees, deposits, and completed vehicle purchases.',
    capabilities: ['Deposits', 'Online payments', 'Payment status'],
    icon: 'wallet',
  },
  {
    title: 'Reports',
    benefit: 'Give teams operational and financial clarity.',
    description: 'Track performance across listings, bids, sales, collections, and release workflows.',
    capabilities: ['Exportable reports', 'Operational reporting', 'Financial summaries'],
    icon: 'chart',
  },
  {
    title: 'Analytics',
    benefit: 'Make better decisions with performance visibility.',
    description: 'Measure demand, bidder activity, conversion trends, and auction outcomes across the business.',
    capabilities: ['KPI dashboards', 'Trend tracking', 'Performance insights'],
    icon: 'chart',
  },
  {
    title: 'Notifications',
    benefit: 'Keep buyers, sellers, and teams aligned.',
    description: 'Send timely updates for auction status, payments, approvals, and next actions.',
    capabilities: ['Email alerts', 'SMS ready', 'Workflow reminders'],
    icon: 'bell',
  },
  {
    title: 'Inventory Management',
    benefit: 'Track vehicles from intake to release.',
    description: 'Maintain a clear operational view of every lot as it moves through the auction lifecycle.',
    capabilities: ['Lot tracking', 'Inventory states', 'Release readiness'],
    icon: 'layers',
  },
  {
    title: 'Inspection Reports',
    benefit: 'Increase buyer confidence before bidding.',
    description: 'Attach condition reports, media, and specifications to improve trust and decision speed.',
    capabilities: ['Condition data', 'Media evidence', 'Vehicle detail pages'],
    icon: 'document',
  },
  {
    title: 'Digital Gate Pass',
    benefit: 'Release vehicles securely after settlement.',
    description: 'Generate controlled release references only when required approvals and payments are complete.',
    capabilities: ['Release approval', 'Gate pass generation', 'Yard release control'],
    icon: 'qr',
  },
  {
    title: 'Administration',
    benefit: 'Operate at enterprise scale with clear control.',
    description: 'Manage platform settings, permissions, operational policies, and business rules centrally.',
    capabilities: ['Platform controls', 'Configurable rules', 'Business settings'],
    icon: 'gear',
  },
  {
    title: 'Role Management',
    benefit: 'Control who can do what across the organization.',
    description: 'Use structured roles and permissions for staff, finance teams, approvers, and operators.',
    capabilities: ['Access levels', 'Approvals', 'Team controls'],
    icon: 'shield',
  },
  {
    title: 'Document Management',
    benefit: 'Keep important records organized and accessible.',
    description: 'Store transaction files, inspection documents, compliance records, and support material in one place.',
    capabilities: ['Document storage', 'Record access', 'Operational traceability'],
    icon: 'document',
  },
]

const showcaseItems = [
  { title: 'Buyer Dashboard', tag: 'Buyer Experience', description: 'Track bids, purchases, invoices, and auction opportunities in one account view.' },
  { title: 'Seller Dashboard', tag: 'Seller Experience', description: 'Monitor listings, reserve performance, sold lots, and settlement progress.' },
  { title: 'Admin Dashboard', tag: 'Operations', description: 'Manage lanes, approvals, inventory states, payments, and release controls.' },
  { title: 'Auction Room', tag: 'Live Bidding', description: 'Run high-visibility live auctions with activity feeds and reserve-aware bidding.' },
  { title: 'Vehicle Details', tag: 'Listing Quality', description: 'Present inspection data, media, specifications, and commercial details clearly.' },
  { title: 'Vehicle Listing', tag: 'Onboarding', description: 'Create structured listings quickly through guided intake workflows.' },
  { title: 'Reports', tag: 'Reporting', description: 'Review operational and financial outputs in export-ready summary views.' },
  { title: 'Analytics', tag: 'Performance', description: 'Surface KPIs for sales, bidder activity, inventory movement, and auction efficiency.' },
  { title: 'Mobile Application', tag: 'Mobile Access', description: 'Extend buyer and operator access through a mobile-friendly product layer.' },
]

const advantages = [
  'Own Your Platform',
  'No Marketplace Fees',
  'White Label Branding',
  'Cloud Ready',
  'API Ready',
  'Enterprise Security',
  'Arabic & English',
  'Modern UX',
  'Custom Workflows',
  'Scalable Architecture',
  'Dedicated Support',
]

const integrations = [
  'Payment Gateways',
  'SMS Providers',
  'Email Services',
  'VIN APIs',
  'Inspection Services',
  'ERP Systems',
  'CRM Systems',
  'Accounting Systems',
  'REST APIs',
  'Identity Providers',
]

const securityItems = [
  'SSL Encryption',
  'Role-Based Access Control',
  'Audit Logs',
  'Encrypted Storage',
  'Secure APIs',
  'Multi-Factor Authentication',
  'Cloud Infrastructure',
  'Automatic Backups',
  'Disaster Recovery',
  'Compliance Ready',
]

const testimonials = [
  {
    company: 'Placeholder Auction Group',
    quote: 'Auctara gave us a faster route to a branded digital auction model without the time and cost of building from zero.',
    challenge: 'Needed to modernize auction operations and reduce dependence on marketplace channels.',
    implementation: 'Configured branded workflows, buyer controls, and payment-driven release operations.',
    result: 'Placeholder result: improved operational control and stronger digital buyer engagement.',
  },
  {
    company: 'Placeholder Dealer Network',
    quote: 'The platform helped us centralize inventory, run more consistent digital auctions, and present a more professional buyer experience.',
    challenge: 'Wanted better control over wholesale inventory disposal across multiple teams.',
    implementation: 'Rolled out structured listing, reporting, and approval workflows across the group.',
    result: 'Placeholder result: faster listing cycles and a more scalable operating model.',
  },
  {
    company: 'Placeholder Fleet Remarketing',
    quote: 'Auctara aligned our operations, finance, and release process in one system, which made execution far easier.',
    challenge: 'Needed a controlled workflow from listing to payment to release.',
    implementation: 'Adopted the buyer, seller, financial, and gate pass modules in one rollout.',
    result: 'Placeholder result: lower admin friction and stronger operational visibility.',
  },
]

const roiItems = [
  'Reduce operating costs with fewer manual workflows',
  'Launch in weeks instead of building for months',
  'Increase buyer participation with a better digital experience',
  'Automate manual work across payments and release approvals',
  'Improve seller satisfaction with better visibility and control',
  'Increase revenue through stronger bidding and branded ownership',
]

const faqItems = [
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timelines depend on branding, configuration, integrations, and data migration scope, but the goal is a significantly faster route to launch than building a platform from scratch.',
  },
  {
    question: 'Can we use our own branding?',
    answer: 'Yes. Auctara is positioned as a white-label platform so you can present the product under your own brand identity.',
  },
  {
    question: 'Can we use our own domain?',
    answer: 'Yes. The platform can be deployed under your preferred domain and branded buyer-facing experience.',
  },
  {
    question: 'Can we host on-premise?',
    answer: 'Deployment options can be discussed during solution design based on your infrastructure, compliance, and procurement requirements.',
  },
  {
    question: 'Is source code available?',
    answer: 'Commercial packaging and source-code availability depend on the engagement model, but the platform is positioned as a complete solution for serious buyers.',
  },
  {
    question: 'Can it integrate with ERP?',
    answer: 'Yes. Auctara is designed to support integration planning with ERP, CRM, accounting, and other business systems.',
  },
  {
    question: 'Can workflows be customized?',
    answer: 'Yes. Operational workflows, approval logic, and business rules can be configured to fit different auction models.',
  },
  {
    question: 'Does it include mobile apps?',
    answer: 'The product direction supports mobile-ready experiences and mobile application pathways as part of the platform story.',
  },
  {
    question: 'Can we run private auctions?',
    answer: 'Yes. The platform can support controlled auction access models for private, restricted, or invited buyer groups.',
  },
  {
    question: 'How is pricing structured?',
    answer: 'Pricing can be shaped around deployment scope, modules, customization requirements, integrations, and service needs.',
  },
]

const journeySteps = [
  'Discovery',
  'Configuration',
  'Branding',
  'Data Migration',
  'Testing',
  'Training',
  'Go Live',
  'Support',
]

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

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
    case 'wallet':
      return (
        <svg {...shared}>
          <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H18a2 2 0 0 1 2 2v1H3z" />
          <path d="M3 9h17a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16.5z" />
          <path d="M16 13h5" />
        </svg>
      )
    case 'workflow':
      return (
        <svg {...shared}>
          <path d="M4 6h7v4H4zM13 14h7v4h-7zM4 14h7v4H4z" />
          <path d="M11 8h3a2 2 0 0 1 2 2v4" />
        </svg>
      )
    case 'users':
      return (
        <svg {...shared}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="3" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a3 3 0 0 1 0 5.74" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...shared}>
          <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
          <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8zM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8z" />
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
    case 'globe':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      )
    case 'bank':
      return (
        <svg {...shared}>
          <path d="M3 10l9-5 9 5" />
          <path d="M5 10v8M10 10v8M14 10v8M19 10v8M3 21h18" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...shared}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5M3 18l9 5 9-5" />
        </svg>
      )
    case 'document':
      return (
        <svg {...shared}>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M14 3v6h6M8 13h8M8 17h6" />
        </svg>
      )
    case 'gavel':
      return (
        <svg {...shared}>
          <path d="M14 4l6 6M11 7l6 6M8 10l6 6M5 13l6 6M2 22h12" />
        </svg>
      )
    case 'pulse':
      return (
        <svg {...shared}>
          <path d="M3 12h4l2-4 4 8 2-4h6" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'bell':
      return (
        <svg {...shared}>
          <path d="M15 17H5l1.4-1.4A2 2 0 0 0 7 14.2V11a5 5 0 0 1 10 0v3.2a2 2 0 0 0 .6 1.4L19 17h-4" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      )
    case 'qr':
      return (
        <svg {...shared}>
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
          <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2zM16 16h2v2h-2z" />
        </svg>
      )
    case 'gear':
      return (
        <svg {...shared}>
          <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 1 0 12 8.5z" />
          <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...shared}>
          <path d="M4 19h16" />
          <path d="M7 16V9M12 16V5M17 16v-4" />
        </svg>
      )
    default:
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}

function SectionHeading({ eyebrow, title, body, align = 'left' }) {
  return (
    <motion.div
      className={`max-w-3xl mb-12 ${align === 'center' ? 'mx-auto text-center' : ''}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-[30px] md:text-[46px] font-bold tracking-[-0.02em] leading-[1.08] text-[#dbe5dd] mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-[#bacbbf] leading-relaxed">{body}</p>
    </motion.div>
  )
}

function SurfaceCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-[28px] border border-[#3b4a41] ${className}`}
      style={{ background: 'rgba(17, 26, 20, 0.8)', backdropFilter: 'blur(12px)' }}
    >
      {children}
    </div>
  )
}

function ShowcaseModal({ item, onClose }) {
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] bg-[#04110b]/85 backdrop-blur-sm px-4 py-10 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="min-h-full flex items-center justify-center">
          <motion.div
            className="w-full max-w-4xl rounded-[32px] border border-[#3b4a41] bg-[#0d1511] p-6 md:p-8 relative"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 w-11 h-11 rounded-full border border-[#3b4a41] bg-[#151d19] text-[#dbe5dd] hover:border-[#6effc0]"
              aria-label="Close showcase"
            >
              x
            </button>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0] mb-3">
              {item.tag}
            </p>
            <h3 className="text-[30px] md:text-[40px] font-bold leading-[1.08] text-[#dbe5dd] mb-4">
              {item.title}
            </h3>
            <p className="text-base text-[#bacbbf] leading-relaxed max-w-2xl mb-8">{item.description}</p>
            <div className="rounded-[28px] border border-[#3b4a41] bg-[#151d19] p-5 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-5">
                <div className="rounded-[24px] border border-[#3b4a41] bg-[#0d1511] p-6 min-h-[280px] flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#bacbbf] mb-3">Screen Placeholder</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-[#3b4a41] bg-[#151d19] h-24" />
                      <div className="rounded-2xl border border-[#3b4a41] bg-[#151d19] h-24" />
                      <div className="rounded-2xl border border-[#3b4a41] bg-[#151d19] h-32 col-span-2" />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[#6effc0] text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#6effc0] animate-pulse" />
                    Premium product mockup
                  </div>
                </div>
                <div className="space-y-4">
                  {['Executive view', 'Operational clarity', 'Ready for demonstration'].map((line) => (
                    <div key={line} className="rounded-2xl border border-[#3b4a41] bg-[#151d19] p-5">
                      <p className="text-sm font-semibold text-[#dbe5dd] mb-1">{line}</p>
                      <p className="text-sm text-[#bacbbf] leading-relaxed">
                        Use this screen to explain how Auctara supports enterprise workflows and faster commercial execution.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-5 md:px-6 py-5 flex items-center justify-between gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-[#dbe5dd]">{item.question}</span>
        <span className="text-[#6effc0] text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-[#bacbbf] leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function HeroPreview() {
  return (
    <motion.div
      className="relative"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <SurfaceCard className="p-5 md:p-6 shadow-[0_0_40px_-10px_rgba(0,229,160,0.12)] relative overflow-hidden">
        <div
          className="absolute -top-16 -right-10 w-56 h-56 rounded-full opacity-80"
          style={{ background: 'radial-gradient(circle, rgba(110,255,192,0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6effc0] mb-1">
                Product Showcase
              </p>
              <h3 className="text-[22px] font-semibold text-[#dbe5dd]">Auctara Experience Layer</h3>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#19211d] border border-[#3b4a41] text-[#6effc0] text-xs font-semibold">
              Enterprise Ready
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ['Live Auction Screen', 'Current bid movement and reserve awareness'],
              ['Buyer Dashboard', 'Purchases, bidding, invoices, and status'],
              ['Seller Dashboard', 'Inventory, results, and settlements'],
              ['Admin Dashboard', 'Controls, approvals, and release management'],
              ['Analytics Dashboard', 'KPIs, performance, and visibility'],
              ['Mobile Application', 'On-the-go access for buyers and teams'],
            ].map(([title, body], index) => (
              <motion.div
                key={title}
                className={`rounded-[22px] border border-[#3b4a41] bg-[#151d19] p-4 ${index === 0 ? 'col-span-2' : ''}`}
                whileHover={{ y: -4 }}
              >
                <p className="text-sm font-semibold text-[#dbe5dd] mb-2">{title}</p>
                <div className={`rounded-2xl border border-[#3b4a41] bg-[#0d1511] ${index === 0 ? 'h-32' : 'h-24'} mb-3`} />
                <p className="text-xs text-[#bacbbf] leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SurfaceCard>
    </motion.div>
  )
}

export default function HamedNew() {
  const { openModal } = useDemo()
  const [selectedShowcase, setSelectedShowcase] = useState(null)
  const [openFaq, setOpenFaq] = useState(faqItems[0].question)
  const [leadForm, setLeadForm] = useState({
    fullName: '',
    company: '',
    businessEmail: '',
    phoneNumber: '',
    country: '',
    organizationType: '',
    vehiclesPerMonth: '',
    currentSolution: '',
    message: '',
  })

  function setField(key, value) {
    setLeadForm((current) => ({ ...current, [key]: value }))
  }

  function handleLeadSubmit(e) {
    e.preventDefault()

    const subject = encodeURIComponent('Auctara Homepage Inquiry')
    const body = encodeURIComponent(
      `Full Name: ${leadForm.fullName}
Company: ${leadForm.company}
Business Email: ${leadForm.businessEmail}
Phone Number: ${leadForm.phoneNumber}
Country: ${leadForm.country}
Organization Type: ${leadForm.organizationType}
Vehicles Per Month: ${leadForm.vehiclesPerMonth}
Current Auction Solution: ${leadForm.currentSolution}

Message:
${leadForm.message}`
    )

    window.location.href = `mailto:sales@auctara.com?subject=${subject}&body=${body}`
  }

  return (
    <Layout>
      <ShowcaseModal item={selectedShowcase} onClose={() => setSelectedShowcase(null)} />

      <button
        type="button"
        onClick={openModal}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#00e5a0] text-[#003824] px-5 py-4 font-bold shadow-[0_18px_40px_rgba(0,229,160,0.18)] hover:bg-[#6effc0] hidden sm:flex"
      >
        Book Demo
      </button>

      <section
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(110,255,192,0.13), transparent 32%), linear-gradient(180deg, #0d1511 0%, #111a14 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
          <div className="grid grid-cols-1 xl:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6effc0] mb-4">
                Auctara
              </p>
              <h1 className="text-[38px] md:text-[62px] font-bold tracking-[-0.03em] leading-[1.02] text-[#dbe5dd] mb-6 max-w-4xl">
                Launch your own branded vehicle auction marketplace without building from scratch.
              </h1>
              <p className="text-base md:text-[20px] leading-[1.65] text-[#bacbbf] max-w-3xl mb-8">
                Auctara helps auction businesses launch faster, own their brand, eliminate marketplace
                commissions, automate operations, and scale confidently on one modern platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-3xl">
                {heroHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#3b4a41] bg-[#151d19] px-4 py-3 text-sm text-[#dbe5dd]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#00e5a0] text-[#003824] font-bold text-base hover:bg-[#6effc0] transition-colors"
                >
                  Book a Demo
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('showcase')}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-[#3b4a41] text-[#dbe5dd] font-bold text-base hover:bg-[#19211d] transition-colors"
                >
                  Watch 3-Minute Product Tour
                </button>
              </div>

              <div className="flex flex-wrap gap-3 text-xs md:text-sm text-[#bacbbf]">
                {['White Label Auction Software', 'Vehicle Auction Software', 'Dealer Auction Platform', 'Auto Auction Management System'].map((term) => (
                  <span key={term} className="px-3 py-2 rounded-full border border-[#3b4a41] bg-[#151d19]">
                    {term}
                  </span>
                ))}
              </div>
            </motion.div>

            <HeroPreview />
          </div>
        </div>
      </section>

      <section className="sticky top-[72px] z-40 px-6 py-4 border-y border-[#223129] bg-[#0d1511]/90 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="hidden lg:flex flex-wrap gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full text-sm font-medium text-[#bacbbf] border border-[#3b4a41] bg-[#151d19] hover:text-[#dbe5dd] hover:border-[#6effc0]"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={openModal}
            className="ml-auto rounded-lg bg-[#00e5a0] text-[#003824] px-5 py-3 font-bold text-sm hover:bg-[#6effc0]"
          >
            Book a Demo
          </button>
        </div>
      </section>

      <section id="trust" className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Trusted By"
            title="Built to earn trust with enterprise buyers"
            body="The homepage should prove credibility quickly with recognizable buyer categories, commercial positioning, and clearly marked placeholder proof points."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
            {trustedLogos.map((logo) => (
              <motion.div
                key={logo}
                className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] px-5 py-6 text-center text-sm font-semibold text-[#dbe5dd]"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {logo}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {trustStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-[26px] border border-[#3b4a41] bg-[#151d19] p-5 md:p-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <p className="text-[32px] md:text-[42px] font-bold text-[#6effc0] mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-[#dbe5dd] mb-1">{stat.label}</p>
                <p className="text-xs text-[#bacbbf]">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Business Benefits"
            title="Why executive buyers should care before they review modules"
            body="Auctara should first sell business outcomes: more revenue, less operational friction, stronger buyer trust, and a faster route to market."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {businessBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-6 md:p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#19211d] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] mb-5">
                    <Icon name={benefit.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#dbe5dd] mb-3">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-[#bacbbf] leading-relaxed mb-5">{benefit.description}</p>
                  <div className="space-y-3">
                    {benefit.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-[#dbe5dd]">
                        <span className="w-2 h-2 rounded-full bg-[#6effc0] mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for the auction models enterprise buyers already run"
            body="Each audience card should explain how Auctara solves a specific business challenge, not just list a market category."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {audienceCards.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-6 md:p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#19211d] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] mb-5">
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#dbe5dd] mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#bacbbf] leading-relaxed">{item.description}</p>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="How It Works"
            title="Show the end-to-end business workflow, not just isolated screens"
            body="Executive buyers want to understand how Auctara supports the entire vehicle auction lifecycle from seller intake to secure release."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-9 gap-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step}
                className="relative"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-5 h-full">
                  <div className="w-10 h-10 rounded-full bg-[#00e5a0] text-[#003824] font-bold flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-[#dbe5dd] leading-relaxed">{step}</p>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Platform Modules"
            title="Keep the module story, but tie every module to business value"
            body="This section should reinforce that Auctara is a complete auction management platform with operational, commercial, and security depth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules.map((module) => (
              <motion.div
                key={module.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-6 md:p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#19211d] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] mb-5">
                    <Icon name={module.icon} className="w-6 h-6" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#6effc0] mb-2">Business Benefit</p>
                  <h3 className="text-[22px] font-semibold text-[#dbe5dd] mb-2">{module.title}</h3>
                  <p className="text-sm font-semibold text-[#dbe5dd] mb-3">{module.benefit}</p>
                  <p className="text-sm md:text-base text-[#bacbbf] leading-relaxed mb-5">{module.description}</p>
                  <div className="space-y-3">
                    {module.capabilities.map((capability) => (
                      <div key={capability} className="flex items-start gap-3 text-sm text-[#dbe5dd]">
                        <span className="w-2 h-2 rounded-full bg-[#6effc0] mt-1.5 shrink-0" />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Product Showcase"
            title="Use premium product views to make the platform feel real"
            body="A strong screenshot section helps buyers connect the value story to the actual product experience across buyers, sellers, operators, and executives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {showcaseItems.map((item) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setSelectedShowcase(item)}
                className="text-left"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-5 h-full hover:border-[#6effc0] transition-colors">
                  <div className="rounded-[24px] border border-[#3b4a41] bg-[#0d1511] h-56 mb-5 p-4 flex flex-col justify-between">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-[#3b4a41] bg-[#151d19] h-16" />
                      <div className="rounded-2xl border border-[#3b4a41] bg-[#151d19] h-16" />
                    </div>
                    <div className="rounded-2xl border border-[#3b4a41] bg-[#151d19] h-24" />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6effc0] mb-2">{item.tag}</p>
                  <h3 className="text-[22px] font-semibold text-[#dbe5dd] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#bacbbf] leading-relaxed">{item.description}</p>
                </SurfaceCard>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Why Choose Auctara?"
            title="Answer the comparison question directly"
            body="Enterprise buyers should quickly understand why Auctara is the better fit than general marketplaces or disconnected in-house tools."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {advantages.map((item) => (
              <motion.div
                key={item}
                className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] px-5 py-4 text-[#dbe5dd] font-semibold"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Integrations"
            title="Show buyers the platform can fit their environment"
            body="Use integration placeholders to reassure enterprise stakeholders that Auctara can connect with the systems they already use."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {integrations.map((item) => (
              <motion.div
                key={item}
                className="rounded-[24px] border border-[#3b4a41] bg-[#151d19] px-5 py-6 text-center text-sm font-semibold text-[#dbe5dd]"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Security"
            title="Reassure enterprise buyers with operational and technical controls"
            body="Security and governance should be visible on the homepage because they are part of the buying decision, not a footnote."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {securityItems.map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-5 h-full">
                  <div className="w-10 h-10 rounded-2xl bg-[#19211d] border border-[#3b4a41] flex items-center justify-center text-[#6effc0] mb-4">
                    <Icon name="shield" className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-[#dbe5dd]">{item}</p>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Customer Success Stories"
            title="Premium proof points for decision makers"
            body="Use placeholder stories to show how challenge, implementation, and result should be framed once real references are ready."
          />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <motion.div
                key={item.company}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-6 md:p-7 h-full">
                  <div className="rounded-2xl border border-[#3b4a41] bg-[#151d19] px-4 py-3 inline-block text-sm font-semibold text-[#dbe5dd] mb-5">
                    {item.company}
                  </div>
                  <p className="text-lg leading-relaxed text-[#dbe5dd] mb-6">"{item.quote}"</p>
                  <div className="space-y-4 text-sm text-[#bacbbf]">
                    <div>
                      <p className="font-semibold text-[#dbe5dd] mb-1">Business Challenge</p>
                      <p>{item.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#dbe5dd] mb-1">Implementation</p>
                      <p>{item.implementation}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#dbe5dd] mb-1">Business Result</p>
                      <p>{item.result}</p>
                    </div>
                  </div>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="roi" className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="ROI"
            title="Explain the measurable business upside"
            body="The homepage should make it easy for buyers to picture the return: faster launch, lower operating costs, more efficiency, and better commercial performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {roiItems.map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-5 md:p-6 h-full">
                  <p className="text-lg font-semibold text-[#dbe5dd] leading-relaxed">{item}</p>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title="Remove objections before the sales conversation starts"
            body="A strong FAQ section reduces uncertainty, frames buyer expectations, and supports qualification before the demo request."
            align="center"
          />

          <div className="space-y-4">
            {faqItems.map((item) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openFaq === item.question}
                onToggle={() => setOpenFaq(openFaq === item.question ? '' : item.question)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            eyebrow="Implementation Journey"
            title="Give buyers confidence in the rollout path"
            body="Make implementation feel guided, structured, and lower risk by showing the steps from discovery through ongoing support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SurfaceCard className="p-5 h-full">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#6effc0] mb-3">Step {index + 1}</p>
                  <p className="text-lg font-semibold text-[#dbe5dd]">{step}</p>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#111a14]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <SurfaceCard className="p-6 md:p-8">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0] mb-3">
                  Final CTA
                </p>
                <h2 className="text-[34px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] text-[#dbe5dd] mb-4">
                  Ready to launch your vehicle auction platform?
                </h2>
                <p className="text-sm md:text-base text-[#bacbbf] leading-relaxed mb-8">
                  Speak with our solution consultants to discover how Auctara can transform your auction business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-[#00e5a0] text-[#003824] font-bold text-base hover:bg-[#6effc0]"
                  >
                    Schedule Demo
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact-form')}
                    className="inline-flex items-center justify-center px-7 py-4 rounded-lg border border-[#3b4a41] text-[#dbe5dd] font-bold text-base hover:bg-[#19211d]"
                  >
                    Request Pricing
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    'High-converting enterprise messaging',
                    'Business-first value communication',
                    'A stronger path to qualified demo requests',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#dbe5dd]">
                      <span className="w-2 h-2 rounded-full bg-[#6effc0] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            </motion.div>

            <motion.form
              id="contact-form"
              onSubmit={handleLeadSubmit}
              className="rounded-[32px] border border-[#3b4a41] bg-[#151d19] p-6 md:p-8"
              style={{ backdropFilter: 'blur(12px)' }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Full Name
                  </label>
                  <input
                    value={leadForm.fullName}
                    onChange={(e) => setField('fullName', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Company
                  </label>
                  <input
                    value={leadForm.company}
                    onChange={(e) => setField('company', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    value={leadForm.businessEmail}
                    onChange={(e) => setField('businessEmail', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Phone Number
                  </label>
                  <input
                    value={leadForm.phoneNumber}
                    onChange={(e) => setField('phoneNumber', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="+971 00 000 0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Country
                  </label>
                  <input
                    value={leadForm.country}
                    onChange={(e) => setField('country', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Organization Type
                  </label>
                  <input
                    value={leadForm.organizationType}
                    onChange={(e) => setField('organizationType', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="Auction house, dealer group, bank, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Vehicles Per Month
                  </label>
                  <input
                    value={leadForm.vehiclesPerMonth}
                    onChange={(e) => setField('vehiclesPerMonth', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="Estimated monthly vehicle volume"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                    Current Auction Solution
                  </label>
                  <input
                    value={leadForm.currentSolution}
                    onChange={(e) => setField('currentSolution', e.target.value)}
                    className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0]"
                    placeholder="Marketplace, internal system, manual workflow, etc."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#bacbbf] mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  value={leadForm.message}
                  onChange={(e) => setField('message', e.target.value)}
                  className="w-full rounded-2xl border border-[#3b4a41] bg-[#0d1511] px-4 py-3 text-[#dbe5dd] placeholder-[#6b7c72] focus:outline-none focus:border-[#6effc0] resize-none"
                  placeholder="Tell us about your auction model, goals, and what you need from the platform."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#00e5a0] text-[#003824] py-4 font-bold text-base hover:bg-[#6effc0] transition-colors"
              >
                Request Pricing
              </button>
              <p className="text-xs text-[#bacbbf] leading-relaxed mt-4">
                Submitting this form opens your email client with a qualified Auctara inquiry.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
