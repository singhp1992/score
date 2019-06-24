import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function Player() {
    return (
        <div className="player">
            <span className="player-name">
                Preeti
            </span>

            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score"> 6 </span>
                <button className="counter-action increment"> + </button>
            </div>
        </div>

    );
}

export default Player