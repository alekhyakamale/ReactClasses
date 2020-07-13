import React from 'react';
import { CustomRadioGroup} from '../src/Data/Data';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';



configure({ adapter: new Adapter()})

test('renders Data without crashing', () => {
    const debug = shallow(<CustomRadioGroup/>);
    expect(debug.getElements()).toMatchSnapshot();
});