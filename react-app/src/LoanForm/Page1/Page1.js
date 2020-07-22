import React, { useContext } from "react";
import { MyInput, CustomRadioGroup } from "../../Data/Data";
import {FormContext} from '../Context';
import _ from "lodash";

export default function Page1 ({formikProps}) {

  const {nextPage} = useContext(FormContext);
    
    return (
     <>
        <div className="div-color">
          <h2>Your email address</h2>
          <p>
            We will use this email address to let you know the outcome of your
            application and next steps.
          </p>
          {/* email */}
          <MyInput name="email" type="email" />
        </div>
        <br />
        {/* Your loan section */}
        <div className="div-color">
          <div>
            <h2>Your Loan</h2>
            <div className="row">
              {/* Options for loan */}
              <CustomRadioGroup
                label="What would you like to use the loan for?"
                name="loan"
                value={formikProps.values.loan}
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
            {/* Options when 'Other' option  is selected */}
            { _.eq(formikProps.values.loan, "Other") && (
              <CustomRadioGroup
                label="Please select other loan purpose"
                name="other_loan"
                type="radio"
                value={formikProps.values.other_loan}
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
          {/* Add to loan */}
          <div className="row my-4">
            <CustomRadioGroup
              label="Would you like to add to your existing ANZ loan?"
              name="addToLoan"
              type="radio"
              value={formikProps.values.addToLoan}
              options={["Yes", "No"]}
            />
            {/* Option when 'Yes' option is selected */}
            { _.eq(formikProps.values.addToLoan, "Yes") && (
              <MyInput
                label="Balance loan"
                type="number"
                name="balance"
                required
              />
            )}
          </div>
          <hr/>
          {/* Current living situation */}
          <div className="row my-4">
            <CustomRadioGroup
              label="Your current living situation"
              name="living"
              type="radio"
              value={formikProps.values.living}
              options={[
                "Home with mortgage",
                "Home owner",
                "Renting",
                "Living with parents",
                "Other"
              ]}
            />
            {/* Options when 'other' option is selected */}
            { _.eq(formikProps.values.living, "Other") && (
              <CustomRadioGroup
                name="living_more"
                type="radio"
                options={["Boarding", "Caravan"]}
                value={formikProps.values.living_more}
              />
            )}
          </div>
              {/* Current state of residence */}
          <div className="row my-4">
            <CustomRadioGroup
              label="Your current state of residence"
              name="residence"
              value={formikProps.values.residence}
              options={["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]}
            />
          </div>
          {/* Number of dependents */}
          <div className="row my-4">
            <CustomRadioGroup
              label="Number of dependents"
              paragraph="The number of people you're financially responsible for"
              name="dependents"
              type="radio"
              value={formikProps.values.dependents}
              options={["1", "2", "3", "4", "+"]}
            />
            {/* Extra options when + is clicked */}
            { _.eq(formikProps.values.dependents, "+") && (
              <CustomRadioGroup
                name="dependents_more"
                type="radio"
                value={formikProps.values.dependents_more}
                options={["5", "6", "7", "8+"]}
              />
            )}
          </div>
          {/* Date of birth */}
          <div className="date">
            <p className="mx-2" style={{fontSize: '1.2rem'}}>Date of birth</p>
          <MyInput className="row mx-2" type="date" name="dob" />
          </div>
        </div>
        {/* END of Page-1.  Click to navigate to next page */}
        <div style={{ float: "right" }}>
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div></>
    );
  }
