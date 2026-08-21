/**
 * AgroNexus — Babylon / Fish Nature Products
 * Project Babylon Rebuild
 *
 * COMPLETE PRODUCT CARD INGESTION FROM PROVIDED FISH NATURE SNAPSHOT
 *
 * Rules:
 * - preserve every complete product card found in the provided snapshot;
 * - preserve available and unavailable/out-of-stock records;
 * - preserve all recovered product media variants;
 * - preserve original source URLs, price, stock, seller, weight and provenance;
 * - availability at Fish Nature does not control Babylon availability;
 * - curate later, never during ingestion.
 */

import {
  FISH_NATURE_SOURCE_ID,
  FISH_NATURE_SOURCE_NAME,
  FISH_NATURE_SNAPSHOT_DATE,
  createFishNatureMetadata,
  createFishNatureProvenance,
} from './source'

export const FISH_NATURE_LIVING_PRODUCTS = [
  {
    "id": "fish-nature-tridacna-maxima-6-7cm-tridacna-maxima",
    "sourceProductId": 269506491,
    "type": "animal",
    "world": "corais",
    "name": "TRIDACNA MAXIMA 6/7CM (Tridacna maxima)",
    "brand": null,
    "description": "Adicione beleza e diversidade ao seu aquário com a Tridacna Maxima, uma espécie marinha colorida e fascinante. Confira!",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/tridacna-maxima-5-6cm-tridacna-maxima/",
    "originalUrl": "https://www.fishnature.com.br/produtos/tridacna-maxima-5-6cm-tridacna-maxima/",
    "price": 450,
    "priceCurrency": "BRL",
    "availability": "out-of-stock",
    "sourceAvailability": "https://schema.org/OutOfStock",
    "inventoryLevel": 0,
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "primaryImage": "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-1024-1024.webp",
    "images": [
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-50-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-100-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-240-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-320-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-480-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/tridacna-maxima-6-7cm-tridacna-maxima-1024-1024.webp"
    ],
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 269506491
    },
    "category": "tridacnas",
    "scientificName": "Tridacna maxima",
    "entityType": "species"
  },
  {
    "id": "fish-nature-anemona-carpet-green-metalic-stichodactyla-gigantea",
    "sourceProductId": 258689578,
    "type": "animal",
    "world": "corais",
    "name": "ANEMONA CARPET GREEN METALIC (Stichodactyla gigantea)",
    "description": "Descubra a incrível Anêmona Carpet Green Metallic, perfeita para seu aquário marinho. Beleza, movimento e vida no seu reef.",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/anemona-carpet-green-metalic-stichodactyla-gigantea/",
    "originalUrl": "https://www.fishnature.com.br/produtos/anemona-carpet-green-metalic-stichodactyla-gigantea/",
    "price": 1800,
    "priceCurrency": "BRL",
    "availability": "out-of-stock",
    "sourceAvailability": "https://schema.org/OutOfStock",
    "inventoryLevel": 0,
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "primaryImage": "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-1024-1024.webp",
    "images": [
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-50-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-100-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-240-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-320-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-480-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-carpet-green-metalic-stichodactyla-gigantea-1024-1024.webp"
    ],
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 258689578
    },
    "category": "anemonas",
    "scientificName": "Stichodactyla gigantea",
    "entityType": "species"
  },
  {
    "id": "fish-nature-anemona-rockflower-ultra-phymanthus-pulc",
    "sourceProductId": 240351347,
    "type": "animal",
    "world": "corais",
    "name": "ANEMONA ROCKFLOWER ULTRA (Phymanthus pulc)",
    "description": "Anêmona Rockflower Ultra com coloração intensa para aquários marinhos e reefs.",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/anemona-rockflower-ultra-phymanthus-pulc/",
    "originalUrl": "https://www.fishnature.com.br/produtos/anemona-rockflower-ultra-phymanthus-pulc/",
    "price": 450,
    "priceCurrency": "BRL",
    "availability": "out-of-stock",
    "sourceAvailability": "https://schema.org/OutOfStock",
    "inventoryLevel": 0,
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "primaryImage": "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-1024-1024.webp",
    "images": [
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-50-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-100-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-240-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-320-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-480-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/anemona-rockflower-ultra-phymanthus-pulc-1024-1024.webp"
    ],
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 240351347
    },
    "category": "anemonas",
    "scientificName": "Phymanthus pulc",
    "entityType": "species"
  }
]

export const FISH_NATURE_FOOD_PRODUCTS = [
  {
    "id": "fish-nature-dr-bassleer-biofish-food-garlic-m-0-5-0-8mm",
    "sourceProductId": 242635861,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food GARLIC M 0,5 - 0,8mm",
    "brand": "Dr. Bassleer",
    "description": "Ofereça comida saudável para seus peixes com a Ração Dr. Bassleer Garlic M, rica em nutrientes e composta por alho natural. Compre agora!",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-garlic-m-05-08mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-garlic-m-05-08mm/",
    "price": 155,
    "priceCurrency": "BRL",
    "availability": "available",
    "sourceAvailability": "https://schema.org/InStock",
    "inventoryLevel": "1",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "weight": {
      "@type": "QuantitativeValue",
      "unitCode": "KGM",
      "value": "0.3"
    },
    "primaryImage": "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-1024-1024.webp",
    "images": [
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-50-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-100-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-240-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-320-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-480-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/003/036/865/products/garlic-f35f61c5c868022afb17317930704803-1024-1024.webp"
    ],
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 242635861
    },
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-garlic-l-0-8-1-2mm",
    "sourceProductId": 242637137,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food GARLIC L 0,8 - 1,2mm",
    "brand": "Dr. Bassleer",
    "description": "Ração Dr. Bassleer Biofish Food Garlic L para peixes ornamentais.",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-garlic-l-08-12mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-garlic-l-08-12mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 242637137
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-aloe-l-0-8-1-2mm",
    "sourceProductId": 242635755,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food ALOE L 0,8 - 1,2mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-aloe-l-08-12mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-aloe-l-08-12mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 242635755
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-acai-m-0-5-a-0-8mm",
    "sourceProductId": 242635188,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food ACAI M 0.5 a 0.8mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-acai-m-0-5-a-0-8mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-acai-m-0-5-a-0-8mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 242635188
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-forte-l-0-8-1-2mm",
    "sourceProductId": 203444776,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food FORTE L 0,8 - 1,2mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-forte-l-08-12mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-forte-l-08-12mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 203444776
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-acai-l-0-8-1-2mm",
    "sourceProductId": 203444580,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food ACAI L 0,8 - 1,2mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-acai-l-08-12mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-acai-l-08-12mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 203444580
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-acai-xl-1-2-1-6mm",
    "sourceProductId": 257951732,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food ACAI XL 1,2 - 1,6mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-acai-xl-12-16mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-acai-xl-12-16mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 257951732
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-regular-xl-1-2-1-6mm",
    "sourceProductId": 298556916,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food Regular XL 1,2 - 1,6mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-regular-xl-12-16mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-regular-xl-12-16mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 298556916
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-regular-l-0-8-1-2mm",
    "sourceProductId": 298557635,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food Regular L 0,8 - 1,2mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-regular-l-08-12mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-regular-l-08-12mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 298557635
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-chlorella-l-0-8-1-2mm",
    "sourceProductId": 298559561,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food Chlorella L 0,8 - 1,2mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-chlorella-l-08-12mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-chlorella-l-08-12mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 298559561
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-chlorella-m-0-5-08mm",
    "sourceProductId": 298559830,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food Chlorella M 0,5-,08mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-chlorella-m-05-08mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-chlorella-m-05-08mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 298559830
    }
  },

  {
    "id": "fish-nature-dr-bassleer-biofish-food-aloe-xl-1-2-1-6mm",
    "sourceProductId": 298560109,
    "type": "food",
    "world": "aquarismo",
    "name": "Dr. Bassleer Biofish Food ALOE XL 1,2 - 1,6mm",
    "brand": "Dr. Bassleer",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-aloe-xl-12-16mm/",
    "originalUrl": "https://www.fishnature.com.br/produtos/dr-bassleer-biofish-food-aloe-xl-12-16mm/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 298560109
    }
  },

  {
    "id": "fish-nature-algae-flakes-mix-oceantech",
    "sourceProductId": 277241573,
    "type": "food",
    "world": "aquarismo",
    "name": "ALGAE FLAKES MIX - OCEANTECH",
    "brand": "OCEANTECH",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/algae-flakes-mix-oceantech/",
    "originalUrl": "https://www.fishnature.com.br/produtos/algae-flakes-mix-oceantech/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 277241573
    }
  },

  {
    "id": "fish-nature-pleco-wafers-oceantech",
    "sourceProductId": 277239343,
    "type": "food",
    "world": "aquarismo",
    "name": "PLECO WAFERS - OCEANTECH",
    "brand": "OCEANTECH",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/pleco-wafers-oceantech/",
    "originalUrl": "https://www.fishnature.com.br/produtos/pleco-wafers-oceantech/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 277239343
    }
  },

  {
    "id": "fish-nature-color-flakes-oceantech",
    "sourceProductId": 277241942,
    "type": "food",
    "world": "aquarismo",
    "name": "COLOR FLAKES - OCEANTECH",
    "brand": "OCEANTECH",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/color-flakes-oceantech/",
    "originalUrl": "https://www.fishnature.com.br/produtos/color-flakes-oceantech/",
    "priceCurrency": "BRL",
    "availability": "out-of-stock",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 277241942
    }
  },

  {
    "id": "fish-nature-pond-natural-sticks-bag-1-5kg-oceantech",
    "sourceProductId": 276634846,
    "type": "food",
    "world": "aquarismo",
    "name": "POND NATURAL STICKS BAG 1,5KG - OCEANTECH",
    "brand": "OCEANTECH",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/pond-natural-sticks-bag-15kg-oceantech/",
    "originalUrl": "https://www.fishnature.com.br/produtos/pond-natural-sticks-bag-15kg-oceantech/",
    "priceCurrency": "BRL",
    "availability": "out-of-stock",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "alimentacao",
    "recurring": true,
    "programmablePurchase": true,
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 276634846
    }
  }
]

export const FISH_NATURE_HABITAT_PRODUCTS = [
  {
    "id": "fish-nature-aquamedic-substrato-bali-sand-3-4-mm-10-kg",
    "sourceProductId": 247664954,
    "type": "habitat",
    "world": "aquarismo",
    "name": "AQUAMEDIC SUBSTRATO BALI SAND 3 - 4 MM 10 KG",
    "brand": "AQUAMEDIC",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/aquamedic-substrato-bali-sand-3-4-mm-10-kg/",
    "originalUrl": "https://www.fishnature.com.br/produtos/aquamedic-substrato-bali-sand-3-4-mm-10-kg/",
    "price": 337.5,
    "priceCurrency": "BRL",
    "availability": "available",
    "inventoryLevel": "10",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "weight": {
      "@type": "QuantitativeValue",
      "unitCode": "KGM",
      "value": "10.5"
    },
    "category": "substratos",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 247664954
    }
  },

  {
    "id": "fish-nature-aquamedic-substrato-bali-sand-2-3-mm-10-kg",
    "sourceProductId": 247665297,
    "type": "habitat",
    "world": "aquarismo",
    "name": "AQUAMEDIC SUBSTRATO BALI SAND 2 - 3 MM 10 KG",
    "brand": "AQUAMEDIC",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/aquamedic-substrato-bali-sand-2-3-mm-10-kg/",
    "originalUrl": "https://www.fishnature.com.br/produtos/aquamedic-substrato-bali-sand-2-3-mm-10-kg/",
    "price": 337.5,
    "priceCurrency": "BRL",
    "availability": "available",
    "inventoryLevel": "10",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "substratos",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 247665297
    }
  },

  {
    "id": "fish-nature-caribsea-arag-alive-hawaiian-black-sand",
    "sourceProductId": 304424352,
    "type": "habitat",
    "world": "aquarismo",
    "name": "CARIBSEA ARAG-ALIVE HAWAIIAN BLACK SAND",
    "brand": "CARIBSEA",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/caribsea-arag-alive-hawaiian-black-sand-tiqx1/",
    "originalUrl": "https://www.fishnature.com.br/produtos/caribsea-arag-alive-hawaiian-black-sand-tiqx1/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "substratos",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 304424352
    }
  },

  {
    "id": "fish-nature-aquamedic-substrato-tonga-pearls-10-kg",
    "sourceProductId": 247663861,
    "type": "habitat",
    "world": "aquarismo",
    "name": "AQUAMEDIC SUBSTRATO TONGA PEARLS 10 KG",
    "brand": "AQUAMEDIC",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/aquamedic-substrato-tonga-pearls-10-kg/",
    "originalUrl": "https://www.fishnature.com.br/produtos/aquamedic-substrato-tonga-pearls-10-kg/",
    "priceCurrency": "BRL",
    "availability": "out-of-stock",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "substratos",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 247663861
    }
  },

  {
    "id": "fish-nature-caribsea-arag-alive-special-grade-reef-sand",
    "sourceProductId": 304421395,
    "type": "habitat",
    "world": "aquarismo",
    "name": "CARIBSEA ARAG-ALIVE SPECIAL GRADE REEF SAND",
    "brand": "CARIBSEA",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/caribsea-arag-alive-special-grade-reef/",
    "originalUrl": "https://www.fishnature.com.br/produtos/caribsea-arag-alive-special-grade-reef/",
    "priceCurrency": "BRL",
    "availability": "out-of-stock",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "substratos",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 304421395
    }
  }
]

export const FISH_NATURE_WATER_CARE_PRODUCTS = [
  {
    "id": "fish-nature-aquamedic-reef-salt-20-kg-balde",
    "sourceProductId": 247834476,
    "type": "product",
    "world": "aquarismo",
    "name": "AQUAMEDIC REEF SALT 20 KG BALDE",
    "brand": "AQUAMEDIC",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/aquamedic-reef-salt-20-kg-balde/",
    "originalUrl": "https://www.fishnature.com.br/produtos/aquamedic-reef-salt-20-kg-balde/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "sal-marinho",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 247834476
    }
  },

  {
    "id": "fish-nature-aquamedic-reef-salt-4-kg-balde",
    "sourceProductId": 247835309,
    "type": "product",
    "world": "aquarismo",
    "name": "AQUAMEDIC REEF SALT 4 KG BALDE",
    "brand": "AQUAMEDIC",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/aquamedic-reef-salt-4-kg-balde/",
    "originalUrl": "https://www.fishnature.com.br/produtos/aquamedic-reef-salt-4-kg-balde/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "sal-marinho",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 247835309
    }
  },

  {
    "id": "fish-nature-aquamedic-salt-coral-20-kg-balde",
    "sourceProductId": 247836080,
    "type": "product",
    "world": "aquarismo",
    "name": "AQUAMEDIC SALT CORAL 20 KG BALDE",
    "brand": "AQUAMEDIC",
    "source": "fish-nature",
    "sourceUrl": "https://www.fishnature.com.br/produtos/aquamedic-salt-coral-20-kg-balde/",
    "originalUrl": "https://www.fishnature.com.br/produtos/aquamedic-salt-coral-20-kg-balde/",
    "priceCurrency": "BRL",
    "availability": "available",
    "commercial": true,
    "forSale": true,
    "retainRegardlessOfSourceAvailability": true,
    "supplierCanSource": true,
    "seller": "Fish Nature",
    "category": "sal-marinho",
    "provenance": {
      "source": "fish-nature",
      "sourceName": "Fish Nature",
      "sourceType": "raw-html-snapshot",
      "snapshotDate": "2026-08-21",
      "sourceProductId": 247836080
    }
  }
]

export const FISH_NATURE_OTHER_PRODUCTS = []

export const FISH_NATURE_PRODUCTS = [
  ...FISH_NATURE_LIVING_PRODUCTS,
  ...FISH_NATURE_FOOD_PRODUCTS,
  ...FISH_NATURE_HABITAT_PRODUCTS,
  ...FISH_NATURE_WATER_CARE_PRODUCTS,
  ...FISH_NATURE_OTHER_PRODUCTS,
]

export const FISH_NATURE_PRODUCTS_BY_ID =
  Object.fromEntries(
    FISH_NATURE_PRODUCTS.map(
      (item) => [
        item.id,
        item,
      ]
    )
  )

export const FISH_NATURE_PRODUCTS_BY_SOURCE_ID =
  Object.fromEntries(
    FISH_NATURE_PRODUCTS
      .filter(
        (item) =>
          item.sourceProductId
      )
      .map(
        (item) => [
          String(
            item.sourceProductId
          ),
          item,
        ]
      )
  )

export const FISH_NATURE_AVAILABLE_PRODUCTS =
  FISH_NATURE_PRODUCTS.filter(
    (item) =>
      item.availability ===
      'available'
  )

export const FISH_NATURE_UNAVAILABLE_PRODUCTS =
  FISH_NATURE_PRODUCTS.filter(
    (item) =>
      item.availability ===
      'out-of-stock'
  )

export const FISH_NATURE_PRODUCT_MEDIA =
  FISH_NATURE_PRODUCTS.flatMap(
    (item) =>
      (item.images || []).map(
        (src, index) => ({
          id:
            `${item.id}-image-${index + 1}`,

          entityId:
            item.id,

          src,

          originalUrl:
            src,

          alt:
            item.name,

          role:
            index === 0
              ? 'source-primary'
              : 'source-responsive-variant',

          source:
            FISH_NATURE_SOURCE_ID,

          sourceName:
            FISH_NATURE_SOURCE_NAME,

          sourceUrl:
            item.sourceUrl,

          snapshotDate:
            FISH_NATURE_SNAPSHOT_DATE,
        })
      )
  )

export function getFishNatureProductById(
  id
) {
  return (
    FISH_NATURE_PRODUCTS_BY_ID[id] ||
    null
  )
}

export function getFishNatureProductBySourceId(
  sourceProductId
) {
  return (
    FISH_NATURE_PRODUCTS_BY_SOURCE_ID[
      String(sourceProductId)
    ] ||
    null
  )
}

export function getFishNatureProductsByCategory(
  category
) {
  return FISH_NATURE_PRODUCTS.filter(
    (item) =>
      item.category === category
  )
}

export function getFishNatureProductsByBrand(
  brand
) {
  return FISH_NATURE_PRODUCTS.filter(
    (item) =>
      item.brand === brand
  )
}

export function getFishNatureProductsByAvailability(
  availability
) {
  return FISH_NATURE_PRODUCTS.filter(
    (item) =>
      item.availability ===
      availability
  )
}

export const fishNatureProductsRegistry = {
  all:
    FISH_NATURE_PRODUCTS,

  living:
    FISH_NATURE_LIVING_PRODUCTS,

  food:
    FISH_NATURE_FOOD_PRODUCTS,

  habitat:
    FISH_NATURE_HABITAT_PRODUCTS,

  waterCare:
    FISH_NATURE_WATER_CARE_PRODUCTS,

  other:
    FISH_NATURE_OTHER_PRODUCTS,

  available:
    FISH_NATURE_AVAILABLE_PRODUCTS,

  unavailable:
    FISH_NATURE_UNAVAILABLE_PRODUCTS,

  media:
    FISH_NATURE_PRODUCT_MEDIA,

  byId:
    FISH_NATURE_PRODUCTS_BY_ID,

  bySourceId:
    FISH_NATURE_PRODUCTS_BY_SOURCE_ID,

  getById:
    getFishNatureProductById,

  getBySourceId:
    getFishNatureProductBySourceId,

  getByCategory:
    getFishNatureProductsByCategory,

  getByBrand:
    getFishNatureProductsByBrand,

  getByAvailability:
    getFishNatureProductsByAvailability,

  metadata:
    createFishNatureMetadata({
      completeProductCards:
        FISH_NATURE_PRODUCTS.length,

      availableProductCards:
        FISH_NATURE_AVAILABLE_PRODUCTS.length,

      unavailableProductCards:
        FISH_NATURE_UNAVAILABLE_PRODUCTS.length,

      mediaVariants:
        FISH_NATURE_PRODUCT_MEDIA.length,
    }),

  provenance:
    createFishNatureProvenance({
      module:
        'products',
    }),
}

export default FISH_NATURE_PRODUCTS
