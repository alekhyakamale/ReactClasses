import React, { Component } from "react";
import {Form} from 'formik';
import { MyInput, CustomRadioGroup, ExpenseField } from "../../Data/Data";

export default class Page1 extends Component {
  render() {
    return (
      <>
      {formikProps => (<Form>
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
            selected_period={formikProps.values["utilitiesPer"]}
            handleChange={formikProps.handleChange}
            handleBlur={formikProps.handleBlur}
          />
          <ExpenseField
            name="household"
            label="Household"
            selected_period={formikProps.values["householdPer"]}
            handleChange={formikProps.handleChange}
            handleBlur={formikProps.handleBlur}
          />
          <ExpenseField
            name="tv"
            label="TV & Communications"
            selected_period={formikProps.values["tvPer"]}
            handleChange={formikProps.handleChange}
            handleBlur={formikProps.handleBlur}
          />
          <ExpenseField
            name="other"
            label="Other"
            selected_period={formikProps.values["otherPer"]}
            handleChange={formikProps.handleChange}
            handleBlur={formikProps.handleBlur}
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
          <button type="button" onClick={this.props.prevPage}>
            {"< Prev"}
          </button>
          <button type="submit">Submit</button>
        </div>
  
  </Form>
 )}
 </>);
}
}
