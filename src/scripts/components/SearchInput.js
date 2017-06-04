import React, { Component } from 'react';
import { bindMethodsToComponent } from '../constants';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Введите имя игрока',
      error: false,
    };
    bindMethodsToComponent(this, 'handleChange');
  }

  handleChange() {
    const inputValue = this.searchInput.value;
    if (inputValue.length >= 3) {
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
    this.setState({
      value: inputValue,
    });
  }

  render() {
    const { state } = this;
    const classes = ['search-input'];
    if (state.error) {
      classes.push('search-input--error');
    }
    return (
      <input
        type="text"
        ref={(ref) => {
          this.searchInput = ref;
        }}
        value={state.value}
        className={classes.join(' ')}
        onChange={this.handleChange}
        onFocus={() => {
          this.setState({ value: '' });
        }}
        onBlur={() => {
          this.setState({ value: 'Введите имя игрока', error: false });
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            const { props } = this;
            if (!state.error) {
              props.handleSearch(state.value);
            }
          }
        }}
      />
    );
  }
}

export default SearchInput;
