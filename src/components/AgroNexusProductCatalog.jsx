/**
 * AgroNexus™ — Universal Product Catalog
 *
 * Primeira camada pública real de catálogo.
 *
 * Usa registros existentes da Fish Nature.
 *
 * REGRAS:
 * - disponível entra;
 * - indisponível entra;
 * - sem estoque entra;
 * - imagem original entra;
 * - procedência preservada;
 * - anúncio próprio AgroNexus™;
 * - contato direto;
 * - pagamento central AgroNexus™.
 */

import {
  FISH_NATURE_PRODUCTS,
} from '../data/fishNature/products'

import {
  AGRONEXUS_COMMERCE,
  formatAdNumber,
} from '../data/commerceConfig'

/* ============================================================
   HELPERS
   ============================================================ */

function formatMoney(
  value,
  currency = 'BRL'
) {
  if (
    value === null ||
    value === undefined ||
    Number.isNaN(
      Number(value)
    )
  ) {
    return 'Consultar condição'
  }

  return new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency,
    }
  ).format(
    Number(value)
  )
}

function createAdNumber(
  product,
  index
) {
  const sourceNumber =
    String(
      product.sourceProductId ||
      ''
    ).replace(
      /\D/g,
      ''
    )

  if (sourceNumber) {
    return formatAdNumber(
      sourceNumber
        .slice(-10)
    )
  }

  return formatAdNumber(
    String(
      1985533504 +
      index
    )
  )
}

function availabilityLabel(
  availability
) {
  if (
    availability ===
    'available'
  ) {
    return 'Disponível'
  }

  if (
    availability ===
    'out-of-stock'
  ) {
    return 'Sob consulta'
  }

  return 'Consultar'
}

/* ============================================================
   PRODUCT CARD
   ============================================================ */

function ProductCard({
  product,
  index,
}) {
  const adNumber =
    createAdNumber(
      product,
      index
    )

  const image =
    product.primaryImage ||
    product.images?.[0] ||
    ''

  const available =
    product.availability ===
    'available'

  return (
    <article className="agx-product">

      <div className="agx-product__media">

        {
          image ? (
            <img
              src={image}
              alt={product.name}
              loading="lazy"
            />
          ) : (
            <div className="agx-product__media-empty">
              AgroNexus™
            </div>
          )
        }

        <div
          className={
            available
              ? 'agx-product__status agx-product__status--available'
              : 'agx-product__status'
          }
        >
          {
            availabilityLabel(
              product.availability
            )
          }
        </div>

      </div>

      <div className="agx-product__body">

        <div className="agx-product__meta">
          <span>
            {adNumber}
          </span>

          <span>
            {
              product.source ||
              'AgroNexus'
            }
          </span>
        </div>

        {
          product.brand && (
            <p className="agx-product__brand">
              {product.brand}
            </p>
          )
        }

        <h3>
          {product.name}
        </h3>

        {
          product.scientificName && (
            <p className="agx-product__scientific">
              {
                product.scientificName
              }
            </p>
          )
        }

        {
          product.description && (
            <p className="agx-product__description">
              {
                product.description
              }
            </p>
          )
        }

        <div className="agx-product__price">
          {
            formatMoney(
              product.price,
              product.priceCurrency ||
              'BRL'
            )
          }
        </div>

        <div className="agx-product__payment-note">
          Pix · boleto · cartão de crédito · parcelamento no checkout
        </div>

        <div className="agx-product__actions">

          <a
            href="#/apoie"
            className="agx-product__buy"
          >
            Comprar / pagar
          </a>

          <a
            href={
              AGRONEXUS_COMMERCE
                .contactLinks
                .whatsapp
                .url
            }
            target="_blank"
            rel="noopener noreferrer"
            className="agx-product__contact"
          >
            WhatsApp ↗
          </a>

          <a
            href={
              AGRONEXUS_COMMERCE
                .contactLinks
                .telegram
                .url
            }
            target="_blank"
            rel="noopener noreferrer"
            className="agx-product__contact"
          >
            Telegram ↗
          </a>

        </div>

        <div className="agx-product__source">

          {
            product.seller && (
              <span>
                Origem comercial:
                {' '}
                {product.seller}
              </span>
            )
          }

          {
            product.sourceUrl && (
              <a
                href={
                  product.sourceUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Fonte original ↗
              </a>
            )
          }

        </div>

      </div>

    </article>
  )
}

/* ============================================================
   CATALOG
   ============================================================ */

export default function AgroNexusProductCatalog({
  world = null,
  category = null,
  limit = null,
}) {
  let products =
    FISH_NATURE_PRODUCTS

  if (world) {
    products =
      products.filter(
        (product) =>
          product.world ===
          world
      )
  }

  if (category) {
    products =
      products.filter(
        (product) =>
          product.category ===
          category
      )
  }

  if (
    Number.isFinite(
      Number(limit)
    )
  ) {
    products =
      products.slice(
        0,
        Number(limit)
      )
  }

  return (
    <>
      <style>
        {`
          .agx-catalog {
            background:
              #f1f0e9;

            color:
              #111411;

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
          }

          .agx-catalog__head {
            display:
              grid;

            grid-template-columns:
              minmax(
                160px,
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
                50px,
                8vw,
                100px
              );
          }

          .agx-catalog__eyebrow {
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

          .agx-catalog__head h2 {
            max-width:
              1050px;

            margin:
              0;

            font-size:
              clamp(
                3rem,
                6vw,
                7rem
              );

            font-weight:
              520;

            line-height:
              0.88;

            letter-spacing:
              -0.065em;
          }

          .agx-catalog__count {
            margin:
              25px
              0
              0;

            color:
              #626861;

            font-size:
              0.8rem;

            letter-spacing:
              0.08em;

            text-transform:
              uppercase;
          }

          .agx-catalog__grid {
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

            gap:
              1px;

            background:
              rgba(
                17,
                20,
                17,
                0.15
              );

            border:
              1px solid
              rgba(
                17,
                20,
                17,
                0.15
              );
          }

          .agx-product {
            min-width:
              0;

            background:
              white;
          }

          .agx-product__media {
            position:
              relative;

            aspect-ratio:
              1 / 1;

            overflow:
              hidden;

            background:
              #e7e7e1;
          }

          .agx-product__media img {
            width:
              100%;

            height:
              100%;

            display:
              block;

            object-fit:
              cover;

            transition:
              transform
                320ms ease;
          }

          .agx-product:hover
          .agx-product__media img {
            transform:
              scale(
                1.025
              );
          }

          .agx-product__media-empty {
            width:
              100%;

            height:
              100%;

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            color:
              rgba(
                17,
                20,
                17,
                0.28
              );

            font-weight:
              900;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;
          }

          .agx-product__status {
            position:
              absolute;

            top:
              16px;

            left:
              16px;

            padding:
              9px
              12px;

            background:
              rgba(
                9,
                11,
                10,
                0.92
              );

            color:
              white;

            font-size:
              0.58rem;

            font-weight:
              900;

            letter-spacing:
              0.1em;

            text-transform:
              uppercase;
          }

          .agx-product__status--available {
            background:
              #1f5a40;
          }

          .agx-product__body {
            padding:
              clamp(
                24px,
                3vw,
                38px
              );
          }

          .agx-product__meta {
            display:
              flex;

            justify-content:
              space-between;

            gap:
              14px;

            margin-bottom:
              25px;

            color:
              #777d76;

            font-size:
              0.58rem;

            font-weight:
              900;

            letter-spacing:
              0.08em;

            text-transform:
              uppercase;
          }

          .agx-product__brand {
            margin:
              0
              0
              10px;

            color:
              #477153;

            font-size:
              0.65rem;

            font-weight:
              900;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;
          }

          .agx-product h3 {
            margin:
              0;

            font-size:
              clamp(
                1.45rem,
                2.4vw,
                2.3rem
              );

            font-weight:
              650;

            line-height:
              1;

            letter-spacing:
              -0.045em;
          }

          .agx-product__scientific {
            margin:
              12px
              0
              0;

            color:
              #747a74;

            font-size:
              0.82rem;

            font-style:
              italic;
          }

          .agx-product__description {
            margin:
              20px
              0
              0;

            color:
              #626861;

            font-size:
              0.86rem;

            line-height:
              1.65;
          }

          .agx-product__price {
            margin-top:
              28px;

            font-size:
              clamp(
                1.7rem,
                3vw,
                2.8rem
              );

            font-weight:
              760;

            letter-spacing:
              -0.045em;
          }

          .agx-product__payment-note {
            margin-top:
              9px;

            color:
              #747a74;

            font-size:
              0.65rem;

            line-height:
              1.5;
          }

          .agx-product__actions {
            display:
              grid;

            gap:
              8px;

            margin-top:
              28px;
          }

          .agx-product__buy,
          .agx-product__contact {
            min-height:
              48px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            padding:
              0
              16px;

            text-decoration:
              none;

            font-size:
              0.64rem;

            font-weight:
              900;

            letter-spacing:
              0.1em;

            text-transform:
              uppercase;
          }

          .agx-product__buy {
            background:
              #073c2d;

            color:
              white;
          }

          .agx-product__contact {
            border:
              1px solid
              rgba(
                17,
                20,
                17,
                0.18
              );

            color:
              #111411;
          }

          .agx-product__source {
            display:
              flex;

            flex-direction:
              column;

            gap:
              7px;

            margin-top:
              26px;

            padding-top:
              18px;

            border-top:
              1px solid
              rgba(
                17,
                20,
                17,
                0.12
              );

            color:
              #777d76;

            font-size:
              0.58rem;

            line-height:
              1.45;
          }

          .agx-product__source a {
            color:
              inherit;

            text-decoration:
              underline;
          }

          @media (
            max-width:
              1050px
          ) {
            .agx-catalog__grid {
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
              700px
          ) {
            .agx-catalog__head {
              grid-template-columns:
                1fr;
            }

            .agx-catalog__grid {
              grid-template-columns:
                1fr;
            }
          }
        `}
      </style>

      <section className="agx-catalog">

        <div className="agx-catalog__head">

          <p className="agx-catalog__eyebrow">
            CATÁLOGO AGRONEXUS™
          </p>

          <div>
            <h2>
              Biodiversidade,
              produtos e soluções
              em um único acervo.
            </h2>

            <p className="agx-catalog__count">
              {
                products.length
              } registros exibidos
            </p>
          </div>

        </div>

        <div className="agx-catalog__grid">

          {
            products.map(
              (
                product,
                index
              ) => (
                <ProductCard
                  key={
                    product.id
                  }
                  product={
                    product
                  }
                  index={
                    index
                  }
                />
              )
            )
          }

        </div>

      </section>
    </>
  )
}
