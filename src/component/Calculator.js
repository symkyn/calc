import React, {Component} from 'react';

import './Calculator.css';
import CalcButton from './CalcButton';

class Calculator extends Component {
    constructor() { 
        super()

        this.state={
            display: 0,
            history: [],
        }

        this.addNumber = this.addNumber.bind(this);
        this.addDecimal = this.addDecimal.bind(this);
        this.clear = this.clear.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.backSpace = this.backSpace.bind(this);
    }

    addNumber(num) {
        if(this.state.display === 0) {
            this.setState({
                display: num
            })
        } else {
            var newNumber = Number(this.state.display.toString() + num.toString());
            this.setState({
                display: newNumber
            })
        }
    }

    addDecimal() {
        if(this.state.display % 1 === 0)
        this.setState({
            display: this.state.display.toString() + '.'
        })
    }

    clear() {
        this.setState({
            display: 0
        })
    }

    clearAll() {
        this.setState({
            history: []
        })
    }

    backSpace() {
        var string = this.state.display.toString();
        if (string.length > 1) {
            var newString = string.substr(0, (string.length - 1))
            this.setState({
                display: Number(newString)
            })
        } else {
            this.setState({
                display: 0
            })
        }
    }

    render() {
        return(
            <div className='calculator'>
                <div className='display'>
                    {this.state.display}
                </div>
                <div className='manipulate'>
                    <div classname='first'>
                        <div className='changers'>
                            {
                                this.state.display === 0 ?
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
                            <CalcButton onClick={() => this.backSpace()}>{'<--'}</CalcButton>
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