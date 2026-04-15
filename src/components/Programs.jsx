export default function Programs() {
  return (
    <section id="programs" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADER */}
        <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-accent mb-4">
          PROGRAMS
        </div>
        <h2 className="font-playfair text-[40px] leading-tight text-primary m-0">
          What We Teach
        </h2>
        
        <div className="w-[60px] h-[2px] bg-accent mx-auto mt-6 mb-16"></div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-white border text-left border-[#E5E7EB] border-l-[4px] border-l-accent p-8 rounded-none">
            <h3 className="font-sans font-bold text-[18px] text-primary mb-2 m-0">
              Class 8, 9 & 10 Coaching
            </h3>
            <div className="font-sans text-[12px] text-accent uppercase tracking-wide mb-4">
              SSC / CBSE / ICSE
            </div>
            <p className="font-sans text-[15px] text-muted m-0 leading-relaxed">
              Concept-first teaching designed to build subject clarity and consistent score improvement across all major boards. Science and Commerce streams available.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border text-left border-[#E5E7EB] border-l-[4px] border-l-accent p-8 rounded-none">
            <h3 className="font-sans font-bold text-[18px] text-primary mb-2 m-0">
              NEET Preparation
            </h3>
            <div className="font-sans text-[12px] text-accent uppercase tracking-wide mb-4">
              Competitive Exam
            </div>
            <p className="font-sans text-[15px] text-muted m-0 leading-relaxed">
              Rigorous physics, chemistry, and biology preparation structured to meet the demands of one of India's most competitive medical entrance exams.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border text-left border-[#E5E7EB] border-l-[4px] border-l-accent p-8 rounded-none">
            <h3 className="font-sans font-bold text-[18px] text-primary mb-2 m-0">
              Foundation Program
            </h3>
            <div className="font-sans text-[12px] text-accent uppercase tracking-wide mb-4">
              Early Preparation
            </div>
            <p className="font-sans text-[15px] text-muted m-0 leading-relaxed">
              Courses that build analytical depth and subject confidence — giving students a head start before competitive exams begin.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
