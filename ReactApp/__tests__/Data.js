import {render} from '@testing-library/react';
import React from 'react';
import {ExpenseField, CustomRadioGroup} from '../src/Data/Data';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';
import {MyInput} from '../src/Data/Data';
import { useField, Field } from "formik";


configure({ adapter: new Adapter()})

test('renders Data without crashing', () => {
    const debug = shallow(<CustomRadioGroup/>);
    expect(debug.getElements()).toMatchSnapshot();
});

// test('check the type of value', () => {  
//     const props = {
//             value: 'ale@gmail.com'
//         },
//         abc = mount(<MyInput {...props} />);
//     expect(abc.prop('value')).toBeString();
// });
describe("MyInput function",()=>{
test("checking if MyInput executes properly", ()=>{
    const input = {
        label : "email",
        props : {
            value: "email"
        }
    };

    // const abc = shallow(<MyInput {...input.props} />);

    const output = (
    <Field
      name={'email'.name}
      component="div"
      render={({ meta, ...field }) => (
        <>
      <p className="label-styling" htmlFor={input.prop('value').id || input.prop('value').name}>{'email'}</p>
      <input className="mx-3" {...field} {...input.prop('value')} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      </>
      )}
    />
    )
    expect(input).toBeInstanceOf(output);
})
})