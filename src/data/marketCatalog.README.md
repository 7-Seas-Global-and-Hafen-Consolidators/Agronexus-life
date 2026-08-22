# AgroNexus Market Catalog

Camada pública do catálogo comercial.

## Regra central

Nenhuma informação privada de abastecimento deve ser exportada para o frontend público. O catálogo expõe apenas dados necessários à experiência AgroNexus: anúncio, nome, mundo, categorias, tipo, mídia, preço, disponibilidade, atributos, descrição e entrega.

## Rota pública

`#/anuncio/<id-ou-slug>`

## Escala

A estrutura aceita organismos vivos, alimentação, medicamentos veterinários, equipamentos, habitats, plantas, serviços, publicações e tipos futuros por meio de atributos dinâmicos.

## Fonte privada

Referência de fornecedor, custo de aquisição, margem interna, SKU de origem e demais dados de procurement devem permanecer fora deste arquivo e fora do bundle público.
