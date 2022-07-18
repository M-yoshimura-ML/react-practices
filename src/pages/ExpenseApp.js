import ExpenseItem from "../components/Expenses/ExpenseItem";
import NewExpense from "../components/Expenses/NewExpense";

const ExpenseApp = () => {
    const expenses = [
        {title: 'Car Insurance', amount:94.12, date: new Date(2022,4,12)},
        {title: 'Book', amount:14.31, date: new Date(2022,5,30)},
        {title: 'Bag', amount:114.76, date: new Date(2022,6,19)},
        {title: 'Toy', amount:24.51, date: new Date(2022,7,3)}
    ];

    return (
        <div className="ExpenseApp">
            <NewExpense />
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        </div>
    )
}

export default ExpenseApp;
