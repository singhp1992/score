import React from 'react';
import Stats from './Stats';
import PropTypes from 'prop-types';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Stats players={players} />
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};

export default Header