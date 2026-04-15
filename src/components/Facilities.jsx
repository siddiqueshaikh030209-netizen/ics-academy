export default function Facilities() {
  return (
    <section id="facilities" className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADER */}
        <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-accent mb-4">
          FACILITIES
        </div>
        <h2 className="font-playfair text-[38px] text-white m-0 leading-tight">
          A Complete Academic Ecosystem
        </h2>
        <p className="font-sans text-[16px] text-[rgba(255,255,255,0.65)] mt-4 mb-16 mx-auto max-w-2xl">
          Everything a student needs — available under one roof.
        </p>

        {/* 3x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Item 1 */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] border-l-[4px] border-l-accent rounded-none py-[24px] px-[28px] text-left">
            <span className="font-sans text-[16px] font-bold text-white">Study Material Provided</span>
          </div>

          {/* Item 2 */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] border-l-[4px] border-l-accent rounded-none py-[24px] px-[28px] text-left">
            <span className="font-sans text-[16px] font-bold text-white">Doubt-Solving Sessions</span>
          </div>

          {/* Item 3 */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] border-l-[4px] border-l-accent rounded-none py-[24px] px-[28px] text-left">
            <span className="font-sans text-[16px] font-bold text-white">Mock Tests & Practice Papers</span>
          </div>

          {/* Item 4 */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] border-l-[4px] border-l-accent rounded-none py-[24px] px-[28px] text-left">
            <span className="font-sans text-[16px] font-bold text-white">Library Access</span>
          </div>

          {/* Item 5 */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] border-l-[4px] border-l-accent rounded-none py-[24px] px-[28px] text-left">
            <span className="font-sans text-[16px] font-bold text-white">Online Learning Support</span>
          </div>

          {/* Item 6 */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] border-l-[4px] border-l-accent rounded-none py-[24px] px-[28px] text-left">
            <span className="font-sans text-[16px] font-bold text-white">Career & Academic Counseling</span>
          </div>

        </div>
      </div>
    </section>
  );
}
