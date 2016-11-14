import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="search-bar">
      <input
        value={this.state.term}
        onChange={(event) => this.onInputChanged(event.target.value)}
        type='text' className='' />
      </div>
    );
  }

  onInputChanged(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
}

// Good Old ES5 Style!
/*
const SearchBar = function() {}
// Extend the Component prototype.
SearchBar.prototype = React.Component.prototype;
SearchBar.prototype.render = function() {
  return (<span>Hello<input type='text' className='' /></span>);
}
*/


export default SearchBar;
