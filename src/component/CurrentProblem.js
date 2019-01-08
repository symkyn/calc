import React, { Component } from 'react';

import './CurrentProblem.css';

class CurrentProblem extends Component {
    constructor(props){
        super(props)

        this.state={
            history: []
        }

    }

    componentWillReceiveProps() {
        this.setState({
            history: this.props.history
        })
    }

    render(){
        const history = this.state.history.map((array, index) => {
            return (
                <div key={`problem-${index}`}>
                    {array.join(" ")}
                </div>
            )
        })
        return(
            <div className='current'>
                <h3>History</h3>
                <div className='currentProblem'>
                    {history}
                </div>
            </div>
        )
    }
}

export default CurrentProblem;