export default function Methodology() {
  return (
    <section id="methodology" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div>
          <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-accent mb-4">
            OUR METHODOLOGY
          </div>
          <h2 className="font-playfair text-[38px] leading-tight text-primary m-0">
            We Don't Just Teach — We Track, Analyze, and Improve
          </h2>
          <div className="w-[60px] h-[2px] bg-accent mt-6 mb-8"></div>
          <p className="font-sans text-[16px] text-muted m-0 leading-relaxed">
            Our structured approach ensures no student is left behind and every week of study counts toward real improvement.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-[24px]">
          
          {/* FEATURE 1 */}
          <div className="border-l-[4px] border-l-accent pl-5">
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2 m-0">
              Concept-Based Teaching
            </h3>
            <p className="font-sans text-[15px] text-muted m-0 leading-relaxed">
              Lessons built around understanding. Students learn the why behind every topic before the how.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="border-l-[4px] border-l-accent pl-5">
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2 m-0">
              Weekly Testing System
            </h3>
            <p className="font-sans text-[15px] text-muted m-0 leading-relaxed">
              Every student is assessed weekly — identifying gaps early and reinforcing strengths before exams approach.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="border-l-[4px] border-l-accent pl-5">
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2 m-0">
              Personal Attention
            </h3>
            <p className="font-sans text-[15px] text-muted m-0 leading-relaxed">
              Small batch sizes ensure teachers know each student individually. Progress is personal, not averaged.
            </p>
          </div>

          {/* FEATURE 4 */}
          <div className="border-l-[4px] border-l-accent pl-5">
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2 m-0">
              Modern, Interactive Classrooms
            </h3>
            <p className="font-sans text-[15px] text-muted m-0 leading-relaxed">
              Smart boards and digital tools create an engaging learning environment that keeps students focused.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
