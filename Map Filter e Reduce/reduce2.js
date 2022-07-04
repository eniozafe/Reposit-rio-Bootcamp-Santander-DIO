const list = [
  {
    name: 'sabado em po',
    preco: 30,
  },
  {
    name: 'ceral',
    preco: 12,
  },
  {
    name: 'toalha',
    preco: 30,
  }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, list) {
  return list.reduce(function(prev, current, index) {
    console.log('rodada', index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.preco;
  }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, list));