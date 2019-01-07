import React from 'react';

const CalcButton = ({ children, ...rest}) => (
    <button {...rest}>{children}</button>
)

export default CalcButton;

