import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";


function ExpenseChat() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0);

  const totalExpense =
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => (acc += item.amount), 0) * -1;

  const totalExpensePercent = Math.round( (totalExpense / (totalIncome + totalExpense)) * 100);

  const totalIncomePercent = Math.round( (totalIncome / (totalIncome + totalExpense)) * 100);

  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <VictoryPie
          data={[
            { x: "Income", y: totalIncomePercent },
            { x: "Expense", y: totalExpensePercent },
          ]}
          colorScale={["#10B981", "#EF4444"]}
          innerRadius={100}
          labelRadius={120}
          style={{
            labels: {
              fill: "white",
              fontSize: 20,
              fontWeight: "bold",
            },
          }}
        />
      </div>
      <div className="w-1/2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 mr-2"></div>
            <p>Income</p>
          </div>
          <p>{totalIncomePercent}%</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 mr-2"></div>
            <p>Expense</p>
          </div>
          <p>{totalExpensePercent}%</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseChat;
