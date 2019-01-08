import React from 'react';
import './CalcButton.css'

const CalcButton = ({ children, ...rest}) => (
    <button className='button' {...rest}>{children}</button>
)

export default CalcButton;

