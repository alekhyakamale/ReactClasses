import React from 'react';
import './App.css';
import LoanForm from './LoanForm/LoanForm';

function App() {
  return (
    <React.Fragment>
       {/* <Switch>
         <Route exact path="/"><Page1/></Route>
         <Route exact path="/Display"><Display/></Route>
       </Switch> */}
      <LoanForm/>
    </React.Fragment>
  );
}

export default App;
