import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const MODOS={
  comunitario:{nome:'Tropical Comunitário',wPerL:1,flow:6,light:'Média',cmPeixe:3},
  ciclide:{nome:'Ciclídeos',wPerL:1.5,flow:8,light:'Média',cmPeixe:5},
  marinho:{nome:'Marinho / Reef',wPerL:1.5,flow:10,light:'LED alta / reef',cmPeixe:6},
  betta:{nome:'Betta',wPerL:1,flow:4,light:'Baixa',cmPeixe:6},
}
const n=(v,d)=>Math.max(.1,Number(v)||d)
const nearestW=(v)=>[25,50,75,100,150,200,250,300,400,500].find(x=>x>=v)||500

export default function AgroNexusAquarioCalculator(){
  const [modo,setModo]=useState('comunitario'); const [c,setC]=useState(60); const [l,setL]=useState(30); const [a,setA]=useState(40)
  const r=useMemo(()=>{const m=MODOS[modo]; const bruto=(n(c,60)*n(l,30)*n(a,40))/1000; const util=bruto*.85; return {m,bruto,util,aquec:nearestW(util*m.wPerL),vazao:Math.round(util*m.flow),substrato:Math.max(1,Math.round((n(c,60)*n(l,30)*5)/1000*1.5)),troca:Math.round(util*.3),peixes:Math.max(1,Math.floor(util/m.cmPeixe))}},[modo,c,l,a])
  const msg=`Olá! Quero montar meu pedido para um aquário ${r.m.nome}. Medidas: ${c}x${l}x${a} cm. Volume útil: ${r.util.toFixed(0)} L. Termostato: ${r.aquec} W. Filtragem: ${r.vazao} L/h. Substrato: ${r.substrato} kg. Troca semanal: ${r.troca} L. Referência de fauna: até ${r.peixes} peixes pequenos. Iluminação: ${r.m.light}.`
  const wa=`${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(msg)}`
  return <main className="calc"><style>{`.calc{min-height:100vh;background:#f7fbff;padding:118px 20px 80px;font-family:Inter,system-ui,sans-serif;color:#101828}.calc__w{max-width:980px;margin:auto}.calc h1{font-size:clamp(2rem,5vw,3.5rem);margin:0 0 8px}.calc p{color:#475467}.calc__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:24px 0}.calc label{background:#fff;border:1px solid #d0d5dd;border-radius:12px;padding:12px;font-weight:800;font-size:.78rem}.calc input,.calc select{width:100%;margin-top:7px;padding:11px;border:1px solid #98a2b3;border-radius:8px}.calc__result{background:#fff;border:1px solid #b2ddff;border-radius:14px;padding:20px}.calc__result ul{columns:2;padding-left:20px}.calc__actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}.calc__actions a{padding:12px 17px;border-radius:8px;text-decoration:none;font-weight:900}.calc__wa{background:#12b76a;color:#fff}.calc__go{background:#1570ef;color:#fff}@media(max-width:650px){.calc__grid{grid-template-columns:1fr}.calc__result ul{columns:1}}`}</style><div className="calc__w"><h1>Calculadora de Aquário</h1><p>Dimensione volume, aquecimento, filtragem, substrato, manutenção e uma referência inicial de fauna.</p><div className="calc__grid"><label>Tipo<select value={modo} onChange={e=>setModo(e.target.value)}>{Object.entries(MODOS).map(([k,v])=><option key={k} value={k}>{v.nome}</option>)}</select></label><label>Comprimento (cm)<input type="number" value={c} onChange={e=>setC(e.target.value)}/></label><label>Largura (cm)<input type="number" value={l} onChange={e=>setL(e.target.value)}/></label><label>Altura (cm)<input type="number" value={a} onChange={e=>setA(e.target.value)}/></label></div><section className="calc__result"><h2>Seu dimensionamento</h2><ul><li>Volume bruto: <b>{r.bruto.toFixed(0)} L</b></li><li>Volume útil: <b>{r.util.toFixed(0)} L</b></li><li>Termostato: <b>{r.aquec} W</b></li><li>Filtragem: <b>{r.vazao} L/h</b></li><li>Substrato: <b>{r.substrato} kg</b></li><li>Troca semanal: <b>{r.troca} L</b></li><li>Fauna de referência: <b>{r.peixes}</b></li><li>Iluminação: <b>{r.m.light}</b></li></ul><div className="calc__actions"><a className="calc__wa" href={wa} target="_blank" rel="noreferrer">Montar pedido no WhatsApp</a><Link className="calc__go" to="/aquarismo">Ir para Aquarismo</Link></div></section></div></main>
}
