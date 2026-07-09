import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0d1511] text-[#dbe5dd]">
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  )
}
