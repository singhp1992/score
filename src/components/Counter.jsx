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
       this.setState( prevState => ({
        score: prevState.score + 1
       }));
    }

    minusScore = () => {
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.minusScore}> - </button>
                <span className="counter-score"> {this.state.score} </span>
                <button className="counter-action increment" onClick={this.plusScore}> + </button>
            </div>
        );
    }
}

export default Counter