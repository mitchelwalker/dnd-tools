import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CharacterSheet from '../components/CharacterSheet';

class CharacterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characterLoaded: false
        }
    }

    mergeDataCallback = (key, value) => {
        this.setState({ character: {key: value}})
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.character.character_name) {
            this.setState({ characterLoaded: true })
        }
    }

    render() {
        const character = this.props.character;
        return (
            <div>
                <CharacterSheet character={character} mergeDataCallback={this.mergeDataCallback} />
            </div>
        )
    }
}

function mapStateToProps({ character }) {
    return { character };
}

export default withRouter(connect(mapStateToProps)(CharacterContainer));