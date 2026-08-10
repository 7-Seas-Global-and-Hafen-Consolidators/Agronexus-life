import {
  useEffect,
  useState,
} from 'react'

import Reveal from './Reveal'
import icons from '../assets/icons'
import { sendContactMessage } from '../services/contactService'
import '../styles/Contact.css'

const SUPPORT_URL =
  'https://www.asaas.com/c/u6toboa8xhqsmosv'

/* ============================================================
   CONTATOS PÚBLICOS
   O e-mail interno NÃO é exibido no site.
   O recebimento do formulário é controlado pelo Formspree.
   ============================================================ */

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
]

/* ============================================================
   AÇÕES VINDAS DA HOME
   #/contato?acao=...
   Cada botão chega ao formulário já identificado.
   ============================================================ */

const ACTION_PRESETS = {
  vender: {
    interesse: 'Quero vender na AgroNexus',
    mensagem:
      'Quero vender produtos no Marketplace AgroNexus.',
  },

  anunciar: {
    interesse: 'Quero anunciar na AgroNexus',
    mensagem:
      'Quero anunciar minha empresa, serviço, marca ou negócio na AgroNexus.',
  },

  'cadastrar-clinica': {
    interesse: 'Cadastrar clínica veterinária',
    mensagem:
      'Quero cadastrar minha clínica veterinária na AgroNexus.',
  },

  'cadastrar-petshop': {
    interesse: 'Cadastrar pet shop',
    mensagem:
      'Quero cadastrar meu pet shop na AgroNexus.',
  },

  'cadastrar-ong': {
    interesse: 'Cadastrar ONG',
    mensagem:
      'Quero cadastrar minha ONG na AgroNexus.',
  },

  adotar: {
    interesse: 'Quero adotar',
    mensagem:
      'Quero iniciar meu cadastro para adoção responsável.',
  },

  doar: {
    interesse: 'Quero doar',
    mensagem:
      'Quero doar produtos para uma ONG parceira da AgroNexus.',
  },
}

const INTERESTS = [
  'Quero vender na AgroNexus',
  'Quero anunciar na AgroNexus',
  'Cadastrar clínica veterinária',
  'Cadastrar pet shop',
  'Cadastrar ONG',
  'Quero adotar',
  'Quero doar',
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
  'Marketplace',
  'Clínicas veterinárias',
  'Pet shops',
  'ONGs',
  'Adoção',
  'Doação',
  'Aquarismo & Reef',
  'Botânica e biodiversidade',
  'Criadores e consumidores',
  'Pesquisa e conservação',
]

const SUPPORT_POINTS = [
  'Novos países',
  'Novas espécies',
  'Pesquisa e conservação',
  'Conteúdo gratuito',
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

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getActionFromHash() {
  const hash =
    window.location.hash || ''

  const queryIndex =
    hash.indexOf('?')

  if (queryIndex === -1) {
    return ''
  }

  const queryString =
    hash.slice(queryIndex + 1)

  const params =
    new URLSearchParams(queryString)

  return params.get('acao') || ''
}

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

function SupportArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function validate(values) {
  const errors = {}

  if (!values.nome.trim()) {
    errors.nome =
      'Informe seu nome.'
  } else if (
    values.nome.trim().length < 2
  ) {
    errors.nome =
      'Nome muito curto.'
  }

  if (!values.email.trim()) {
    errors.email =
      'Informe um e-mail.'
  } else if (
    !emailRegex.test(
      values.email.trim()
    )
  ) {
    errors.email =
      'E-mail inválido.'
  }

  if (
    values.telefone.trim() &&
    values.telefone.trim().length < 8
  ) {
    errors.telefone =
      'Informe um telefone válido.'
  }

  if (!values.localizacao.trim()) {
    errors.localizacao =
      'Informe sua cidade e país.'
  } else if (
    values.localizacao.trim().length < 3
  ) {
    errors.localizacao =
      'Localização muito curta.'
  }

  if (
    values.empresa.trim() &&
    values.empresa.trim().length < 2
  ) {
    errors.empresa =
      'Nome da empresa ou organização muito curto.'
  }

  if (!values.interesse) {
    errors.interesse =
      'Selecione um perfil de interesse.'
  }

  if (!values.mensagem.trim()) {
    errors.mensagem =
      'Descreva sua solicitação.'
  } else if (
    values.mensagem.trim().length < 10
  ) {
    errors.mensagem =
      'Escreva pelo menos 10 caracteres.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] =
    useState(EMPTY)

  const [errors, setErrors] =
    useState({})

  const [touched, setTouched] =
    useState({})

  const [status, setStatus] =
    useState('idle')

  /* ==========================================================
     PRÉ-PREENCHIMENTO AUTOMÁTICO
     Lê ?acao=... dos botões da Home.
     ========================================================== */

  useEffect(() => {
    const action =
      getActionFromHash()

    const preset =
      ACTION_PRESETS[action]

    if (!preset) {
      return
    }

    setValues((current) => ({
      ...current,
      interesse:
        preset.interesse,
      mensagem:
        preset.mensagem,
    }))
  }, [])

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target

    const nextValues = {
      ...values,
      [name]: value,
    }

    setValues(nextValues)

    if (touched[name]) {
      setErrors(
        validate(nextValues)
      )
    }

    if (status !== 'idle') {
      setStatus('idle')
    }
  }

  const handleBlur = (event) => {
    const { name } =
      event.target

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))

    setErrors(
      validate(values)
    )
  }

  const handleSubmit =
    async (event) => {
      event.preventDefault()

      const foundErrors =
        validate(values)

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

      if (
        Object.keys(
          foundErrors
        ).length > 0
      ) {
        return
      }

      try {
        setStatus('sending')

        await sendContactMessage({
          ...values,
          origem:
            'Formulário do site AgroNexus.Life',
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
      touched[name] &&
      errors[name]
        ? 'field--error'
        : ''
    }`

  return (
    <section
      id="contato"
      className="section contact"
    >
      <div className="container contact__grid">

        <Reveal className="contact__intro">

          <span className="eyebrow eyebrow--purple">
            Contato AgroNexus
          </span>

          <h2 className="contact__title">
            O que você quer
            <span className="hl-cyan">
              {' '}fazer?
            </span>
          </h2>

          <p className="contact__text">
            Comprar, vender, anunciar,
            cadastrar uma clínica,
            cadastrar um pet shop,
            cadastrar uma ONG, adotar,
            doar ou falar com a AgroNexus.
            Escolha a opção e envie.
          </p>

          <div className="contact__areas">
            <span className="contact__areas-label">
              Áreas
            </span>

            <div className="contact__areas-grid">
              {AREAS.map((area) => (
                <span
                  className="contact__area"
                  key={area}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <ul className="contact__list">
            {CONTACTS.map(
              (contact) => {
                const opensExternally =
                  contact.href.startsWith(
                    'http'
                  )

                return (
                  <li
                    key={
                      contact.label
                    }
                  >
                    <a
                      href={
                        contact.href
                      }
                      className="contact__item"
                      target={
                        opensExternally
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        opensExternally
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      <span className="contact__item-icon">
                        {contact.type ===
                        'telegram' ? (
                          <TelegramIcon />
                        ) : (
                          <img
                            src={
                              contact.icon
                            }
                            alt=""
                            aria-hidden="true"
                          />
                        )}
                      </span>

                      <span className="contact__item-text">
                        <strong>
                          {
                            contact.label
                          }
                        </strong>

                        <span>
                          {
                            contact.value
                          }
                        </span>
                      </span>
                    </a>
                  </li>
                )
              }
            )}
          </ul>

        </Reveal>

        <Reveal
          className="contact__formwrap"
          delay={120}
        >
          <form
            className="contact__form"
            onSubmit={
              handleSubmit
            }
            noValidate
          >

            <div className="contact__form-head">

              <span className="form__eyebrow">
                Cadastro e contato
              </span>

              <h3>
                Preencha e envie.
              </h3>

              <p>
                Sua solicitação será recebida
                pela equipe AgroNexus.
              </p>

            </div>

            <div
              className={
                fieldClass('nome')
              }
            >
              <label htmlFor="nome">
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                value={
                  values.nome
                }
                onChange={
                  handleChange
                }
                onBlur={
                  handleBlur
                }
                autoComplete="name"
              />

              {touched.nome &&
                errors.nome && (
                  <small className="field__msg">
                    {
                      errors.nome
                    }
                  </small>
                )}
            </div>

            <div className="contact__form-row">

              <div
                className={
                  fieldClass(
                    'email'
                  )
                }
              >
                <label htmlFor="email">
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={
                    values.email
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  autoComplete="email"
                />

                {touched.email &&
                  errors.email && (
                    <small className="field__msg">
                      {
                        errors.email
                      }
                    </small>
                  )}
              </div>

              <div
                className={
                  fieldClass(
                    'telefone'
                  )
                }
              >
                <label htmlFor="telefone">
                  Telefone ou WhatsApp
                </label>

                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="+55..."
                  value={
                    values.telefone
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  autoComplete="tel"
                />

                {touched.telefone &&
                  errors.telefone && (
                    <small className="field__msg">
                      {
                        errors.telefone
                      }
                    </small>
                  )}
              </div>

            </div>

            <div className="contact__form-row">

              <div
                className={
                  fieldClass(
                    'localizacao'
                  )
                }
              >
                <label htmlFor="localizacao">
                  Cidade e país
                </label>

                <input
                  id="localizacao"
                  name="localizacao"
                  type="text"
                  placeholder="São Paulo, Brasil"
                  value={
                    values.localizacao
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  autoComplete="address-level2"
                />

                {touched.localizacao &&
                  errors.localizacao && (
                    <small className="field__msg">
                      {
                        errors.localizacao
                      }
                    </small>
                  )}
              </div>

              <div
                className={
                  fieldClass(
                    'empresa'
                  )
                }
              >
                <label htmlFor="empresa">
                  Empresa ou organização
                </label>

                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Opcional"
                  value={
                    values.empresa
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  autoComplete="organization"
                />

                {touched.empresa &&
                  errors.empresa && (
                    <small className="field__msg">
                      {
                        errors.empresa
                      }
                    </small>
                  )}
              </div>

            </div>

            <div
              className={
                fieldClass(
                  'interesse'
                )
              }
            >
              <label htmlFor="interesse">
                O que você quer fazer?
              </label>

              <select
                id="interesse"
                name="interesse"
                value={
                  values.interesse
                }
                onChange={
                  handleChange
                }
                onBlur={
                  handleBlur
                }
              >
                <option value="">
                  Selecione
                </option>

                {INTERESTS.map(
                  (interest) => (
                    <option
                      value={
                        interest
                      }
                      key={
                        interest
                      }
                    >
                      {
                        interest
                      }
                    </option>
                  )
                )}
              </select>

              {touched.interesse &&
                errors.interesse && (
                  <small className="field__msg">
                    {
                      errors.interesse
                    }
                  </small>
                )}
            </div>

            <div
              className={
                fieldClass(
                  'mensagem'
                )
              }
            >
              <label htmlFor="mensagem">
                Mensagem
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows="6"
                placeholder="Descreva sua solicitação..."
                value={
                  values.mensagem
                }
                onChange={
                  handleChange
                }
                onBlur={
                  handleBlur
                }
              />

              {touched.mensagem &&
                errors.mensagem && (
                  <small className="field__msg">
                    {
                      errors.mensagem
                    }
                  </small>
                )}
            </div>

            <button
              type="submit"
              className="btn btn-primary form__submit"
              disabled={
                status ===
                'sending'
              }
            >
              {status ===
              'sending'
                ? 'Enviando…'
                : 'Enviar'}
            </button>

            {status ===
              'success' && (
              <p
                className="form__feedback form__feedback--ok"
                role="status"
              >
                Enviado com sucesso.
                A AgroNexus recebeu
                sua solicitação.
              </p>
            )}

            {status ===
              'error' && (
              <p
                className="form__feedback form__feedback--err"
                role="alert"
              >
                Não foi possível
                enviar agora.
                Tente novamente.
              </p>
            )}

          </form>
        </Reveal>

      </div>

      {/* ======================================================
          APOIO
          ====================================================== */}

      <div className="container contact__support-container">
        <Reveal
          className="contact__support"
          delay={180}
        >
          <div
            className="contact__support-decoration"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div className="contact__support-content">

            <span className="contact__support-eyebrow">
              Apoio
            </span>

            <h3 className="contact__support-title">
              Apoie a
              <span> AgroNexus.</span>
            </h3>

            <p className="contact__support-text">
              Sua contribuição ajuda
              a manter conteúdo,
              pesquisa e infraestrutura.
            </p>

            <div
              className="contact__support-points"
              aria-label="Áreas beneficiadas pelo apoio"
            >
              {SUPPORT_POINTS.map(
                (point) => (
                  <span
                    className="contact__support-point"
                    key={point}
                  >
                    {point}
                  </span>
                )
              )}
            </div>

          </div>

          <div className="contact__support-action">

            <span className="contact__support-label">
              Apoio voluntário
            </span>

            <strong className="contact__support-value">
              Valor sugerido: R$ 10
            </strong>

            <span className="contact__support-choice">
              Você escolhe o valor.
            </span>

            <a
              href={SUPPORT_URL}
              className="contact__support-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apoiar a AgroNexus pelo Asaas"
            >
              <span>
                Apoiar a AgroNexus
              </span>

              <SupportArrowIcon />
            </a>

            <small className="contact__support-note">
              Pagamento seguro via Asaas
              com Pix, cartão ou boleto.
            </small>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
