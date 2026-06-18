import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Does my child need any prior coding experience?",
    a: "Absolutely not! This workshop is designed for complete beginners. We start with block-based visual programming and gradually introduce Python, so children of all experience levels feel comfortable and engaged from day one.",
  },
  {
    q: "What equipment or materials does my child need?",
    a: "Just a laptop or desktop computer with a stable internet connection. All software tools are free and browser-based — no special hardware or downloads required. A webcam is recommended for the live interactive sessions.",
  },
  {
    q: "What are the class timings and how many sessions per week?",
    a: "Classes are held 3 days a week (Monday, Wednesday, Friday) from 4:00 PM to 6:00 PM IST. Each session is 2 hours, including a 15-minute break. All live sessions are also recorded and shared for 30 days.",
  },
  {
    q: "Is there a refund policy if we need to cancel?",
    a: "Yes. We offer a full refund if you cancel at least 7 days before the workshop start date (15 July 2026). Cancellations within 7 days are eligible for a 50% refund or a full credit toward our next batch.",
  },
  {
    q: "Will my child receive a certificate at the end?",
    a: "Yes! Every child who completes the workshop receives a Kidrove-verified digital certificate. It includes their name, the skills covered, and a unique verification code — great for school portfolios and college applications.",
  },
  {
    q: "How many students are there per batch?",
    a: "We keep batches small — maximum 20 students per group — to ensure every child gets individual attention from the instructor. This also makes the live sessions more interactive and fun.",
  },
];

function FAQItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`border ${isOpen ? "border-brand-blue bg-blue-50/50" : "border-slate-100 bg-white"} rounded-2xl transition-colors overflow-hidden`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-brand-navy text-base leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-slate-600 leading-relaxed text-[15px]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-display font-bold text-sm bg-brand-softblue text-brand-blue px-4 py-1.5 rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-navy mb-4">
            Got questions? We've got answers.
          </h2>
          <p className="text-slate-500 text-lg">
            Can't find your question here?{" "}
            <a
              href="mailto:hello@kidrove.com"
              className="text-brand-blue font-semibold hover:underline"
            >
              Email us directly →
            </a>
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
