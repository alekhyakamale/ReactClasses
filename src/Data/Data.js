import { useField, Field } from "formik";
import React from "react";

export const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <p className="label-styling" htmlFor={props.id || props.name}>{label}</p>
      <input className="mx-3" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const ExpenseField = ({ name, label, ...props }) => {
  return (
    <>
      <div className="expense-row">
      <p className="label-styling">{label}</p>
        <div className="expense-row--left mx-4">
          <MyInput
            id={"expenses-" + name}
            type="number"
            label={""}
            name={name}
          />
        </div>
        {"  /  "}
        <div className="expense-row--right px-3">
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
          <p className="label-styling" htmlFor={props.id || props.name}>{label}</p>
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
                <label className="hover-magic" for={props.name + opt}>{opt}</label>
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
      render={({ meta }) => (
        <>
          <p className="label-styling" htmlFor={props.id || props.name}>{label}</p>
          <div>
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