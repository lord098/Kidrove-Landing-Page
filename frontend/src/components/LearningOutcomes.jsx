import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const OUTCOMES = [
  {
    emoji: "🤖",
    title: "Build & Program Real Robots",
    desc: "Assemble and code robotic models using block-based and Python programming — no experience needed.",
    color: "from-blue-500 to-brand-blue",
  },
  {
    emoji: "🧠",
    title: "Understand AI Fundamentals",
    desc: "Learn what artificial intelligence actually is, how machine learning works, and train simple models hands-on.",
    color: "from-purple-500 to-brand-indigo",
  },
  {
    emoji: "💻",
    title: "Write Real Python Code",
    desc: "Graduate from Scratch to Python. Kids write, run, and debug actual programs by the end of Week 1.",
    color: "from-green-500 to-emerald-600",
  },
  {
    emoji: "🎮",
    title: "Design Interactive Games",
    desc: "Create their own AI-powered games using tools like Scratch AI and Python Pygame, then show them off.",
    color: "from-amber-400 to-orange-500",
  },
  {
    emoji: "🏆",
    title: "Compete in a Mini Hackathon",
    desc: "Week 4 ends with a friendly hackathon where kids present their best project and win exciting prizes.",
    color: "from-rose-500 to-pink-600",
  },
  {
    emoji: "🎓",
    title: "Earn a Verified Certificate",
    desc: "Every participant receives a Kidrove-verified digital certificate of completion, shareable on LinkedIn and school portfolios.",
    color: "from-teal-400 to-cyan-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function LearningOutcomes() {
  return (
    <section id="outcomes" className="py-20 bg-brand-softblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-display font-bold text-sm bg-white text-brand-blue px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Learning Outcomes
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-navy mb-4">
            What your child will{" "}
            <span className="text-brand-blue">walk away with</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            After 4 weeks of building, coding, and creating, your child will
            have skills and confidence that last a lifetime.
          </p>
        </motion.div>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              {/* Top gradient strip */}
              <div className={`h-1.5 w-full rounded-t-xl bg-gradient-to-r ${outcome.color} -mt-6 -mx-6 mb-5 rounded-none`}
                style={{ marginTop: "-1.5rem", marginLeft: "-1.5rem", width: "calc(100% + 3rem)", borderRadius: "0.75rem 0.75rem 0 0" }}
              />

              <div className="text-4xl mb-4">{outcome.emoji}</div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-brand-mint flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  fillOpacity={0.15}
                />
                <div>
                  <h3 className="font-display font-extrabold text-brand-navy text-lg leading-tight mb-2 group-hover:text-brand-blue transition-colors">
                    {outcome.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-display font-bold text-slate-500 text-lg mb-5">
            Join <span className="text-brand-blue font-black">200+ kids</span> who have already registered for this summer →
          </p>
          <button
            onClick={() =>
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-display font-extrabold text-base bg-brand-blue text-white px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Secure Your Child's Spot →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
