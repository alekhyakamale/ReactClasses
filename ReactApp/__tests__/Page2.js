import React from 'react';
import Page2 from '../src/LoanForm/Page2/Page2'
import {mount,  configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';

configure({ adapter: new Adapter()})


it("render without crashing", () => {
    const wrapper = shallow(<Page2/>)
    expect(wrapper.getElements()).toMatchSnapshot();
})

