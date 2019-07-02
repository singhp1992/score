import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };
    
    render() {
        return(
            <form>
                <input 
                    type="text"
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