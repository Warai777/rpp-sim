const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('__ANTHROPIC_KEY__', process.env.ANTHROPIC_API_KEY || '');
html = html.replace('__SUPABASE_URL__', process.env.SUPABASE_URL || '');
html = html.replace('__SUPABASE_KEY__', process.env.SUPABASE_KEY || '');
fs.mkdirSync('dist', {recursive:true});
fs.writeFileSync('dist/index.html', html);
console.log('Built successfully');
