import { useState } from 'react'
import Reveal from './Reveal'
import icons from '../assets/icons'
import { sendContactMessage } from '../services/contactService'
import '../styles/Contact.css'

const CONTACTS = [
  {
    type: 'image',
    icon: icons.phone,
    label: 'Brasil',
    value: '+55 51 3027 4785 · +55 45 2021 0022',
    href: 'tel:+555130274785',
  },
  {
    type: 'image',
    icon: icons.whatsapp,
    label: 'WhatsApp Global',
    value: '+55 47 99135 3900',
    href: 'https://wa.me/5547991353900',
  },
  {
    type: 'image',
    icon: icons.phone,
    label: 'Europa Central',
    value: '+48 732 099 369',
    href: 'tel:+48732099369',
  },
  {
    type: 'telegram',
    label: 'Telegram Premium — Reino Unido',
    value: '+44 7594 716370',
    href: 'https://t.me/m/t6seeX61ZTlk',
  },
  {
    type: 'image',
    icon: icons.email,
    label: 'E-mail institucional',
    value: 'hr@agronexus.life',
    href: 'mailto:hr@agronexus.life',
  },
]

const INTERESTS = [
  'Sou criador ou produtor',
  'Procuro um criador ou produto',
  'Sou veterinário ou biólogo',
  'Aquarismo & Reef',
  'Botânica e biodiversidade',
  'Genética animal ou vegetal',
  'Agro e produção sustentável',
  'Parceria institucional',
  'Pesquisa ou projeto científico',
  'Logística especializada',
  'Marketplace responsável',
  'Outro assunto',
]

const AREAS = [
  'Genética animal e vegetal',
  'Aquarismo & Reef',
  'Botânica e biodiversidade',
  'Veterinários e biólogos',
  'Criadores e consumidores',
  'Marketplace responsável',
  'Pesquisa e conservação',
  'Conexão nacional e internacional',
]

const EMPTY = {
  nome: '',
  email: '',
  telefone: '',
  localizacao: '',
  empresa: '',
  interesse: '',
  mensagem: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M21.6 3.4a1.6 1.6 0 0 0-1.65-.22L3.2 9.65c-1.15.45-1.13 1.12-.2 1.4l4.3 1.34 1.66 5.1c.2.58.1.81.68.81.45 0 .65-.2.9-.45l2.08-2.02 4.33 3.2c.8.44 1.38.21 1.58-.74l2.86-13.48c.3-1.18-.45-1.72-1.79-1.41ZM8.03 12.08l9.96-6.28c.5-.3.95-.14.58.2l-8.22 7.42-.32 3.4-2-4.74Z"
      />
    </svg>
  )
}

function validate(values) {
  const errors = {}

  if (!values.nome.trim()) {
    errors.nome = 'Informe seu nome.'
  } else if (values.nome.trim().length < 2) {
    errors.nome = 'Nome muito curto.'
  }

  if (!values.email.trim()) {
    errors.email = 'Informe um e-mail.'
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = 'E-mail inválido.'
  }

  if (values.telefone.trim() && values.telefone.trim().length < 8) {
    errors.telefone = 'Informe um telefone válido.'
  }

  if (!values.localizacao.trim()) {
    errors.localizacao = 'Informe sua cidade e país.'
  } else if (values.localizacao.trim().length < 3) {
    errors.localizacao = 'Localização muito curta.'
  }

  if (values.empresa.trim() && values.empresa.trim().length < 2) {
    errors.empresa = 'Nome da empresa ou organização muito curto.'
  }

  if (!values.interesse) {
    errors.interesse = 'Selecione um perfil de interesse.'
  }

  if (!values.mensagem.trim()) {
    errors.mensagem = 'Conte-nos como deseja se conectar.'
  } else if (values.mensagem.trim().length < 10) {
    errors.mensagem =
      'Conte um pouco mais, com pelo menos 10 caracteres.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target

    const nextValues = {
      ...values,
      [name]: value,
    }

    setValues(nextValues)

    if (touched[name]) {
      setErrors(validate(nextValues))
    }

    if (status !== 'idle') {
      setStatus('idle')
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))

    setErrors(validate(values))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const foundErrors = validate(values)

    setErrors(foundErrors)

    setTouched({
      nome: true,
      email: true,
      telefone: true,
      localizacao: true,
      empresa: true,
      interesse: true,
      mensagem: true,
    })

    if (Object.keys(foundErrors).length > 0) {
      return
    }

    try {
      setStatus('sending')

      await sendContactMessage({
        ...values,
        destinatario: 'hr@agronexus.life',
        origem: 'Formulário do site AgroNexus.Life',
      })

      setStatus('success')
      setValues(EMPTY)
      setTouched({})
      setErrors({})
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const fieldClass = (name) =>
    `field ${
      touched[name] && errors[name] ? 'field--error' : ''
    }`

  return (
    <section id="contato" className="section contact">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <span className="eyebrow eyebrow--purple">
            Conecte-se ao Ecossistema
          </span>

          <h2 className="contact__title">
            Vamos construir
            <span className="hl-cyan"> uma conexão?</span>
          </h2>

          <p className="contact__text">
            Criadores, consumidores, produtores, veterinários, biólogos,
            pesquisadores, instituições e parceiros encontram na AgroNexus
            um ambiente para compartilhar conhecimento, desenvolver
            projetos e criar conexões responsáveis entre biodiversidade,
            ciência e mercado nacional e internacional.
          </p>

          <div className="contact__areas">
            <span className="contact__areas-label">
              Áreas de conexão
            </span>

            <div className="contact__areas-grid">
              {AREAS.map((area) => (
                <span className="contact__area" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>

          <ul className="contact__list">
            {CONTACTS.map((contact) => {
              const opensExternally =
                contact.href.startsWith('http')

              return (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="contact__item"
                    target={opensExternally ? '_blank' : undefined}
                    rel={
                      opensExternally
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <span className="contact__item-icon">
                      {contact.type === 'telegram' ? (
                        <TelegramIcon />
                      ) : (
                        <img
                          src={contact.icon}
                          alt=""
                          aria-hidden="true"
                        />
                      )}
                    </span>

                    <span className="contact__item-text">
                      <strong>{contact.label}</strong>
                      <span>{contact.value}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal className="contact__formwrap" delay={120}>
          <form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact__form-head">
              <span className="form__eyebrow">
                Como deseja se conectar?
              </span>

              <h3>
                Conte-nos sobre seu interesse, projeto ou proposta.
              </h3>

              <p>
                A AgroNexus analisará sua mensagem e encaminhará o
                contato para a área mais adequada do ecossistema.
              </p>
            </div>

            <div className={fieldClass('nome')}>
              <label htmlFor="nome">
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                value={values.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
              />

              {touched.nome && errors.nome && (
                <small className="field__msg">
                  {errors.nome}
                </small>
              )}
            </div>

            <div className="contact__form-row">
              <div className={fieldClass('email')}>
                <label htmlFor="email">
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                />

                {touched.email && errors.email && (
                  <small className="field__msg">
                    {errors.email}
                  </small>
                )}
              </div>

              <div className={fieldClass('telefone')}>
                <label htmlFor="telefone">
                  Telefone ou WhatsApp
                </label>

                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="+55..."
                  value={values.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="tel"
                />

                {touched.telefone && errors.telefone && (
                  <small className="field__msg">
                    {errors.telefone}
                  </small>
                )}
              </div>
            </div>

            <div className="contact__form-row">
              <div className={fieldClass('localizacao')}>
                <label htmlFor="localizacao">
                  Cidade e país
                </label>

                <input
                  id="localizacao"
                  name="localizacao"
                  type="text"
                  placeholder="São Paulo, Brasil"
                  value={values.localizacao}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="address-level2"
                />

                {touched.localizacao &&
                  errors.localizacao && (
                    <small className="field__msg">
                      {errors.localizacao}
                    </small>
                  )}
              </div>

              <div className={fieldClass('empresa')}>
                <label htmlFor="empresa">
                  Empresa ou organização
                </label>

                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Opcional"
                  value={values.empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="organization"
                />

                {touched.empresa && errors.empresa && (
                  <small className="field__msg">
                    {errors.empresa}
                  </small>
                )}
              </div>
            </div>

            <div className={fieldClass('interesse')}>
              <label htmlFor="interesse">
                Perfil de interesse
              </label>

              <select
                id="interesse"
                name="interesse"
                value={values.interesse}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">
                  Selecione a opção mais adequada
                </option>

                {INTERESTS.map((interest) => (
                  <option
                    value={interest}
                    key={interest}
                  >
                    {interest}
                  </option>
                ))}
              </select>

              {touched.interesse && errors.interesse && (
                <small className="field__msg">
                  {errors.interesse}
                </small>
              )}
            </div>

            <div className={fieldClass('mensagem')}>
              <label htmlFor="mensagem">
                Como deseja se conectar?
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows="6"
                placeholder="Conte-nos sobre seu projeto, interesse, necessidade ou ideia de parceria..."
                value={values.mensagem}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.mensagem && errors.mensagem && (
                <small className="field__msg">
                  {errors.mensagem}
                </small>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary form__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? 'Iniciando conexão…'
                : 'Iniciar conexão'}
            </button>

            {status === 'success' && (
              <p
                className="form__feedback form__feedback--ok"
                role="status"
              >
                Sua conexão foi iniciada. Nossa equipe analisará sua
                mensagem e retornará em breve.
              </p>
            )}

            {status === 'error' && (
              <p
                className="form__feedback form__feedback--err"
                role="alert"
              >
                Não foi possível enviar sua mensagem agora. Tente
                novamente em instantes.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
