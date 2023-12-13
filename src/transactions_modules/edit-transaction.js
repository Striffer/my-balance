export function createEditTransactionButton(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#type').value = transaction.type
        if (transaction.value < 0) {
            document.querySelector('#amount').value = transaction.value * -1
        } else {
            document.querySelector('#amount').value = transaction.value
        }
        
    })

    return editBtn
}