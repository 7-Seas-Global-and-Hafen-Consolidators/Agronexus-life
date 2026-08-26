import fs from 'node:fs/promises'

const SOURCES = [
  'https://www.reefaquarios.com.br/produtos/',
  'https://www.reefaquarios.com.br/corais/',
  'https://www.reefaquarios.com.br/corais/lps/',
  'https://www.reefaquarios.com.br/corais/sps/',
  'https://www.reefaquarios.com.br/corais/soft/',
  'https://www.reefaquarios.com.br/corais/zoanthus-e-palythoa/',
  'https://www.reefaquarios.com.br/peixes/',
  'https://www.reefaquarios.com.br/peixes/peixes/',
  'https://www.reefaquarios.com.br/peixes/anemonas/',
  'https://www.reefaquarios.com.br/peixes/invertebrados/',
]
const OUT = new URL('../src/data/marineCatalog.generated.js', import.meta.url)
const FALLBACK = new URL('../src/data/marineCatalog.seed.js', import.meta.url)
const DISCOUNT = 0.10

const clean = (v='') => String(v).replace(/\\\//g,'/').replace(/&amp;/g,'&').replace(/&#039;/g,"'").replace(/&quot;/g,'"').trim()
const brl = v => { const n=Number(String(v||'').replace(/\./g,'').replace(',','.').replace(/[^0-9.]/g,'')); return Number.isFinite(n)?n:null }
const price10 = n => Math.round(n*(1-DISCOUNT)*100)/100
function classify(name='', url='') {
 const n=(name+' '+url).toLowerCase()
 if(/zoanth|palyth/.test(n)) return 'Zoanthus & Palythoa'
 if(/\/lps\/|hammer|trumpet|torch|frogspawn|candy|acan|euphyl/.test(n)) return 'LPS'
 if(/\/sps\/|pocill|pochil|montip|acrop|styloph|seriatop/.test(n)) return 'SPS'
 if(/\/soft\/|cloves|kenia|mush|mursh|carpet|organ pipe|xenia|leather/.test(n)) return 'Soft'
 if(/anem/.test(n)) return 'Anêmonas'
 if(/inverte|shrimp|camar|carang|snail|estrela|ouriço|urchin|cucumber|lobster|worm|tridacna/.test(n)) return 'Invertebrados'
 if(/\/peixes\/|fish|peixe|tang|goby|wrasse|clown|palhaço|angel|anthias|blenny|cardinal|damsel|butterfly|puffer|zanclus/.test(n)) return 'Peixes'
 return 'Marinho'
}
function parse(html, sourcePage) {
 const products=[]
 // JSON-LD product blocks
 for(const m of html.matchAll(/"@type"\s*:\s*"Product"/g)){
  const end=html.indexOf('</script>',m.index), block=html.slice(m.index,end>-1?end:m.index+10000)
  const get=r=>clean(block.match(r)?.[1]||'')
  const name=get(/"name"\s*:\s*"([^"]+)"/), image=get(/"image"\s*:\s*"([^"]+)"/), sourceUrl=get(/"url"\s*:\s*"([^"]+)"/)
  const sku=get(/"sku"\s*:\s*"([^"]*)"/), description=get(/"description"\s*:\s*"([^"]*)"/)
  const offer=Number(get(/"price"\s*:\s*"([0-9.]+)"/)), desc=brl(description.match(/por\s+R\$\s*([0-9.,]+)/i)?.[1]); const sourcePrice=desc||(Number.isFinite(offer)?offer:null)
  if(name&&image&&sourceUrl&&sourcePrice) products.push({name,image,sourceUrl,sourcePage,sku,category:classify(name,sourceUrl),sourcePrice,price:price10(sourcePrice)})
 }
 // Product links fallback, useful when listing HTML omits JSON-LD
 const re=/<a[^>]+href=["'](https?:\/\/www\.reefaquarios\.com\.br\/produtos\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
 for(const m of html.matchAll(re)){
  const sourceUrl=clean(m[1]); const body=m[2].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim(); const pm=body.match(/(.+?)\s+R\$\s*([0-9.,]+)(?:\s+R\$\s*([0-9.,]+))?/i)
  if(!pm) continue; const name=clean(pm[1]); const sourcePrice=brl(pm[3]||pm[2]); if(!name||!sourcePrice) continue
  products.push({name,image:'',sourceUrl,sourcePage,sku:'',category:classify(name,sourceUrl),sourcePrice,price:price10(sourcePrice)})
 }
 return products
}
async function get(url){ const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0 AgroNexusCatalogAudit/2.0','accept':'text/html,application/xhtml+xml'}}); if(!r.ok) throw new Error(`${r.status} ${url}`); return r.text() }
async function enrich(p){ if(p.image) return p; try { const h=await get(p.sourceUrl); const image=clean(h.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)/i)?.[1]||h.match(/"image"\s*:\s*"([^"]+)"/)?.[1]||''); return {...p,image} } catch { return p } }
async function main(){
 const map=new Map(), audit=[]
 for(const base of SOURCES){ let stale=0
  for(let page=1;page<=50&&stale<2;page++){
   const url=page===1?base:`${base}${base.includes('?')?'&':'?'}page=${page}`
   try { const html=await get(url), batch=parse(html,url); let added=0
    for(const p of batch){ const key=p.sourceUrl||`${p.name}|${p.sourcePrice}`; if(!map.has(key)){map.set(key,p);added++} else { const old=map.get(key); map.set(key,{...old,...p,image:p.image||old.image}) } }
    audit.push({url,found:batch.length,added,total:map.size}); stale=added===0?stale+1:0
   } catch(e){ audit.push({url,error:String(e)}); stale++ }
  }
 }
 let products=[...map.values()]
 // Enrich missing photos without hammering the source uncontrollably.
 const missing=products.filter(p=>!p.image); for(let i=0;i<missing.length;i+=6){ const chunk=missing.slice(i,i+6); const enriched=await Promise.all(chunk.map(enrich)); for(const p of enriched) map.set(p.sourceUrl,p) }
 products=[...map.values()].filter(p=>p.name&&p.sourcePrice&&p.sourceUrl)
 if(products.length<20){ console.warn(`Marine crawl suspiciously small (${products.length}); preserving committed fallback.`); return }
 const payload=`// AUTO-GENERATED by scripts/syncMarineCatalog.mjs\n// Observed source data; AgroNexus price = observed price - 10%.\nexport const marineCatalog = ${JSON.stringify(products,null,2)}\nexport const marineCatalogAudit = ${JSON.stringify(audit,null,2)}\nexport default marineCatalog\n`
 await fs.writeFile(OUT,payload,'utf8'); console.log(`Marine deep crawl: ${products.length} unique products; ${products.filter(p=>p.image).length} with images; ${products.filter(p=>!p.image).length} missing images.`)
}
main().catch(async e=>{console.error(e); try{await fs.access(FALLBACK)}catch{}; process.exitCode=0})
