// Entradas do caderno. Os números vêm de estatisticas.json (scripts em vektor_conteudo/ponto_cotado/scripts).
const FICHA_COMUM = {
  dados: 'AWS Terrain Tiles (Terrarium, Mapzen; fontes SRTM, GMTED2010, ETOPO1 e outras), descarregados a 24 out 2026. Fronteiras e lagos: Natural Earth 10m v5.1 (domínio público).',
  metodo: 'Mosaico das tiles, remoção de picos isolados (mais de 400 m acima da mediana 3×3), recorte pela fronteira, reprojeção bilinear, classes de altitude e relevo sombreado multidirecional. Mapas e figura em QGIS 4.2, com scripts em Python (GDAL, NumPy).',
};

export const estudos = [
  {
    slug: 'ponto-cotado-angola',
    serie: 'Ponto cotado',
    lugar: 'Angola',
    data: '2026-10-24',
    titulo: 'Angola, um país de planalto',
    resumo: '72 % do território fica acima dos 1000 metros. O litoral é uma faixa estreita; o resto é planalto.',
    imagem: 'ponto-cotado-angola',
    alt: 'Mapa hipsométrico de Angola com relevo sombreado. A faixa litoral, abaixo de 500 m, é estreita; o planalto entre 1000 e 1500 m cobre a maior parte do país; acima de 1500 m destaca-se o Planalto Central, com o Morro do Moco (2620 m). Barras: 0–500 m 10,0 %; 500–1000 m 17,6 %; 1000–1500 m 63,9 %; 1500–2000 m 8,3 %; acima de 2000 m 0,1 %.',
    texto: [
      'O mapa divide o território angolano em cinco classes de altitude. A maior, de 1000 a 1500 metros, ocupa 63,9 % do país. Somando as classes acima, 72 % de Angola está acima dos 1000 metros; a mediana é 1137 m.',
      'A descida para o mar faz-se numa faixa estreita: só 10 % do território fica abaixo dos 500 metros. Acima dos 1500 m, o relevo concentra-se no Planalto Central, à volta do Huambo, onde está o Morro do Moco, o ponto mais alto do país.',
    ],
    numeros: [
      ['Acima de 1000 m', '72,3 %'],
      ['Abaixo de 500 m', '10,0 %'],
      ['Altitude mediana', '1137 m'],
      ['Ponto mais alto (referência)', 'Morro do Moco, 2620 m'],
    ],
    limites: 'Com píxeis de cerca de 600 m, os cumes ficam suavizados: no Morro do Moco o modelo dá 2581 m, contra os 2620 m de referência. As percentagens são de área, calculadas numa projeção de área igual.',
    ficha: { ...FICHA_COMUM, projecao: 'Albers de área igual, centrada em Angola (paralelos 6° S e 16° S, meridiano 18° E)', resolucao: '~600 m (tiles de nível 8), reamostrado a 600 m' },
  },
  {
    slug: 'ponto-cotado-portugal',
    serie: 'Ponto cotado',
    lugar: 'Portugal',
    data: '2026-10-24',
    titulo: 'Portugal continental, do mar à Torre',
    resumo: 'Só 1,7 % do continente passa dos 1000 metros. Quase metade fica abaixo dos 200.',
    imagem: 'ponto-cotado-portugal',
    alt: 'Mapa hipsométrico de Portugal continental com relevo sombreado. O sul e o litoral ficam abaixo de 200 m; o relevo acima de 500 m concentra-se no norte e no centro, com a Serra da Estrela e a Torre (1993 m). Barras: 0–200 m 42,9 %; 200–500 m 34,9 %; 500–1000 m 20,6 %; 1000–1500 m 1,6 %; acima de 1500 m 0,1 %.',
    texto: [
      'Portugal continental é sobretudo baixo: 42,9 % do território fica abaixo dos 200 metros e a altitude mediana é 234 m. As terras acima dos 500 metros concentram-se a norte do Tejo; a sul, a planície domina.',
      'Acima dos 1000 metros fica apenas 1,7 % do continente, quase todo na Serra da Estrela e nas serras do norte. A Torre, com 1993 m, é o ponto mais alto do continente. O ponto mais alto do país é a Montanha do Pico, nos Açores, com 2351 m.',
    ],
    numeros: [
      ['Abaixo de 200 m', '42,9 %'],
      ['Acima de 1000 m', '1,7 %'],
      ['Altitude mediana', '234 m'],
      ['Ponto mais alto do continente', 'Torre, 1993 m'],
    ],
    limites: 'Só o continente: Açores e Madeira ficam de fora. Com píxeis de cerca de 230 m, o modelo dá 1989 m na Torre (referência: 1993 m).',
    ficha: { ...FICHA_COMUM, projecao: 'PT-TM06/ETRS89 (EPSG:3763)', resolucao: '~230 m (tiles de nível 9), reamostrado a 250 m' },
  },
  {
    slug: 'ponto-cotado-suica',
    serie: 'Ponto cotado',
    lugar: 'Suíça',
    data: '2026-10-24',
    titulo: 'A Suíça acima dos 2000 metros',
    resumo: 'Quase um quarto do país, 23 %, fica acima dos 2000 metros. Metade passa dos 1000.',
    imagem: 'ponto-cotado-suica',
    alt: 'Mapa hipsométrico da Suíça com relevo sombreado e lagos. O Planalto Central, entre o Jura e os Alpes, fica entre 300 e 1000 m; os Alpes ocupam o sul e o leste, com grandes áreas acima de 2000 m, e a Dufourspitze (4634 m) junto à fronteira com Itália. Barras: 0–500 m 16,6 %; 500–1000 m 30,3 %; 1000–2000 m 30,0 %; 2000–3000 m 20,9 %; acima de 3000 m 2,2 %.',
    texto: [
      'Entre o Jura, a noroeste, e os Alpes, a sul e a leste, fica o Planalto Central, onde vive a maior parte da população. Mesmo assim, 53 % do país está acima dos 1000 metros e a altitude mediana é 1084 m.',
      'Acima dos 2000 metros fica 23,1 % da Suíça, quase um quarto do território: são os Alpes, de Valais aos Grisões. Acima dos 3000 m ficam 2,2 %. O ponto mais alto é a Dufourspitze, no maciço do Monte Rosa, com 4634 m.',
    ],
    numeros: [
      ['Acima de 2000 m', '23,1 %'],
      ['Acima de 1000 m', '53,2 %'],
      ['Altitude mediana', '1084 m'],
      ['Ponto mais alto (referência)', 'Dufourspitze, 4634 m'],
    ],
    limites: 'As percentagens incluem a superfície dos lagos. Com píxeis de cerca de 100 m, o modelo dá 4500 m na Dufourspitze (referência: 4634 m): os cumes estreitos perdem altura.',
    ficha: { ...FICHA_COMUM, projecao: 'CH1903+/LV95 (EPSG:2056)', resolucao: '~106 m (tiles de nível 10), reamostrado a 100 m' },
  },
];

export const formatarData = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' });
