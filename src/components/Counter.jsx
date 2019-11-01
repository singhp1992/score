import React from 'react';

class Counter extends React.Component {
   state = {
       score: 0
   }

    // handleScoreChange = (index, delta) => {
    //     this.setState(prevState => ({
    //         score: prevState.players[index].score += delta
    //     }));
    // }

    plusScore = () => {
       this.setState({
           score: this.state.score + 1
       });
    }

    minusScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.handleScoreChange(this.props.index, -1)}> - </button>
                <span className="counter-score"> {this.state.score} </span>
                <button className="counter-action increment" onClick={() => this.plusScore}> + </button>
            </div>
        );
    }
}

export default Counter