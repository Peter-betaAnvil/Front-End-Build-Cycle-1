import { useState } from "react";
import {
  Users,
  ShoppingCart,
  Bell,
  Search,
  ChevronDown,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ChevronRight,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  X,
  Star,
  MapPin,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

const brand = {
  navy: "#080352",
  blue: "#1c0cff",
  mid:  "#0c0fb1",
  grad: "linear-gradient(160deg, #080352 0%, #0c0fb1 60%, #1c0cff 100%)",
};
// ── Shared nav shell for info screens ────────────────────────────────────────

function InfoShell({ onBack, onSignIn, onFeatures, onAbout, onContact, children }: {
  onBack: () => void; onSignIn: () => void;
  onFeatures: () => void; onAbout: () => void; onContact: () => void;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: brand.grad, fontFamily: "'Inter', sans-serif" }}>
      <nav className="relative flex items-center justify-between px-8 py-5 flex-shrink-0">
  <button onClick={onBack} className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: "rgba(255,255,255,0.15)" }}>
      C
    </div>
    <span className="text-white font-extrabold text-xl tracking-tight">ClientFlow</span>
  </button>

  {/* Desktop links */}
  <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
    <button onClick={onFeatures} className="hover:text-white transition-colors hover:scale-120">Features</button>
    <button onClick={onAbout} className="hover:text-white transition-colors hover:scale-120">About</button>
    <button onClick={onContact} className="hover:text-white transition-colors hover:scale-120">Contact</button>
  </div>

  <div className="flex items-center gap-3">
    <button
      onClick={onSignIn}
      className="hidden sm:inline-block px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-115 hover:shadow-lg"
      style={{ background: "rgba(255,255,255,0.15)" }}
    >
      Sign In
    </button>

    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {menuOpen && (
    <div className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-4 px-8 py-6 z-50" style={{ background: "#080352", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <button onClick={() => { onFeatures(); setMenuOpen(false); }} className="text-white/80 text-left hover:text-white hov">Features</button>
      <button onClick={() => { onAbout(); setMenuOpen(false); }} className="text-white/80 text-left hover:text-white">About</button>
      <button onClick={() => { onContact(); setMenuOpen(false); }} className="text-white/80 text-left hover:text-white">Contact</button>
      <button onClick={() => { onSignIn(); setMenuOpen(false); }} className="text-white font-semibold text-left">Sign In</button>
    </div>
  )}
</nav>
      <div className="flex-1 flex flex-col items-center px-8 pb-10 pt-10 max-w-5xl mx-auto w-full">
        {children}
      </div>
      <div className="flex justify-center pb-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-lg"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

// ── Features Screen ───────────────────────────────────────────────────────────

const featureList = [
  { icon: Users, title: "Customer Profiles", desc: "Centralise every customer's contact details, order history, purchase status, and order score in one place. Spot at-risk accounts before they churn." },
  { icon: ShoppingCart, title: "Order Tracking", desc: "Monitor every order from placement to delivery in real time. Filter by status, search by customer, and export reports in one click." },
  { icon: BarChart2, title: "Revenue Analytics", desc: "Visualise monthly revenue trends, average order values, and top sales with clean, interactive charts updated live." },
  { icon: Bell, title: "Activity Feed", desc: "A chronological stream of everything happening across your customer base — upgrades, new orders, cancellations, and delivery updates." },
  { icon: Shield, title: "Enterprise Security", desc: "Role-based access control, audit logs, and 99.9 % uptime SLA. Your customer data stays private and always available." },
  { icon: Zap, title: "Fast Onboarding", desc: "Import your existing customer list via CSV, set up your account quickly, and be fully set up in under 30 minutes." },
];

export  function FeaturesScreen({ onBack, onSignIn, onFeatures, onAbout, onContact }: { onBack: () => void; onSignIn: () => void; onFeatures: () => void; onAbout: () => void; onContact: () => void }) {
  return (
    <InfoShell onBack={onBack} onSignIn={onSignIn} onFeatures={onFeatures} onAbout={onAbout} onContact={onContact}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 mb-5" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <Zap size={12} /> Everything you need
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Built for small businesses.<br /><span style={{ color: "#a5b4fc" }}>Powerful enough for enterprise.</span></h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">Six core modules that work together seamlessly so you spend less time on admin and more time growing.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {featureList.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col gap-3 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(165,180,252,0.2)" }}>
              <Icon size={18} style={{ color: "#a5b4fc" }} />
            </div>
            <h3 className="text-white font-semibold text-base">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </InfoShell>
  );
}

// ── About Screen ──────────────────────────────────────────────────────────────

export  function AboutScreen({ onBack, onSignIn, onFeatures, onAbout, onContact }: { onBack: () => void; onSignIn: () => void; onFeatures: () => void; onAbout: () => void; onContact: () => void }) {
  return (
    <InfoShell onBack={onBack} onSignIn={onSignIn} onFeatures={onFeatures} onAbout={onAbout} onContact={onContact}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 mb-5" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <Users size={12} /> Our story
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Built by founders,<br /><span style={{ color: "#a5b4fc" }}>for founders.</span></h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">ClientFlow started in 2026 when our team grew frustrated managing customers across multiple different spreadsheets. We built the tool we wished existed.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
        <div className="flex flex-col gap-4 p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <h2 className="text-white font-bold text-xl">Our mission</h2>
          <p className="text-white/60 text-sm leading-relaxed">To give every business the same customer management superpower that enterprise teams take for granted — without the enterprise price tag or the six-month implementation.</p>
          <p className="text-white/60 text-sm leading-relaxed">We believe that understanding your customers shouldn't require a dedicated ops team. It should take minutes, not months.</p>
        </div>
        <div className="flex flex-col gap-4 p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <h2 className="text-white font-bold text-xl">By the numbers</h2>
          <div className="grid grid-cols-2 gap-5 mt-1">
            {[["250+","Businesses served"],["#500M","Revenue tracked"],["99.9%","Uptime SLA"],["2026","Founded"]].map(([val, lbl]) => (
              <div key={lbl}>
                <p className="text-white font-extrabold text-2xl">{val}</p>
                <p className="text-white/50 text-xs mt-0.5">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
        <h2 className="text-white font-bold text-xl mb-5">Our values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["Simplicity first", "If a feature needs a manual, it needs to be redesigned."],
            ["Customer obsessed", "Every product decision starts with the question: does this help our users serve their customers better?"],
            ["Transparent by default", "No hidden fees, no dark patterns, no lock-in. Your data is always yours."],
          ].map(([title, body]) => (
            <div key={title as string} className="flex flex-col gap-2">
              <p className="text-white font-semibold text-sm">{title as string}</p>
              <p className="text-white/55 text-xs leading-relaxed">{body as string}</p>
            </div>
          ))}
        </div>
      </div>
    </InfoShell>
  );
}

// ── Contact Screen ────────────────────────────────────────────────────────────

export function ContactScreen({ onBack, onSignIn, onFeatures, onAbout, onContact }: { onBack: () => void; onSignIn: () => void; onFeatures: () => void; onAbout: () => void; onContact: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow";
  const inputStyle = { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" };

  return (
    <InfoShell onBack={onBack} onSignIn={onSignIn} onFeatures={onFeatures} onAbout={onAbout} onContact={onContact}>
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 mb-5" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <Mail size={12} /> Get in touch
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">We"d love to hear from you.</h1>
        <p className="text-white/60 text-base max-w-md mx-auto">Questions about usage, a feature request, or just want to say hi? Drop us a message and we"ll get back within five business days.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
        <div className="lg:col-span-3">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 p-10 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <CheckCircle size={40} style={{ color: "#6ee7b7" }} />
              <h3 className="text-white font-bold text-xl">Message sent!</h3>
              <p className="text-white/60 text-sm">Thanks for reaching out. We"ll get back to you within five business days.</p>
              <button onClick={() => setSent(false)} className="mt-2 text-sm text-white/60 hover:text-white underline transition-colors">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/70 text-xs font-semibold uppercase tracking-wider">Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className={inputCls} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/70 text-xs font-semibold uppercase tracking-wider">Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your.email@company.com" className={inputCls} style={inputStyle} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/70 text-xs font-semibold uppercase tracking-wider">Subject</label>
                <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/70 text-xs font-semibold uppercase tracking-wider">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us more…" className={`${inputCls} resize-none`} style={inputStyle} />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-[#080352] transition-all duration-200 hover:opacity-90 hover:shadow-lg mt-1" style={{ background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)" }}>
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {[
            [Mail, "Email us", "info@clientflow.com", "We reply within five business days."],
            [Phone, "Call us", "+234 707-576-0826", "Mon–Fri, 9 am–6 pm WAT."],
            [MapPin, "Office", "Bowen University P.M.B. 284, Iwo, Osun State, Nigeria", "Visit by appointment."],
          ].map(([Icon, label, value, note]) => (
            <div key={label as string} className="flex gap-4 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(165,180,252,0.2)" }}>
                <Icon size={16} style={{ color: "#a5b4fc" }} />
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">{label as string}</p>
                <p className="text-white text-sm font-medium mt-0.5">{value as string}</p>
                <p className="text-white/40 text-xs mt-0.5">{note as string}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfoShell>
  );
}
