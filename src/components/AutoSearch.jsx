import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

const getSuggestions = (value, suggestions) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    
    return inputLength === 0 ? [] : suggestions.filter(spell =>
        spell.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const renderSuggestion = suggestion => (
  <span>
    {suggestion.name}
  </span>
);

const getSuggestionValue = suggestion => suggestion.name


export default class AutoSearch extends Component {

    constructor() {
        super();
    
        // Autosuggest is a controlled component. 
        // This means that you need to provide an input value 
        // and an onChange handler that updates this value (see below). 
        // Suggestions also need to be provided to the Autosuggest, 
        // and they are initially empty because the Autosuggest is closed. 
        this.state = {
        value: '',
        suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
        value: newValue
        });
    };

      // Autosuggest will call this function every time you need to update suggestions. 
    // You already implemented this logic above, so just use it. 
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
        suggestions: getSuggestions(value, this.props.suggestions)
        });
    };

    handleSelect = (event, { suggestionValue }) => {
        this.props.mergetDataCallback(suggestionValue);
    }
    
    // Autosuggest will call this function every time you need to clear suggestions. 
    onSuggestionsClearRequested = () => {
        this.setState({
        suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
    
        // Autosuggest will pass through all these props to the input. 
        const inputProps = {
            placeholder: this.props.placeHolder,
            value,
            onChange: this.onChange,
            className: 'search-box mx-auto form-control'
        };
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={this.handleSelect}
            />
        );
    }
}