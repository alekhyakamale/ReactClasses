import React, { Component } from "react";
import { MyInput, CustomRadioGroup } from "../Data";

export default class Page1 extends Component {
  render() {
    return (
      <>
        <div className="div-color">
          <h2>Your email address</h2>
          <p>
            We will use this email address to let you know the outcome of your
            application and next steps.
          </p>
          <MyInput name="email" type="email" />
        </div>
        <br />
        <div className="div-color">
          <div>
            <h2>Your Loan</h2>
            <div className="row">
              <CustomRadioGroup
                label="What would you like to use the loan for?"
                name="loan"
                value={this.props.formikProps.values.loan}
                type="radio"
                options={[
                  "Car Loan",
                  "Debt Consolidation",
                  "Travel",
                  "Home and Personal goods",
                  "Home Renovation",
                  "Other"
                ]}
              />
            </div>
            {this.props.formikProps.values.loan === "Other" && (
              <CustomRadioGroup
                label="Please select other loan purpose"
                name="other_loan"
                type="radio"
                value={this.props.formikProps.values.other_loan}
                options={[
                  "New Car",
                  "Motor Cycles and Scooters",
                  "Medical Dental",
                  "Wedding Events",
                  "Education",
                  "Personal Investment",
                  "Tax Debts",
                  "Funeral",
                  "Personal Use"
                ]}
              />
            )}
          </div>
          <br />
          <div className="row">
            <CustomRadioGroup
              label="Would you like to add to your existing ANZ loan?"
              name="addToLoan"
              type="radio"
              value={this.props.formikProps.values.addToLoan}
              options={["Yes", "No"]}
            />

            {this.props.formikProps.values.addToLoan === "Yes" && (
              <MyInput
                label="Balance loan"
                type="number"
                name="balance"
                required
              />
            )}
          </div>
          <br />

          <div className="row">
            <CustomRadioGroup
              label="Your current living situation"
              name="living"
              type="radio"
              value={this.props.formikProps.values.living}
              options={[
                "Home with mortgage",
                "Home owner",
                "Renting",
                "Living with parents",
                "Other"
              ]}
            />
            {this.props.formikProps.values.living === "Other" && (
              <CustomRadioGroup
                name="living_more"
                type="radio"
                options={["Boarding", "Caravan"]}
                value={this.props.formikProps.values.living_more}
              />
            )}
          </div>
          <br />

          <div className="row">
            <CustomRadioGroup
              label="Your current state of residence"
              name="residence"
              value={this.props.formikProps.values.residence}
              options={["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]}
            />
          </div>
          <br />
          <div className="row">
            <CustomRadioGroup
              label="Number of dependents"
              paragraph="The number of people you're financially responsible for"
              name="dependents"
              type="radio"
              value={this.props.formikProps.values.dependents}
              options={["1", "2", "3", "4", "+"]}
            />
            {this.props.formikProps.values.dependents === "+" && (
              <CustomRadioGroup
                name="dependents_more"
                type="radio"
                value={this.props.formikProps.values.dependents_more}
                options={["5", "6", "7", "8+"]}
              />
            )}
          </div>
          <h3>Date of Birth</h3>
          <MyInput type="date" label="" name="dob" />
        </div>
        {/* END of Page-1.  next button */}
        <div style={{ float: "right" }}>
          <button type="button" onClick={this.props.nextPage}>
            Next
          </button>
        </div>
      </>
    );
  }
}
