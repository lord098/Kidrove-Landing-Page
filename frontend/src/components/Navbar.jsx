import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-blue rounded-xl flex items-center justify-center">
              <Cpu size={18} className="text-white" />
            </div>
            <span className={`font-display font-800 text-xl font-extrabold ${scrolled ? "text-brand-navy" : "text-white"}`}>
              kid<span className={scrolled ? "text-brand-blue" : "text-brand-amber"}>rove</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["details", "outcomes", "faq"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`font-display font-semibold text-sm capitalize transition-colors ${
                  scrolled ? "text-slate-600 hover:text-brand-blue" : "text-white/80 hover:text-white"
                }`}
              >
                {id === "outcomes" ? "What You'll Learn" : id === "faq" ? "FAQ" : "Workshop Details"}
              </button>
            ))}
            <button
              onClick={() => scrollTo("register")}
              className="font-display font-bold text-sm bg-brand-amber text-brand-navy px-5 py-2.5 rounded-full hover:bg-amber-400 transition-colors shadow-md"
            >
              Enroll Now →
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? "text-brand-navy" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {[
              { id: "details", label: "Workshop Details" },
              { id: "outcomes", label: "What You'll Learn" },
              { id: "faq", label: "FAQ" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="font-display font-semibold text-slate-700 text-left hover:text-brand-blue"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("register")}
              className="font-display font-bold bg-brand-blue text-white py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Enroll Now →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
