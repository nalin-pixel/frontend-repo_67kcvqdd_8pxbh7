import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2, Sprout, Leaf, Satellite, CloudSun, Sparkles } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/60 bg-emerald-50/60 px-3 py-1 text-xs font-medium text-emerald-700">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-4 shadow-sm">
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600 mt-1">{label}</div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </motion.div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const benefits = [
    {
      icon: Sprout,
      title: 'Higher yields, fewer inputs',
      text: 'AI-driven recommendations reduce fertilizer and water use while boosting output across row crops, orchards, and greenhouses.'
    },
    {
      icon: Satellite,
      title: 'Field-level intelligence',
      text: 'Fuses satellite, drone, and in-field sensors to detect stress early and prescribe the next best action per zone.'
    },
    {
      icon: CloudSun,
      title: 'Climate resilience',
      text: 'Plan around weather and disease pressure with predictive models that adapt to your local conditions.'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-25 via-white to-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/50 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-lg">
            <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">AgriMind</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#product" className="text-gray-700 hover:text-gray-900">Product</a>
            <a href="#benefits" className="text-gray-700 hover:text-gray-900">Benefits</a>
            <a href="#use-cases" className="text-gray-700 hover:text-gray-900">Use cases</a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
            <a href="#apply" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 font-medium hover:bg-gray-800">
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden" id="home">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlay gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge>YC 2025-ready • Pilot slots open</Badge>
            </div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
            >
              Agriculture, upgraded by AI
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg text-gray-700 leading-relaxed"
            >
              AgriMind is your autonomous agronomist: a decision engine that turns satellite, drone, and ground data into timely, precise actions. Grow more with less—no dashboards required.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8"
            >
              <form onSubmit={handleSubmit} className="w-full sm:flex sm:items-center sm:gap-3">
                <label htmlFor="email" className="sr-only">Work email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  className="w-full sm:w-80 rounded-lg border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Request early access <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-600">Free pilot for the first 5 growers • US & LATAM • Start in under 7 days</p>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat label="Input savings" value="12–28%" />
              <Stat label="Yield lift" value="5–15%" />
              <Stat label="Time saved" value="6+ hrs/wk" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Built for operators, not spreadsheets</h2>
            <p className="mt-3 text-gray-600">Hands-free agronomy that tells you what to do next, not just what happened.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <FeatureCard key={b.title} icon={b.icon} title={b.title}>{b.text}</FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="relative py-20 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge>How it works</Badge>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">From raw pixels to precise actions</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Ingest satellite, drone, soil and weather data automatically',
                  'Detect stress and variability at the zone level',
                  'Generate rate maps and task lists for equipment and crews',
                  'Close the loop with outcomes to improve every week',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3">
                <a href="#apply" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">
                  Book a 20‑min intro <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#faq" className="text-gray-800 hover:text-gray-900 underline underline-offset-4">Security & data ownership</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="h-full w-full bg-[radial-gradient(80%_60%_at_50%_0%,#bbf7d0_0%,transparent_60%),conic-gradient(from_180deg_at_50%_50%,#ecfccb_0%,transparent_60%)] opacity-70" />
              </div>
              <div className="-mt-10 ml-6 w-3/4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900"><Leaf className="h-4 w-4 text-emerald-600"/> Variable rate map</div>
                <p className="mt-2 text-sm text-gray-600">Autogenerated prescription rates exported to John Deere and CNH.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">Where AgriMind shines first</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Irrigation optimization', text: 'Cut water use while maintaining yield with zone-level evapotranspiration and soil moisture models.' },
              { title: 'Nutrient management', text: 'Right rate, right place. Variable-rate nitrogen and potassium with measurable savings.' },
              { title: 'Disease & stress scouting', text: 'Proactive alerts route crews before issues spread, reducing loss events.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900">{c.title}</h4>
                <p className="mt-2 text-gray-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="relative py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge>Pilot with us before Demo Day</Badge>
          <h3 className="mt-3 text-3xl font-semibold">Be one of the first 5 growers</h3>
          <p className="mt-3 text-gray-600">Were onboarding farms in the US and LATAM. No long contracts. Bring one field; well earn the rest.</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className="w-full sm:w-96 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-emerald-700">
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 text-emerald-700"
              >
                Thanks! Well reach out within 24 hours.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">Common questions</h3>
          <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {[
              {
                q: 'Who owns the data?',
                a: 'You do. We provide export tools and honor data portability. We use anonymized aggregates to improve models.'
              },
              {
                q: 'How fast is setup?',
                a: 'Most pilots go live in 7 days. We integrate with satellite providers and common equipment clouds.'
              },
              {
                q: 'What does success look like?',
                a: 'Measured input savings and yield lift per field. We benchmark before and after and share a simple ROI report.'
              },
            ].map((f) => (
              <details key={f.q} className="group p-6 open:bg-gray-50">
                <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-gray-900">
                  {f.q}
                  <span className="ml-4 text-emerald-600">+</span>
                </summary>
                <p className="mt-2 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} AgriMind</div>
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
