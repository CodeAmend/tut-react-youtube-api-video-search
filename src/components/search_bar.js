// { Compoent } <-- Create const Comonent imported from React called Component
// same as `const Component = React.Component`
import React, { Component } from 'react';

//  We need a class-based componet. More intellegent with values and methods
class SearchBar extends Component {

  constructor(props) {

    super(props);

    this.state = { term: '' };

  }

  // ever class based React compoent must have render component
  render() {
    // ES6 style simple function call.
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    )
  } // end render //

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
