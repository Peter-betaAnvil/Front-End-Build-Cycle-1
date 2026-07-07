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
  EyeOff,
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

// ── Login Screen ──────────────────────────────────────────────────────────────

export default function LoginScreen({ onSignIn, onBack, onCreateAccount, onContact }: { onSignIn: () => void; onBack: () => void; onCreateAccount: () => void; onContact: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn();
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left panel — brand */}
      <div
        className="lg:flex hidden flex-col justify-between p-12 lg:w-[45%] xl:w-[40%]"
        style={{ background: brand.grad }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            C
          </div>
          <span className="text-white font-extrabold text-xl tracking-tight">ClientFlow</span>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Welcome back.<br />
            <span style={{ color: "#a5b4fc" }}>Your dashboard<br />awaits.</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Customer Management for Businesses — orders, clients, and revenue in one place.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {[
              [CheckCircle, "Real-time order management"],
              [CheckCircle, "Customer order history"],
              [CheckCircle, "Revenue analytics"],
            ].map(([Icon, text]) => (
              <div key={text as string} className="flex items-center gap-3 text-white/80 text-sm">
                <Icon size={16} style={{ color: "#6ee7b7" }} />
                {text as string}
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/30 text-xs">© 2026 ClientFlow. All rights reserved.</p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f4f5f7] p-8">
        {/* Mobile logo */}
        <div className="flex lg:hidden items-center gap-3 mb-10">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
            style={{ background: brand.mid }}
          >
            C
          </div>
          <span className="font-extrabold text-xl tracking-tight text-[#080352]">ClientFlow</span>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold text-[#1a1d23] tracking-tight">Sign in to your account</h1>
            <p className="text-sm text-[#6b7280] mt-1">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1a1d23]">Email address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[rgba(0,0,0,0.12)] bg-white text-sm text-[#1a1d23] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0c0fb1]/30 transition-shadow"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[#1a1d23]">Password</label>
                <a href="#" className="text-xs text-[#0c0fb1] hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[rgba(0,0,0,0.12)] bg-white text-sm text-[#1a1d23] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0c0fb1]/30 transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] focus:outline-none"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.99] mt-1"
              style={{ background: "linear-gradient(135deg, #0c0fb1 0%, #1c0cff 100%)" }}
            >
              Sign In
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-xs text-center text-[#9ca3af]">
            {"Don't have an account? "}
            <button onClick={onCreateAccount} className="text-[#0c0fb1] hover:underline font-medium">Create account</button>
          </p>

          <button
            onClick={onBack}
            className="text-xs text-center text-[#9ca3af] hover:text-[#6b7280] transition-colors"
          >
            ← Back to home
          </button>

          <p className="text-xs text-center text-[#c4c4cc] pt-2 border-t border-[rgba(0,0,0,0.06)]">
            Need access?{" "}
            <button onClick={onContact} className="text-[#9ca3af] hover:text-[#6b7280] hover:underline transition-colors">Contact Support</button>
          </p>
        </div>
      </div>
    </div>
  );
}