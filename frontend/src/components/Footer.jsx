import { Cpu, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-blue rounded-xl flex items-center justify-center">
                <Cpu size={18} className="text-white" />
              </div>
              <span className="font-display font-extrabold text-xl">
                kid<span className="text-brand-amber">rove</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Inspiring the next generation of innovators through
              hands-on technology education — workshops, camps, and courses
              designed for curious minds aged 4–16.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-extrabold text-white mb-4 uppercase tracking-wider text-sm">
              Workshop
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {[
                { label: "Workshop Details", id: "details" },
                { label: "Learning Outcomes", id: "outcomes" },
                { label: "FAQ", id: "faq" },
                { label: "Register Now", id: "register" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() =>
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-brand-amber transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-extrabold text-white mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-amber" />
                hello@kidrove.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-amber" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-brand-amber" />
                www.kidrove.com
              </li>
            </ul>

            {/* Workshop quick info */}
            <div className="mt-5 bg-white/5 rounded-xl p-3 text-xs text-white/50 space-y-1">
              <p>🗓 Starts: <strong className="text-white">15 July 2026</strong></p>
              <p>⏱ Duration: <strong className="text-white">4 Weeks</strong></p>
              <p>💰 Fee: <strong className="text-brand-amber">₹2,999 only</strong></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Kidrove. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with ❤️ for curious young minds · AI &amp; Robotics Summer Workshop 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
