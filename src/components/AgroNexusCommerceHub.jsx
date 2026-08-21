/**
 * AgroNexus™ — Commerce & Support Hub
 *
 * Infraestrutura comercial pública:
 * - apoio ao projeto
 * - Asaas
 * - Mercado Pago
 * - Pix
 * - boleto
 * - cartões
 * - parcelamento
 * - canais diretos
 *
 * Babylon permanece exclusivamente interno.
 */

import AGRONEXUS_COMMERCE from '../data/commerceConfig'

const CARD_BRANDS = [
  'VISA',
  'MASTERCARD',
  'ELO',
  'AMERICAN EXPRESS',
  'HIPERCARD',
  'DINERS CLUB',
  'DISCOVER',
  'JCB',
]

function PaymentCard({
  eyebrow,
  title,
  description,
  href,
  action,
  disclosure,
}) {
  return (
    <article className="agx-commerce__payment-card">

      <p className="agx-commerce__small-label">
        {eyebrow}
      </p>

      <h3>
        {title}
      </h3>

      <p className="agx-commerce__payment-copy">
        {description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="agx-commerce__payment-action"
      >
        {action}
        <span aria-hidden="true">
          ↗
        </span>
      </a>

      <p className="agx-commerce__disclosure">
        {disclosure}
      </p>

    </article>
  )
}

export default function AgroNexusCommerceHub({
  compact = false,
}) {
  const commerce =
    AGRONEXUS_COMMERCE

  return (
    <>
      <style>
        {`
          .agx-commerce {
            --agx-commerce-black:
              #090b0a;

            --agx-commerce-green:
              #073c2d;

            --agx-commerce-paper:
              #f1f0e9;

            --agx-commerce-ink:
              #111411;

            --agx-commerce-gold:
              #d8b76a;

            --agx-commerce-line:
              rgba(17, 20, 17, 0.16);

            background:
              var(--agx-commerce-paper);

            color:
              var(--agx-commerce-ink);
          }

          .agx-commerce__hero {
            display:
              grid;

            grid-template-columns:
              minmax(0, 1.3fr)
              minmax(320px, 0.7fr);

            gap:
              clamp(
                50px,
                9vw,
                150px
              );

            align-items:
              end;

            padding:
              clamp(
                100px,
                12vw,
                180px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            background:
              var(--agx-commerce-black);

            color:
              white;
          }

          .agx-commerce--compact
          .agx-commerce__hero {
            padding-top:
              80px;

            padding-bottom:
              80px;
          }

          .agx-commerce__eyebrow {
            margin:
              0
              0
              22px;

            color:
              var(--agx-commerce-gold);

            font-size:
              0.68rem;

            font-weight:
              900;

            letter-spacing:
              0.18em;

            text-transform:
              uppercase;
          }

          .agx-commerce__hero h2 {
            max-width:
              1050px;

            margin:
              0;

            font-size:
              clamp(
                3.5rem,
                8vw,
                9rem
              );

            font-weight:
              520;

            line-height:
              0.84;

            letter-spacing:
              -0.07em;
          }

          .agx-commerce__hero h2 span {
            display:
              block;

            color:
              var(--agx-commerce-gold);
          }

          .agx-commerce__hero-copy {
            max-width:
              540px;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.7
              );

            font-size:
              1.04rem;

            line-height:
              1.75;
          }

          .agx-commerce__hero-note {
            margin:
              26px
              0
              0;

            padding-top:
              22px;

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.14
              );

            color:
              rgba(
                255,
                255,
                255,
                0.42
              );

            font-size:
              0.68rem;

            line-height:
              1.65;

            letter-spacing:
              0.05em;
          }

          .agx-commerce__methods {
            padding:
              clamp(
                80px,
                10vw,
                140px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            border-bottom:
              1px solid
              var(--agx-commerce-line);
          }

          .agx-commerce__section-head {
            display:
              grid;

            grid-template-columns:
              minmax(
                150px,
                0.35fr
              )
              minmax(
                0,
                1.65fr
              );

            gap:
              clamp(
                40px,
                8vw,
                130px
              );

            margin-bottom:
              clamp(
                48px,
                7vw,
                90px
              );
          }

          .agx-commerce__small-label {
            margin:
              0;

            color:
              #477153;

            font-size:
              0.66rem;

            font-weight:
              900;

            letter-spacing:
              0.16em;

            text-transform:
              uppercase;
          }

          .agx-commerce__section-head h2 {
            max-width:
              1000px;

            margin:
              0;

            font-size:
              clamp(
                2.8rem,
                6vw,
                6.5rem
              );

            font-weight:
              520;

            line-height:
              0.9;

            letter-spacing:
              -0.06em;
          }

          .agx-commerce__method-grid {
            display:
              grid;

            grid-template-columns:
              repeat(
                3,
                minmax(
                  0,
                  1fr
                )
              );

            border-top:
              1px solid
              var(--agx-commerce-line);

            border-left:
              1px solid
              var(--agx-commerce-line);
          }

          .agx-commerce__method {
            min-height:
              260px;

            display:
              flex;

            flex-direction:
              column;

            justify-content:
              space-between;

            padding:
              clamp(
                24px,
                3vw,
                42px
              );

            border-right:
              1px solid
              var(--agx-commerce-line);

            border-bottom:
              1px solid
              var(--agx-commerce-line);

            background:
              rgba(
                255,
                255,
                255,
                0.46
              );
          }

          .agx-commerce__method-index {
            color:
              #477153;

            font-size:
              0.62rem;

            font-weight:
              900;

            letter-spacing:
              0.15em;
          }

          .agx-commerce__method h3 {
            margin:
              50px
              0
              14px;

            font-size:
              clamp(
                1.8rem,
                3vw,
                3.2rem
              );

            font-weight:
              600;

            line-height:
              0.98;

            letter-spacing:
              -0.045em;
          }

          .agx-commerce__method p {
            max-width:
              360px;

            margin:
              0;

            color:
              #626861;

            font-size:
              0.86rem;

            line-height:
              1.65;
          }

          .agx-commerce__cards {
            padding:
              clamp(
                70px,
                9vw,
                120px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            background:
              white;
          }

          .agx-commerce__cards-head {
            display:
              flex;

            justify-content:
              space-between;

            gap:
              30px;

            align-items:
              end;

            margin-bottom:
              38px;
          }

          .agx-commerce__cards-head h2 {
            margin:
              10px
              0
              0;

            font-size:
              clamp(
                2.4rem,
                5vw,
                5rem
              );

            line-height:
              0.9;

            letter-spacing:
              -0.055em;
          }

          .agx-commerce__cards-note {
            max-width:
              450px;

            margin:
              0;

            color:
              #626861;

            font-size:
              0.76rem;

            line-height:
              1.65;
          }

          .agx-commerce__brand-grid {
            display:
              grid;

            grid-template-columns:
              repeat(
                4,
                minmax(
                  0,
                  1fr
                )
              );

            border-top:
              1px solid
              var(--agx-commerce-line);

            border-left:
              1px solid
              var(--agx-commerce-line);
          }

          .agx-commerce__brand {
            min-height:
              120px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            padding:
              24px;

            border-right:
              1px solid
              var(--agx-commerce-line);

            border-bottom:
              1px solid
              var(--agx-commerce-line);

            font-size:
              clamp(
                1rem,
                1.7vw,
                1.5rem
              );

            font-weight:
              900;

            letter-spacing:
              -0.03em;

            text-align:
              center;
          }

          .agx-commerce__processors {
            padding:
              clamp(
                90px,
                11vw,
                150px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            background:
              var(--agx-commerce-green);

            color:
              white;
          }

          .agx-commerce__processors-head {
            max-width:
              1000px;

            margin-bottom:
              clamp(
                45px,
                7vw,
                80px
              );
          }

          .agx-commerce__processors-head h2 {
            margin:
              15px
              0
              20px;

            font-size:
              clamp(
                3rem,
                6vw,
                6rem
              );

            line-height:
              0.9;

            letter-spacing:
              -0.06em;
          }

          .agx-commerce__processors-head p {
            max-width:
              720px;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.64
              );

            line-height:
              1.7;
          }

          .agx-commerce__processor-grid {
            display:
              grid;

            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.16
              );

            border-left:
              1px solid
              rgba(
                255,
                255,
                255,
                0.16
              );
          }

          .agx-commerce__payment-card {
            min-height:
              390px;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              flex-start;

            padding:
              clamp(
                28px,
                4vw,
                58px
              );

            border-right:
              1px solid
              rgba(
                255,
                255,
                255,
                0.16
              );

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.16
              );
          }

          .agx-commerce__payment-card
          .agx-commerce__small-label {
            color:
              #8fe0b2;
          }

          .agx-commerce__payment-card h3 {
            margin:
              55px
              0
              18px;

            font-size:
              clamp(
                2.4rem,
                4vw,
                4.6rem
              );

            line-height:
              0.9;

            letter-spacing:
              -0.055em;
          }

          .agx-commerce__payment-copy {
            max-width:
              520px;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.65
              );

            line-height:
              1.7;
          }

          .agx-commerce__payment-action {
            width:
              100%;

            min-height:
              58px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              space-between;

            gap:
              20px;

            margin-top:
              auto;

            padding:
              0
              20px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.3
              );

            color:
              white;

            text-decoration:
              none;

            font-size:
              0.7rem;

            font-weight:
              900;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;

            transition:
              background
                180ms ease,
              color
                180ms ease;
          }

          .agx-commerce__payment-action:hover,
          .agx-commerce__payment-action:focus-visible {
            background:
              white;

            color:
              var(--agx-commerce-green);
          }

          .agx-commerce__disclosure {
            margin:
              18px
              0
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.38
              );

            font-size:
              0.62rem;

            line-height:
              1.55;
          }

          .agx-commerce__contact {
            display:
              grid;

            grid-template-columns:
              minmax(
                0,
                1fr
              )
              auto;

            gap:
              50px;

            align-items:
              end;

            padding:
              clamp(
                80px,
                10vw,
                130px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            background:
              var(--agx-commerce-black);

            color:
              white;
          }

          .agx-commerce__contact h2 {
            max-width:
              850px;

            margin:
              12px
              0
              0;

            font-size:
              clamp(
                3rem,
                7vw,
                7rem
              );

            line-height:
              0.86;

            letter-spacing:
              -0.065em;
          }

          .agx-commerce__contact-actions {
            display:
              flex;

            gap:
              12px;

            flex-wrap:
              wrap;
          }

          .agx-commerce__contact-link {
            min-height:
              52px;

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            gap:
              14px;

            padding:
              0
              22px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.26
              );

            color:
              white;

            text-decoration:
              none;

            font-size:
              0.68rem;

            font-weight:
              900;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;
          }

          .agx-commerce__contact-link:hover,
          .agx-commerce__contact-link:focus-visible {
            background:
              var(--agx-commerce-gold);

            border-color:
              var(--agx-commerce-gold);

            color:
              var(--agx-commerce-black);
          }

          @media (
            max-width:
              900px
          ) {
            .agx-commerce__hero,
            .agx-commerce__section-head,
            .agx-commerce__contact {
              grid-template-columns:
                1fr;
            }

            .agx-commerce__method-grid {
              grid-template-columns:
                1fr;
            }

            .agx-commerce__processor-grid {
              grid-template-columns:
                1fr;
            }

            .agx-commerce__brand-grid {
              grid-template-columns:
                repeat(
                  2,
                  minmax(
                    0,
                    1fr
                  )
                );
            }
          }

          @media (
            max-width:
              560px
          ) {
            .agx-commerce__brand-grid {
              grid-template-columns:
                1fr;
            }

            .agx-commerce__cards-head {
              align-items:
                flex-start;

              flex-direction:
                column;
            }
          }
        `}
      </style>

      <section
        className={
          compact
            ? 'agx-commerce agx-commerce--compact'
            : 'agx-commerce'
        }
      >

        <div className="agx-commerce__hero">

          <div>
            <p className="agx-commerce__eyebrow">
              APOIE · COMPRE · CONECTE
            </p>

            <h2>
              Mantenha a
              <span>
                AgroNexus™ viva.
              </span>
            </h2>
          </div>

          <div>
            <p className="agx-commerce__hero-copy">
              Apoio, produtos,
              serviços e conhecimento
              ajudam a manter o
              ecossistema AgroNexus™
              ativo e em expansão.
            </p>

            <p className="agx-commerce__hero-note">
              Escolha a modalidade
              e conclua o pagamento
              diretamente pela
              plataforma selecionada.
            </p>
          </div>

        </div>

        <div className="agx-commerce__methods">

          <div className="agx-commerce__section-head">

            <p className="agx-commerce__small-label">
              FORMAS DE PAGAMENTO
            </p>

            <h2>
              Você escolhe
              como pagar.
            </h2>

          </div>

          <div className="agx-commerce__method-grid">

            <article className="agx-commerce__method">
              <span className="agx-commerce__method-index">
                01
              </span>

              <div>
                <h3>
                  Pix
                </h3>

                <p>
                  Pagamento rápido,
                  direto e disponível
                  nos checkouts participantes.
                </p>
              </div>
            </article>

            <article className="agx-commerce__method">
              <span className="agx-commerce__method-index">
                02
              </span>

              <div>
                <h3>
                  Boleto
                </h3>

                <p>
                  Boleto bancário
                  disponível conforme
                  as condições do
                  processamento escolhido.
                </p>
              </div>
            </article>

            <article className="agx-commerce__method">
              <span className="agx-commerce__method-index">
                03
              </span>

              <div>
                <h3>
                  Cartão
                </h3>

                <p>
                  Cartões de crédito
                  e opções de parcelamento
                  conforme apresentadas
                  no checkout.
                </p>
              </div>
            </article>

          </div>

        </div>

        <div className="agx-commerce__cards">

          <div className="agx-commerce__cards-head">

            <div>
              <p className="agx-commerce__small-label">
                CARTÕES DE CRÉDITO
              </p>

              <h2>
                Principais bandeiras.
              </h2>
            </div>

            <p className="agx-commerce__cards-note">
              A disponibilidade efetiva
              de cada bandeira,
              parcelamento e condição
              comercial é confirmada
              pela plataforma de pagamento
              no momento do checkout.
            </p>

          </div>

          <div className="agx-commerce__brand-grid">
            {
              CARD_BRANDS.map(
                (brand) => (
                  <div
                    key={brand}
                    className="agx-commerce__brand"
                  >
                    {brand}
                  </div>
                )
              )
            }
          </div>

        </div>

        <div className="agx-commerce__processors">

          <div className="agx-commerce__processors-head">

            <p className="agx-commerce__small-label">
              PAGAMENTO SEGURO
            </p>

            <h2>
              Escolha sua
              plataforma.
            </h2>

            <p>
              Pix, boleto,
              cartões de crédito
              e parcelamento
              são apresentados
              de acordo com as
              condições disponíveis
              em cada checkout.
            </p>

          </div>

          <div className="agx-commerce__processor-grid">

            <PaymentCard
              eyebrow="ASAAS"
              title="Guiropa World"
              description="Apoie, compre ou conclua seu pagamento utilizando a infraestrutura Asaas."
              href={
                commerce
                  .paymentLinks
                  .asaas
                  .url
              }
              action="Abrir Asaas"
              disclosure={
                commerce
                  .paymentLinks
                  .asaas
                  .disclosure
              }
            />

            <PaymentCard
              eyebrow="MERCADO PAGO"
              title="7 Seas Global"
              description="Conclua seu pagamento utilizando a infraestrutura Mercado Pago."
              href={
                commerce
                  .paymentLinks
                  .mercadoPago
                  .url
              }
              action="Abrir Mercado Pago"
              disclosure={
                commerce
                  .paymentLinks
                  .mercadoPago
                  .disclosure
              }
            />

          </div>

        </div>

        <div className="agx-commerce__contact">

          <div>
            <p className="agx-commerce__eyebrow">
              ATENDIMENTO DIRETO
            </p>

            <h2>
              Fale com
              a AgroNexus™.
            </h2>
          </div>

          <div className="agx-commerce__contact-actions">

            <a
              href={
                commerce
                  .contactLinks
                  .whatsapp
                  .url
              }
              target="_blank"
              rel="noopener noreferrer"
              className="agx-commerce__contact-link"
            >
              WhatsApp
              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href={
                commerce
                  .contactLinks
                  .telegram
                  .url
              }
              target="_blank"
              rel="noopener noreferrer"
              className="agx-commerce__contact-link"
            >
              Telegram
              <span aria-hidden="true">
                ↗
              </span>
            </a>

          </div>

        </div>

      </section>
    </>
  )
}
