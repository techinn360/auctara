import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import ProofStrip from './components/sections/ProofStrip'
import Assessment from './components/sections/Assessment'
import WhyAuctara from './components/sections/WhyAuctara'
import ProductPreview from './components/sections/ProductPreview'
import IndustryRouting from './components/sections/IndustryRouting'
import Pricing from './components/sections/Pricing'
import FinalCTA from './components/sections/FinalCTA'
import SalvageCars from './pages/SalvageCars'
import LuxuryAuction from './pages/LuxuryAuction'
import AlqaryahAuction from './pages/AlqaryahAuction'
import AdminBookings from './pages/AdminBookings'
import Hamed from './pages/Hamed'
import HamedNew from './pages/HamedNew'

function Home() {
  return (
    <Layout>
      <Hero />
      <ProofStrip />
      <Assessment />
      <WhyAuctara />
      <ProductPreview />
      <IndustryRouting />
      <Pricing />
      <FinalCTA />
    </Layout>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/salvage-cars" element={<SalvageCars />} />
        <Route path="/case-studies/luxury-auction" element={<LuxuryAuction />} />
        <Route path="/case-studies/alqaryah-auction" element={<AlqaryahAuction />} />
        <Route path="/admin" element={<AdminBookings />} />
        <Route path="/hamed" element={<Hamed />} />
        <Route path="/hamednew" element={<HamedNew />} />
      </Routes>
    </>
  )
}
