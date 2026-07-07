import { useState } from "react";
import landingHero from "../../assets/landing.png";
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

// ── Landing Screen ────────────────────────────────────────────────────────────

export default function LandingScreen({ onSignIn, onFeatures, onAbout, onContact }: { onSignIn: () => void; onFeatures: () => void; onAbout: () => void; onContact: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="min-h-screen w-full flex flex-col overflow-hidden"
      style={{ background: brand.grad, fontFamily: "'Inter', sans-serif" }}
    >
      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-5 flex-shrink-0">
  <div className="flex items-center gap-3">
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
      style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
    >
      C
    </div>
    <span className="text-white font-extrabold text-xl tracking-tight">ClientFlow</span>
  </div>

  {/* Desktop links */}
  <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
    <button onClick={onFeatures} className="hover:text-white transition-colors hover:scale-120">Features</button>
    <button onClick={onAbout} className="hover:text-white transition-colors hover:scale-120">About</button>
    <button onClick={onContact} className="hover:text-white transition-colors hover:scale-120">Contact</button>
  </div>

  <div className="flex items-center gap-3">
    <button
      onClick={onSignIn}
      className="hidden sm:inline-block px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-115"
      style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
    >
      Sign In
    </button>

    {/* Hamburger toggle, mobile only */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-white p-2"
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile dropdown */}
  {menuOpen && (
    <div
      className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-4 px-8 py-6 z-50"
      style={{ background: "#080352", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <button onClick={() => { onFeatures(); setMenuOpen(false); }} className="text-white/80 text-left hover:text-white">Features</button>
      <button onClick={() => { onAbout(); setMenuOpen(false); }} className="text-white/80 text-left hover:text-white">About</button>
      <button onClick={() => { onContact(); setMenuOpen(false); }} className="text-white/80 text-left hover:text-white">Contact</button>
      <button onClick={() => { onSignIn(); setMenuOpen(false); }} className="text-white font-semibold text-left">Sign In</button>
    </div>
  )}
</nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 px-8 pt-8 pb-16 max-w-6xl mx-auto w-full">
        {/* Left copy */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <div
            className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Zap size={12} />
            Complete Business Management Platform
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Manage Clients.<br />
            <span style={{ color: "#a5b4fc" }}>Monitor Orders.</span><br />
            Grow Faster.
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            ClientFlow offers businesses a single platform to manage customers, manage orders in real time, and stay on top of every deal.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center">
            <button
              onClick={onSignIn}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-[#080352] transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)" }}
            >
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-2 justify-center lg:justify-start">
            {[["250+", "Businesses"], ["#500M", "Tracked Revenue"], ["99.9%", "Uptime"]].map(([val, lbl]) => (
              <div key={lbl} className="text-center lg:text-left">
                <p className="text-white font-bold text-xl">{val}</p>
                <p className="text-white/50 text-xs">{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — phone mockup image + feature chips */}
        <div className="flex-1 relative flex items-center justify-center">
          <div
            className="relative w-[280px] md:w-[320px] lg:w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl"
            style={{ border: "2px solid rgba(255,255,255,0.15)" }}
          >
            <img
              src={landingHero}
              alt="ClientFlow app on mobile"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,3,82,0.4) 0%, transparent 50%)" }}
            />
          </div>

          {/* Floating feature chips */}
          <div
            className="absolute -left-4 top-1/4 flex items-center gap-2 px-3 py-2 rounded-xl text-white text-xs font-semibold shadow-xl"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <TrendingUp size={14} style={{ color: "#a5b4fc" }} />
            Revenue up 18%
          </div>

          <div
            className="absolute -right-4 bottom-1/3 flex items-center gap-2 px-3 py-2 rounded-xl text-white text-xs font-semibold shadow-xl"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Shield size={14} style={{ color: "#6ee7b7" }} />
            Enterprise secure
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div
        className="w-full py-6 px-8 flex flex-wrap justify-center gap-8 text-sm"
        style={{ background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {[
          [Users, "Customer Profiles"],
          [ShoppingCart, "Order Tracking"],
          [BarChart2, "Revenue Analytics"],
          [Bell, "Live Activity Feed"],
        ].map(([Icon, label]) => (
          <div key={label as string} className="flex items-center gap-2 text-white/60">
            <Icon size={15} />
            <span>{label as string}</span>
          </div>
        ))}
      </div>
    </div>
  );
}