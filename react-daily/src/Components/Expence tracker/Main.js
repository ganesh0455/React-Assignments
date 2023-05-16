import ExpenseItem from "./ExpenseItem";
import { expenses as initialExpenses } from "../../Constants/ExpenseTracker";

const Main=()=>{
    return(
        <div>
            <ExpenseItem
                date={initialExpenses[0].date}
                title={initialExpenses[0].title}
                price={initialExpenses[0].amount}
            ></ExpenseItem>
            <ExpenseItem
                date={initialExpenses[1].date}
                title={initialExpenses[1].title}
                price={initialExpenses[1].amount}
            ></ExpenseItem>
            <ExpenseItem
                date={initialExpenses[2].date}
                title={initialExpenses[2].title}
                price={initialExpenses[2].amount}
            ></ExpenseItem>
            <ExpenseItem
                date={initialExpenses[2].date}
                title={initialExpenses[2].title}
                price={initialExpenses[2].amount}
            ></ExpenseItem>
        </div>
    )
}

export default Main;