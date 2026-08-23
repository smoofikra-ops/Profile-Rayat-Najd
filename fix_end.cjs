const fs = require('fs');

let content = fs.readFileSync('src/components/ui/Layouts.tsx', 'utf-8');

// The end of the file looks like:
//        </div>
//     </div>
//   );
// }

content = content.replace(/       <\/div>\n    <\/div>\n  \);\n}/, '       </div>\n       )}\n    </div>\n  );\n}');

fs.writeFileSync('src/components/ui/Layouts.tsx', content);

