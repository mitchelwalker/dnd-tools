import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoSearch from '../components/AutoSearch';
import { withRouter } from 'react-router-dom'

class SpellDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
        searchTerm: ''
        }
    }

      mergetDataCallback = (value) => {
        this.setState({ searchTerm: value})
    }

    renderSpellDetails = () => {
        if (this.state.searchTerm && this.state.searchTerm !== '') {
            const spell = this.props.spells.find(spell =>
                spell.name === this.state.searchTerm
            );
            return (
                    <div className='search-results'>
                        <h4 className='text-center object-title'><u>{spell.name}</u></h4>
                        <div className='row'>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h5 className='card-title'><u>Overview</u></h5>
                                        <h6 className='card-text'>Range: <small>{spell.range}</small></h6>
                                        <h6 className='card-text'>Components: <small>{spell.components}</small></h6>
                                        <h6 className='card-text'>Materials: <small>{spell.material}</small></h6>
                                        <h6 className='card-text'>Ritual: <small>{spell.ritual}</small></h6>
                                        <h6 className='card-text'>Duration: <small>{spell.duration}</small></h6>
                                        <h6 className='card-text'>Concentration: <small>{spell.concentration}</small></h6>
                                        <h6 className='card-text'>Casting Time: <small>{spell.casting_time}</small></h6>
                                        <h6 className='card-text'>Level: <small>{spell.level}</small></h6>
                                        <h6 className='card-text'>School: <small>{spell.school}</small></h6>
                                        <h6 className='card-text'>Class: <small>{spell.class}</small></h6>
                                        <h6 className='card-text'>Archtype: <small>{spell.archetype}</small></h6>
                                        <h6 className='card-text'>Circles: <small>{spell.circles}</small></h6>
                                        <h6 className='card-text'>PHB: <small>{spell.page}</small></h6>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h5 className='card-title'><u>Description</u></h5>
                                        <text className='card-text' dangerouslySetInnerHTML={{__html: spell.desc}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
        return null;
    }

    render() {
        return (
            <div className='container-fluid main-content'>
                <h3 className='text-center'>Enter a Spell Name to Search</h3>
                <div>
                    <div>
                        <AutoSearch 
                            mergetDataCallback={this.mergetDataCallback}
                            suggestions={this.props.spells}
                            placeHolder="Acid Arrow"
                        />
                    </div>
                </div>
                <div>
                    {this.renderSpellDetails()}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ spells }) {
    return { spells };
}

export default withRouter(connect(mapStateToProps)(SpellDetails));