import { motion } from "framer-motion";
import { Bot, Zap, Star, ChevronDown } from "lucide-react";
import CircuitSVG from "./CircuitSVG";

const STATS = [
  { icon: "👦", label: "Age Group", value: "8 – 14 Years" },
  { icon: "📅", label: "Duration", value: "4 Weeks" },
  { icon: "💻", label: "Mode", value: "Online" },
  { icon: "💰", label: "Fee", value: "₹2,999" },
];

export default function Hero() {
  const scrollToRegister = () =>
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

  const scrollToDetails = () =>
    document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-blue via-brand-indigo to-slate-900">
      <CircuitSVG />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Star size={14} className="text-brand-amber fill-brand-amber" />
              <span className="font-display font-bold text-sm text-white">
                Summer 2026 · Limited Seats Available
              </span>
              <Star size={14} className="text-brand-amber fill-brand-amber" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
            >
              AI &amp; Robotics
              <span className="block text-brand-amber">Summer Workshop</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg leading-relaxed mb-4 max-w-lg"
            >
              Give your child a head-start in the world of tomorrow. Build real
              robots, train AI models, and code projects — all from home. 🚀
            </motion.p>

            {/* Start date chip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/40 rounded-full px-4 py-1.5 mb-8"
            >
              <Zap size={14} className="text-brand-mint" />
              <span className="font-display font-bold text-blue-700 text-sm bg-blue-100 px-4 py-2 rounded-full inline-flex items-center">
                Starting 15 July 2026 — Register now!
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToRegister}
                className="font-display font-extrabold text-base bg-brand-amber text-brand-navy px-8 py-4 rounded-2xl hover:bg-amber-400 transition-all shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Enroll Now — ₹2,999 →
              </button>
              <button
                onClick={scrollToDetails}
                className="font-display font-bold text-base bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/20 transition-all"
              >
                See Details
              </button>
            </motion.div>
          </div>

          {/* Right: Floating robot card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center"
          >
            {/* Robot illustration card */}
            <div className="animate-float relative w-72 h-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-2xl">
              <Bot size={80} className="text-brand-amber" strokeWidth={1.5} />
              <div className="text-center">
                <p className="font-display font-black text-white text-2xl">🤖 Build. Code.</p>
                <p className="font-display font-black text-brand-amber text-2xl">Create. Win.</p>
              </div>
              {/* Orbit dots */}
              {[0,1,2,3,4,5].map((i) => (
                <div
                  key={i}
                  className="circuit-node absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 3)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 3)}%`,
                  }}
                />
              ))}
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-3 mt-6 w-72">
              {STATS.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2.5 text-center"
                >
                  <p className="text-lg">{icon}</p>
                  <p className="font-display font-bold text-white text-sm leading-tight">{value}</p>
                  <p className="text-white/50 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
        >
          {STATS.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-3 text-center"
            >
              <p className="text-xl mb-1">{icon}</p>
              <p className="font-display font-bold text-white text-sm">{value}</p>
              <p className="text-white/50 text-xs">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <button onClick={scrollToDetails} className="text-white/50 hover:text-white transition-colors animate-bounce" aria-label="Scroll down">
            <ChevronDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
