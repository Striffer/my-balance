import { balance } from "./balance.js"
import { transactions } from "./index.js"
import { renderTransaction } from "./render-transaction.js"
import { typeToggle } from "./type-toggle.js"

export async function saveTransaction(ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const type = document.querySelector('#type').value
    let value = 0
    if (type === 'credit') {
        value = 0 + (parseFloat(document.querySelector('#amount').value))
    } else if (type === 'debit') {
        value = 0 - (parseFloat(document.querySelector('#amount').value))
    }
    
    if (id) {
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({name, type, value}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)
    } else {
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({name, type, value}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }

    ev.target.reset()
    balance()
    typeToggle()
}