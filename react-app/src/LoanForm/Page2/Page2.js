import React, { useContext } from "react";
import { MyInput, CustomRadioGroup, ExpenseField } from "../../Data/Data";
import {FormContext} from '../Context';
 
export default function Page1 ({formikProps}) {

  const {prevPage} = useContext(FormContext);

  return (
     <>
        <div className="div-color">
          <h2>Your Income</h2>
          <div className="row">
            <MyInput
              type="number"
              label="What is you Salary?"
              span="$"
              name="salary"
            />{' '}Per{' '}
                <CustomRadioGroup
                type="radio"
                name="incomeper"
                class="salary-div"
                value={formikProps.values.incomeper}
                options={["year", "month", "fortnight", "week"]}
              />{" "}
          </div>
          <input className="mx-3 hover-magic"
           type="checkbox" name="aftertax"
             value={formikProps.values.afterTax} />
            <label for="aftertax">After Tax</label>
          <CustomRadioGroup
            type="radio"
            label="Do you receive any government allowances or pensions?"
            name="allowances"
            value={formikProps.values.allowances}
            options={["Yes", "No"]}
          />
          <CustomRadioGroup
            type="radio"
            label="Do you receive any rental income?"
            name="rental"
            value={formikProps.values.rental}
            options={["Yes", "No"]}
          />
          <CustomRadioGroup
            type="radio"
            label="Do you receive any other additional income? "
            name="additional"
            value={formikProps.values.additional}
            options={["Yes", "No"]}
          /> 
        </div>
        <div className="div-color">
          <h2>Your Expenses</h2>
          <p>
            Please provide an accurate view of your share of living expenses by
            completing the following fields. (If you don’t have the expense
            please enter $0). This will help us understand your circumstances so
            we can assess your application and we may validate the expenses
            stated.
          </p>
          <ExpenseField
            name="utilities"
            label="Utilities"
            value={formikProps.values.utilitiesPer}
            handlechange={formikProps.handlechange}
            handleblur={formikProps.handleblur}
          />
          <ExpenseField
            name="household"
            label="Household"
            value={formikProps.values.householdPer}
            handlechange={formikProps.handlechange}
            handleblur={formikProps.handleblur}
          />
          <ExpenseField
            name="tv"
            label="TV & Communications"
            value={formikProps.values.tvPer}
            handlechange={formikProps.handlechange}
            handleblur={formikProps.handleblur}
          />
          <ExpenseField
            name="other"
            label="Other"
            value={formikProps.values.otherPer}
            handlechange={formikProps.handlechange}
            handleblur={formikProps.handleblur}
          />

          {/* Diplay sum of all expenses */}
          <div>
            <br />
            <hr />
            <h3>Estimated Total Expenses</h3>
            <p>
              $
              <span className="bigDigits">
                {(formikProps.values.utilities || 0) +
                  (formikProps.values.household || 0) +
                  (formikProps.values.tv || 0) +
                  (formikProps.values.other || 0)}
              </span>{" "}
              /month
            </p>
          </div>
        </div>
        <div className="submitFooter">
          <button type="button" onClick={prevPage}>
            {"< Prev"}
          </button>
          <button type="submit">Submit</button>
        </div>
        </>
    );
  }
