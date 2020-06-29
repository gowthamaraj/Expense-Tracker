import React from 'react';


import {Balance} from './components/Balance'
import {History} from './components/History'
import {Transaction} from './components/Transaction'
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
    <div className="wrapper">
    <div className="container ">

      <header className="my-2 ">
      <h4 className="text-center">Expense Tracker</h4>
      </header>

      <Balance></Balance>
      <History></History>
      <Transaction></Transaction>

    </div>
    </div>
    </GlobalProvider>
    
  );
}

export default App;
