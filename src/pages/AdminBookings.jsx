import { useMemo, useState } from 'react'
import { supabase } from '../utils/supabase'

function formatDate(value) {
  if (!value) return '-'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return date.toLocaleString()
}

export default function AdminBookings() {
  const [password, setPassword] = useState('')
  const [bookings, setBookings] = useState([])
  const [status, setStatus] = useState('locked')
  const [error, setError] = useState('')
  const [activePassword, setActivePassword] = useState('')

  const sortedBookings = useMemo(() => {
    return [...bookings].sort((a, b) => {
      const aTime = new Date(a.created_at || a.calendly_booked_at || 0).getTime()
      const bTime = new Date(b.created_at || b.calendly_booked_at || 0).getTime()
      return bTime - aTime
    })
  }, [bookings])

  async function loadBookings(secret) {
    setStatus('loading')
    setError('')

    const { data, error: invokeError } = await supabase.functions.invoke('admin-bookings', {
      body: { password: secret },
    })

    if (invokeError) {
      setStatus('locked')
      setBookings([])
      setActivePassword('')
      setError(invokeError.message || 'Could not load bookings.')
      return
    }

    setBookings(data?.bookings ?? [])
    setActivePassword(secret)
    setStatus('ready')
  }

  async function handleUnlock(e) {
    e.preventDefault()
    await loadBookings(password)
  }

  async function refresh() {
    if (!activePassword) return
    await loadBookings(activePassword)
  }

  function lockPanel() {
    setPassword('')
    setBookings([])
    setStatus('locked')
    setError('')
    setActivePassword('')
  }

  return (
    <div className="min-h-screen bg-[#08100c] text-[#dbe5dd] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6effc0] mb-3">
            Admin Panel
          </p>
          <h1 className="text-[32px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] mb-3">
            Demo Booking List
          </h1>
          <p className="text-sm md:text-base text-[#bacbbf] max-w-2xl">
            View entries saved from the `Book a demo` flow and track booking confirmation details.
          </p>
        </div>

        {status !== 'ready' ? (
          <div className="max-w-xl rounded-2xl border border-[#3b4a41] bg-[#0d1511] p-6 md:p-8">
            <form onSubmit={handleUnlock} className="space-y-5">
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#84958a] mb-2">
                  Admin password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-[#151d19] border border-[#3b4a41] rounded-lg px-4 py-3 text-[#dbe5dd] placeholder-[#84958a] text-sm focus:outline-none focus:border-[#6effc0] focus:ring-1 focus:ring-[#6effc0]/30 transition-all"
                />
              </div>

              {error && (
                <p className="text-sm text-[#ffb4ab]">{error}</p>
              )}

              <button
                type="submit"
                disabled={!password || status === 'loading'}
                className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${
                  password && status !== 'loading'
                    ? 'bg-[#00e5a0] text-[#003824] hover:bg-[#6effc0]'
                    : 'bg-[#1e2e22] text-[#3b4a41] cursor-not-allowed'
                }`}
              >
                {status === 'loading' ? 'Unlocking…' : 'Unlock admin panel'}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-[#bacbbf]">
                Showing <span className="text-[#6effc0] font-semibold">{sortedBookings.length}</span> booking entries
              </div>

              <div className="flex gap-3">
                <button
                  onClick={refresh}
                  className="px-5 py-2.5 rounded-lg border border-[#3b4a41] text-[#dbe5dd] text-sm font-semibold hover:border-[#6effc0]/40 hover:text-[#6effc0] transition-all"
                >
                  Refresh
                </button>
                <button
                  onClick={lockPanel}
                  className="px-5 py-2.5 rounded-lg border border-[#3b4a41] text-[#bacbbf] text-sm font-semibold hover:border-[#ffb4ab]/40 hover:text-[#ffb4ab] transition-all"
                >
                  Lock
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#3b4a41] bg-[#0d1511]">
              <table className="min-w-full text-sm">
                <thead className="bg-[#151d19] border-b border-[#3b4a41]">
                  <tr className="text-left text-[#84958a] uppercase tracking-[0.08em] text-[11px]">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Industry</th>
                    <th className="px-4 py-3">Volume</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Created</th>
                    <th className="px-4 py-3">Booked</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBookings.length > 0 ? (
                    sortedBookings.map((booking) => (
                      <tr key={booking.id ?? `${booking.email}-${booking.created_at}`} className="border-b border-[#1e2e22] align-top">
                        <td className="px-4 py-4">
                          <div className="font-semibold text-[#dbe5dd]">
                            {[booking.first_name, booking.last_name].filter(Boolean).join(' ') || '-'}
                          </div>
                          <div className="text-xs text-[#84958a] mt-1">ID: {booking.id ?? '-'}</div>
                        </td>
                        <td className="px-4 py-4 text-[#bacbbf]">{booking.email || '-'}</td>
                        <td className="px-4 py-4 text-[#bacbbf]">{booking.phone || '-'}</td>
                        <td className="px-4 py-4 text-[#bacbbf]">{booking.company || '-'}</td>
                        <td className="px-4 py-4 text-[#bacbbf]">{booking.industry || '-'}</td>
                        <td className="px-4 py-4 text-[#bacbbf]">{booking.volume || '-'}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                            booking.booking_status === 'scheduled'
                              ? 'bg-[#6effc0]/10 text-[#6effc0]'
                              : 'bg-[#2e3731] text-[#bacbbf]'
                          }`}>
                            {booking.booking_status || 'pending'}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-[#bacbbf]">{formatDate(booking.created_at)}</td>
                        <td className="px-4 py-4 text-[#bacbbf]">{formatDate(booking.calendly_booked_at)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="px-4 py-12 text-center text-[#84958a]">
                        No bookings found yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
