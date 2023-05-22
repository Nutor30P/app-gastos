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

  const totalExpensePercent = Math.round(totalExpense / totalIncome) * 100;

  const totalIncomePercent = 100 - totalExpensePercent;


  return (
    <VictoryPie
      data={[
        { x: "Expenses", y: totalExpensePercent },
        { x: "Incomes", y: totalIncomePercent },
      ]}
      animate={{ duration: 2000 }}
      colorScale={["tomato", "#2ecc71"]}
      innerRadius={100}
      labelRadius={120}
      style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
      labelComponent={<VictoryLabel angle={45} />}
    />
  );
}

export default ExpenseChat;
