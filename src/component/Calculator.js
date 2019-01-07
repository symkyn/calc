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

        this.addNumber = this.addNumber.bind(this);
        this.addDecimal = this.addDecimal.bind(this);
        this.clear = this.clear.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    addNumber(num) {
        if(this.state.answer === 0) {
            this.setState({
                answer: num
            })
        } else {
            var newNumber = Number(this.state.answer.toString() + num.toString());
            this.setState({
                answer: newNumber
            })
        }
    }

    addDecimal() {
        this.setState({
            answer: this.state.answer.toString() + '.'
        })
    }

    clear() {
        this.setState({
            answer: 0
        })
    }

    clearAll() {
        this.setState({
            history: []
        })
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
                            {
                                this.state.answer === 0 ?
                                <CalcButton onClick={this.clearAll}>AC</CalcButton>
                                : <CalcButton onClick={this.clear}>C</CalcButton>
                            }
                            <CalcButton>-/+</CalcButton>
                            <CalcButton>%</CalcButton>
                        </div>
                        <div className='numbers'>
                            <CalcButton onClick={() => this.addNumber(1)}>1</CalcButton>
                            <CalcButton onClick={() => this.addNumber(2)}>2</CalcButton>
                            <CalcButton onClick={() => this.addNumber(3)}>3</CalcButton>
                            <CalcButton onClick={() => this.addNumber(4)}>4</CalcButton>
                            <CalcButton onClick={() => this.addNumber(5)}>5</CalcButton>
                            <CalcButton onClick={() => this.addNumber(6)}>6</CalcButton>
                            <CalcButton onClick={() => this.addNumber(7)}>7</CalcButton>
                            <CalcButton onClick={() => this.addNumber(8)}>8</CalcButton>
                            <CalcButton onClick={() => this.addNumber(9)}>9</CalcButton>
                            <CalcButton onClick={() => this.addNumber(0)}>0</CalcButton>
                            <CalcButton onClick={() => this.addDecimal()}>.</CalcButton>
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