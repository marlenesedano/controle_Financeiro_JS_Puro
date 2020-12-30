const transactionsUl = document.querySelector('#transactions')

const dummyTransactions = [
  {id: 1, name: 'Bolo', amount: -20},
  {id: 2, name: 'Salario', amount: 300},
  {id: 3, name: 'Salame', amount: -20},
  {id: 4, name: 'Violão', amount: 150}
]
// função para inserir os elementos na DOM
const addTransactionIntoDOM = transaction =>{
  const operator = transaction.amount < 0 ? '-' : '+'
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
  const amountWithoutOperator = Math.abs(transaction.amount)
  const li = document.createElement ('li')
  
  li.classList.add(CSSClass);
  li.innerHTML = `
    ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator} </span><button class = "delete-btn">x</button>
  `
  console.log(li);
  transactionsUl.prepend(li) // o metodo append inseri o elemento que ele recebeu como argumento
}
const updateBalanceValues = () => {
  const transactionsAmounts = dummyTransactions.map(transaction => transaction.amount)
  const total = transactionsAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2) // to fixed, informa a quantidade de decimais
  console.log(total)
  

}

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM)
  updateBalanceValues()
}
init()