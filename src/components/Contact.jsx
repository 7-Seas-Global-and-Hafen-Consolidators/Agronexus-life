import { useState } from 'react'
import Reveal from './Reveal'
import icons from '../assets/icons'
import { sendContactMessage } from '../services/contactService'
import '../styles/Contact.css'

const CONTACTS = [
  { icon: icons.phone, label: 'Brasil', value: '+55 51 3027 4785 · +55 45 2021 0022', href: 'tel:+555130274785' },
  { icon: icons.whatsapp, label: 'WhatsApp', value: '+55 47 99135 3900', href: 'https://wa.me/5547991353900' },
  { icon: icons.phone, label: 'Polônia', value: '+48 732 099 369', href: 'tel:+48732099369' },
  { icon: icons.phone, label: 'Reino Unido', value: '+44 7594 716370', href: 'tel:+447594716370' },
  { icon: icons.email, label: 'E-mail', value: 'hr@agronexus.life', href: 'mailto:hr@agronexus.life' },
]

const EMPTY = { nome: '', email: '', empresa: '', mensagem: '' }

// ---------- Validação ----------
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.nome.trim()) errors.nome = 'Informe seu nome.'
  else if (values.nome.trim().length < 2) errors.nome = 'Nome muito curto.'

  if (!values.email.trim()) errors.email = 'Informe um e-mail.'
  else if (!emailRegex.test(values.email.trim())) errors.email = 'E-mail inválido.'

  // Empresa é opcional, mas se preenchida precisa ter ao menos 2 caracteres
  if (values.empresa.trim() && values.empresa.trim().length < 2)
    errors.empresa = 'Nome da empresa muito curto.'

  if (!values.mensagem.trim()) errors.mensagem = 'Escreva uma mensagem.'
  else if (values.mensagem.trim().length < 10) errors.mensagem = 'Conte um pouco mais (mín. 10 caracteres).'

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ nome: true, email: true, empresa: true, mensagem: true })
    if (Object.keys(found).length > 0) return

    try {
      setStatus('sending')
      await sendContactMessage(values)
      setStatus('success')
      setValues(EMPTY)
      setTouched({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const fieldClass = (name) => `field ${touched[name] && errors[name] ? 'field--error' : ''}`

  return (
    <section id="contato" className="section contact">
      <div className="container contact__grid">
        {/* ---- Lado esquerdo: chamada + canais ---- */}
        <Reveal className="contact__intro">
          <span className="eyebrow eyebrow--purple">Fale Conosco</span>
          <h2 className="contact__title">
            Pronto para <span className="hl-cyan">conectar</span> seu negócio?
          </h2>
          <p className="contact__text">
            Nossa equipe de especialistas em logística está pronta para desenvolver soluções
            personalizadas para o seu agronegócio.
          </p>

          <ul className="contact__list">
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="contact__item" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span className="contact__item-icon">
                    <img src={c.icon} alt="" aria-hidden="true" />
                  </span>
                  <span className="contact__item-text">
                    <strong>{c.label}</strong>
                    <span>{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---- Lado direito: formulário ---- */}
        <Reveal className="contact__formwrap" delay={120}>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <span className="form__eyebrow">Envie uma mensagem</span>

            <div className={fieldClass('nome')}>
              <input id="nome" name="nome" type="text" placeholder="Nome completo" aria-label="Nome completo"
                value={values.nome} onChange={handleChange} onBlur={handleBlur} autoComplete="name" />
              {touched.nome && errors.nome && <small className="field__msg">{errors.nome}</small>}
            </div>

            <div className={fieldClass('email')}>
              <input id="email" name="email" type="email" placeholder="E-mail corporativo" aria-label="E-mail corporativo"
                value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete="email" />
              {touched.email && errors.email && <small className="field__msg">{errors.email}</small>}
            </div>

            <div className={fieldClass('empresa')}>
              <input id="empresa" name="empresa" type="text" placeholder="Empresa" aria-label="Empresa"
                value={values.empresa} onChange={handleChange} onBlur={handleBlur} autoComplete="organization" />
              {touched.empresa && errors.empresa && <small className="field__msg">{errors.empresa}</small>}
            </div>

            <div className={fieldClass('mensagem')}>
              <textarea id="mensagem" name="mensagem" rows="5" placeholder="Como podemos ajudar?" aria-label="Como podemos ajudar?"
                value={values.mensagem} onChange={handleChange} onBlur={handleBlur} />
              {touched.mensagem && errors.mensagem && <small className="field__msg">{errors.mensagem}</small>}
            </div>

            <button type="submit" className="btn btn-primary form__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>

            {status === 'success' && (
              <p className="form__feedback form__feedback--ok" role="status">
                Mensagem enviada! Em breve nossa equipe entrará em contato.
              </p>
            )}
            {status === 'error' && (
              <p className="form__feedback form__feedback--err" role="alert">
                Não foi possível enviar agora. Tente novamente em instantes.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
