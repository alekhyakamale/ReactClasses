import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyInput, CustomRadioGroup, ExpenseField } from "./Data";
import moment from "moment";

export default class Page1 extends Component {
  state = {
    page: 1
  };
  nextPage = () => {
    this.setState({ page: 2 });
  };
  prevPage = () => {
    this.setState({ page: 1 });
  };
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          loan: "",
          addToLoan: "",
          balance: "",
          living: "",
          living_more:"",
          residence: "",
          dependents: "",
          dob: "",
          income: "",
          incomeper: "",
          afterTax: "",
          allowances: "",
          rental: "",
          additional: "",
          utilities: "",
          utilitiesPer: "",
          household: "",
          householdPer: "",
          tv: "",
          tvPer: "",
          other: "",
          otherPer: "",
          estimated: "",
          rentalPay: "",
          mortgage: "",
          otherMortgage: "",
          credCards: "",
          commitments: ""
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter your email address"),
            loan: Yup.string().required(),
            addToLoan: Yup.string().required(),
            balance: Yup.number().when("addToLoan", {
            is: "Yes",
            then: Yup.number().required(),
            otherwise: Yup.number()
          }),
          living: Yup.string().required(),
          residence: Yup.string().required(),
          dob: Yup.string()
          .required()
          .test( "dob",
          "Should be older than 18",
          value => {
            return moment().diff(moment(value),'years') >= 18;
          }),
          dependents: Yup.string().required(),
          income: Yup.string().required(),
          afterTax: Yup.string().required(),
          allowances: Yup.string().required(),
          rental: Yup.string().required(),
          additional: Yup.string().required(),
          salary: Yup.number()
            .required()
            .min(0)
            .max(100000),
          utilities: Yup.number()
            .required()
            .min(0)
            .max(100000),
          household: Yup.number()
            .required()
            .min(0)
            .max(100000),
          tv: Yup.number()
            .required()
            .min(0)
            .max(100000),
          other: Yup.number()
            .required()
            .min(0)
            .max(100000)
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          console.log("submitted");
        }}
      >
        {props => (
          <Form>
            {/* here we need to add the page condition */}
            {this.state.page === 1 ? (
              <>
                <div className="div-color">
                  <h2>Your email address</h2>
                  <p>
                    We will use this email address to let you know the outcome
                    of your application and next steps.
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
                    {props.values.loan === "Other" && (
                      <CustomRadioGroup
                        label="Please select other loan purpose"
                        name="other-loan-purpise"
                        type="radio"
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
                      options={["Yes", "No"]}
                    />

                    {props.values.addToLoan === "Yes" && (
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
                      options={[
                        "Home with mortgage",
                        "Home owner",
                        "Renting",
                        "Living with parents",
                        "Other"
                      ]}
                    /> {props.values.living === "Other" && (
                        <CustomRadioGroup
                        name="living_more"
                        type="radio"
                        options={[
                            "Boarding",
                            "Caravan"
                        ]}/>
                    )}
                  </div>
                  <br />

                  <div className="row">
                    <CustomRadioGroup
                      label="Your current state of residence"
                      name="residence-state"
                      options={[
                        "ACT",
                        "NSW",
                        "NT",
                        "QLD",
                        "SA",
                        "TAS",
                        "VIC",
                        "WA"
                      ]}
                    />
                  </div>
                  <br />
                  <div className="row">
                    <CustomRadioGroup
                      label="Number of dependents"
                      paragraph="The number of people you're financially responsible for"
                      name="residence"
                      type="radio"
                      options={["1", "2", "3", "4", "+"]}
                    />
                    {props.values.residence === "+" && (
                      <CustomRadioGroup
                        name="residence-more"
                        type="radio"
                        options={["5", "6", "7", "8+"]}
                      />
                    )}
                  </div>
                  <h3>Date of Birth</h3>
                  <MyInput type="date" label="" name="dob" />
                </div>
                <div style={{ float: "right" }}>
                  <button
                    type="button"
                    onClick={() => {
                      this.nextPage();
                    }}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="div-color">
                  <h2>Your Income</h2>
                  <div>
                    <MyInput
                      type="number"
                      label="What is you Salary?"
                      span="$"
                      name="salary"
                    />
                    <span>
                      {" "}
                      per{" "}
                      <CustomRadioGroup
                        type="radio"
                        name="incomeper"
                        options={["year", "month", "fortnight", "week"]}
                      />{" "}
                    </span>
                    <input type="checkbox" name="aftertax" />
                    <label for="aftertax">After Tax</label>
                  </div>
                  <CustomRadioGroup
                    type="radio"
                    label="Do you receive any government allowances or pensions?"
                    name="allowances"
                    options={["Yes", "No"]}
                  />
                  <CustomRadioGroup
                    type="radio"
                    label="Do you receive any rental income?"
                    name="rental"
                    options={["Yes", "No"]}
                  />
                  <CustomRadioGroup
                    type="radio"
                    label="Do you receive any other additional income? "
                    name="additional"
                    options={["Yes", "No"]}
                  />
                </div>
                <div className="div-color">
                  <h2>Your Expenses</h2>
                  <p>
                    Please provide an accurate view of your share of living
                    expenses by completing the following fields. (If you don’t
                    have the expense please enter $0). This will help us
                    understand your circumstances so we can assess your
                    application and we may validate the expenses stated.
                  </p>
                  <ExpenseField name="utilities" label="Utilities" />
                  <ExpenseField name="household" label="Household" />
                  <ExpenseField name="tv" label="TV & Communications" />
                  <ExpenseField name="other" label="Other" />

                  {/* Diplay sum of all expenses */}
                  <div className="row">
                    <br />
                    <hr />
                    <h3>Estimated Total Expenses</h3>
                    <p>
                      $
                      <span className="bigDigits">
                        {(props.values.utilities || 0) +
                          (props.values.household || 0) +
                          (props.values.tv || 0) +
                          (props.values.other || 0)}
                      </span>{" "}
                      /month
                    </p>
                  </div>
                </div>
                <div className="submitFooter">
                  <button
                    type="button"
                    onClick={() => {
                      this.prevPage();
                    }}
                  >
                    {"< Prev"}
                  </button>
                  <button type="submit">Submit</button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    );
  }
}
