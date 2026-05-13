export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#F7931A]/20 px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-8">
          {/* Left */}
          <div className="text-left">
            <p className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em]">
              © 2025 Satoshi Styles
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-[#F7931A] text-sm font-bold tracking-wide">
              PHILOSOPHY OVER PROFIT
            </p>
          </div>

          {/* Right - Links */}
          <div className="text-right flex justify-end gap-6">
            <a href="#" className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity">
              Home
            </a>
            <a href="#" className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity">
              Clothing
            </a>
            <a href="#" className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity">
              Kontakt
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 text-center">
          <p className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em]">
            © 2025 Satoshi Styles
          </p>

          <p className="font-[family-name:var(--font-cormorant)] text-[#F7931A] text-sm font-bold tracking-wide">
            PHILOSOPHY OVER PROFIT
          </p>

          <div className="flex justify-center gap-6">
            <a href="#" className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity">
              Home
            </a>
            <a href="#" className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity">
              Clothing
            </a>
            <a href="#" className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity">
              Kontakt
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F7931A]/10 mt-8" />
      </div>
    </footer>
  );
}
