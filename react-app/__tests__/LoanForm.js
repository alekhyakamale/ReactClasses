import React from 'react';
import { render } from '@testing-library/react';
import LoanForm from '../src/LoanForm/LoanForm';
import { configure, shallow, ShallowWrapper, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import renderer from 'react-test-renderer';

it("render without crashing", () => {
    const wrapper = shallow(<LoanForm/>)
    expect(wrapper.getElements()).toMatchSnapshot();
})



