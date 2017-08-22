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
                    <h6>{ability.name}</h6>
                    <h6>Description: <small>{ability.desc}</small></h6>
                    <h6>Attack Bonus: <small>{ability.attack_bonus}</small></h6>
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
                                <h5 className='text-center'><u>Overview</u></h5>
                                <h6>Type: <small>{monster.type}</small></h6>
                                <h6>Size: <small>{monster.size}</small></h6>
                                <h6>SubType: <small>{monster.subtype}</small></h6>
                                <h6>Alignment: <small>{monster.alignment}</small></h6>
                                <h6>Speed: <small>{monster.speed}</small></h6>
                                <h6>Senses: <small>{monster.senses}</small></h6>
                                <h6>Languages: <small>{monster.languages}</small></h6>
                                <h6>Challenge Rating: <small>{monster.challenge_rating}</small></h6>
                            </div>
                            <div className='col'>
                                <h5 className='text-center'><u>Abilities and Saves</u></h5>
                                <h6>Strength: <small>{monster.strength}</small></h6>
                                <h6>Dexterity: <small>{monster.dexterity}</small></h6>
                                <h6>Constitution: <small>{monster.constitution}</small></h6>
                                <h6>Inelligence: <small>{monster.intelligence}</small></h6>
                                <h6>Wisdom: <small>{monster.wisdom}</small></h6>
                                <h6>Charisma: <small>{monster.charisma}</small></h6>
                                <h6>Constitution Save: <small>{monster.constitution_Save}</small></h6>
                                <h6>Intelligence Save: <small>{monster.intelligence_save}</small></h6>
                                <h6>Wisdom Save: <small>{monster.wisdom_Save}</small></h6>
                                <h6>Perception: <small>{monster.perception}</small></h6>
                            </div>
                            <div className='col'>
                                <h5 className='text-center'><u>Combat Stats</u></h5>
                                <h6>Hit Points: <small>{monster.hit_points}</small></h6>
                                <h6>Hit Dice: <small>{monster.hit_dice}</small></h6>
                                <h6>Armor Class: <small>{monster.armor_class}</small></h6>
                                <h6>Damage Vulnerabilities: <small>{monster.damage_vulnerabilities}</small></h6>
                                <h6>Damage Resistances: <small>{monster.damage_resistances}</small></h6>
                                <h6>Damage Immunities: <small>{monster.damage_immunities}</small></h6>
                                <h6>Condition Immunities: <small>{monster.condition_immunities}</small></h6>
                            </div>
                        </div>
                        <div className='row row-2'>
                            <div className='col'>
                                <h5 className='text-center'><u>Special Abilities</u></h5>
                                {this.listAbilities(monster.special_abilities)}
                            </div>
                            <div className='col'>
                                <h5 className='text-center'><u>Actions</u></h5>
                                {this.listAbilities(monster.actions)}
                            </div>
                            <div className='col'>
                                <h5 className='text-center'><u>Legendary Actions</u></h5>
                                {this.listAbilities(monster.legendary_actions)}
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