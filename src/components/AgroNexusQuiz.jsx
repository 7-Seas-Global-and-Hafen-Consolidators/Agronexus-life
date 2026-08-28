import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const BANCO=[
['Qual ave é conhecida pela grande capacidade de imitação vocal?',['Calopsita','Papagaio-cinzento','Mandarim'],1,'Psittacus erithacus é referência mundial em cognição e vocalização.','/aves'],
['Em aquários, o ciclo do nitrogênio transforma amônia principalmente em quê?',['Nitrito e nitrato','Oxigênio','Cálcio'],0,'Bactérias nitrificantes convertem amônia em nitrito e depois nitrato.','/aquarismo'],
['Corais construtores de recife vivem em associação com quais organismos?',['Zooxantelas','Musgos','Leveduras'],0,'Zooxantelas fotossintéticas fornecem parte importante da energia.','/corais'],
['Qual réptil brasileiro é um grande lagarto onívoro?',['Teiú','Gecko-leopardo','Camaleão'],0,'O teiú é um grande lagarto sul-americano.','/repteis'],
['Hamsters são mais ativos em qual período?',['Noite/crepúsculo','Meio-dia','Somente manhã'],0,'A atividade costuma aumentar no fim do dia e à noite.','/pequenos-mamiferos'],
['Bonsai descreve principalmente o quê?',['Uma espécie única','Uma técnica de cultivo','Um fertilizante'],1,'Bonsai é a arte/técnica de cultivar árvores em miniatura.','/bonsais'],
['Orquídeas epífitas vivem normalmente:',['Sobre outras plantas sem parasitá-las','Só em água','Dentro do solo argiloso'],0,'Muitas orquídeas usam árvores como suporte sem retirar seiva.','/orquideas'],
['Em aquário marinho, salinidade costuma ser medida com:',['Refratômetro','Barômetro','Higrômetro'],0,'Refratômetros são usados para conferir salinidade.','/aquarismo'],
['Uma função de substrato em terrários é:',['Ajudar no microclima e comportamento','Gerar Wi‑Fi','Substituir UVB sempre'],0,'Substrato influencia umidade, escavação e higiene.','/repteis'],
['Qual grupo inclui coelhos?',['Lagomorfos','Roedores','Marsupiais'],0,'Coelhos pertencem à ordem Lagomorpha.','/pequenos-mamiferos'],
['Plantas nativas tendem a oferecer:',['Integração ecológica regional','Crescimento sem água','Ausência total de manejo'],0,'Espécies nativas podem favorecer fauna e adaptação local.','/plantas'],
['Alevino é:',['Peixe jovem','Ave adulta','Muda de árvore'],0,'Alevino é um estágio juvenil de peixes.','/rural'],
['UVB é especialmente relevante no manejo de muitos:',['Répteis','Peixes abissais','Fungos'],0,'Muitos répteis dependem de UVB para metabolismo adequado.','/repteis'],
['Enriquecimento ambiental serve para:',['Estimular comportamentos e bem-estar','Trocar alimentação por brinquedos','Eliminar todo manejo'],0,'Enriquecimento oferece estímulos físicos e cognitivos.','/equipamentos'],
['CITES está ligada principalmente a:',['Comércio internacional de espécies','Receitas culinárias','Meteorologia'],0,'A convenção regula o comércio internacional de espécies listadas.','/exoticos'],
['Qual é uma planta frutífera brasileira muito usada em pomares domésticos?',['Jabuticabeira','Sequoia-gigante','Nenúfar'],0,'Jabuticabeiras são frutíferas populares no Brasil.','/mercado-de-plantas'],
['Em filtros biológicos, a mídia serve sobretudo para:',['Abrig ar bactérias benéficas','Aquecer a água sozinha','Aumentar salinidade'],0,'Superfícies porosas oferecem área para bactérias nitrificantes.','/aquarismo'],
['Quelônios incluem:',['Tartarugas e jabutis','Serpentes','Anfíbios'],0,'Quelônios são répteis com casco, como tartarugas e jabutis.','/repteis'],
['Gerbos são pequenos mamíferos conhecidos por:',['Comportamento escavador','Vida exclusivamente aquática','Serem aves'],0,'Gerbos escavam e precisam de ambiente apropriado.','/mercado-de-mamiferos'],
['Uma muda enxertada combina:',['Porta-enxerto e copa','Dois fertilizantes','Duas sementes soltas'],0,'A enxertia une tecidos de plantas para combinar características.','/mercado-de-plantas'],
['No reef, skimmer ajuda a remover:',['Compostos orgânicos','Luz azul','Oxigênio'],0,'Skimmers exportam compostos orgânicos por espuma.','/corais'],
['Psitacídeos incluem:',['Papagaios, araras e periquitos','Canários apenas','Pombos'],0,'Psitacídeos abrangem papagaios, araras, periquitos e afins.','/aves'],
['A principal função de um termostato no aquário é:',['Controlar temperatura','Controlar pH diretamente','Trocar água'],0,'O termostato mantém a faixa térmica ajustada.','/aquarismo'],
['Ovinos são:',['Ovelhas','Cabras','Porcos'],0,'Ovinos são animais do grupo das ovelhas.','/rural'],
['Caprinos são:',['Cabras','Cavalos','Coelhos'],0,'Caprinos pertencem ao grupo das cabras.','/rural'],
['Uma gaiola adequada deve priorizar:',['Espaço e segurança','Apenas cor','Menor tamanho possível'],0,'Espaço, materiais e segurança são prioridades.','/equipamentos'],
['Maracujá normalmente precisa de:',['Tutoramento/espaldeira','Aquário marinho','UVB'],0,'A trepadeira precisa de estrutura de suporte.','/mercado-de-plantas'],
['Plantas aquáticas podem contribuir com:',['Estrutura e equilíbrio do aquário','Salinidade automática','Aquecimento elétrico'],0,'Elas criam habitat e participam do equilíbrio do sistema.','/plantas-aquaticas'],
['Ração específica por fase considera principalmente:',['Necessidades nutricionais','Cor da embalagem','Som do pacote'],0,'Idade, espécie e condição mudam exigências nutricionais.','/alimentacao'],
['Procedência em comércio de biodiversidade ajuda a registrar:',['Origem e cadeia responsável','Somente a cor','A senha do cliente'],0,'Procedência documenta origem e responsabilidade.','/marketplace']
].map(([q,o,a,tip,to])=>({q,o,a,tip,to}))

const level=p=>p>=.9?'🏆 MESTRE DA BIODIVERSIDADE':p>=.7?'🌟 CRIADOR RAIZ':p>=.5?'🌱 EXPLORADOR DA NATUREZA':'🏙️ VISITANTE DA CIDADE'
const shuffle=a=>[...a].sort(()=>Math.random()-.5)

export default function AgroNexusQuiz(){
 const [total,setTotal]=useState(10),[qs,setQs]=useState([]),[i,setI]=useState(0),[score,setScore]=useState(0),[picked,setPicked]=useState(null),[stage,setStage]=useState('start')
 const q=qs[i]; const end=stage==='end'; const pct=end?score/Math.max(1,qs.length):0; const lvl=level(pct)
 const start=()=>{setQs(shuffle(BANCO).slice(0,total));setI(0);setScore(0);setPicked(null);setStage('play')}
 const choose=x=>{if(picked!==null)return;setPicked(x);if(x===q.a)setScore(s=>s+1)}
 const next=()=>{if(i+1>=qs.length)setStage('end');else{setI(v=>v+1);setPicked(null)}}
 const share=useMemo(()=>`${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(`Fiz ${score}/${qs.length} no Desafio Biodiversidade AgroNexus™ — ${lvl}. https://agronexus.life/ferramentas/desafio-biodiversidade`)}`,[score,qs.length,lvl])
 return <main className="quiz"><style>{`.quiz{min-height:100vh;padding:118px 20px 80px;background:#fff7fb;font-family:Inter,system-ui,sans-serif;color:#101828}.quiz__w{max-width:820px;margin:auto}.quiz h1{font-size:clamp(2rem,5vw,3.4rem);margin:0 0 8px}.quiz__card{background:#fff;border:1px solid #f0b5d0;border-radius:16px;padding:22px;margin-top:22px}.quiz button,.quiz a{border:0;border-radius:9px;padding:12px 16px;font-weight:900;text-decoration:none;cursor:pointer}.quiz__modes{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0}.quiz__modes button{background:#fce7f3;color:#9d174d}.quiz__modes .on{background:#db2777;color:#fff}.quiz__answers{display:grid;gap:10px;margin:18px 0}.quiz__answers button{background:#f9fafb;border:1px solid #d0d5dd;text-align:left;color:#101828}.quiz__answers button.ok{background:#dcfae6;border-color:#12b76a}.quiz__answers button.bad{background:#fee4e2;border-color:#f04438}.quiz__next{background:#101828;color:#fff}.quiz__share{display:inline-block;background:#12b76a;color:#fff;margin-right:8px}.quiz__go{display:inline-block;background:#db2777;color:#fff}.quiz__bar{height:8px;background:#f2f4f7;border-radius:99px;overflow:hidden}.quiz__bar span{display:block;height:100%;background:#db2777}`}</style><div className="quiz__w"><h1>Desafio Biodiversidade</h1><p>Teste o que você sabe sobre aves, aquarismo, reef, répteis, mamíferos, plantas, rural e conservação.</p>{stage==='start'&&<div className="quiz__card"><h2>Quantas perguntas?</h2><div className="quiz__modes">{[10,20,30].map(m=><button className={total===m?'on':''} key={m} onClick={()=>setTotal(m)}>{m}</button>)}</div><button className="quiz__next" onClick={start}>Começar</button></div>}{stage==='play'&&q&&<div className="quiz__card"><div className="quiz__bar"><span style={{width:`${((i+1)/qs.length)*100}%`}}/></div><p>Pergunta {i+1} de {qs.length}</p><h2>{q.q}</h2><div className="quiz__answers">{q.o.map((o,x)=><button key={o} className={picked===null?'':x===q.a?'ok':x===picked?'bad':''} onClick={()=>choose(x)}>{o}</button>)}</div>{picked!==null&&<><p><b>{picked===q.a?'Acertou.':'Resposta correta acima.'}</b> {q.tip}</p><button className="quiz__next" onClick={next}>{i+1===qs.length?'Ver resultado':'Próxima'}</button></>}</div>}{end&&<div className="quiz__card"><h2>{lvl}</h2><p>Você fez <b>{score} de {qs.length}</b>.</p><a className="quiz__share" href={share} target="_blank" rel="noreferrer">Compartilhar no WhatsApp</a><Link className="quiz__go" to={qs[0]?.to||'/'}>Explorar um mundo</Link><div style={{marginTop:12}}><button onClick={start}>Jogar de novo</button></div></div>}</div></main>
}
