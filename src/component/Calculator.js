import React, {Component} from 'react';

import './Calculator.css';
import CalcButton from './CalcButton';
import CurrentProblem from './CurrentProblem';

class Calculator extends Component {
    constructor() { 
        super()

        this.state={
            display: 0,
            runningTotal: 0,
            operator: null,
            history: [],
            historyIndex: 0,
            answer: true,
        }

        this.addNumber = this.addNumber.bind(this);
        this.addDecimal = this.addDecimal.bind(this);
        this.clear = this.clear.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.backSpace = this.backSpace.bind(this);
        this.changeSign = this.changeSign.bind(this);
        this.percent = this.percent.bind(this);
        this.executeOperation = this.executeOperation.bind(this);
        this.equals = this.equals.bind(this);
    }

    addNumber(num) {
        if(this.state.answer) {
            this.setState({
                display: num,
                answer: false,
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

    changeSign() {
        var changed = this.state.display * -1;
        this.setState({
            display: changed
        })
    }

    percent() {
        var percent = this.state.display / 100;
        this.setState({
            display: percent
        })
    }

    executeOperation(operator) {
        var newValue = this.state.display;
        if(!this.state.history[this.state.historyIndex]){
            this.state.history[this.state.historyIndex] = [];
        }
        this.state.history[this.state.historyIndex].push(this.state.display)
        this.state.history[this.state.historyIndex].push(operator)
        if (this.state.operator !== null) {
            switch(this.state.operator) {
                case '+':
                    newValue = this.state.runningTotal + this.state.display;
                    break;
                case '-':
                    newValue = this.state.runningTotal - this.state.display;
                    break;
                case '*':
                    newValue = this.state.runningTotal * this.state.display;
                    break;
                case '/':
                    newValue = this.state.runningTotal / this.state.display;
                    break;
            }
        }
        this.setState({
            runningTotal: newValue,
            display: newValue,
            operator: operator,
            answer: true,
        })
    }

    equals() {
        var newValue = this.state.display;
        this.state.history[this.state.historyIndex].push(this.state.display)
        this.state.history[this.state.historyIndex].push('=')
        if (this.state.operator !== null) {
            switch(this.state.operator) {
                case '+':
                    newValue = this.state.runningTotal + this.state.display;
                    break;
                case '-':
                    newValue = this.state.runningTotal - this.state.display;
                    break;
                case '*':
                    newValue = this.state.runningTotal * this.state.display;
                    break;
                case '/':
                    newValue = this.state.runningTotal / this.state.display;
                    break;
            }
        }
        this.state.history[this.state.historyIndex].push(newValue)
        this.setState({
            runningTotal: 0,
            display: newValue,
            operator: null,
            answer: true,
            historyIndex: this.state.historyIndex + 1,
        })
        
    }

    render() {
        return(
            <div className='calculator'>
                <CurrentProblem history={this.state.history} />
                <div className='display'>
                    {this.state.display}
                </div>
                <div className='manipulate'>
                    <div className='first'>
                        <div className='changers'>
                            {
                                this.state.display === 0 ?
                                <CalcButton onClick={this.clearAll}>AC</CalcButton>
                                : <CalcButton onClick={this.clear}>C</CalcButton>
                            }
                            <CalcButton onClick={this.changeSign}>-/+</CalcButton>
                            <CalcButton onClick={this.percent}>%</CalcButton>
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
                        <CalcButton onClick={() => this.executeOperation('/')}>/</CalcButton>
                        <CalcButton onClick={() => this.executeOperation('*')}>*</CalcButton>
                        <CalcButton onClick={() => this.executeOperation('-')}>-</CalcButton>
                        <CalcButton onClick={() => this.executeOperation('+')}>+</CalcButton>
                        <CalcButton onClick={this.equals}>=</CalcButton>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calculator;