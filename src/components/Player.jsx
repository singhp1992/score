import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function Player() {
    return (
        <div className="player">
            <span className="player-name">
                Preeti
            </span>

            <div className="counter">
                <button> -
                </button>
                <button> +
                </button>
            </div>
        </div>

    );
}

export default Player