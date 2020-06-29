import React,{useState, useContext} from 'react'
import { FaMoneyCheck  } from "react-icons/fa"
import { GlobalContext } from '../context/GlobalState';

export const Transaction = () => {
   const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [st, setSt] = useState("1");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    console.log(st);
    let cost = st==='1'?amount:-amount
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:+cost
    }

    addTransaction(newTransaction);
    setText('')
    setAmount('')
  }

    return (
        <div className="block">
        <h6><span><FaMoneyCheck /></span> Add new transaction</h6>
      <form onSubmit={onSubmit}>
      <div className="form-group">
      <label htmlFor="label">Label</label>
     <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-control" id="label" placeholder="Ex: Milk" />
    </div>
    <div className="form-group">
    <label htmlFor="inputState">Income/Expense</label>
    <select className="form-control" id="inputState" name="inputState" value={st} onChange={(e) => setSt(e.target.value)} >
  <option value="1">Income</option>
  <option value="2">Expense</option>
</select>
</div>
      <div className="form-group">
    <label htmlFor="Cost">Cost</label>
    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" id="Cost" placeholder="Enter Amount..." />
      </div>
      <button type="submit" className="btn purple mb-2">Add</button>
      </form>
        </div>
    )
}
