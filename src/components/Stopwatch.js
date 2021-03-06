import React, { Component }from 'react';

// stateful component 

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0, 
        previousTime: 0,
    }

    // lifecycle method
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    // to prevent memory leak
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    // timer by the second - will be called continuously
    tick = () => {
        if(this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    // button will change from stop to start depending on the state of isRunning
    handleStopWatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if(!this.state.isRunning) {
            this.setState({
                previousTime: Date.now()
            });
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    }

    render() {
        // intermediary variables
        const seconds = Math.floor(this.state.elapsedTime / 1000);

        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    { seconds }
                </span>
                <button onClick={this.handleStopWatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div> 
        )
    }
}

export default Stopwatch;