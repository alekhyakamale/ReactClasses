import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import moment from "moment";
import SummaryPage from "./Display/Display";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Axios from 'axios';
import {initialValues} from '../Data/Data';

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
              initialValues
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
            onSubmit={(values, {setSubmitting}) => {
              // Post the values to the database via Middleware.
              Axios({
                method: "POST",
                url: "http://localhost:5000/add/createForm",
                data: values
              }) 
                .then((data) => {
                  setSubmitting(false);
                  console.log(data);
                })
                .catch((error) => {
                  setSubmitting(false);
                  console.log('Error: '+ error);
                });
                this.setState({page: 3})
                
            }}
          >
            {formikProps => (
              <Form method="post">
                <div className="main-container">
                  {this.state.page === 1 ? (
                    <Page1 formikProps={formikProps} nextPage={this.nextPage} />
                  ) : (
                    <Page2 formikProps={formikProps} prevPage={this.prevPage}/>
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
