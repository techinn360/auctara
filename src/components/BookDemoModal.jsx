import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useDemo } from '../context/DemoModalContext'

const STEPS = ['You', 'Business', 'Schedule']

// Set VITE_CALENDLY_URL in .env to override the default booking page.
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/techinn360-com'

const industries = [
  { value: 'salvage', label: 'Salvage Car Auction', icon: 'minor_crash' },
  { value: 'premium', label: 'Premium / Luxury Auction', icon: 'diamond' },
  { value: 'government', label: 'Government Auction', icon: 'account_balance' },
  { value: 'equipment', label: 'Heavy Equipment Auction', icon: 'construction' },
  { value: 'real-estate', label: 'Real Estate Auction', icon: 'apartment' },
]

const volumes = [
  { value: '1-10', label: '1 – 10 lots/mo' },
  { value: '11-50', label: '11 – 50 lots/mo' },
  { value: '51-200', label: '51 – 200 lots/mo' },
  { value: '200+', label: '200 + lots/mo' },
]

let calendlyScriptPromise = null
function loadCalendlyScript() {
  if (window.Calendly) return Promise.resolve()
  if (!calendlyScriptPromise) {
    calendlyScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }
  return calendlyScriptPromise
}

function CalendlyEmbed({ url, prefill, onScheduled }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    function handleMessage(e) {
      if (typeof e.origin === 'string' && e.origin.endsWith('calendly.com') && e.data?.event === 'calendly.event_scheduled') {
        onScheduled(e.data.payload)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [onScheduled])

  useEffect(() => {
    let cancelled = false
    loadCalendlyScript()
      .then(() => {
        if (cancelled || !containerRef.current) return
        containerRef.current.innerHTML = ''
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill,
        })
        setStatus('ready')
      })
      .catch(() => !cancelled && setStatus('error'))
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return (
    <div className="relative rounded-xl border border-[#3b4a41] overflow-hidden bg-[#151d19]">
      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#84958a]">
          <span className="material-symbols-outlined animate-spin text-[#6effc0] text-3xl">progress_activity</span>
          <p className="text-xs font-semibold tracking-widest uppercase">Loading calendar…</p>
        </div>
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6">
          <span className="material-symbols-outlined text-[#6effc0] text-3xl">wifi_off</span>
          <p className="text-sm text-[#bacbbf]">
            Couldn't load the calendar. Please check your connection, or email us at{' '}
            <a href="mailto:demo@auctara.com" className="text-[#6effc0]">demo@auctara.com</a>
          </p>
        </div>
      )}
      <div ref={containerRef} style={{ height: 'min(620px, 62vh)', minHeight: 420 }} />
    </div>
  )
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }),
}

const inputCls =
  'w-full bg-[#151d19] border border-[#3b4a41] rounded-lg px-4 py-3 text-[#dbe5dd] placeholder-[#84958a] text-sm focus:outline-none focus:border-[#6effc0] focus:ring-1 focus:ring-[#6effc0]/30 transition-all'

const labelCls = 'block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#84958a] mb-1.5'

function Field({ label, children }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  )
}

export default function BookDemoModal() {
  const { open, closeModal } = useDemo()
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [done, setDone] = useState(false)

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    industry: '', company: '', volume: '',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const pick = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  function next() { setDir(1); setStep((s) => s + 1) }
  function back() { setDir(-1); setStep((s) => s - 1) }

  function canNext() {
    if (step === 0) return form.firstName && form.lastName && form.email && form.phone
    if (step === 1) return form.industry && form.company && form.volume
    return true
  }

  function reset() {
    setStep(0); setDir(1); setDone(false)
    setForm({ firstName: '', lastName: '', email: '', phone: '', industry: '', company: '', volume: '' })
  }

  function handleClose() {
    closeModal()
    setTimeout(reset, 400)
  }

  if (!open) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className={`relative w-full ${step === 2 && !done ? 'max-w-2xl' : 'max-w-lg'} pointer-events-auto rounded-2xl border border-[#3b4a41] overflow-hidden shadow-2xl transition-all duration-300`}
              style={{ background: '#0d1511' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top, rgba(0,229,160,0.12) 0%, transparent 70%)' }}
              />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0]">
                    {done ? 'All set!' : `Step ${step + 1} of ${STEPS.length}`}
                  </p>
                  <h2 className="text-xl font-bold text-[#dbe5dd] mt-0.5">
                    {done ? 'Demo booked 🎉' : step === 0 ? 'Tell us about yourself' : step === 1 ? 'Your auction business' : 'Pick a date & time'}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#84958a] hover:text-[#dbe5dd] hover:bg-[#19211d] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              {/* Progress bar */}
              {!done && (
                <div className="relative z-10 px-6 mb-6">
                  <div className="flex gap-1.5">
                    {STEPS.map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-1 flex-1 rounded-full"
                        style={{ background: i <= step ? '#6effc0' : '#1e2e22' }}
                        animate={{ background: i <= step ? '#6effc0' : '#1e2e22' }}
                        transition={{ duration: 0.4 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5">
                    {STEPS.map((label, i) => (
                      <span key={label} className={`text-[10px] font-semibold tracking-widest uppercase ${i <= step ? 'text-[#6effc0]' : 'text-[#3b4a41]'}`}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="relative z-10 px-6 pb-6 overflow-hidden">
                <AnimatePresence mode="wait" custom={dir}>
                  {done ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="py-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-20 h-20 rounded-full bg-[#6effc0]/10 border-2 border-[#6effc0] flex items-center justify-center mx-auto mb-6"
                      >
                        <span className="material-symbols-outlined text-[#6effc0] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </motion.div>
                      <h3 className="text-lg font-bold text-[#dbe5dd] mb-2">You're on the calendar, {form.firstName}!</h3>
                      <p className="text-sm text-[#bacbbf] mb-8">
                        A calendar invite with the meeting link is on its way to <span className="text-[#6effc0]">{form.email}</span>
                      </p>
                      <div className="p-4 bg-[#151d19] rounded-xl border border-[#3b4a41] text-left mb-6">
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#84958a] mb-3">What to expect</p>
                        {[
                          'Live walkthrough of your auction type',
                          'Custom pricing for your volume',
                          'Go-live timeline & onboarding plan',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-[#bacbbf] mb-2 last:mb-0">
                            <span className="material-symbols-outlined text-[#6effc0] text-base">check</span>
                            {item}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={handleClose}
                        className="w-full bg-[#00e5a0] text-[#003824] py-3 rounded-lg font-bold text-sm hover:bg-[#6effc0] transition-colors"
                      >
                        Done
                      </button>
                    </motion.div>
                  ) : step === 0 ? (
                    <motion.div key="step0" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="First name">
                          <input className={inputCls} placeholder="Sarah" value={form.firstName} onChange={set('firstName')} />
                        </Field>
                        <Field label="Last name">
                          <input className={inputCls} placeholder="Al-Rashidi" value={form.lastName} onChange={set('lastName')} />
                        </Field>
                      </div>
                      <Field label="Work email">
                        <input className={inputCls} type="email" placeholder="sarah@auctionco.com" value={form.email} onChange={set('email')} />
                      </Field>
                      <Field label="Phone number">
                        <input className={inputCls} type="tel" placeholder="+971 50 000 0000" value={form.phone} onChange={set('phone')} />
                      </Field>
                    </motion.div>
                  ) : step === 1 ? (
                    <motion.div key="step1" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-4">
                      <Field label="Industry to serve">
                        <div className="space-y-2">
                          {industries.map((ind) => (
                            <button
                              key={ind.value}
                              onClick={() => pick('industry', ind.value)}
                              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all ${
                                form.industry === ind.value
                                  ? 'border-[#6effc0] bg-[#6effc0]/8 text-[#6effc0]'
                                  : 'border-[#3b4a41] bg-[#151d19] text-[#bacbbf] hover:border-[#6effc0]/40'
                              }`}
                            >
                              <span className={`material-symbols-outlined text-base ${form.industry === ind.value ? 'text-[#6effc0]' : 'text-[#84958a]'}`}>{ind.icon}</span>
                              {ind.label}
                              {form.industry === ind.value && (
                                <span className="material-symbols-outlined text-[#6effc0] ml-auto text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </Field>
                      <Field label="Company name">
                        <input className={inputCls} placeholder="Gulf Motors Auction LLC" value={form.company} onChange={set('company')} />
                      </Field>
                      <Field label="Monthly auction volume">
                        <div className="grid grid-cols-2 gap-2">
                          {volumes.map((v) => (
                            <button
                              key={v.value}
                              onClick={() => pick('volume', v.value)}
                              className={`px-3 py-2.5 rounded-lg border text-xs font-semibold transition-all ${
                                form.volume === v.value
                                  ? 'border-[#6effc0] bg-[#6effc0]/10 text-[#6effc0]'
                                  : 'border-[#3b4a41] bg-[#151d19] text-[#bacbbf] hover:border-[#6effc0]/40'
                              }`}
                            >
                              {v.label}
                            </button>
                          ))}
                        </div>
                      </Field>
                    </motion.div>
                  ) : (
                    <motion.div key="step2" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-4">
                      <CalendlyEmbed
                        url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=151d19&text_color=dbe5dd&primary_color=00e5a0`}
                        prefill={{
                          name: `${form.firstName} ${form.lastName}`.trim(),
                          email: form.email,
                          customAnswers: {
                            a1: form.phone,
                            a2: `Company: ${form.company} | Industry: ${form.industry} | Volume: ${form.volume}`,
                          },
                        }}
                        onScheduled={() => setDone(true)}
                      />
                      <div className="p-3 bg-[#151d19] rounded-lg border border-[#3b4a41] flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#6effc0] text-base mt-0.5">info</span>
                        <p className="text-[12px] text-[#bacbbf] leading-relaxed">
                          Pick any open slot — you'll receive a calendar invite and meeting link by email as soon as you confirm.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer nav */}
                {!done && (
                  <div className={`flex gap-3 mt-6 ${step > 0 ? 'justify-between' : 'justify-end'}`}>
                    {step > 0 && (
                      <button
                        onClick={back}
                        className="px-5 py-2.5 rounded-lg border border-[#3b4a41] text-[#bacbbf] text-sm font-semibold hover:border-[#6effc0]/40 hover:text-[#dbe5dd] transition-all"
                      >
                        ← Back
                      </button>
                    )}
                    {step < STEPS.length - 1 && (
                      <motion.button
                        onClick={next}
                        disabled={!canNext()}
                        whileHover={canNext() ? { scale: 0.97 } : {}}
                        whileTap={canNext() ? { scale: 0.94 } : {}}
                        className={`flex-1 md:flex-none md:min-w-[140px] py-2.5 px-6 rounded-lg font-bold text-sm transition-all ${
                          canNext()
                            ? 'bg-[#00e5a0] text-[#003824] hover:bg-[#6effc0]'
                            : 'bg-[#1e2e22] text-[#3b4a41] cursor-not-allowed'
                        }`}
                      >
                        Continue →
                      </motion.button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
