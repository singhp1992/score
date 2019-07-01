import React from 'react';
import Counter from './Counter'

function Player(props) {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => prop.removePlayer(props.id)}> x </button>
                { props.name }
            </span>

            <Counter/>
        </div>

    );
}

export default Player