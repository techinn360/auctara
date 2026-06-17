import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Platform', href: '#', active: true },
  { label: 'Solutions', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Pricing', href: '#' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 w-full z-50 bg-[#0d1511]/80 backdrop-blur-md border-b border-[#3b4a41]"
      >
        {/* Desktop: 3-column grid | Mobile: flex row */}
        <div className="flex md:grid md:grid-cols-3 items-center justify-between px-6 py-4 max-w-[1440px] mx-auto">
          {/* Logo — left */}
          <div>
            <a href="#" className="text-[#6effc0] font-bold text-xl tracking-tight">
              Auctara
            </a>
          </div>

          {/* Nav — center (desktop only) */}
          <div className="hidden md:flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? 'text-[#6effc0] font-bold border-b-2 border-[#6effc0] pb-1 text-base'
                    : 'text-[#bacbbf] font-medium hover:text-[#6effc0] transition-colors duration-200 text-base'
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions — right (desktop) + Hamburger (mobile) */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="#"
              className="hidden lg:block text-[#bacbbf] font-medium hover:text-[#6effc0] transition-colors text-base"
            >
              Take the 2-min tour
            </a>
            <motion.button
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.93 }}
              className="hidden md:block bg-[#00e5a0] text-[#003824] px-6 py-2.5 rounded-lg font-bold hover:bg-[#6effc0] transition-colors text-sm"
            >
              Book a demo
            </motion.button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#dbe5dd] hover:bg-[#19211d] transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden border-t border-[#3b4a41] bg-[#0d1511]"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 px-2 rounded-lg text-base font-medium transition-colors ${
                      link.active
                        ? 'text-[#6effc0]'
                        : 'text-[#bacbbf] hover:text-[#6effc0] hover:bg-[#19211d]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 mt-1 border-t border-[#3b4a41] flex flex-col gap-3">
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-2 text-base text-[#bacbbf] hover:text-[#6effc0] transition-colors"
                  >
                    Take the 2-min tour
                  </a>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-full bg-[#00e5a0] text-[#003824] py-3 rounded-lg font-bold text-base"
                  >
                    Book a demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Blurred backdrop — mobile only */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40"
            style={{ background: 'rgba(8,16,12,0.6)', backdropFilter: 'blur(6px)' }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
