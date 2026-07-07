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
// ── Create Account Screen ─────────────────────────────────────────────────────

export default function CreateAccountScreen({ onCreateAccount, onSignIn }: { onCreateAccount: () => void; onSignIn: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      setPasswordError("Passwords do not match");
      return;
    }
    onCreateAccount();
  };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Left panel */}
      <div className="lg:flex hidden flex-col justify-between p-12 lg:w-[45%] xl:w-[40%]" style={{ background: brand.grad }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: "rgba(255,255,255,0.15)" }}>C</div>
          <span className="text-white font-extrabold text-xl tracking-tight">ClientFlow</span>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">Start managing<br /><span style={{ color: "#a5b4fc" }}>your customers<br />today.</span></h2>
          <p className="text-white/60 text-base leading-relaxed">Join 250+ small businesses already using ClientFlow to track orders and grow revenue.</p>
          <div className="flex flex-col gap-3 mt-2">
            {[
              [CheckCircle, "Easy order management"],
              [CheckCircle, "Import existing customers via CSV"],
              [CheckCircle, "Setup in under 30 minutes"],
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

      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f4f5f7] p-8">
        <div className="flex lg:hidden items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: brand.mid }}>C</div>
          <span className="font-extrabold text-xl tracking-tight text-[#080352]">ClientFlow</span>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-7">
          <div>
            <h1 className="text-2xl font-bold text-[#1a1d23] tracking-tight">Create your account</h1>
            <p className="text-sm text-[#6b7280] mt-1">Get started in minutes — no credit card required</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: "Full name", key: "name", type: "text", placeholder: "Jane Smith", Icon: Users },
              { label: "Email address", key: "email", type: "email", placeholder: "you@company.com", Icon: Mail },
              { label: "Password", key: "password", type: showPassword ? "text" : "password", placeholder: "Min. 8 characters", Icon: Lock },
              { label: "Confirm password", key: "confirm", type: showConfirmPassword ? "text" : "password", placeholder: "Repeat password", Icon: Lock },
            ].map(({ label, key, type, placeholder, Icon }) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1a1d23]">{label}</label>
                <div className="relative">
                  <Icon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                  <input
                    type={type}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[rgba(0,0,0,0.12)] bg-white text-sm text-[#1a1d23] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0c0fb1]/30 transition-shadow"
                  />
                  {(key === "password" || key === "confirm") && (
                    <button
                      type="button"
                      onClick={() => {
                        if (key === "password") {
                          setShowPassword(!showPassword);
                        } else {
                          setShowConfirmPassword(!showConfirmPassword);
                        }
                      }}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] focus:outline-none"
                    >
                      {key === "password" ? (showPassword ? <EyeOff size={15} /> : <Eye size={15} />) : (showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />)}
                    </button>
                  )}
                </div>
              </div>
            ))}{
              passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}

            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.99] mt-1" style={{ background: "linear-gradient(135deg, #0c0fb1 0%, #1c0cff 100%)" }}>
              Create Account
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-xs text-center text-[#9ca3af]">
            Already have an account?{" "}
            <button onClick={onSignIn} className="text-[#0c0fb1] hover:underline font-medium">Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
}