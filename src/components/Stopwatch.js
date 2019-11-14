import React, { Component }from 'react';

// stateful component 

class Stopwatch extends Component {

    state = {
        isRunning: false,
    }

    // timer by the second - will be called continuously
    tick = () => {

    }

    // button will change from stop to start depending on the state of isRunning
    handleStopWatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        })
    }

    render() {
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button onClick={this.handleStopWatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;