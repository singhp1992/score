import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function Counter() {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score"> 6 </span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

export default Counter