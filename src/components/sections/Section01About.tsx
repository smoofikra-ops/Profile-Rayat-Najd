import { Section, BilingualContainer, EnglishContent, ArabicContent, EditableText } from '../ui/Layouts';

export function Section01About({ startPageNumber = 1 }: { startPageNumber?: number }) {
  return (
    <>
      {/* Page 1: Company Overview */}
      <Section 
        className="bg-brand-beige relative border-b border-brand-warm/10" 
        pageNumber={startPageNumber} 
        bgType="pattern" 
        bgImage="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/backgrounds/rayat-najd-website-background-about.webp"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-brand-gold/30 pb-3 mb-4">
            <div className="flex flex-col items-start">
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Corporate Overview</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Rayat Najd For Landscaping</EditableText>
            </div>
            <div className="flex flex-col items-end" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">لمحة عامة عن الشركة</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">شركة رايات نجد للتشجير وتنسيق الحدائق</EditableText>
            </div>
          </div>

          {/* Core Bilingual Content Grid */}
          <div className="grid grid-cols-2 gap-8 my-auto items-stretch">
            {/* English Column */}
            <div className="flex flex-col justify-between bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-warm/15 shadow-sm">
              <div>
                <EditableText as="h3" className="text-brand-forest font-sans text-base font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                  Pioneering Sustainable Ecological Infrastructures
                </EditableText>
                <div className="text-brand-dark/85 font-sans text-[12.5px] leading-relaxed space-y-3 text-justify max-w-[68ch]">
                  <EditableText as="p">
                    Rayat Najd is a leading Saudi enterprise specialized in comprehensive landscape engineering, large-scale plant production, and environmental afforestation initiatives across the Kingdom.
                  </EditableText>
                  <EditableText as="p">
                    With an expansive network of modern nurseries and heavy-spec transport logistics, we deliver end-to-end solutions—from seedling cultivation and specimen tree relocation to automated irrigation engineering and municipal master-greening.
                  </EditableText>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-warm/15 flex items-center justify-between text-[10px] text-brand-forest/70 uppercase tracking-widest font-semibold">
                <span>Infrastructure & Production</span>
                <span>Vision 2030 Alignment</span>
              </div>
            </div>

            {/* Arabic Column */}
            <div className="flex flex-col justify-between bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-warm/15 shadow-sm text-right" dir="rtl">
              <div>
                <EditableText as="h3" className="text-brand-forest font-arabic text-lg font-bold mb-3 flex items-center justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                  ريادة وطنية في تنسيق الحدائق وتطوير الغطاء النباتي
                </EditableText>
                <div className="text-brand-dark/85 font-arabic text-[13.5px] leading-relaxed space-y-3 text-justify max-w-[68ch]">
                  <EditableText as="p">
                    تُعد شركة رايات نجد من الشركات الوطنية الرائدة المتخصصة في تنفيذ مشاريع اللاندسكيب الكبرى، والإنتاج الزراعي الكمي، ومبادرات التشجير البيئي في شتى مناطق المملكة.
                  </EditableText>
                  <EditableText as="p">
                    من خلال شبكة متطورة من المشاتل الحديثة وأسطول لوجستي متخصص، نقدم حلولاً متكاملة تشمل إنتاج وتأهيل النباتات، ونقل الأشجار المعمرة، وهندسة شبكات الري، وتنفيذ المساحات الخضراء الحضرية والمؤسسية.
                  </EditableText>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-warm/15 flex items-center justify-between text-[10.5px] text-brand-forest/70 font-arabic font-semibold">
                <span>بنية تحتية وإنتاج زراعي</span>
                <span>مواكبة مستهدفات الرؤية</span>
              </div>
            </div>
          </div>

          {/* Sub-bar */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9.5px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Capability Profile</span>
            <span className="font-arabic" dir="rtl">رايات نجد — شريك التخضير والتطوير البيئي</span>
          </div>
        </div>
      </Section>

      {/* Page 2: Executive Leadership Editorial Spread */}
      <Section 
        className="bg-brand-light border-b border-brand-warm/10 !p-0" 
        pageNumber={startPageNumber + 1} 
        bgType="none" 
        noSafeArea={true}
      >
        <div className="flex h-full w-full">
          {/* Image Side: 40% Width with high quality authentic image */}
          <div className="w-[40%] relative h-full bg-brand-forest">
            <img 
              src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-07.webp" 
              alt="Rayat Najd Agricultural Leadership" 
              className="w-full h-full object-cover filter brightness-95 contrast-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-sans block mb-1">Executive Commitment</span>
              <span className="text-[12px] font-arabic font-bold block" dir="rtl">التزام القيادة بالاستدامة وجودة التنفيذ</span>
            </div>
          </div>

          {/* Message Side: 60% Width */}
          <div className="w-[60%] flex flex-col justify-between px-10 py-[14mm] pb-[20mm] h-full bg-brand-light">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-brand-warm/15 pb-2 mb-4">
                <div className="flex flex-col">
                  <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Executive Message</EditableText>
                  <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Corporate Leadership</EditableText>
                </div>
                <div className="flex flex-col items-end" dir="rtl">
                  <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">كلمة الإدارة</EditableText>
                  <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">رسالة القيادة التنفيذية</EditableText>
                </div>
              </div>

              {/* Bilingual Message Stack */}
              <div className="space-y-4 my-2">
                {/* Arabic Message */}
                <div className="bg-white/90 p-4 rounded-xl border border-brand-warm/15 shadow-sm text-right" dir="rtl">
                  <div className="flex items-center justify-between mb-1.5 border-b border-brand-warm/10 pb-1">
                    <span className="text-brand-forest font-arabic text-sm font-bold">الرؤية والالتزام المهني</span>
                    <span className="text-brand-gold text-lg font-serif">"</span>
                  </div>
                  <EditableText as="p" className="text-brand-dark/90 font-arabic text-[12.5px] leading-relaxed text-justify">
                    تأسست رايات نجد لتكون رافداً استراتيجياً لقطاع التشجير واللاندسكيب في المملكة. نحن ملتزمون بتوفير أعلى معايير الجودة الزراعية والهندسية، وتسخير أحدث التقنيات لخدمة المشاريع الكبرى والمساهمة الفاعلة في تحقيق مستهدفات رؤية 2030 ومبادرة السعودية الخضراء.
                  </EditableText>
                </div>

                {/* English Message */}
                <div className="bg-white/90 p-4 rounded-xl border border-brand-warm/15 shadow-sm text-left">
                  <div className="flex items-center justify-between mb-1.5 border-b border-brand-warm/10 pb-1">
                    <span className="text-brand-forest font-sans text-xs font-bold uppercase tracking-wider">Strategic Vision & Dedication</span>
                    <span className="text-brand-gold text-lg font-serif">"</span>
                  </div>
                  <EditableText as="p" className="text-brand-dark/90 font-sans text-[11.5px] leading-relaxed text-justify">
                    Rayat Najd was established to serve as a pivotal partner in Saudi Arabia's landscape transformation. We are dedicated to delivering excellence across nursery production, large-scale plant logistics, and master landscape engineering in active alignment with Saudi Vision 2030.
                  </EditableText>
                </div>
              </div>
            </div>

            {/* Signature & Title Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-brand-warm/20 bg-white/60 p-3 rounded-lg">
              <div className="text-left">
                <span className="font-bold text-brand-dark font-sans text-xs block">Executive Leadership</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-forest font-sans block">Rayat Najd For Landscaping Co.</span>
              </div>
              <div className="text-right font-arabic" dir="rtl">
                <span className="font-bold text-brand-dark text-sm block">القيادة التنفيذية</span>
                <span className="text-[10px] text-brand-forest font-arabic block">شركة رايات نجد للتشجير وتنسيق الحدائق</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Page 3: Vision / Mission / Strategic Alignment Dashboard */}
      <Section 
        className="bg-brand-beige border-b border-brand-warm/10" 
        pageNumber={startPageNumber + 2} 
        bgType="pattern"
      >
        <div className="flex flex-col h-full justify-between py-2">
          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-brand-gold/30 pb-3 mb-3">
            <div>
              <EditableText as="span" className="typo-eyebrow !text-xs !mb-0">Strategic Framework</EditableText>
              <EditableText as="h2" className="typo-h1 !text-2xl font-bold !mb-0 mt-0.5">Vision, Mission & Alignment</EditableText>
            </div>
            <div className="text-right" dir="rtl">
              <EditableText as="span" className="typo-eyebrow font-arabic !text-xs !mb-0 text-brand-forest">الإطار الاستراتيجي</EditableText>
              <EditableText as="h2" className="typo-h1 font-arabic !text-2xl font-bold !mb-0 mt-0.5">الرؤية والرسالة والمواءمة</EditableText>
            </div>
          </div>

          {/* Three Balanced Dashboard Panels */}
          <div className="grid grid-cols-3 gap-4 my-auto items-stretch">
            
            {/* Panel 1: Strategic Alignment & Vision 2030 */}
            <div className="card-surface card-surface-hover p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-brand-warm/15 pb-2">
                  <span className="card-number-badge !w-7 !h-7 !text-xs">01</span>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Saudi_Vision_2030_logo.svg" 
                    alt="Vision 2030" 
                    className="h-7 mix-blend-multiply opacity-85" 
                  />
                </div>
                <EditableText as="h3" className="card-title-en text-sm mb-1">Strategic Alignment</EditableText>
                <EditableText as="h4" className="card-title-ar text-sm mb-2.5" dir="rtl">المواءمة الاستراتيجية (رؤية 2030)</EditableText>
                
                <div className="space-y-2 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10.5px] leading-relaxed text-justify">
                    Actively supporting the Saudi Green Initiative and Quality of Life Program by expanding vegetative cover and sustainable urban ecosystems.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[11.5px] leading-relaxed" dir="rtl">
                    المساهمة المباشرة في مستهدفات مبادرة السعودية الخضراء وبرنامج جودة الحياة من خلال تنمية الغطاء النباتي المستدام.
                  </EditableText>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-warm/10 text-center card-tag-gold">
                Saudi Vision 2030
              </div>
            </div>

            {/* Panel 2: Corporate Vision */}
            <div className="card-surface card-surface-hover p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-brand-warm/15 pb-2">
                  <span className="card-number-badge !w-7 !h-7 !text-xs">02</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-forest font-sans font-bold">Corporate Vision</span>
                </div>
                <EditableText as="h3" className="card-title-en text-sm mb-1">Our Vision</EditableText>
                <EditableText as="h4" className="card-title-ar text-sm mb-2.5" dir="rtl">رؤيتنا</EditableText>
                
                <div className="space-y-2 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10.5px] leading-relaxed text-justify">
                    To be the Kingdom's premier integrated landscape and plant supply authority, recognized for horticultural precision and large-scale delivery.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[11.5px] leading-relaxed" dir="rtl">
                    أن نكون الشريك الرائد والأول في المملكة لحلول اللاندسكيب المتكاملة وتوريد النباتات وفق أعلى معايير الجودة والاستدامة.
                  </EditableText>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-warm/10 text-center card-tag-forest">
                Excellence & Growth
              </div>
            </div>

            {/* Panel 3: Corporate Mission */}
            <div className="card-surface card-surface-hover p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-brand-warm/15 pb-2">
                  <span className="card-number-badge !w-7 !h-7 !text-xs">03</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-forest font-sans font-bold">Corporate Mission</span>
                </div>
                <EditableText as="h3" className="card-title-en text-sm mb-1">Our Mission</EditableText>
                <EditableText as="h4" className="card-title-ar text-sm mb-2.5" dir="rtl">رسالتنا</EditableText>
                
                <div className="space-y-2 border-t border-brand-warm/10 pt-2">
                  <EditableText as="p" className="card-body-en text-[10.5px] leading-relaxed text-justify">
                    Delivering world-class nursery production, resilient arid-zone flora, advanced irrigation networks, and end-to-end project execution.
                  </EditableText>
                  <EditableText as="p" className="card-body-ar text-[11.5px] leading-relaxed" dir="rtl">
                    تقديم إنتاج نباتي عالي الكفاءة، وحلول ري ذكية، وتنفيذ هندسي متكامل لمشاريع التشجير الكبرى بما يضمن ديمومة المساحات الخضراء.
                  </EditableText>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-warm/10 text-center card-tag-forest">
                Quality & Execution
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
            <span>Rayat Najd Strategic Pillars</span>
            <span className="font-arabic" dir="rtl">ركائز التميز المؤسسي والاستدامة</span>
          </div>
        </div>
      </Section>
    </>
  );
}
