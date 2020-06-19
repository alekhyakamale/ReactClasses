import { Field, useField } from "formik";
import React from "react";

export const MyInput = ({ span, label, ...props }) => {
    const [field, meta] = useField(props)
    return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <span htmlFor={props.id || props.name}> {span}</span>
      <input type={props.type} {...field}/>
      {meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export const ExpenseField = ({ name, label, ...props }) => {
    return (
    <>
      <h3 style={{ marginBottom: 0 }}>{label}</h3>
      <div className="expense-row">
        <div className="expense-row--left">
          <MyInput
            id={"expenses-" + name}
            type="number"
            label={""}
            name={name}
          />
          {"  /  "}
        </div>
        <div className="expense-row--right">
          <Dropdown
            name={"expenses-" + name + "-period"}
            options={["Week", "Fortnight", "Month", "Quarter", "Year"]}
          />
        </div>
      </div>
    </>
  );
};

export const CustomRadioGroup = ({ paragraph, label, ...props }) => {
  return (
    <Field
      name={props.name}
      component="div"
      render={({ field, meta }) => (
        <>
          <h3 htmlFor={props.id || props.name}>{label}</h3>
          <p htmlFor={props.id || props.name}>{paragraph}</p>
          <div className="radio-buttons">
            {props.options.map(opt => (
              <>
                <input
                  {...field}
                  type="radio"
                  id={props.name + opt}
                  name={props.name}
                  value={opt}
                />
                <label for={props.name + opt}>{opt}</label>
              </>
            ))}
            {meta.error ? <div className="error">{meta.error}</div> : null}
          </div>
        </>
      )}
    />
  );
};

export const Dropdown = ({ label, ...props }) => {
  return (
    <Field
      name={props.name}
      component="div"
      render={() => (
        <>
          <h3 htmlFor={props.id || props.name}>{label}</h3>
          <div className="drop-down-menu">
            <select name={props.name}>
              {props.options.map(opt => (
                <>
                  <option name={props.name} value={opt}>
                    {opt}
                  </option>
                </>
              ))}
            </select>
          </div>
        </>
      )}
    />
  );
};