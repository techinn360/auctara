import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import ProofStrip from './components/sections/ProofStrip'
import Assessment from './components/sections/Assessment'
import WhyAuctara from './components/sections/WhyAuctara'
import ProductPreview from './components/sections/ProductPreview'
import IndustryRouting from './components/sections/IndustryRouting'
import Pricing from './components/sections/Pricing'
import FinalCTA from './components/sections/FinalCTA'

export default function App() {
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
