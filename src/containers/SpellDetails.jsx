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
                            <div className='col-md-4 ml-auto'>
                                <h5 className='text-center'><u>Overview</u></h5>
                                <h6>Range: <small>{spell.range}</small></h6>
                                <h6>Components: <small>{spell.components}</small></h6>
                                <h6>Materials: <small>{spell.material}</small></h6>
                                <h6>Ritual: <small>{spell.ritual}</small></h6>
                                <h6>Duration: <small>{spell.duration}</small></h6>
                                <h6>Concentration: <small>{spell.concentration}</small></h6>
                                <h6>Casting Time: <small>{spell.casting_time}</small></h6>
                                <h6>Level: <small>{spell.level}</small></h6>
                                <h6>School: <small>{spell.school}</small></h6>
                                <h6>Class: <small>{spell.class}</small></h6>
                                <h6>Archtype: <small>{spell.archetype}</small></h6>
                                <h6>Circles: <small>{spell.circles}</small></h6>
                                <h6>PHB: <small>{spell.page}</small></h6>
                            </div>
                            <div className='col-md-4 mx-auto'>
                                <h5 className='text-center'><u>Description</u></h5>
                                <text dangerouslySetInnerHTML={{__html: spell.desc}} />
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