import { motion } from "framer-motion";
import { Users, Clock, Monitor, IndianRupee, CalendarDays } from "lucide-react";

const DETAILS = [
  {
    icon: Users,
    label: "Age Group",
    value: "8 – 14 Years",
    bg: "bg-blue-50",
    iconBg: "bg-brand-blue",
    border: "border-blue-100",
    desc: "Perfect for curious kids in school",
  },
  {
    icon: Clock,
    label: "Duration",
    value: "4 Weeks",
    bg: "bg-purple-50",
    iconBg: "bg-brand-indigo",
    border: "border-purple-100",
    desc: "Intensive, project-based sessions",
  },
  {
    icon: Monitor,
    label: "Mode",
    value: "Online",
    bg: "bg-green-50",
    iconBg: "bg-brand-mint",
    border: "border-green-100",
    desc: "Live classes from the comfort of home",
  },
  {
    icon: IndianRupee,
    label: "Workshop Fee",
    value: "₹2,999",
    bg: "bg-amber-50",
    iconBg: "bg-brand-amber",
    border: "border-amber-100",
    desc: "All materials & certificate included",
  },
  {
    icon: CalendarDays,
    label: "Start Date",
    value: "15 July 2026",
    bg: "bg-rose-50",
    iconBg: "bg-rose-500",
    border: "border-rose-100",
    desc: "Seats fill up fast — register early!",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WorkshopDetails() {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-display font-bold text-sm bg-brand-softblue text-brand-blue px-4 py-1.5 rounded-full mb-4">
            Workshop Details
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-navy mb-4">
            Everything you need to know
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A complete summer experience designed by experts — everything is
            included from day one.
          </p>
        </motion.div>

        {/* Detail cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {DETAILS.map(({ icon: Icon, label, value, bg, iconBg, border, desc }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              className={`${bg} border ${border} rounded-2xl p-5 flex flex-col items-start gap-3 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default`}
            >
              <div className={`${iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="font-display font-black text-xl text-brand-navy leading-tight">
                  {value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workshop description strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center gap-6"
        >
          <div className="text-5xl flex-shrink-0">🤖</div>
          <div className="flex-1">
            <h3 className="font-display font-black text-2xl mb-2">
              What makes this workshop special?
            </h3>
            <p className="text-white/80 leading-relaxed">
              This isn't a watch-and-listen course. Kids build{" "}
              <strong className="text-brand-amber">real projects every week</strong> —
              from programming a robot arm to training a simple AI model. Each
              session is live, interactive, and led by certified instructors who
              make technology fun for young minds.
            </p>
          </div>
          <button
            onClick={() =>
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex-shrink-0 font-display font-extrabold bg-brand-amber text-brand-navy px-7 py-3.5 rounded-2xl hover:bg-amber-400 transition-colors whitespace-nowrap shadow-lg"
          >
            Reserve a Spot →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
