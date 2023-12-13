import { transactions } from "./index.js"

export function balance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, number) => sum + number.value, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}