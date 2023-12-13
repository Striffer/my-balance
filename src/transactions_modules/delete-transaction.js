import { transactions } from "./index.js"
import { balance } from "./balance.js"

export function createDeleteTransactionBtn(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE'})
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        balance()
    })
    return deleteBtn
}