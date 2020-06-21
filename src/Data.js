import { useField, Field } from "formik";
import React from "react";

export const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <h3 htmlFor={props.id || props.name}>{label}</h3>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
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
        </div>
        {"  /  "}
        <div className="expense-row--right">
          <Dropdown
            name={name + "Per"}
            selected_value={props.selected_period}
            handleChange={props.handleChange}
            handleBlur={props.handleBlur}
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
                  checked={opt === props.value}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <label for={props.name + opt}>{opt}</label>
              </>
            ))}
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
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
      component="select"
      render={({ field, meta }) => (
        <>
          <h3 htmlFor={props.id || props.name}>{label}</h3>
          <div className="drop-down-menu">
            <select
              name={props.name}
              value={props.selected_value}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              style={{ display: "block" }}
            >
              {props.options.map(opt => (
                <option value={opt} label={opt} />
              ))}
            </select>

            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
          </div>
        </>
      )}
    />
  );
};