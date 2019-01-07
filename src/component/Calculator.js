import React, {Component} from 'react';

import './Calculator.css';
import CalcButton from './CalcButton';

class Calculator extends Component {
    constructor() { 
        super()

        this.state={
            answer: 0,
            history: [],
        }
    }

    render() {
        return(
            <div className='calculator'>
                <div className='display'>
                    {this.state.answer}
                </div>
                <div className='manipulate'>
                    <div classname='first'>
                        <div className='changers'>
                            <CalcButton>AC</CalcButton>
                            <CalcButton>-/+</CalcButton>
                            <CalcButton>%</CalcButton>
                        </div>
                        <div className='numbers'>
                            <CalcButton>1</CalcButton>
                            <CalcButton>2</CalcButton>
                            <CalcButton>3</CalcButton>
                            <CalcButton>4</CalcButton>
                            <CalcButton>5</CalcButton>
                            <CalcButton>6</CalcButton>
                            <CalcButton>7</CalcButton>
                            <CalcButton>8</CalcButton>
                            <CalcButton>9</CalcButton>
                            <CalcButton>0</CalcButton>
                            <CalcButton>.</CalcButton>
                        </div>
                    </div>
                    <div className='functions'>
                        <CalcButton>/</CalcButton>
                        <CalcButton>X</CalcButton>
                        <CalcButton>-</CalcButton>
                        <CalcButton>+</CalcButton>
                        <CalcButton>=</CalcButton>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calculator;