import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let income = transactions.reduce(function(a,c){
    if(c.amount>0){
      return a+c.amount
    }else{
      return a+0
    }
  },0)
  let expense = transactions.reduce(function(a,c){
    if(c.amount<0){
      return a+c.amount
    }else{
      return a+0
    }
  },0)
    return (
        <div className="block">
        <h6>YOUR BALANCE</h6>
        <p className="display">₹{(income+expense).toFixed(2)}</p>
      <div className="d-flex">
        <div className="display_1 flex-fill">
          <p>
            <b>INCOME</b> 
          </p>
          <p className="text-success">
            ₹{income}
          </p>
        </div>

        <div className="display_2 flex-fill">
          <p>
          <b>EXPENSE</b> 
          </p>
          <p className="text-danger">
            {"-"}₹{-expense}
          </p>
        </div>

      </div>
      </div>
    )
}
