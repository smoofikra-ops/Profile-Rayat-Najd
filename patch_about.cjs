const fs = require('fs');

let content = fs.readFileSync('src/components/sections/Section01About.tsx', 'utf8');

const oldEn = `<EditableText as="p">
                 Rayat Najd is a premier landscaping and nursery company based in Riyadh, Saudi Arabia. We specialize in transforming outdoor spaces through innovative landscaping design, execution, and maintenance.
               </EditableText>
               <EditableText as="p">
                 Our commitment aligns closely with the ambitious goals of Saudi Vision 2030, specifically the Green Saudi Initiative. We are proud to be at the forefront of this environmental transformation, providing world-class landscaping solutions for mega-projects, royal developments, and urban greening initiatives.
               </EditableText>`;

const newEn = `<EditableText as="p">
                 Rayat Najd is a premier landscaping, nursery, and agricultural supply company based in Saudi Arabia. We deliver comprehensive capabilities including large-scale plant and tree supply, landscape execution, mature tree relocation, advanced irrigation systems, and ongoing maintenance.
               </EditableText>
               <EditableText as="p">
                 We are positioned to actively support government entities, municipalities, giga-projects, real-estate developers, main contractors, consultants, and institutional procurement teams. Through our specialized nurseries and extensive supply network, we provide high-volume native, shade, and ornamental plants tailored to thrive in the local climate, ensuring reliable execution for complex urban greening and infrastructure initiatives.
               </EditableText>`;

const oldAr = `<EditableText as="p">
                 رايات نجد هي شركة رائدة في مجال تنسيق الحدائق والمشاتل ومقرها في الرياض، المملكة العربية السعودية. نحن متخصصون في تحويل المساحات الخارجية من خلال التصميم والتنفيذ والصيانة المبتكرة لتنسيق الحدائق.
               </EditableText>
               <EditableText as="p">
                 يتوافق التزامنا بشكل وثيق مع الأهداف الطموحة لرؤية المملكة 2030، وتحديداً مبادرة السعودية الخضراء. نحن فخورون بأن نكون في طليعة هذا التحول البيئي، ونقدم حلولاً عالمية المستوى لتنسيق الحدائق للمشاريع الكبرى، والمشاريع الملكية، ومبادرات التخضير الحضري.
               </EditableText>`;

const newAr = `<EditableText as="p">
                 رايات نجد هي شركة رائدة في مجال تنسيق الحدائق وإدارة المشاتل والتوريد الزراعي في المملكة العربية السعودية. نحن نقدم قدرات متكاملة تشمل توريد النباتات والأشجار على نطاق واسع، تنفيذ مشاريع تنسيق المواقع، نقل وزراعة الأشجار الكبيرة، أنظمة الري المتقدمة، والصيانة الشاملة.
               </EditableText>
               <EditableText as="p">
                 نحن نتموضع استراتيجياً لدعم الجهات الحكومية، البلديات، المشاريع الكبرى، المطورين العقاريين، المقاولين الرئيسيين، الاستشاريين، وفرق المشتريات المؤسسية. من خلال مشاتلنا المتخصصة وشبكة التوريد الواسعة، نوفر كميات ضخمة من الأشجار المحلية وأشجار الظل ونباتات الزينة المتكيفة مع المناخ المحلي، مما يضمن التنفيذ الموثوق لمبادرات التخضير الحضري ومشاريع البنية التحتية المعقدة.
               </EditableText>`;

content = content.replace(oldEn, newEn);
content = content.replace(oldAr, newAr);

fs.writeFileSync('src/components/sections/Section01About.tsx', content);
