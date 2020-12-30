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
  /*
  <li class="minus">
          Salário <span>-$400</span><button class="delete-btn">x</button>
        </li>
*/
}

addTransactionIntoDOM(dummyTransactions[0]);