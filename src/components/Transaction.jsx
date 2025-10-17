
function Transaction({transaction,onDelete}) {
  const sign = transaction.amount < 0 ? ' -' : ' +';
    return (
    <li className="className">
        {transaction.text}
        <span>
            {sign}${Math.abs(transaction.amount).toFixed(2)}
        </span>
        <button onClick={()=>onDelete(transaction.id)}className="delete-btn">X</button>
    </li>
  );
}

export default Transaction