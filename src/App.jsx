
import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionsList from "./components/transactions/TransactionsList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChat from "./components/ExpenseChat";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-5">
            <div>
              <h1 className="text-4xl text-indigo-700 ">EXPENSE TRACKER</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <TransactionsList />
              <ExpenseChat />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
