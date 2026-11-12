// Spots. Add Ilhabela / Caraguatatuba later with cidade: 'ilhabela' | 'caragua'.
// ponytail: coordinates are approximate (~few hundred m); fix by dragging in Google Maps and pasting lat/lng.
const SPOTS = [
  // Costa Norte
  { id: 'cigarras', nome: 'Praia das Cigarras', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7335, lng: -45.3985, desc: 'Mar calminho, quiosques e vista pra Ilhabela. Ótima pra um fim de tarde sem pressa.', tags: ['família', 'mar calmo'] },
  { id: 'enseada', nome: 'Praia da Enseada', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7445, lng: -45.4065, desc: 'Baía protegida, água tranquila e barquinhos balançando. Bom pra stand-up.', tags: ['mar calmo', 'SUP'] },
  { id: 'sao-francisco', nome: 'Praia de São Francisco', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7545, lng: -45.4105, desc: 'Orla gostosa com a igrejinha histórica de São Francisco logo ali.', tags: ['história', 'família'] },
  { id: 'arrastao', nome: 'Praia do Arrastão', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7690, lng: -45.4070, desc: 'Pertinho do centro, com pescadores e pôr do sol atrás da serra.', tags: ['pôr do sol', 'pesca'] },
  { id: 'pontal-da-cruz', nome: 'Pontal da Cruz', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7775, lng: -45.4010, desc: 'Ponta com vista de frente pro canal e pra balsa de Ilhabela.', tags: ['vista', 'canal'] },

  // Costa Sul
  { id: 'praia-grande', nome: 'Praia Grande', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8245, lng: -45.4180, desc: 'A primeira da Costa Sul: faixa de areia larga e água azulzinha.', tags: ['família', 'perto do centro'] },
  { id: 'barequecaba', nome: 'Barequeçaba', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8310, lng: -45.4410, desc: 'Mar verde-esmeralda e calmo, com a ilhota no canto. Clássico.', tags: ['mar calmo', 'snorkel'] },
  { id: 'guaeca', nome: 'Guaecá', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8255, lng: -45.4590, desc: 'Praia comprida, cercada de mata, com cara de praia de condomínio (aberta a todos).', tags: ['natureza', 'tranquila'] },
  { id: 'toque-toque-grande', nome: 'Toque-Toque Grande', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8345, lng: -45.5085, desc: 'Água transparente e a Ilha das Couves no horizonte. Pura cor de cartão-postal.', tags: ['água clara', 'snorkel'] },
  { id: 'calhetas', nome: 'Calhetas', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8355, lng: -45.5205, desc: 'Prainha escondida entre pedras, descida por escadaria. Piscina natural!', tags: ['escondida', 'snorkel'] },
  { id: 'toque-toque-pequeno', nome: 'Toque-Toque Pequeno', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8325, lng: -45.5310, desc: 'Pequena, tranquila e com mata até a areia. Ótima pra fugir do agito.', tags: ['tranquila', 'natureza'] },
  { id: 'santiago', nome: 'Praia de Santiago', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8255, lng: -45.5405, desc: 'Charmosinha, com rio de água doce encontrando o mar.', tags: ['tranquila', 'rio'] },
  { id: 'pauba', nome: 'Paúba', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.8105, lng: -45.5505, desc: 'Pequena, de tombo, com casas pé-na-areia e vibe exclusiva.', tags: ['tranquila', 'tombo'] },
  { id: 'maresias', nome: 'Maresias', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7925, lng: -45.5710, desc: 'A mais famosa: ondas boas pro surf, gente bonita e noite agitada.', tags: ['surf', 'agito'] },
  { id: 'boicucanga', nome: 'Boiçucanga', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7860, lng: -45.6180, desc: 'Praia de vila, com rio, barquinhos e comércio cheio de opções.', tags: ['família', 'vila'] },
  { id: 'camburizinho', nome: 'Camburizinho', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7770, lng: -45.6470, desc: 'Irmã mais calma de Camburi: areia fofa e mar bom pra nadar.', tags: ['mar calmo', 'charmosa'] },
  { id: 'camburi', nome: 'Camburi', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7765, lng: -45.6560, desc: 'Surf, rio, restaurantes pé-na-areia e um astral delícia.', tags: ['surf', 'gastronomia'] },
  { id: 'baleia', nome: 'Praia da Baleia', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7770, lng: -45.6690, desc: 'Longa, limpa e calma, perfeita pra caminhar na beira.', tags: ['caminhada', 'tranquila'] },
  { id: 'barra-do-sahy', nome: 'Barra do Sahy', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7760, lng: -45.6870, desc: 'Mar calminho de piscina e vista pras ilhas. Boa pra crianças.', tags: ['mar calmo', 'família'] },
  { id: 'juquehy', nome: 'Juquehy', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7705, lng: -45.7200, desc: 'Areia branquinha, mar de ondas suaves e rio no canto.', tags: ['família', 'areia branca'] },
  { id: 'praia-preta', nome: 'Praia Preta', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7680, lng: -45.7400, desc: 'Pequena e semi-escondida, acessada por trilha curtinha. Sossego garantido.', tags: ['escondida', 'trilha curta'] },
  { id: 'barra-do-una', nome: 'Barra do Una', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7625, lng: -45.7630, desc: 'Rio largo encontrando o mar, ótimo pra caiaque e SUP.', tags: ['rio', 'SUP'] },
  { id: 'engenho', nome: 'Praia do Engenho', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7595, lng: -45.7790, desc: 'Pequenininha e rústica, entre Una e Juréia.', tags: ['rústica', 'tranquila'] },
  { id: 'jureia', nome: 'Juréia', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7580, lng: -45.7950, desc: 'Mar azul, serra verde atrás e pouca gente. Um respiro.', tags: ['natureza', 'tranquila'] },
  { id: 'boraceia', nome: 'Boracéia', tipo: 'praia', cidade: 'sao-sebastiao', lat: -23.7560, lng: -45.8380, desc: 'A última antes de Bertioga: enorme, selvagem e quase vazia.', tags: ['selvagem', 'caminhada'] },

  // Trilhas & cachoeiras
  { id: 'trilha-brava-guaeca', nome: 'Trilha da Praia Brava de Guaecá', tipo: 'trilha', cidade: 'sao-sebastiao', lat: -23.8345, lng: -45.4700, desc: 'Mata atlântica fechada até uma praia selvagem com ondas fortes. Recompensa total.', tags: ['moderada', '~1h ida'] },
  { id: 'trilha-brava-boicucanga', nome: 'Trilha da Praia Brava de Boiçucanga', tipo: 'trilha', cidade: 'sao-sebastiao', lat: -23.7945, lng: -45.6040, desc: 'Sobe e desce no meio da mata até uma praia deserta entre Maresias e Boiçucanga.', tags: ['moderada', '~40min ida'] },
  { id: 'trilha-calhetas', nome: 'Escadaria de Calhetas', tipo: 'trilha', cidade: 'sao-sebastiao', lat: -23.8360, lng: -45.5180, desc: 'Descida curta e íngreme até as piscinas naturais de Calhetas.', tags: ['fácil', '~10min'] },
  { id: 'cachoeira-camburi', nome: 'Cachoeira do Camburi', tipo: 'cachoeira', cidade: 'sao-sebastiao', lat: -23.7600, lng: -45.6550, desc: 'Poços de água geladinha no pé da serra, a poucos minutos da praia.', tags: ['fácil', 'banho gelado'] },
  { id: 'cachoeira-itu', nome: 'Cachoeira do Ribeirão do Itu', tipo: 'cachoeira', cidade: 'sao-sebastiao', lat: -23.7700, lng: -45.6200, desc: 'Queda d’água com poço pra banho, trilha na mata a partir de Boiçucanga.', tags: ['moderada', 'banho gelado'] },
];
