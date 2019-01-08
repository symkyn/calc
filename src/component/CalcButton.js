import React from 'react';
import './CalcButton.css'

const CalcButton = ({ children, className, ...rest}) => (
    <button className={`button ${className || ''}`}
     {...rest}>{children}</button>
)

export default CalcButton;

