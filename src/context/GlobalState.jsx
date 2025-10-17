import { useContext, createContext, useReducer } from "react";

const defaultTransactions = [
  { id: 1, text: 'Flower Vase', amount: -20.0 },
  { id: 2, text: 'Salary', amount: 3000.0 },
  { id: 3, text: 'Book', amount: -10.0 },
  { id: 4, text: 'Bonus Check', amount: 150.0 }
];

const getLocalData = () => {
  const localData = localStorage.getItem('transactions');
  if (localData) {
    const parsed = JSON.parse(localData);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  }
  return defaultTransactions;
};


const initialState = {
    transactions: getLocalData()
};

function AppReducer(state, action) {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {...state,
                transactions:state.transactions.filter((transaction) => transaction.id !== action.payload)

            };
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        default:
            return state;
    }
}

const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    };
    const setInitialState = (transactions) => {
        dispatch({
            type: 'SET_INITIAL_STATE',
            payload: transactions,
        });
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            setInitialState
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(GlobalContext);

