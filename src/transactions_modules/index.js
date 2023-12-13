import { saveTransaction } from "./save-transaction.js"
import { setup } from "./setup.js"
import { typeToggle } from "./type-toggle.js"

export let transactions = []

document.addEventListener('DOMContentLoaded', setup)

document.addEventListener('DOMContentLoaded', typeToggle)

document.querySelector('form').addEventListener('submit',saveTransaction)