import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter'

function Player() {
    return (
        <div className="player">
            <span className="player-name">
                Preeti
            </span>

            <Counter />
        </div>

    );
}

export default Player