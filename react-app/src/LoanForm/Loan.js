import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import moment from "moment";
import SummaryPage from "./Display/Display";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";

export default class LoanForm extends Component {
  state = {
    // Page - 1 & 2 are form. On submitting the form, summary is shown in Page - 3
    page: 1,
    submittedValues: {}
  };
  nextPage = () => {
    this.setState({ page: 2 });
  };
  prevPage = () => {
    this.setState({ page: 1 });
  };

  handleStartOver = () => {
    
    this.setState({ page: 1, submittedValues: [] });
  };
  handleSubmit = (values, actions) => {
    // Store the submittedValues in state.
    this.setState({ submittedValues: values });
    this.setState({ page: 3 });
  }
  render() {
    return (
      <>
        {this.state.page === 3 ? (
          // Summary Page with user submitted details
          <SummaryPage
            values={this.state.submittedValues}
            handleStartOver={this.handleStartOver}
          />
        ) : (
          <Formik
            initialValues={{
              email: "",
              loan: "",
              other_loan: "",
              addToLoan: "",
              balance: "",
              living: "",
              living_more: "",
              residence: "",
              dependents: "",
              dependents_more: "",
              dob: "",
              salary: "",
              incomeper: "",
              afterTax: false,
              allowances: "",
              rental: "",
              additional: "",
              utilities: "",
              utilitiesPer: "Month",
              household: "",
              householdPer: "Month",
              tv: "",
              tvPer: "Month",
              other: "",
              otherPer: "Month"
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
              salary: Yup.string()
                .required()
                .min(0)
                .max(100000),
              incomeper: Yup.string().required(),
              living: Yup.string().required(),
              residence: Yup.string().required(),
              dob: Yup.string()
                .required()
                .test("dob", "Should be older than 18", value => {
                  return moment().diff(moment(value), "years") >= 18;
                }),
              dependents: Yup.string().required(),
              dependents_more: Yup.string().when("dependents", {
                is: "+",
                then: Yup.string().required()
              }),
              afterTax: Yup.bool().required(),
              allowances: Yup.string().required(),
              rental: Yup.string().required(),
              additional: Yup.string().required(),
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
            onSubmit={handleSubmit}
          >
            {formikProps => (
              <Form>
                <div className="main-container">
                  {this.state.page === 1 ? (
                    <Page1 formikProps={formikProps} nextPage={this.nextPage} />
                  ) : (
                    <Page2 formikProps={formikProps} prevPage={this.prevPage} />
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    );
  }
}
