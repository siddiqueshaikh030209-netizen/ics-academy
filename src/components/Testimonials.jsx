export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-accent mb-4">
            WHAT STUDENTS & PARENTS SAY
          </div>
          <h2 className="font-playfair text-[38px] text-primary m-0">
            Trusted by Families Across Kondhwa
          </h2>
        </div>

        {/* 3-COLUMN CARD ROW */}
        {/* Using flex for horizontal scroll on mobile, grid on MD and up */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
          
          {/* CARD 1 */}
          <div className="min-w-[320px] md:min-w-0 bg-white border border-[#E5E7EB] rounded-none p-9 flex flex-col snap-start">
            <div className="font-playfair text-[72px] text-accent leading-[0.5] mb-6">“</div>
            <p className="font-sans text-[16px] text-text leading-[1.75] mb-6 flex-grow">
              The teachers here ensure every student understands the concept fully before moving forward. Genuine dedication.
            </p>
            <div className="flex space-x-1 text-accent mb-6 text-lg">
              ★★★★★
            </div>
            <div>
              <div className="font-sans text-[14px] font-bold text-primary">Parent of Class 10 Student</div>
              <div className="font-sans text-[13px] text-muted">Kondhwa, Pune</div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[320px] md:min-w-0 bg-white border border-[#E5E7EB] rounded-none p-9 flex flex-col snap-start">
            <div className="font-playfair text-[72px] text-accent leading-[0.5] mb-6">“</div>
            <p className="font-sans text-[16px] text-text leading-[1.75] mb-6 flex-grow">
              My daughter's marks improved significantly within one term. The weekly test system really makes the difference.
            </p>
            <div className="flex space-x-1 text-accent mb-6 text-lg">
              ★★★★★
            </div>
            <div>
              <div className="font-sans text-[14px] font-bold text-primary">Parent of NEET Aspirant</div>
              <div className="font-sans text-[13px] text-muted">Salunke Vihar, Pune</div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="min-w-[320px] md:min-w-0 bg-white border border-[#E5E7EB] rounded-none p-9 flex flex-col snap-start">
            <div className="font-playfair text-[72px] text-accent leading-[0.5] mb-6">“</div>
            <p className="font-sans text-[16px] text-text leading-[1.75] mb-6 flex-grow">
              Supportive environment and honest guidance. I felt genuinely cared for throughout my preparation.
            </p>
            <div className="flex space-x-1 text-accent mb-6 text-lg">
              ★★★★★
            </div>
            <div>
              <div className="font-sans text-[14px] font-bold text-primary">NEET Student</div>
              <div className="font-sans text-[13px] text-muted">Batch 2023</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
