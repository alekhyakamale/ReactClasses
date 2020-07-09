import React from 'react';
import { render } from '@testing-library/react';
import Display from '../src/LoanForm/Display/Display'

it("render without crashing", () => {
    const {debug} = render(<Display/>)
    debug();
})