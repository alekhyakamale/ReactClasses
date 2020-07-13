import Axios from 'axios'

import React, { Component } from 'react'


export default class Display extends Component {

    constructor(props){
      super(props)
      this.state = {
        form: [],
        isLoading: false
      };
    }
  
    componentDidMount = () => {
        this.getValues();
      }

  //Get the user submitted details from the database
   getValues = () => {
  
    Axios({
       method: "GET",
       url: "http://localhost:5000/add/createForm"
     }) 
       .then((res) => {
        const data = res.data;
        this.setState({ 
          isLoading: true,
          form: data });
      })
       .catch((error) => {
         console.log('Error: '+ error);
       });
   }
  
  render() {

    var { isLoading, form } = this.state;

    if(!isLoading){
      return <h3 className="mx-auto px-5 py-5">Loading...</h3>
    } 
    return (
      <div>
        <h2 className="mx-auto px-5 py-5">Summary Page</h2>
        <div>
          {
          form.slice(-1).map(val => (
            <div key={val.id}>
              <div className="summary">
                <h4>Personal Details</h4>
                    <h6>Email ID: {val.email}</h6>
                    <h6>Would like to use the loan for: {val.loan === 'Other' ? val.other_loan : val.loan}</h6>
                    <h6>Add to the ANZ Loan? {val.addToLoan} {val.balance}</h6>
                    <h6>Current Living situation: {val.living === 'Other' ? val.living_more : val.living}</h6>
                    <h6>Current state of Residence: {val.residence}</h6>
                    <h6>Number of dependents: {val.dependents === '+' ? val.dependents_more : val.dependents}</h6>
                    <h6>Date of Birth: {val.dob}</h6>
              </div>
              <div className="summary">
                <h4>Income</h4>
                    <h6>Salary: {val.salary} Per {val.incomeper}</h6>
                    <h6>After Tax {val.afterTax}</h6>
                    <h6>Government Allowances or Pensions: {val.allowances}</h6>
                    <h6>Rental Income: {val.rental}</h6>
                    <h6>Additional Income: {val.additional}</h6>
              </div>
              <div className="summary">
                <h4>Expenses</h4>
                    <h6>Amount spent on Utilities: {val.utilities} Per {val.utilitiesPer}</h6>
                    <h6>Amount spent on Household: {val.household} Per {val.householdPer}</h6>
                    <h6>Amount spent on TV and Communications: {val.tv} Per {val.tvPer}</h6>
                    <h6>Other Expenses: {val.other} Per {val.otherPer}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}


