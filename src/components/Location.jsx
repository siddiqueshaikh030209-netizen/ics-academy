export default function Location() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div>
          <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-accent mb-4">
            FIND US
          </div>
          <h2 className="font-playfair text-[38px] leading-tight text-primary m-0">
            Located in the Heart of Kondhwa
          </h2>
          <div className="w-[60px] h-[2px] bg-accent mt-6 mb-8"></div>

          <div className="space-y-6">
            <div className="border-l-[3px] border-l-accent pl-4 font-sans text-[15px] text-text leading-[1.6]">
              1st Floor, Konark Indrayu Mall<br/>
              Above SBI Bank, Kausar Baugh<br/>
              Kondhwa, Pune, Maharashtra 411048
            </div>

            <div className="border-l-[3px] border-l-accent pl-4 font-sans text-[15px] text-text leading-[1.6]">
              +91 74986 89246
            </div>

            <div className="border-l-[3px] border-l-accent pl-4 font-sans text-[15px] text-text leading-[1.6]">
              Monday – Sunday: 10:00 AM – 9:30 PM<br/>
              Open all 7 days of the week
            </div>
          </div>

          <p className="font-sans text-[14px] text-muted mt-8 mb-8">
            Easily reachable from NIBM, Salunke Vihar, Undri, and surrounding Kondhwa areas.
          </p>

          <a 
            href="https://wa.me/917498689246?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20ICS%20Academy." 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-accent text-white font-sans font-medium text-center px-6 py-4 rounded-none hover:bg-opacity-90 transition-colors"
          >
            Send a Message on WhatsApp
          </a>

        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full">
          <div className="border border-[#E5E7EB] rounded-none p-2 bg-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d73.8800!3d18.4660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb9925f50001%3A0x1!2sKausar+Baugh%2C+Kondhwa%2C+Pune!5e0!3m2!1sen!2sin!4v1" 
              width="100%" 
              height="420" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
