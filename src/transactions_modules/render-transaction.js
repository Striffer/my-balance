import { createTransactionContainer } from "./container.js";
import { createTransactionTitle } from "./container-name.js";
import { createTransactionValue } from "./container-value.js";
import { createEditTransactionButton } from "./edit-transaction.js";
import { createDeleteTransactionBtn } from "./delete-transaction.js";

export function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const value = createTransactionValue(transaction.value)
    const editBtn = createEditTransactionButton(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction.id)

    container.append(title, value, editBtn, deleteBtn)
    document.querySelector('#transactions').append(container)
}