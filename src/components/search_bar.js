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
      <div>
      <input
        value={this.state.term}
        onChange={(event) => this.setState({term: event.target.value})}
        type='text' className='' />
      </div>
    );
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
