import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white border-b border-[#E5E7EB]`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT: Logo */}
        <a href="#" className="flex flex-col justify-center">
          <span className="font-playfair font-bold text-2xl text-primary leading-none">ICS</span>
          <span className="font-sans text-[10px] font-bold text-accent tracking-widest leading-none mt-1">ACADEMY</span>
        </a>

        {/* CENTER: Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-primary font-sans text-[15px] hover:text-accent transition-colors">About</a>
          <a href="#programs" className="text-primary font-sans text-[15px] hover:text-accent transition-colors">Programs</a>
          <a href="#methodology" className="text-primary font-sans text-[15px] hover:text-accent transition-colors">Why ICS</a>
          <a href="#contact" className="text-primary font-sans text-[15px] hover:text-accent transition-colors">Contact</a>
        </div>
        
        {/* RIGHT: Enquire Now Button */}
        <div className="hidden md:flex items-center">
          <a href="https://wa.me/917498689246?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20ICS%20Academy." target="_blank" rel="noopener noreferrer" className="bg-accent text-white font-sans text-[15px] px-[24px] py-[10px] rounded-none hover:bg-opacity-90 transition-all">
            Enquire Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-primary z-40 p-6 flex flex-col space-y-6 animate-fade-in">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white font-sans text-xl">About</a>
          <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="text-white font-sans text-xl">Programs</a>
          <a href="#methodology" onClick={() => setMobileMenuOpen(false)} className="text-white font-sans text-xl">Why ICS</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-white font-sans text-xl">Contact</a>
          <a href="https://wa.me/917498689246?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20ICS%20Academy." target="_blank" rel="noopener noreferrer" className="bg-accent text-white font-sans text-lg px-6 py-3 mt-4 flex justify-center text-center rounded-none">
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
}
