import './ExpensesTracker.css'

function ExpensesTracker(props){

       const month=props.date.toLocaleString('en-US', {month: 'long'})

    return(
        <>

        <div className="expenses-item">

              <div className='heading'>
                        <div>{month}</div>
                        <div></div>
                        <div></div>
              </div>

              <div className="itemdescription">

                      <div className='item1CarInsu'>{props.title}</div>

                      <div className="itemPrice">₹ {props.amount}</div>

              </div>

        </div>
           
        </>
    )
}

export default ExpensesTracker;