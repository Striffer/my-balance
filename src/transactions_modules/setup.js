import { balance } from "./balance.js";
import { fetchTransactions } from "./fetch.js";
import { renderTransaction } from "./render-transaction.js";
import { transactions } from "./index.js";

export async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    balance()
}