import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react';
import { FormContext } from '../Context';
import { getMethod } from '../../Axios';
import _ from "lodash";

export default function Display () {

    const{handleStartOver} = useContext(FormContext);
    const [form, setForm] = useState([]);

    //Get the user submitted details from the database
    useEffect(()=>{
      getMethod()
      .then(res => setForm(res.data))
        }, [])
       
    return ( 
      <div>
        <h2 className="mx-auto px-5 py-5">Summary Page</h2>
        <div>
          {
          _.map(_.slice(form, -1), function(val) {
            return <div key={val.id}>
              <div className="summary">
                <h4>Personal Details</h4>
                    <h6>Email ID: {val.email}</h6>
                    <h6>Would like to use the loan for: {val.loan === 'Other' ? val.other_loan : val.loan}</h6>
                    <h6>Add to the ANZ Loan? {val.addToLoan} {val.balance}</h6>
                    <h6>Current Living situation: {val.living === 'Other' ? val.living_more : val.living}</h6>
                    <h6>Current state of Residence: {val.residence}</h6>
                    <h6>Number of dependents: {val.dependents === '+' ? val.dependents_more : val.dependents}</h6>
                    <h6>Date of Birth: {moment(val.dob).format('DD-MM-YYYY')}</h6>
              </div>
              <div className="summary">
                <h4>Income</h4>
                    <h6>Salary: {val.salary} Per {val.incomeper}</h6>
                    <h6>After Tax: {val.afterTax}</h6>
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
              <button className="mx-auto" onClick={handleStartOver}>Reset Form</button>
            </div>
          })}
        </div>
      </div>
    )
}


