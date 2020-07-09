import React from 'react';
import './App.css';
import LoanForm from './LoanForm/LoanForm';
import Axios from 'axios';

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <React.Fragment>
      <LoanForm/>
    </React.Fragment>
  );
}

export default App;
