import { Routes, Route } from 'react-router-dom'
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies/salvage-cars" element={<SalvageCars />} />
      <Route path="/case-studies/luxury-auction" element={<LuxuryAuction />} />
      <Route path="/case-studies/alqaryah-auction" element={<AlqaryahAuction />} />
    </Routes>
  )
}
