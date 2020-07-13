import {createShallow} from '@material-ui/core/test-utils';
import {render, fireEvent, wait} from '@testing-library/react';
import React from 'react';
import Page1 from '../src/LoanForm/Page1/Page1';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';
import ReactDOM from 'react-dom';
import {findByDataAttr} from './index';
configure({ adapter: new Adapter()})

describe('Components Test', () => {
    let wrapper;
    beforeEach(() => {
      const shallow = createShallow({untilSelector: 'MyInput'});
      const props = {classes: {paper: 'someprop'}};
      wrapper = shallow(<Page1 {...props}/>);
    });
})