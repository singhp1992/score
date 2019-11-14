import React, {Component} from 'react';

// controlled component
class AddPlayerForm extends Component {

    playerInput = React.createRef();

    handleSubmit = (e) => {
        const {addPlayer} = this.props;

        e.preventDefault();
        addPlayer(this.playerInput.current.value);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
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

export default AddPlayerForm;