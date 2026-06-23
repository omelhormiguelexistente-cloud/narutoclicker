let count = 0;
let multiplicador = 1;
let upgradesComprados = 0;


const custoGenin = 50;
const custoChunin = 125;
const custoJounin = 250;
const custoHokage = 500;


let geninComprado = false;
let chuninComprado = false;
let jouninComprado = false;

function atualizarTela() {
  document.getElementById('count').textContent = Math.floor(count);
  document.getElementById('info-multiplicador').textContent = 'Multiplicador atual: x' + multiplicador;
  document.getElementById('info-upgrades').textContent = 'Upgrades comprados: ' + upgradesComprados;

 
  if (!geninComprado) {
    let falta = Math.max(0, custoGenin - Math.floor(count));
    document.getElementById('falta-genin').textContent = falta > 0 ? 'Falta ' + falta + ' chakra' : 'Pronto para comprar!';
    document.getElementById('geningenin').disabled = count < custoGenin;
  }

  if (!chuninComprado) {
    let falta = Math.max(0, custoChunin - Math.floor(count));
    document.getElementById('falta-chunin').textContent = falta > 0 ? 'Falta ' + falta + ' chakra' : 'Pronto para comprar!';
    document.getElementById('chuninchunin').disabled = count < custoChunin;
  }

  if (!jouninComprado) {
    let falta = Math.max(0, custoJounin - Math.floor(count));
    document.getElementById('falta-jounin').textContent = falta > 0 ? 'Falta ' + falta + ' chakra' : 'Pronto para comprar!';
    document.getElementById('jouninjounin').disabled = count < custoJounin;
  }

  let faltaHokage = Math.max(0, custoHokage - Math.floor(count));
  document.getElementById('falta-hokage').textContent = faltaHokage > 0 ? 'Falta ' + faltaHokage + ' chakra' : 'Pronto para comprar!';
  document.getElementById('hokagehokage').disabled = count < custoHokage;
}


document.getElementById('clicker').addEventListener('click', () => {
  count += multiplicador;
  atualizarTela();
});


document.getElementById('geningenin').addEventListener('click', () => {
  if (count >= custoGenin && !geninComprado) {
    count -= custoGenin;
    multiplicador = multiplicador * 1.2;
    multiplicador = Math.round(multiplicador * 10) / 10;
    upgradesComprados++;
    geninComprado = true;
    document.getElementById('geningenin').disabled = true;
    document.getElementById('falta-genin').textContent = 'Comprado!';
    atualizarTela();
  }
});


document.getElementById('chuninchunin').addEventListener('click', () => {
  if (count >= custoChunin && !chuninComprado) {
    count -= custoChunin;
    multiplicador = multiplicador * 1.5;
    multiplicador = Math.round(multiplicador * 10) / 10;
    upgradesComprados++;
    chuninComprado = true;
    document.getElementById('chuninchunin').disabled = true;
    document.getElementById('falta-chunin').textContent = 'Comprado!';
    atualizarTela();
  }
});


document.getElementById('jouninjounin').addEventListener('click', () => {
  if (count >= custoJounin && !jouninComprado) {
    count -= custoJounin;
    multiplicador = multiplicador * 2;
    upgradesComprados++;
    jouninComprado = true;
    document.getElementById('jouninjounin').disabled = true;
    document.getElementById('falta-jounin').textContent = 'Comprado!';
    atualizarTela();
  }
});


document.getElementById('hokagehokage').addEventListener('click', () => {
  if (count >= custoHokage) {
    document.getElementById('tela-final').style.display = 'flex';
  }
});


document.getElementById('btn-reiniciar').addEventListener('click', () => {
  count = 0;
  multiplicador = 1;
  upgradesComprados = 0;
  geninComprado = false;
  chuninComprado = false;
  jouninComprado = false;

  document.getElementById('geningenin').disabled = true;
  document.getElementById('chuninchunin').disabled = true;
  document.getElementById('jouninjounin').disabled = true;
  document.getElementById('hokagehokage').disabled = true;

  document.getElementById('falta-genin').textContent = 'Falta ' + custoGenin + ' chakra';
  document.getElementById('falta-chunin').textContent = 'Falta ' + custoChunin + ' chakra';
  document.getElementById('falta-jounin').textContent = 'Falta ' + custoJounin + ' chakra';
  document.getElementById('falta-hokage').textContent = 'Falta ' + custoHokage + ' chakra';

  document.getElementById('tela-final').style.display = 'none';
  atualizarTela();
});


atualizarTela();
