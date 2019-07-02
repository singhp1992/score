import React from 'react';

const Counter = (props) => {

    // decrementScore = () => {
    //     this.setState(prevState => {
    //         return {

    //             score: prevState.score - 1
    //         };
    //     });
    // }

    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score"> { props.score } </span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

export default Counter