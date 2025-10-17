import { useGlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
function TransactionList() {
    const { transactions, deleteTransaction } = useGlobalContext();
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                        onDelete={deleteTransaction}
                    />
                ))}
            </ul>
        </>
    )
}

export default TransactionList;