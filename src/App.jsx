import { useEffect } from 'react';
import { useGlobalContext } from './context/GlobalState';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';


function App() {

  const {transactions} = useGlobalContext();

  useEffect(()=>{
    localStorage.setItem('transactions',JSON.stringify(transactions))
  },[transactions]);
  
  return (
   <div>
      <div className="container">
        <h2>Expense Tracker</h2>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
   </div>
  );
}

export default App;
