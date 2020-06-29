import React, { useContext } from 'react'
import { AiFillDelete,AiOutlineHistory  } from "react-icons/ai"
import { GlobalContext } from '../context/GlobalState';

export const History = () => {
  const { deleteTransaction,transactions } = useContext(GlobalContext);

    return (
        <div className="block">
        <h6><span><AiOutlineHistory /></span> History</h6>
        <ul className="list-group">
        {transactions.map((transaction)=>{
          let color = transaction.amount>0?'green':'red'
          return (
               <li onClick={() => deleteTransaction(transaction.id)} style={{borderRight: `5px solid ${color}`}} className="list-group-item" key={transaction.id}> <AiFillDelete /> <div className="d-flex justify-content-between"><span>{transaction.text}</span><span>{transaction.amount}</span></div> </li>
          )
        })}
        </ul>
      </div>
    )
}
