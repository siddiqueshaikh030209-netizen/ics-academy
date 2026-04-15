export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div>
          <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-accent mb-4">
            ABOUT ICS ACADEMY
          </div>
          
          <h2 className="font-playfair text-[40px] leading-tight text-primary m-0">
            Eight Years of Building Academic Excellence in Kondhwa
          </h2>
          
          <div className="w-[60px] h-[2px] bg-accent mt-6 mb-8"></div>
          
          <p className="font-sans text-[16px] leading-[1.75] text-text m-0">
            Established in 2017 and located in Kausar Baugh, Kondhwa, ICS Academy was built on one belief — every student has the potential to excel when given clarity, consistency, and the right environment. We serve students from Class 8 through competitive exam preparation, with a teaching model built on understanding, not memorization.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-4">
          
          {/* Stat Box 1 */}
          <div className="bg-white border text-left border-[#E5E7EB] border-l-[4px] border-l-accent p-6 rounded-none">
            <div className="font-playfair text-[28px] font-bold text-primary mb-1">Est. 2017</div>
            <div className="font-sans text-[14px] text-muted">Years of academic experience in Kondhwa</div>
          </div>
          
          {/* Stat Box 2 */}
          <div className="bg-white border text-left border-[#E5E7EB] border-l-[4px] border-l-accent p-6 rounded-none">
            <div className="font-playfair text-[28px] font-bold text-primary mb-1">4.5 Stars</div>
            <div className="font-sans text-[14px] text-muted">Rated by students and parents on Google</div>
          </div>
          
          {/* Stat Box 3 */}
          <div className="bg-white border text-left border-[#E5E7EB] border-l-[4px] border-l-accent p-6 rounded-none">
            <div className="font-playfair text-[28px] font-bold text-primary mb-1">7 Days a Week</div>
            <div className="font-sans text-[14px] text-muted">Open 10:00 AM to 9:30 PM every day</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
