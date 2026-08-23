const fs = require('fs');

let content = fs.readFileSync('src/components/ui/Layouts.tsx', 'utf-8');

// Fix EditableText
const editableTextSrc = `
export function EditableText({ as: Component = 'div', className = '', children, ...props }: any) {
  const isDev = import.meta.env.DEV;
  const editableClasses = isDev ? "hover:bg-brand-gold/10 focus:bg-brand-gold/10 rounded px-1 -mx-1" : "";
  return (
    <Component
      className={\`outline-none transition-colors \${editableClasses} \${className}\`}
      contentEditable={isDev}
      suppressContentEditableWarning
      {...props}
    >
      {children}
    </Component>
  );
}
`;
content = content.replace(/export function EditableText.*?return\s*\(.*?<\/Component>\s*\);\s*}/s, editableTextSrc.trim());

// Fix ImagePlaceholder
const imagePlaceholderStart = content.indexOf('export function ImagePlaceholder');
if (imagePlaceholderStart !== -1) {
  let imgPlaceholderCode = content.substring(imagePlaceholderStart);
  
  imgPlaceholderCode = imgPlaceholderCode.replace(/const fileInputRef = useRef<HTMLInputElement>\(null\);/, 
    'const fileInputRef = useRef<HTMLInputElement>(null);\n  const isDev = import.meta.env.DEV;');
  
  imgPlaceholderCode = imgPlaceholderCode.replace(/onClick=\{\(\) => fileInputRef.current\?\.click\(\)\}/, 
    'onClick={() => isDev && fileInputRef.current?.click()}');

  imgPlaceholderCode = imgPlaceholderCode.replace(/cursor-pointer/, 
    '${isDev ? "cursor-pointer" : ""}');
  
  imgPlaceholderCode = imgPlaceholderCode.replace(/<input type="file" [^\>]+ \/>/, 
    '{isDev && <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />}');
  
  imgPlaceholderCode = imgPlaceholderCode.replace(/\{\/\* Hotspot \*\/\}/, 
    '{isDev && (\n       {/* Hotspot */}');

  imgPlaceholderCode = imgPlaceholderCode.replace(/<\/div>\s*<\/div>\s*\)\s*}/, 
    '</div>\n       )}\n    </div>\n  );\n}');

  content = content.substring(0, imagePlaceholderStart) + imgPlaceholderCode;
}

fs.writeFileSync('src/components/ui/Layouts.tsx', content);

