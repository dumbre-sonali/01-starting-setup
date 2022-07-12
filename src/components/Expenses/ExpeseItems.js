import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';

// function ExpenseItem(props) {
//    const [title, setTitle] = useState(props.title);
//    console.log('jshfgsdjhfgsdjfhg');
   
//    const clickHandler = () => {
//     setTitle('Updated!');
//   }
//     //  const expenseDate = new Date(21, 2, 28);
//     //  const expenseTitle = 'Car Insurance';
//     //  const expenseAmount =  256;
//     // function eventHandler() {
//     //   console.log('clicked!!!!');
//     // }

    
//   return (
//     <Card className='expense-item'> 
//     <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//       {/* <button onClick={() => (console.log('clicked!'))}>click me</button> */}
//       <button onClick={clickHandler}>Click mee</button>
//     </Card>
//   );
// }
// export default ExpenseItem;


 

function ExpenseItem(props) {
    
  return (
    <Card className='expense-item'> 
    <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button>Click mee</button>
    </Card>
  );
}
export default ExpenseItem;