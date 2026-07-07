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
  Plus,
  Pencil,
  CalendarClock,
  Check,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const brand = {
  navy: "#080352",
  blue: "#1c0cff",
  mid:  "#0c0fb1",
  grad: "linear-gradient(160deg, #080352 0%, #0c0fb1 60%, #1c0cff 100%)",
};
// ── CRM Data ──────────────────────────────────────────────────────────────────

const customers = [
  { id: "C-0041", name: "Margot Ellison", email: "m.ellison@harborco.com", phone: "+1 212-555-0182", location: "New York, NY", tier: "Enterprise", totalOrders: 47, totalSpent: 128400, lastOrder: "2026-06-28", avatar: "ME" },
  { id: "C-0042", name: "Felix Drummond", email: "felix@drummond.io", phone: "+1 415-555-0294", location: "San Francisco, CA", tier: "Pro", totalOrders: 23, totalSpent: 41200, lastOrder: "2026-07-01", avatar: "FD" },
  { id: "C-0043", name: "Priya Nair", email: "priya.nair@lumentech.co", phone: "+1 312-555-0371", location: "Chicago, IL", tier: "Enterprise", totalOrders: 61, totalSpent: 204800, lastOrder: "2026-06-30", avatar: "PN" },
  { id: "C-0044", name: "Samuel Okafor", email: "s.okafor@westbridge.com", phone: "+1 713-555-0448", location: "Houston, TX", tier: "Starter", totalOrders: 8, totalSpent: 6200, lastOrder: "2026-05-14", avatar: "SO" },
  { id: "C-0045", name: "Clara Voss", email: "clara.voss@nordhaus.de", phone: "+49 30 555-0521", location: "Berlin, DE", tier: "Pro", totalOrders: 31, totalSpent: 58900, lastOrder: "2026-06-25", avatar: "CV" },
  { id: "C-0046", name: "Tomas Reyes", email: "tomas@reyesco.mx", phone: "+52 55 555-0617", location: "Mexico City, MX", tier: "Starter", totalOrders: 5, totalSpent: 3100, lastOrder: "2026-04-02", avatar: "TR" },
  { id: "C-0047", name: "Yuki Tanaka", email: "y.tanaka@axiom-jp.com", phone: "+81 3-555-0713", location: "Tokyo, JP", tier: "Enterprise", totalOrders: 88, totalSpent: 311000, lastOrder: "2026-07-02", avatar: "YT" },
  { id: "C-0048", name: "Niamh Byrne", email: "niamh@byrneassoc.ie", phone: "+353 1 555-0812", location: "Dublin, IE", tier: "Pro", totalOrders: 19, totalSpent: 27400, lastOrder: "2026-06-19", avatar: "NB" },
];

const orders = [
  { id: "ORD-8841", customer: "Yuki Tanaka", customerId: "C-0047", product: "Analytics Suite — Enterprise", amount: 12400, status: "delivered", date: "2026-07-02", items: 3 },
  { id: "ORD-8840", customer: "Felix Drummond", customerId: "C-0042", product: "API Platform — Pro Annual", amount: 4800, status: "processing", date: "2026-07-01", items: 1 },
  { id: "ORD-8839", customer: "Priya Nair", customerId: "C-0043", product: "Data Warehouse + Add-ons", amount: 18200, status: "shipped", date: "2026-06-30", items: 5 },
  { id: "ORD-8838", customer: "Margot Ellison", customerId: "C-0041", product: "Cloud Storage — 10TB Block", amount: 2100, status: "delivered", date: "2026-06-28", items: 2 },
  { id: "ORD-8837", customer: "Clara Voss", customerId: "C-0045", product: "Security Module — Pro", amount: 3600, status: "delivered", date: "2026-06-25", items: 1 },
  { id: "ORD-8836", customer: "Niamh Byrne", customerId: "C-0048", product: "Collaboration Tools", amount: 1900, status: "cancelled", date: "2026-06-19", items: 2 },
  { id: "ORD-8835", customer: "Yuki Tanaka", customerId: "C-0047", product: "Infrastructure Pack", amount: 8800, status: "delivered", date: "2026-06-15", items: 4 },
  { id: "ORD-8834", customer: "Samuel Okafor", customerId: "C-0044", product: "Starter Bundle", amount: 980, status: "delivered", date: "2026-05-14", items: 1 },
];

const activity = [
  { id: 1, text: "New order ORD-8840 from Felix Drummond", time: "2 min ago", icon: "order" },
  { id: 2, text: "Yuki Tanaka upgraded to Enterprise tier", time: "1 hr ago", icon: "upgrade" },
  { id: 3, text: "Tomas Reyes — 92 days since last order", time: "3 hr ago", icon: "alert" },
  { id: 4, text: "ORD-8839 shipped to Priya Nair", time: "5 hr ago", icon: "shipped" },
  { id: 5, text: "New customer added: Niamh Byrne", time: "Yesterday", icon: "new" },
  { id: 6, text: "ORD-8836 cancelled by Niamh Byrne", time: "Yesterday", icon: "cancel" },
  { id: 7, text: "Samuel Okafor marked at-risk (low activity)", time: "2 days ago", icon: "alert" },
];

const revenueData = [
  { month: "Jan", revenue: 48200 },
  { month: "Feb", revenue: 52100 },
  { month: "Mar", revenue: 61400 },
  { month: "Apr", revenue: 58800 },
  { month: "May", revenue: 71200 },
  { month: "Jun", revenue: 84100 },
  { month: "Jul", revenue: 38400 },
];

const ordersByStatus = [
  { status: "Delivered", count: 5 },
  { status: "Shipped", count: 1 },
  { status: "Processing", count: 1 },
  { status: "Cancelled", count: 1 },
];


const fmt = (n: number) => n >= 1000 ? `₦${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : `₦${n}`;
const fmtFull = (n: number) => `₦${n.toLocaleString("en-NG")}`;

const statusConfig: Record<string, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  active:    { label: "Active",     color: "#059669", bg: "#d1fae5", icon: <CheckCircle size={12} /> },
  inactive:  { label: "Inactive",   color: "#6b7280", bg: "#f3f4f6", icon: <Clock size={12} /> },
  "at-risk": { label: "At Risk",    color: "#d97706", bg: "#fef3c7", icon: <AlertCircle size={12} /> },
  delivered: { label: "Delivered",  color: "#059669", bg: "#d1fae5", icon: <CheckCircle size={12} /> },
  processing:{ label: "Processing", color: "#2563eb", bg: "#dbeafe", icon: <Clock size={12} /> },
  shipped:   { label: "Shipped",    color: "#7c3aed", bg: "#ede9fe", icon: <Package size={12} /> },
  cancelled: { label: "Cancelled",  color: "#dc2626", bg: "#fee2e2", icon: <XCircle size={12} /> },
};

const tierColor: Record<string, string> = {
  Enterprise: "#1e2538",
  Pro: "#3b82f6",
  Starter: "#6b7280",
};

function StatusBadge({ status }: { status: string }) {
  const cfg = statusConfig[status] ?? { label: status, color: "#6b7280", bg: "#f3f4f6", icon: null };
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-medium" style={{ color: cfg.color, backgroundColor: cfg.bg }}>
      {cfg.icon}{cfg.label}
    </span>
  );
}

function AvatarBadge({ initials, size = "sm" }: { initials: string; size?: "sm" | "md" | "lg" }) {
  const sz = size === "lg" ? "w-12 h-12 text-sm sm:text-base" : size === "md" ? "w-9 h-9 text-sm" : "w-7 h-7 text-xs";
  return (
    <div className={`${sz} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`} style={{ background: "linear-gradient(135deg, #2d3a56 0%, #1e2538 100%)" }}>
      {initials}
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart2 },
  { id: "customers", label: "Customers", icon: Users },
  { id: "orders",    label: "Orders",    icon: ShoppingCart },
  { id: "followups", label: "Follow-ups", icon: CalendarClock },
  { id: "activity",  label: "Activity",  icon: Bell },
];

const followUps = [
  { id: "F-001", customerId: "C-0046", customer: "Tomas Reyes", task: "Check in — 92 days since last order", priority: "High", dueDate: "2026-07-08", status: "pending", notes: "Offer a re-engagement discount." },
  { id: "F-002", customerId: "C-0044", customer: "Samuel Okafor", task: "Discuss Starter → Pro upgrade path", priority: "Medium", dueDate: "2026-07-10", status: "pending", notes: "" },
  { id: "F-003", customerId: "C-0042", customer: "Felix Drummond", task: "Confirm API Platform renewal details", priority: "Medium", dueDate: "2026-07-06", status: "pending", notes: "Renewal window closes end of month." },
  { id: "F-004", customerId: "C-0047", customer: "Yuki Tanaka", task: "Send Enterprise onboarding recap", priority: "Low", dueDate: "2026-07-03", status: "completed", notes: "" },
  { id: "F-005", customerId: "C-0048", customer: "Niamh Byrne", task: "Follow up on cancelled order ORD-8836", priority: "High", dueDate: "2026-07-05", status: "pending", notes: "Understand cancellation reason." },
];

const priorityConfig: Record<string, { label: string; color: string; bg: string }> = {
  High:   { label: "High",   color: "#dc2626", bg: "#fee2e2" },
  Medium: { label: "Medium", color: "#d97706", bg: "#fef3c7" },
  Low:    { label: "Low",    color: "#2563eb", bg: "#dbeafe" },
};

function PriorityBadge({ priority }: { priority: string }) {
  const cfg = priorityConfig[priority] ?? { label: priority, color: "#6b7280", bg: "#f3f4f6" };
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium" style={{ color: cfg.color, backgroundColor: cfg.bg }}>
      {cfg.label}
    </span>
  );
}

function Sidebar({ active, onNav, collapsed, onToggle, onSignOut }: { active: string; onNav: (id: string) => void; collapsed: boolean; onToggle: () => void; onSignOut: () => void }) {
  return (
    <aside className="flex flex-col h-full transition-all duration-300 overflow-hidden" style={{ width: collapsed ? 56 : 220, background: "#1e2538", borderRight: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
      <div className="flex items-center gap-3 px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <button onClick={onToggle} className="w-7 h-7 flex items-center justify-center rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0">
          {collapsed ? <Menu size={16} /> : <X size={16} />}
        </button>
        {!collapsed && <span className="text-white font-semibold tracking-tight text-sm whitespace-nowrap">ClientFlow<span style={{ color: "#e8a020" }}>.</span></span>}
      </div>
      <nav className="flex-1 py-3 flex flex-col gap-0.5 px-2">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button key={id} onClick={() => onNav(id)} className={`flex items-center gap-3 px-2.5 py-2 rounded text-sm font-medium transition-all duration-150 w-full text-left ${isActive ? "text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"}`} style={isActive ? { background: "rgba(232,160,32,0.18)", color: "#e8a020" } : {}}>
              <Icon size={16} className="flex-shrink-0" />
              {!collapsed && <span className="whitespace-nowrap">{label}</span>}
            </button>
          );
        })}
      </nav>
      <div className="px-2 pb-4 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        {!collapsed && (
          <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
            <AvatarBadge initials="OF" />
            <div className="min-w-0">
              <p className="text-white text-xs font-medium truncate">Osungbure Feranmi</p>
              <p className="text-white/40 text-xs truncate">Admin</p>
            </div>
          </div>
        )}
        <button onClick={() => onNav("settings")} className={`flex items-center gap-3 px-2.5 py-2 rounded transition-colors w-full text-sm ${active === "settings" ? "text-white" : "text-white/40 hover:text-white/70 hover:bg-white/5"}`} style={active === "settings" ? { background: "rgba(232,160,32,0.18)", color: "#e8a020" } : {}}>
          <Settings size={15} className="flex-shrink-0" />{!collapsed && <span>Settings</span>}
        </button>
        <button onClick={onSignOut} className="flex items-center gap-3 px-2.5 py-2 rounded text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors w-full text-sm">
          <LogOut size={15} className="flex-shrink-0" />{!collapsed && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  );
}

// ── Dashboard view ────────────────────────────────────────────────────────────

function MetricCard({ label, value, sub, trend, trendUp }: { label: string; value: string; sub: string; trend?: string; trendUp?: boolean }) {
  return (
    <div className="bg-card rounded-lg p-5 border border-border">
      <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-3">{label}</p>
      <p className="text-2xl font-semibold text-foreground mb-1">{value}</p>
      <div className="flex items-center gap-2">
        {trend && <span className={`inline-flex items-center gap-0.5 text-xs font-mono ${trendUp ? "text-emerald-600" : "text-red-500"}`}>{trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}{trend}</span>}
        <span className="text-muted-foreground text-xs">{sub}</span>
      </div>
    </div>
  );
}

function DashboardView({ onNavigate, activityList }: { onNavigate: (page: string) => void; activityList: typeof activity }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
        <MetricCard label="Total Revenue" value="₦413.8k" sub="this year" trend="+18.4%" trendUp />
        <MetricCard label="Total Customers" value="8" sub="from 6 last month" trend="+2" trendUp />
        <MetricCard label="Orders (30d)" value="12" sub="orders placed" trend="-3" trendUp={false} />
        <MetricCard label="Avg. Order Value" value="₦6,472" sub="across all orders" trend="+₦840" trendUp />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-8">
        <div className="lg:col-span-2 bg-card rounded-lg p-5 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div><h3 className="text-sm font-semibold text-foreground">Revenue</h3><p className="text-xs text-muted-foreground font-mono">Jan — Jul 2026</p></div>
            <span className="text-xs font-mono text-muted-foreground">YTD ₦413.8k</span>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="dashRevGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1e2538" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#1e2538" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "DM Mono", fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fontFamily: "DM Mono", fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₦${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "#1e2538", border: "none", borderRadius: 6, fontSize: 12, fontFamily: "DM Mono", color: "#fff" }} formatter={(v: number) => [`₦${v.toLocaleString()}`, "Revenue"]} />
              <Area type="monotone" dataKey="revenue" stroke="#1e2538" strokeWidth={2} fill="url(#dashRevGrad)" dot={false} activeDot={{ r: 4, fill: "#e8a020" }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-card rounded-lg p-5 border border-border">
          <div className="mb-4"><h3 className="text-sm font-semibold text-foreground">Orders by Status</h3><p className="text-xs text-muted-foreground font-mono">All time</p></div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={ordersByStatus} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis dataKey="status" tick={{ fontSize: 10, fontFamily: "DM Mono", fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fontFamily: "DM Mono", fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#1e2538", border: "none", borderRadius: 6, fontSize: 12, fontFamily: "DM Mono", color: "#fff" }} />
              <Bar dataKey="count" fill="#1e2538" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-8">
        <div className="lg:col-span-2 bg-card rounded-lg border border-border overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">Recent Orders</h3>
            <button onClick={() => onNavigate("orders")} className="text-xs text-muted-foreground hover:text-foreground font-mono transition-colors">View all →</button>
          </div>
          <div className="divide-y divide-border">
            {orders.slice(0, 5).map((o) => (
              <div key={o.id} className="flex items-center gap-3 px-5 py-3 hover:bg-muted/40 transition-colors">
                <span className="font-mono text-xs text-muted-foreground w-20 flex-shrink-0">{o.id}</span>
                <div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground truncate">{o.customer}</p><p className="text-xs text-muted-foreground truncate">{o.product}</p></div>
                <StatusBadge status={o.status} />
                <span className="font-mono text-sm font-medium text-foreground text-right w-16 flex-shrink-0">{fmt(o.amount)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="px-5 py-4 border-b border-border"><h3 className="text-sm font-semibold text-foreground">Activity Feed</h3></div>
          <div className="divide-y divide-border">
            {activityList.slice(0, 5).map((a) => {
              const iconMap: Record<string, React.ReactNode> = {
                order:   <ShoppingCart size={14} className="text-blue-500" />,
                upgrade: <Star size={14} style={{ color: "#e8a020" }} />,
                alert:   <AlertCircle size={14} className="text-amber-500" />,
                shipped: <Package size={14} className="text-purple-500" />,
                new:     <Users size={14} className="text-emerald-500" />,
                cancel:  <XCircle size={14} className="text-red-500" />,
              };
              return (
                <div key={a.id} className="px-4 py-3 hover:bg-muted/40 transition-colors">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">{iconMap[a.icon]}</div>
                    <div><p className="text-xs text-foreground leading-relaxed">{a.text}</p><p className="text-xs text-muted-foreground font-mono mt-0.5">{a.time}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

//──Add Customer Screen──────────────────────────────────────────────────────────
function AddCustomerModal({ onClose, onSave }: { onClose: () => void; onSave: (c: typeof customers[0]) => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", tier: "Starter" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const initials = form.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    const newCustomer = {
      id: `C-${Math.floor(Math.random() * 9000 + 1000)}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      location: form.location,
      tier: form.tier,
      totalOrders: 0,
      totalSpent: 0,
      lastOrder: new Date().toISOString().split("T")[0],
      avatar: initials || "NA",
    };
    onSave(newCustomer);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg border border-border w-full max-w-md p-6">
        <h2 className="text-sm sm:text-base font-semibold text-foreground mb-4">Add Customer</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input required type="text" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <input required type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <input required type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground">
            <option value="Starter">Starter</option>
            <option value="Pro">Pro</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          <div className="flex gap-2 mt-2">
            <button type="button" onClick={onClose} className="flex-1 px-3 py-2 rounded text-sm bg-card border border-border text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
            <button type="submit" className="flex-1 px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

//──Add Order Screen────────────────────────────────────────────────────────────

function AddOrderModal({
  customerList,
  onClose,
  onSave,
  }: {
  customerList: typeof customers;
  onClose: () => void;
  onSave: (o: typeof orders[0]) => void;
  }) {
  const [form, setForm] = useState({
    customerId: customerList[0]?.id ?? "",
    product: "",
    price: "",
    status: "processing",
    items: "1",
  });

  const items = Number(form.items) || 1;
  const price = Number(form.price) || 0;
  const total = price * items;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customer = customerList.find((c) => c.id === form.customerId);
    if (!customer) return;
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 9000 + 1000)}`,
      customer: customer.name,
      customerId: customer.id,
      product: form.product,
      amount: total,
      status: form.status,
      date: new Date().toISOString().split("T")[0],
      items,
    };
    onSave(newOrder);
  };


  if (customerList.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-lg border border-border w-full max-w-sm p-6 text-center">
          <AlertCircle size={28} className="mx-auto mb-3 text-amber-500" />
          <h2 className="text-sm sm:text-base font-semibold text-foreground mb-1">No customers yet</h2>
          <p className="text-sm text-muted-foreground mb-4">Add a customer first before creating an order.</p>
          <button onClick={onClose} className="w-full px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors">
            Got it
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg border border-border w-full max-w-md p-6">
        <h2 className="text-sm sm:text-base font-semibold text-foreground mb-4">Add Order</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <select
            required
            value={form.customerId}
            onChange={(e) => setForm({ ...form, customerId: e.target.value })}
            className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground"
          >
            {customerList.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <input required type="text" placeholder="Product" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <input required type="number" min="0" placeholder="Price per item (₦)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <input required type="number" min="1" placeholder="Items" value={form.items} onChange={(e) => setForm({ ...form, items: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground">
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <p className="text-xs text-muted-foreground font-mono">
            Total: {fmtFull(total)}
          </p>
          <div className="flex gap-2 mt-2">
            <button type="button" onClick={onClose} className="flex-1 px-3 py-2 rounded text-sm bg-card border border-border text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
            <button type="submit" className="flex-1 px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Import Customers Screen ────────────────────────────────────────────────────────────
function ImportCustomersModal({ onClose, onImport }: { onClose: () => void; onImport: (newCustomers: typeof customers) => void }) {
  const [fileName, setFileName] = useState("");
  const [parsedCount, setParsedCount] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const downloadSample = () => {
    const sample = "name,email,phone,location,tier\nJohn Doe,john@example.com,+234-801-234-5678,Lagos,Pro\nJane Smith,jane@example.com,+234-802-345-6789,Abuja,Starter";
    const blob = new Blob([sample], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample-customers.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setError("");

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const lines = text.trim().split(/\r?\n|\r/);
        const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
        const nameIdx = headers.indexOf("name");
        const emailIdx = headers.indexOf("email");
        const phoneIdx = headers.indexOf("phone");
        const locationIdx = headers.indexOf("location");
        const tierIdx = headers.indexOf("tier");

        if (nameIdx === -1 || emailIdx === -1) {
          setError("CSV must include at least 'name' and 'email' columns.");
          setParsedCount(null);
          return;
        }

        const newCustomers = lines.slice(1).filter((l) => l.trim()).map((line) => {
          // This regex splits by commas but ignores commas inside double quotes
        const cols = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map((c) => {
          let cleaned = c.trim();
          // Remove surrounding quotes if they exist
          if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
            cleaned = cleaned.slice(1, -1).trim();
          }
          return cleaned;
        });
          const name = cols[nameIdx] || "Unknown";
          const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
          return {
            id: `C-${Math.floor(Math.random() * 9000 + 1000)}`,
            name,
            email: cols[emailIdx] || "",
            phone: phoneIdx !== -1 ? cols[phoneIdx] : "",
            location: locationIdx !== -1 ? cols[locationIdx] : "",
            tier: tierIdx !== -1 ? cols[tierIdx] : "Starter",
            totalOrders: 0,
            totalSpent: 0,
            lastOrder: new Date().toISOString().split("T")[0],
            status: "active",
            avatar: initials || "NA",
          };
        });

        setParsedCount(newCustomers.length);
        (window as any).__parsedCustomers = newCustomers;
      } catch {
        setError("Could not read that file. Make sure it's a valid CSV.");
        setParsedCount(null);
      }
    };
    reader.readAsText(file);
  };

  const handleImport = () => {
    const newCustomers = (window as any).__parsedCustomers || [];
    onImport(newCustomers);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-lg border border-border w-full max-w-sm p-6 text-center">
          <CheckCircle size={32} className="mx-auto mb-3 text-emerald-500" />
          <h2 className="text-sm sm:text-base font-semibold text-foreground mb-1">Customers added</h2>
          <p className="text-sm text-muted-foreground mb-4">{parsedCount} customer{parsedCount === 1 ? "" : "s"} imported successfully.</p>
          <button onClick={onClose} className="w-full px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors">
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg border border-border w-full max-w-md p-6">
        <h2 className="text-sm sm:text-base font-semibold text-foreground mb-1">Import Customers</h2>
        <p className="text-xs text-muted-foreground mb-4">Upload a CSV with columns: name, email, phone, location, tier</p>
        <button type="button" onClick={downloadSample} className="text-xs text-primary hover:underline mb-4 inline-block">Download sample CSV</button>

  <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg py-8 cursor-pointer hover:bg-muted/30 transition-colors">
  {/* existing upload box content stays the same */}
  </label>

        <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg py-8 cursor-pointer hover:bg-muted/30 transition-colors">
          <Download size={20} className="rotate-180 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{fileName || "Click to choose a CSV file"}</span>
          <input type="file" accept=".csv" onChange={handleFile} className="hidden" />
        </label>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        {parsedCount !== null && !error && (
          <p className="text-emerald-600 text-sm mt-3">{parsedCount} customer{parsedCount === 1 ? "" : "s"} found and ready to import.</p>
        )}

        <div className="flex gap-2 mt-5">
          <button type="button" onClick={onClose} className="flex-1 px-3 py-2 rounded text-sm bg-card border border-border text-muted-foreground hover:text-foreground transition-colors">
            Cancel
          </button>
          <button
            type="button"
            onClick={handleImport}
            disabled={parsedCount === null || parsedCount === 0}
            className="flex-1 px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Customers view ────────────────────────────────────────────────────────────

function CustomersView({ customerList, onAddCustomer, onImportCustomers, onSelectCustomer }: {customerList: typeof customers; onAddCustomer: (c:typeof customers[0]) => void; onImportCustomers: (newCustomers: typeof customers) => void; onSelectCustomer: (c: typeof customers[0]) => void }) {
  const [search, setSearch] = useState("");
  const [filterTier, setFilterTier] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const tiers = ["All", "Enterprise", "Pro", "Starter"];
  const filtered = customerList.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    return matchSearch && (filterTier === "All" || c.tier === filterTier);
  });
  return (
    <>
    <div className="flex flex-col gap-3 sm:gap-8">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search customers…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-card border border-border rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" />
        </div>
        <div className="flex gap-1.5">{tiers.map((t) => <button key={t} onClick={() => setFilterTier(t)} className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${filterTier === t ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>{t}</button>)}</div>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors"><Plus size={13} />Add Customer</button>
        <button onClick={() => setShowImportModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded text-xs text-muted-foreground hover:text-foreground transition-colors"><Download size={13} />Import</button>
      </div>
      <div className="bg-card rounded-lg border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border">{["Customer","Tier","Location","Orders","Total Spent","Last Order",].map((h, i) => <th key={i} className="text-left px-4 py-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-border">
            {filtered.map((c) => (
              <tr key={c.id} className="hover:bg-muted/30 transition-colors cursor-pointer" onClick={() => onSelectCustomer(c)}>
                <td className="px-4 py-3"><div className="flex items-center gap-2.5"><AvatarBadge initials={c.avatar} /><div><p className="font-medium text-foreground">{c.name}</p><p className="text-xs text-muted-foreground">{c.email}</p></div></div></td>
                <td className="px-4 py-3"><span className="text-xs font-mono font-semibold" style={{ color: tierColor[c.tier] }}>{c.tier}</span></td>
                <td className="px-4 py-3"><span className="text-xs text-muted-foreground">{c.location}</span></td>
                <td className="px-4 py-3"><span className="font-mono text-sm">{c.totalOrders}</span></td>
                <td className="px-4 py-3"><span className="font-mono text-sm font-medium">{fmtFull(c.totalSpent)}</span></td>
                <td className="px-4 py-3"><span className="font-mono text-xs text-muted-foreground">{c.lastOrder}</span></td>
                <td className="px-4 py-3"><button className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => { e.stopPropagation(); onSelectCustomer(c); }}><Eye size={14} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-border flex items-center justify-between"><span className="text-xs text-muted-foreground font-mono">{filtered.length} customers</span><span className="text-xs text-muted-foreground font-mono">Page 1 of 1</span></div>
      </div>
    </div>
    {showAddModal &&(
      <AddCustomerModal onClose={() => setShowAddModal(false)} onSave={(newCustomer)=> {onAddCustomer(newCustomer); setShowAddModal(false);}} />
    )}
    {showImportModal && (
      <ImportCustomersModal onClose={() => setShowImportModal(false)} onImport={onImportCustomers} />
    )}
      </>
  );
}

// ── Edit Customer Popup ────────────────────────────────────────────────────────────

function EditCustomerModal({
  customer,
  onSave,
  onClose,
  }: {
  customer: typeof customers[0];
  onSave: (updated: typeof customers[0]) => void;
  onClose: () => void;
  }) {
  const [form, setForm] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    location: customer.location,
    tier: customer.tier,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...customer, ...form });
  };

  const tiers = ["Enterprise", "Pro", "Starter"] as const;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-lg border border-border p-5 w-full max-w-sm flex flex-col gap-3 sm:gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-sm font-semibold text-foreground">Edit Customer</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {(["name", "email", "phone", "location"] as const).map((field) => (
            <div key={field} className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground font-mono capitalize">
                {field}
              </label>
              <input
                value={form[field]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [field]: e.target.value }))
                }
                className="bg-background border border-border rounded px-2 py-1.5 text-sm text-foreground"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground font-mono">Tier</label>
            <select
              value={form.tier}
              onChange={(e) =>
                setForm((f) => ({ ...f, tier: e.target.value as typeof customer.tier }))
              }
              className="bg-background border border-border rounded px-2 py-1.5 text-sm text-foreground"
            >
              {tiers.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono px-3 py-1.5 rounded border border-border text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-xs font-mono px-3 py-1.5 rounded bg-foreground text-background"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Edit Order view ───────────────────────────────────────────────────────────────

function EditOrderModal({
  order,
  onSave,
  onClose,
  }: {
  order: typeof orders[0];
  onSave: (updated: typeof orders[0]) => void;
  onClose: () => void;
  }) {
  const [form, setForm] = useState({
    product: order.product,
    price: String(order.items ? order.amount / order.items : order.amount),
    items: String(order.items),
    status: order.status,
  });

  const items = Number(form.items) || 1;
  const price = Number(form.price) || 0;
  const total = price * items;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...order, product: form.product, amount: total, items, status: form.status });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-card rounded-lg border border-border w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-sm sm:text-base font-semibold text-foreground mb-4">Edit Order — {order.id}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input required type="text" placeholder="Product" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <input required type="number" min="0" placeholder="Price per item (₦)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <input required type="number" min="1" placeholder="Items" value={form.items} onChange={(e) => setForm({ ...form, items: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground" />
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground">
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <p className="text-xs text-muted-foreground font-mono">Total: {fmtFull(total)}</p>
          <div className="flex gap-2 mt-2">
            <button type="button" onClick={onClose} className="flex-1 px-3 py-2 rounded text-sm bg-card border border-border text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
            <button type="submit" className="flex-1 px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}


// ── Customer view ───────────────────────────────────────────────────────────────

function CustomerDetail({
  customer,
  orderList,
  onBack,
  onUpdateCustomer,
  }: {
  customer: typeof customers[0];
  orderList: typeof orders;
  onBack: () => void;
  onUpdateCustomer: (updated: typeof customers[0]) => void;
  }) {
  const [isEditing, setIsEditing] = useState(false);
  const customerOrders = orderList.filter((o) => o.customerId === customer.id);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground font-mono transition-colors">← Customers</button>
        <ChevronRight size={12} className="text-muted-foreground" />
        <span className="text-xs text-foreground font-mono">{customer.name}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-8">
        <div className="bg-card rounded-lg border border-border p-5 flex flex-col gap-3 sm:gap-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AvatarBadge initials={customer.avatar} size="lg" />
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-foreground">{customer.name}</h2>
                <span className="text-xs font-mono font-semibold" style={{ color: tierColor[customer.tier] }}>{customer.tier}</span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs font-mono px-2 py-1 rounded border border-border text-muted-foreground hover:text-foreground transition-colors"
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground"><Mail size={13} /><span className="truncate">{customer.email}</span></div>
            <div className="flex items-center gap-2 text-muted-foreground"><Phone size={13} /><span>{customer.phone}</span></div>
            <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={13} /><span>{customer.location}</span></div>
          </div>
          <div className="border-t border-border pt-3 grid grid-cols-2 gap-3">
            <div><p className="text-xs text-muted-foreground font-mono">Orders</p><p className="text-lg font-semibold text-foreground font-mono">{customer.totalOrders}</p></div>
            <div><p className="text-xs text-muted-foreground font-mono">Spent</p><p className="text-sm sm:text-base font-semibold text-foreground font-mono">{fmt(customer.totalSpent)}</p></div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-card rounded-lg border border-border overflow-x-auto">
          <div className="px-5 py-4 border-b border-border"><h3 className="text-sm font-semibold text-foreground">Order History</h3></div>
          {customerOrders.length === 0 ? <div className="px-5 py-8 text-center text-sm text-muted-foreground">No orders found</div> : (
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border">{["Order ID","Product","Amount","Date","Status"].map((h, i) => <th key={i} className="text-left px-4 py-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">{h}</th>)}</tr></thead>
              <tbody className="divide-y divide-border">
                {customerOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{o.id}</td>
                    <td className="px-4 py-3 text-foreground">{o.product}</td>
                    <td className="px-4 py-3 font-mono font-medium">{fmtFull(o.amount)}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{o.date}</td>
                    <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {isEditing && (
        <EditCustomerModal
          customer={customer}
          onSave={(updated) => {
            onUpdateCustomer(updated);
            setIsEditing(false);
          }}
          onClose={() => setIsEditing(false)}
        />
      )} 
    </div>
  );
}

// ── Orders view ───────────────────────────────────────────────────────────────


function OrdersView({
  orderList,
  customerList,
  onAddOrder,
  onUpdateOrder,
  }: {
  orderList: typeof orders;
  customerList: typeof customers;
  onAddOrder: (o: typeof orders[0]) => void;
  onUpdateOrder: (o: typeof orders[0]) => void;
  }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState<typeof orders[0] | null>(null);
  const statuses = ["All", "delivered", "shipped", "processing", "cancelled"];
  const filtered = statusFilter === "All" ? orderList : orderList.filter((o) => o.status === statusFilter);
  const totalFiltered = filtered.reduce((s, o) => s + o.amount, 0);

  return (
    <div className="flex flex-col gap-3 sm:gap-8">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex gap-1.5 flex-wrap">{statuses.map((s) => <button key={s} onClick={() => setStatusFilter(s)} className={`px-3 py-1.5 rounded text-xs font-medium capitalize transition-colors ${statusFilter === s ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>{s}</button>)}</div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">{filtered.length} orders · {fmtFull(totalFiltered)}</span>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors"
            >
            <Plus size={13} />Add Order
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded text-xs text-muted-foreground hover:text-foreground transition-colors"><Filter size={13} />Filter</button>
        </div>
      </div>
       <div className="bg-card rounded-lg border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {["Order ID","Customer","Product","Items","Amount","Date","Status",""].map((h, i) => (
                <th key={i} className="text-left px-4 py-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((o) => (
              <tr key={o.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{o.id}</td>
                <td className="px-4 py-3 font-medium text-foreground">{o.customer}</td>
                <td className="px-4 py-3 text-muted-foreground max-w-48 truncate">{o.product}</td>
                <td className="px-4 py-3 font-mono text-center">{o.items}</td>
                <td className="px-4 py-3 font-mono font-medium">{fmtFull(o.amount)}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{o.date}</td>
                <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
                <td className="px-4 py-3">
                  <button onClick={() => setEditingOrder(o)} className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Pencil size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">{filtered.length} of {orderList.length} orders</span>
          <span className="text-xs text-muted-foreground font-mono">Total: {fmtFull(totalFiltered)}</span>
        </div>
      </div>

      {showAddModal && (
        <AddOrderModal
          customerList={customerList}
          onClose={() => setShowAddModal(false)}
          onSave={(newOrder) => { onAddOrder(newOrder); setShowAddModal(false); }}
        />
      )}
      {editingOrder && (
        <EditOrderModal
          order={editingOrder}
          onClose={() => setEditingOrder(null)}
          onSave={(updated) => { onUpdateOrder(updated); setEditingOrder(null); }}
        />
      )}
    </div>
  );
}


// ── Add Follow-up Modal ───────────────────────────────────────────────────────

function AddFollowUpModal({
  customerList,
  onClose,
  onSave,
  }: {
  customerList: typeof customers;
  onClose: () => void;
  onSave: (f: typeof followUps[0]) => void;
  }) {
  const [form, setForm] = useState({
    customerId: customerList[0]?.id ?? "",
    task: "",
    priority: "Medium" as "High" | "Medium" | "Low",
    dueDate: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customer = customerList.find((c) => c.id === form.customerId);
    if (!customer) return;
    const newFollowUp = {
      id: `F-${Math.floor(Math.random() * 9000 + 1000)}`,
      customerId: customer.id,
      customer: customer.name,
      task: form.task,
      priority: form.priority,
      dueDate: form.dueDate,
      status: "pending" as const,
      notes: form.notes,
    };
    onSave(newFollowUp);
  };

  if (customerList.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-lg border border-border w-full max-w-sm p-6 text-center">
          <AlertCircle size={28} className="mx-auto mb-3 text-amber-500" />
          <h2 className="text-sm sm:text-base font-semibold text-foreground mb-1">No customers yet</h2>
          <p className="text-sm text-muted-foreground mb-4">Add a customer first before creating a follow-up.</p>
          <button onClick={onClose} className="w-full px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors">
            Got it
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-card rounded-lg border border-border w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-sm sm:text-base font-semibold text-foreground mb-4">Add Follow-up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1 block">Customer</label>
            <select
              required
              value={form.customerId}
              onChange={(e) => setForm({ ...form, customerId: e.target.value })}
              className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground"
            >
              {customerList.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1 block">Task</label>
            <input
              required
              type="text"
              placeholder="e.g. Call about renewal"
              value={form.task}
              onChange={(e) => setForm({ ...form, task: e.target.value })}
              className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground font-mono mb-1 block">Priority</label>
              <select
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value as "High" | "Medium" | "Low" })}
                className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-mono mb-1 block">Due date</label>
              <input
                required
                type="date"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground font-mono mb-1 block">Notes (optional)</label>
            <textarea
              placeholder="Any extra context…"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-foreground resize-none"
            />
          </div>

          <div className="flex gap-2 mt-2">
            <button type="button" onClick={onClose} className="flex-1 px-3 py-2 rounded text-sm bg-card border border-border text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
            <button type="submit" className="flex-1 px-3 py-2 rounded text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Follow-ups view ───────────────────────────────────────────────────────────

function FollowUpsView({
  followUpList,
  customerList,
  onAddFollowUp,
  onCompleteFollowUp,
  }: {
  followUpList: typeof followUps;
  customerList: typeof customers;
  onAddFollowUp: (f: typeof followUps[0]) => void;
  onCompleteFollowUp: (id: string) => void;
  }) {
  const [filterStatus, setFilterStatus] = useState<"All" | "Pending" | "Completed">("Pending");
  const [showAddModal, setShowAddModal] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const filtered = followUpList
    .filter((f) => {
      if (filterStatus === "Pending") return f.status === "pending";
      if (filterStatus === "Completed") return f.status === "completed";
      return true;
    })
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  const pendingCount = followUpList.filter((f) => f.status === "pending").length;
  const overdueCount = followUpList.filter((f) => f.status === "pending" && f.dueDate < today).length;

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-8">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex gap-1.5">
            {(["Pending", "Completed", "All"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${filterStatus === s ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            {pendingCount} pending{overdueCount > 0 ? ` · ${overdueCount} overdue` : ""}
          </span>
          <div className="flex-1" />
          <button onClick={() => setShowAddModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors">
            <Plus size={13} />Add Follow-up
          </button>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-x-auto">
          {filtered.length === 0 ? (
            <div className="px-5 py-10 text-center text-sm text-muted-foreground">No follow-ups here.</div>
          ) : (
            <div className="divide-y divide-border">
              {filtered.map((f) => {
                const isOverdue = f.status === "pending" && f.dueDate < today;
                const customer = customerList.find((c) => c.id === f.customerId);
                return (
                  <div key={f.id} className="flex items-center gap-3 px-5 py-3 hover:bg-muted/30 transition-colors">
                    <AvatarBadge initials={customer?.avatar ?? "?"} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${f.status === "completed" ? "text-muted-foreground line-through" : "text-foreground"}`}>{f.task}</p>
                      <p className="text-xs text-muted-foreground truncate">{f.customer}</p>
                    </div>
                    <PriorityBadge priority={f.priority} />
                    <span className={`text-xs font-mono flex items-center gap-1 w-24 flex-shrink-0 ${isOverdue ? "text-red-500 font-semibold" : "text-muted-foreground"}`}>
                      <CalendarClock size={12} />{f.dueDate}
                    </span>
                    {f.status === "pending" ? (
                      <button
                        onClick={() => onCompleteFollowUp(f.id)}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-medium bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors flex-shrink-0"
                      >
                        <Check size={13} />Complete
                      </button>
                    ) : (
                      <span className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-medium text-muted-foreground flex-shrink-0">
                        <CheckCircle size={13} className="text-emerald-500" />Done
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
          
      {showAddModal && (
        <AddFollowUpModal
          customerList={customerList}
          onClose={() => setShowAddModal(false)}
          onSave={(f) => { onAddFollowUp(f); setShowAddModal(false); }}
        />
      )}
    </>
  );
}


// ── Activity view ───────────────────────────────────────────────────────────────

function ActivityView({ activityList }: { activityList: typeof activity }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-8 max-w-2xl">
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border"><h3 className="text-sm font-semibold text-foreground">All Activity</h3><p className="text-xs text-muted-foreground font-mono mt-0.5">Last 7 days</p></div>
        <div className="divide-y divide-border">
          {activityList.map((a) => {
            const iconMap: Record<string, React.ReactNode> = {
              order:   <ShoppingCart size={14} className="text-blue-500" />,
              upgrade: <Star size={14} style={{ color: "#e8a020" }} />,
              alert:   <AlertCircle size={14} className="text-amber-500" />,
              shipped: <Package size={14} className="text-purple-500" />,
              new:     <Users size={14} className="text-emerald-500" />,
              cancel:  <XCircle size={14} className="text-red-500" />,
            };
            return (
              <div key={a.id} className="flex items-start gap-3 px-5 py-4 hover:bg-muted/30 transition-colors">
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">{iconMap[a.icon]}</div>
                <div className="flex-1"><p className="text-sm text-foreground">{a.text}</p><p className="text-xs text-muted-foreground font-mono mt-0.5">{a.time}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-10 h-5.5 rounded-full transition-colors flex-shrink-0 ${checked ? "bg-primary" : "bg-muted"}`}
      style={{ height: 22 }}
    >
      <span
        className="absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full bg-white transition-transform"
        style={{ width: 18, height: 18, transform: checked ? "translateX(18px)" : "translateX(0)" }}
      />
    </button>
  );
}

function SettingsRow({ label, description, control }: { label: string; description?: string; control: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
      {control}
    </div>
  );
}

function SettingsView({
    theme,
    onThemeChange,
    onResetData,
    emailNotifs,
    onEmailNotifsChange,
    orderAlerts,
    onOrderAlertsChange,
    weeklyDigest,
    onWeeklyDigestChange,
  }: {
    theme: "light" | "dark";
    onThemeChange: (t: "light" | "dark") => void;
    onResetData: () => void;
    emailNotifs: boolean;
    onEmailNotifsChange: (v: boolean) => void;
    orderAlerts: boolean;
    onOrderAlertsChange: (v: boolean) => void;
    weeklyDigest: boolean;
    onWeeklyDigestChange: (v: boolean) => void;
  }) {
      const [showConfirmReset, setShowConfirmReset] = useState(false);

      return (
      <div className="flex flex-col gap-3 sm:gap-8 max-w-2xl">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">Appearance</h3>
          </div>
          <SettingsRow
            label="Theme"
            description="Switch between light and dark mode"
            control={
              <div className="flex gap-1.5">
                <button
                  onClick={() => onThemeChange("light")}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${theme === "light" ? "bg-primary text-primary-foreground" : "bg-background border border-border text-muted-foreground hover:text-foreground"}`}
              >
                Light
              </button>
              <button
                onClick={() => onThemeChange("dark")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${theme === "dark" ? "bg-primary text-primary-foreground" : "bg-background border border-border text-muted-foreground hover:text-foreground"}`}
              >
                Dark
              </button>
            </div>
          }
        />
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden divide-y divide-border">
        <div className="px-5 py-4">
          <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
        </div>
        <SettingsRow label="Email notifications" description="Receive updates by email" control={<ToggleSwitch checked={emailNotifs} onChange={onEmailNotifsChange} />} />
        <SettingsRow label="Order alerts" description="Get notified on new and updated orders" control={<ToggleSwitch checked={orderAlerts} onChange={onOrderAlertsChange} />} />
        <SettingsRow label="Weekly digest" description="Summary of activity every Monday" control={<ToggleSwitch checked={weeklyDigest} onChange={onWeeklyDigestChange} />} />
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Account</h3>
        </div>
        <SettingsRow label="Name" control={<span className="text-sm text-muted-foreground">Osungbure Feranmi</span>} />
        <SettingsRow label="Role" control={<span className="text-sm text-muted-foreground">Admin</span>} />
      </div>

      <div className="bg-card rounded-lg border border-red-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-red-100">
          <h3 className="text-sm font-semibold text-red-600">Delete Data</h3>
        </div>
        <SettingsRow
          label="Reset data"
          description="Restore customers and orders to their original state"
          control={
            <button
              onClick={() => setShowConfirmReset(true)}
              className="px-3 py-1.5 rounded text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
            >
              Reset
            </button>
          }
        />
      </div>

      {showConfirmReset && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowConfirmReset(false)}>
          <div className="bg-card rounded-lg border border-border w-full max-w-sm p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-sm sm:text-base font-semibold text-foreground mb-2">Reset all data?</h2>
            <p className="text-sm text-muted-foreground mb-4">This clears all customers, orders, and activity you've added and clears it up permanently. This can't be undone.</p>
            <div className="flex gap-2">
              <button onClick={() => setShowConfirmReset(false)} className="flex-1 px-3 py-2 rounded text-sm bg-card border border-border text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
              <button onClick={() => { onResetData(); setShowConfirmReset(false); }} className="flex-1 px-3 py-2 rounded text-sm bg-red-600 text-white hover:opacity-90 transition-colors">Reset</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── CRM Dashboard shell ───────────────────────────────────────────────────────

const pageTitles: Record<string, string> = { dashboard: "Dashboard", customers: "Customers", orders: "Orders", followups: "Follow-ups", activity: "Activity", settings: "Settings" };

export default function CRMDashboard({ onSignOut }: { onSignOut: () => void }) {
  const [page, setPage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const handleResetData = () => {
    setCustomerList(customers);
    setOrderList(orders);
    setActivityList(activity);
    setFollowUpList(followUps);
  };
  const [followUpList, setFollowUpList] = useState(followUps);
  const [activityList, setActivityList] = useState(activity);
  const logActivity = (text: string, icon: string) => {
    setActivityList((prev) => [
      { id: Date.now(), text, time: "Just now", icon },
      ...prev,
    ]);
  };
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [customerList, setCustomerList] = useState(customers);
  const [orderList, setOrderList] = useState(orders);
  const selectedCustomer = customerList.find((c) => c.id === selectedCustomerId) ?? null;
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [orderAlerts, setOrderAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const handleAddCustomer = (c: typeof customers[0]) => {
  setCustomerList((prev) => [...prev, c]);
  logActivity(`New customer added: ${c.name}`, "new");
  };

  const handleImportCustomers = (newCustomers: typeof customers) => {
  setCustomerList((prev) => [...prev, ...newCustomers]);
  logActivity(`Imported ${newCustomers.length} customer${newCustomers.length === 1 ? "" : "s"}`, "new");
  };

  const handleUpdateCustomer = (updated: typeof customers[0]) => {
  setCustomerList((list) => list.map((c) => (c.id === updated.id ? updated : c)));
  logActivity(`${updated.name}'s details were updated`, "upgrade");
  };

  const handleAddOrder = (o: typeof orders[0]) => {
    setOrderList((prev) => [o, ...prev]);
    setCustomerList((prev) =>
    prev.map((c) =>
      c.id === o.customerId
        ? { ...c, totalOrders: c.totalOrders + 1, totalSpent: c.totalSpent + o.amount, lastOrder: o.date }
        : c
    )
  );
  logActivity(`New order ${o.id} from ${o.customer}`, "order");
  };

  const handleUpdateOrder = (updated: typeof orders[0]) => {
    setOrderList((prev) => {
      const old = prev.find((o) => o.id === updated.id);
      const delta = old ? updated.amount - old.amount : 0;
        if (old && delta !== 0) {
          setCustomerList((cList) =>
            cList.map((c) => (c.id === updated.customerId ? { ...c, totalSpent: c.totalSpent + delta } : c))
          );
        }
      return prev.map((o) => (o.id === updated.id ? updated : o));
    });
    logActivity(`Order ${updated.id} updated — now ${updated.status}`, "shipped");
  };

  const handleAddFollowUp = (f: typeof followUps[0]) => {
    setFollowUpList((prev) => [f, ...prev]);
    logActivity(`Follow-up scheduled for ${f.customer}: ${f.task}`, "new");
  };

  const handleCompleteFollowUp = (id: string) => {
    setFollowUpList((prev) => prev.map((f) => (f.id === id ? { ...f, status: "completed" as const } : f)));
    const f = followUpList.find((x) => x.id === id);
    if (f) logActivity(`Follow-up completed for ${f.customer}: ${f.task}`, "shipped");
  };

  const handleNav = (id: string) => { setPage(id); setSelectedCustomerId(null); };
  return (
    <div className={`flex h-screen bg-background overflow-hidden ${theme === "dark" ? "dark" : ""}`} style={{ fontFamily: "'Inter', sans-serif" }}>
      <Sidebar active={page} onNav={handleNav} collapsed={collapsed} onToggle={() => setCollapsed((p) => !p)} onSignOut={onSignOut} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-card border-b border-border flex-shrink-0">
          <div>
            <h1 className="text-sm sm:text-base font-semibold text-foreground">{selectedCustomer ? selectedCustomer.name : pageTitles[page]}</h1>
            <p className="text-xs text-muted-foreground font-mono">{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => handleNav("activity")} className="relative p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"><Bell size={16} /><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" /></button>
            <div className="flex items-center gap-2 cursor-pointer group"><AvatarBadge initials="OF" /><div className="hidden sm:block"><p className="text-xs font-medium text-foreground">Osungbure Feranmi</p></div><ChevronDown size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" /></div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {page === "dashboard" && <DashboardView onNavigate={handleNav} activityList={activityList} />}
          {page === "customers" && !selectedCustomer && (
            <CustomersView
              customerList={customerList}
              onAddCustomer={handleAddCustomer}
              onImportCustomers={handleImportCustomers}
              onSelectCustomer={(c) => setSelectedCustomerId(c.id)}
            />
          )}
          {page === "customers" && selectedCustomer && (
            <CustomerDetail
              customer={selectedCustomer}
              orderList={orderList}
              onBack={() => setSelectedCustomerId(null)}
              onUpdateCustomer={handleUpdateCustomer}
            />
          )}
          {page === "orders" && (
            <OrdersView
              orderList={orderList}
              customerList={customerList}
              onAddOrder={handleAddOrder}
              onUpdateOrder={handleUpdateOrder}
            />
          )}
          {page === "followups" && (
            <FollowUpsView
              followUpList={followUpList}
              customerList={customerList}
              onAddFollowUp={handleAddFollowUp}
              onCompleteFollowUp={handleCompleteFollowUp}
            />
          )}
          {page === "activity" && <ActivityView activityList={activityList} />}
          {page === "settings" && (
            <SettingsView
              theme={theme}
              onThemeChange={setTheme}
              onResetData={handleResetData}
              emailNotifs={emailNotifs}
              onEmailNotifsChange={setEmailNotifs}
              orderAlerts={orderAlerts}
              onOrderAlertsChange={setOrderAlerts}
              weeklyDigest={weeklyDigest}
              onWeeklyDigestChange={setWeeklyDigest}
            />
          )}
        </main>
      </div>
    </div>
  );
}