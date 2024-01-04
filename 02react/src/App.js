
import ExpensesTracker from './Component/ExpensesTracker';

function App() {
  let expenseDate=new Date().toISOString();
  let expenseTitle=" 1 .  ' Car Insurence ' "
  let expenseAmount=500

  return (
   <>
   <ExpensesTracker 
   date={expenseDate} 
   title={expenseTitle}
  amount={expenseAmount}>
    </ExpensesTracker>

 
   </>
  );
}

export default App;
