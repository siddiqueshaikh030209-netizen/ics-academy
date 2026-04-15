export default function Footer() {
  return (
    <footer className="bg-[#111827] pt-16 pb-8 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* COLUMN 1 — Brand */}
        <div>
          <div className="font-playfair text-[24px] text-white">
            ICS Academy
          </div>
          <div className="w-[40px] h-[1px] bg-accent mt-4 mb-4"></div>
          <div className="font-sans text-[14px] text-[rgba(255,255,255,0.55)]">
            Concept-based learning. Consistent results.
          </div>
        </div>

        {/* COLUMN 2 — Quick Links */}
        <div className="flex flex-col space-y-4">
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)] mb-2">
            QUICK LINKS
          </div>
          <a href="#about" className="font-sans text-[14px] text-[rgba(255,255,255,0.75)] hover:text-accent transition-colors w-fit">About</a>
          <a href="#programs" className="font-sans text-[14px] text-[rgba(255,255,255,0.75)] hover:text-accent transition-colors w-fit">Programs</a>
          <a href="#methodology" className="font-sans text-[14px] text-[rgba(255,255,255,0.75)] hover:text-accent transition-colors w-fit">Methodology</a>
          <a href="#facilities" className="font-sans text-[14px] text-[rgba(255,255,255,0.75)] hover:text-accent transition-colors w-fit">Facilities</a>
          <a href="https://wa.me/917498689246?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20ICS%20Academy." target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] text-[rgba(255,255,255,0.75)] hover:text-accent transition-colors w-fit">Enquire Now</a>
        </div>

        {/* COLUMN 3 — Contact */}
        <div className="flex flex-col space-y-4">
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)] mb-2">
            CONTACT
          </div>
          <div className="font-sans text-[14px] text-[rgba(255,255,255,0.75)] leading-relaxed">
            Konark Indrayu Mall, Above SBI Bank, Kausar Baugh, Kondhwa, Pune 411048
          </div>
          <div className="font-sans text-[14px] text-[rgba(255,255,255,0.75)]">
            074986 89246
          </div>
          <div className="font-sans text-[14px] text-[rgba(255,255,255,0.75)]">
            Mon–Sun: 10 AM – 9:30 PM
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-t border-[rgba(255,255,255,0.08)] py-5 text-center">
          <div className="font-sans text-[12px] text-[rgba(255,255,255,0.35)]">
            © 2025 ICS Academy, Kondhwa, Pune. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
