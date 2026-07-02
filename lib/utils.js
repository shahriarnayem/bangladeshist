export function slugify(str=''){ return str.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') }
export function plainText(str=''){return String(str||'').replace(/<[^>]+>/g,'')}
export function readTime(str=''){const words=plainText(str).split(/\s+/).filter(Boolean).length; return Math.max(1, Math.ceil(words/220))}
export function fmtDate(d){return new Date(d).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'})}
