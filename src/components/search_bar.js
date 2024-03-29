import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <span>Enter you search term here: </span>
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
  }
}

export default SearchBar;
