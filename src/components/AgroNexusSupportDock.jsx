import { Link } from 'react-router-dom'

export default function AgroNexusSupportDock(){
  return (
    <>
      <style>{`
        .agx-support-dock{position:fixed;left:14px;bottom:14px;z-index:120;text-decoration:none;background:#ff3b30;color:#fff;border:2px solid #fff;box-shadow:0 8px 24px rgba(16,24,40,.22);border-radius:999px;padding:11px 18px;font:900 .78rem/1 Inter,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase}
        .agx-support-dock:hover{transform:translateY(-2px);background:#d92d20}
        @media(max-width:620px){.agx-support-dock{left:10px;bottom:10px;padding:10px 14px;font-size:.7rem}}
      `}</style>
      <Link className="agx-support-dock" to="/apoie" aria-label="Apoie a AgroNexus">APOIE</Link>
    </>
  )
}
