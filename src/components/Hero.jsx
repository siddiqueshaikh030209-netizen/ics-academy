export default function Hero() {
  const waLink = "https://wa.me/917498689246?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20ICS%20Academy.";

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center pt-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex items-center grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-accent">
            Kondhwa's Trusted Coaching Institute
          </div>
          
          <h1 className="font-playfair text-[40px] md:text-[64px] leading-tight text-white m-0">
            Turn Your Efforts Into Results with Expert Guidance
          </h1>
          
          <p className="text-[18px] text-[rgba(255,255,255,0.75)] font-sans max-w-[90%] leading-relaxed m-0">
            From strong school foundations to NEET preparation — we track, mentor, and improve every student, every week.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-accent text-white font-sans text-[15px] px-[24px] py-[12px] rounded-none hover:bg-opacity-90 transition-none flex items-center w-full sm:w-auto justify-center">
              Enquire on WhatsApp
            </a>
            <a href="#programs" className="bg-transparent border border-white text-white font-sans text-[15px] px-[24px] py-[12px] rounded-none hover:bg-white hover:text-primary transition-none flex items-center w-full sm:w-auto justify-center">
              View Programs 
            </a>
          </div>
          
          {/* Trust Bar */}
          <div className="pt-8 border-t-[2px] border-accent mt-12 flex flex-wrap gap-4 sm:gap-6 items-center">
            <div className="font-sans text-[13px] text-[rgba(255,255,255,0.6)] uppercase tracking-wide">
              Est. 2017
            </div>
            <div className="hidden sm:block w-[1px] h-4 bg-[rgba(255,255,255,0.2)]"></div>
            <div className="font-sans text-[13px] text-[rgba(255,255,255,0.6)] uppercase tracking-wide">
              4.5 Stars on Google
            </div>
            <div className="hidden sm:block w-[1px] h-4 bg-[rgba(255,255,255,0.2)]"></div>
            <div className="font-sans text-[13px] text-[rgba(255,255,255,0.6)] uppercase tracking-wide">
              Kondhwa, Pune
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
          {/* Aspect Ratio 4:5 Navy Placeholder */}
          <div className="relative w-[320px] h-[400px] lg:w-[400px] lg:h-[500px] bg-primary border-[1px] border-[rgba(255,255,255,0.1)]">
             {/* Text indicator for placeholder */}
             <div className="absolute inset-0 flex items-center justify-center font-sans text-[rgba(255,255,255,0.2)] text-[14px] uppercase tracking-widest">
               Image Placeholder
             </div>
             {/* Overlapping Red Rectangle bottom-left */}
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom rule */}
      <div className="w-full h-[2px] bg-accent mt-auto"></div>
    </section>
  );
}
