export function createTransactionValue(value) {
    const span = document.createElement('span')

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })

    const formatedValue = formater.format(value)

    if (value > 0) {
        span.textContent = `+${formatedValue}`
        span.classList.add('transaction-amount', 'credit')
    } else {
        span.textContent = `${formatedValue}`
        span.classList.add('transaction-amount', 'debit')
    }

    return span
}