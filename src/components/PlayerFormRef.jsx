import React, { Component } from 'react';

//uses refs
class PlayerFormRef extends Component {

    playerInput = React.createRef();

    handleSubmit = (e) => {
        const { addPlayer } = this.props;

        e.preventDefault();
        addPlayer(this.playerInput.current.value);
        e.currentTarget.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    // ref attribute
                    ref={this.playerInput}
                    placeholder="Enter a player's name"
                />

                <input
                    type="submit"
                    value="Add Player"
                />
            </form>

        );
    }

}

export default PlayerFormRef;