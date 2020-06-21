import React, { Component } from "react";

const fieldsToDisplay = [
  {
    label: "Email ID",
    value_prop: "email"
  },
  {
    label: "Purpose of Loan",
    value_prop: "loan"
  },
  {
    label: "Add to Loan",
    value_prop: "addToLoan"
  },
  {
    label: "Existing Loan Balance",
    value_prop: "balance"
  },
  {
    label: "Current living Situation",
    value_prop: "living"
  },
  {
    label: "Other living Situations",
    value_prop: "living_more"
  },
  {
    label: "current state of residence",
    value_prop: "residence"
  },
  {
    label: "Date of birth",
    value_prop: "dob"
  }
];

const incomeFields = [
  {
    label: "Salary",
    value_prop: "salary"
  },

  {
    label: "Allowances or Pensions",
    value_prop: "allowances"
  },
  {
    label: "Rental",
    value_prop: "rental"
  },
  {
    label: "Additional income",
    value_prop: "additional"
  }
];

const expenseFields = [
  {
    label: "Utilities",
    value_prop: "utilities"
  },
  {
    label: "Household expenses",
    value_prop: "household"
  },
  {
    label: "TV & Communications",
    value_prop: "tv"
  },
  {
    label: "Other",
    value_prop: "other"
  }
];

export default class SummaryPage extends Component {
  render() {
    return (
      <div className="main-container">
        <h2>Summary of your application</h2>
        <div className="div-color">
          <h3>Personal Details</h3>
          <table>
            {fieldsToDisplay.map(field => (
              <>
                {this.props.values[field.value_prop] && (
                  <tr>
                    <td className="py-2">{field.label}</td>
                    <td>{this.props.values[field.value_prop]}</td>
                  </tr>
                )}
              </>
            ))}
            {/* Dependents field */}
            <tr>
              <td>Dependents</td>
              <td>
                {this.props.values["dependents"] === "+"
                  ? this.props.values["dependents_more"]
                  : this.props.values["dependents"]}
              </td>
            </tr>
          </table>
        </div>
        <div className="div-color">
          <h3> Income </h3>
          <table>
            {incomeFields.map(field => (
              <tr>
                <td>{field.label}</td>
                <td>{this.props.values[field.value_prop]}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="div-color">
          <h3> Expenses </h3>
          {expenseFields.map(field => (
            <tr>
              <td>{field.label}</td>
              <td>
                {this.props.values[field.value_prop] +
                  `/` +
                  this.props.values[field.value_prop + "Per"]}
              </td>
            </tr>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            this.props.handleStartOver();
          }}
        >
          Start Over
        </button>
      </div>
    );
  }
}
