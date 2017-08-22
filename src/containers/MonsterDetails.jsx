import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoSearch from '../components/AutoSearch';
import { withRouter } from 'react-router-dom'

class MonsterDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
        searchTerm: ''
        }
    }

      mergetDataCallback = (value) => {
        this.setState({ searchTerm: value})
    }

    listAbilities = (abilityList) => {
        if (!abilityList) {
            return null;
        }
        return abilityList.map((ability, idx) => {
            return (
                <div key={idx}>
                    <h5 className='card-subtitle mb-2 text-muted'>{ability.name}</h5>
                    <h6 className='card-text'>Description: <small>{ability.desc}</small></h6>
                    <h6 className='card-text'>Attack Bonus: <small>{ability.attack_bonus}</small></h6>
                </div>
            )
        }
    )}

    renderMonsterDetails = () => {
        if (this.state.searchTerm && this.state.searchTerm !== '') {
            const monster = this.props.monsters.find(monster =>
                monster.name === this.state.searchTerm
            );
            return (
                    <div className='search-results'>
                        <h4 className='text-center object-title'><u>{monster.name}</u></h4>
                        <div className='row'>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h4 className='card-title'><u>Overview</u></h4>
                                        <h6 className='card-text'>Type: <small>{monster.type}</small></h6>
                                        <h6 className='card-text'>Size: <small>{monster.size}</small></h6>
                                        <h6 className='card-text'>SubType: <small>{monster.subtype}</small></h6>
                                        <h6 className='card-text'>Alignment: <small>{monster.alignment}</small></h6>
                                        <h6 className='card-text'>Speed: <small>{monster.speed}</small></h6>
                                        <h6 className='card-text'>Senses: <small>{monster.senses}</small></h6>
                                        <h6 className='card-text'>Languages: <small>{monster.languages}</small></h6>
                                        <h6 className='card-text'>Challenge Rating: <small>{monster.challenge_rating}</small></h6>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h5 className='card-title'><u>Special Abilities</u></h5>
                                        {this.listAbilities(monster.special_abilities)}
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h5 className='card-title'><u>Abilities and Saves</u></h5>
                                        <h6 className='card-text'>Strength: <small>{monster.strength}</small></h6>
                                        <h6 className='card-text'>Dexterity: <small>{monster.dexterity}</small></h6>
                                        <h6 className='card-text'>Constitution: <small>{monster.constitution}</small></h6>
                                        <h6 className='card-text'>Inelligence: <small>{monster.intelligence}</small></h6>
                                        <h6 className='card-text'>Wisdom: <small>{monster.wisdom}</small></h6>
                                        <h6 className='card-text'>Charisma: <small>{monster.charisma}</small></h6>
                                        <h6 className='card-text'>Constitution Save: <small>{monster.constitution_Save}</small></h6>
                                        <h6 className='card-text'>Intelligence Save: <small>{monster.intelligence_save}</small></h6>
                                        <h6 className='card-text'>Wisdom Save: <small>{monster.wisdom_Save}</small></h6>
                                        <h6 className='card-text'>Perception: <small>{monster.perception}</small></h6>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h5 className='card-title'><u>Actions</u></h5>
                                        {this.listAbilities(monster.actions)}
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h5 className='card-title'><u>Combat Stats</u></h5>
                                         <h6 className='card-text'>Hit Points: <small>{monster.hit_points}</small></h6>
                                         <h6 className='card-text'>Hit Dice: <small>{monster.hit_dice}</small></h6>
                                         <h6 className='card-text'>Armor Class: <small>{monster.armor_class}</small></h6>
                                         <h6 className='card-text'>Damage Vulnerabilities: <small>{monster.damage_vulnerabilities}</small></h6>
                                         <h6 className='card-text'>Damage Resistances: <small>{monster.damage_resistances}</small></h6>
                                         <h6 className='card-text'>Damage Immunities: <small>{monster.damage_immunities}</small></h6>
                                         <h6 className='card-text'>Condition Immunities: <small>{monster.condition_immunities}</small></h6>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='card-block'>
                                        <h5 className='card-title'><u>Legendary Actions</u></h5>
                                        {this.listAbilities(monster.legendary_actions)}
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
                <h3 className='text-center'>Enter a Monster Name to Search</h3>
                <div>
                    <div>
                        <AutoSearch 
                            mergetDataCallback={this.mergetDataCallback}
                            suggestions={this.props.monsters}
                            placeHolder="Mimic"
                        />
                    </div>
                </div>
                <div>
                    {this.renderMonsterDetails()}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ monsters }) {
    return { monsters };
}

export default withRouter(connect(mapStateToProps)(MonsterDetails));