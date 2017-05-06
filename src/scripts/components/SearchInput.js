import React, { Component } from 'react';
import wot from '../wot';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Введите имя игрока',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const inputValue = this.refs.searchInput.value;
    this.setState({
      value: inputValue,
    });
  }

  render() {
    const { state } = this;
    return (
      <input
        type="text"
        ref="searchInput"
        value={state.value}
        className="search-input"
        onChange={this.handleChange}
        onFocus={() => {
          this.setState({ value: '' });
        }}
        onBlur={() => {
          this.setState({ value: 'Введите имя игрока' });
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            const { props, state } = this;
            props.handleSearch(state.value);
          }
        }}
      />
    );
  }
}

export default SearchInput;
