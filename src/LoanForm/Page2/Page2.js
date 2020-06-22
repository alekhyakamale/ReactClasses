import React, { Component } from "react";

import { MyInput, CustomRadioGroup, ExpenseField } from "../../Data/Data";

export default class Page1 extends Component {
  render() {
    return (
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
                value={this.props.formikProps.values.incomeper}
                options={["year", "month", "fortnight", "week"]}
              />{" "}
            </span>
            <input type="checkbox" name="aftertax"
             value={this.props.formikProps.values.afterTax} />
            <label for="aftertax">After Tax</label>
          </div>
          <CustomRadioGroup
            type="radio"
            label="Do you receive any government allowances or pensions?"
            name="allowances"
            value={this.props.formikProps.values.allowances}
            options={["Yes", "No"]}
          />
          <CustomRadioGroup
            type="radio"
            label="Do you receive any rental income?"
            name="rental"
            value={this.props.formikProps.values.rental}
            options={["Yes", "No"]}
          />
          <CustomRadioGroup
            type="radio"
            label="Do you receive any other additional income? "
            name="additional"
            value={this.props.formikProps.values.additional}
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
            selected_period={this.props.formikProps.values["utilitiesPer"]}
            handleChange={this.props.formikProps.handleChange}
            handleBlur={this.props.formikProps.handleBlur}
          />
          <ExpenseField
            name="household"
            label="Household"
            selected_period={this.props.formikProps.values["householdPer"]}
            handleChange={this.props.formikProps.handleChange}
            handleBlur={this.props.formikProps.handleBlur}
          />
          <ExpenseField
            name="tv"
            label="TV & Communications"
            selected_period={this.props.formikProps.values["tvPer"]}
            handleChange={this.props.formikProps.handleChange}
            handleBlur={this.props.formikProps.handleBlur}
          />
          <ExpenseField
            name="other"
            label="Other"
            selected_period={this.props.formikProps.values["otherPer"]}
            handleChange={this.props.formikProps.handleChange}
            handleBlur={this.props.formikProps.handleBlur}
          />

          {/* Diplay sum of all expenses */}
          <div className="row">
            <br />
            <hr />
            <h3>Estimated Total Expenses</h3>
            <p>
              $
              <span className="bigDigits">
                {(this.props.formikProps.values.utilities || 0) +
                  (this.props.formikProps.values.household || 0) +
                  (this.props.formikProps.values.tv || 0) +
                  (this.props.formikProps.values.other || 0)}
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
      </>
    );
  }
}
