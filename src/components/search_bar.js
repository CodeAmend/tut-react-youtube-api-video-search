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
      <div>
        <input onChange={ event => this.setState({ term: event.target.value }) } />
        Value of input: { this.state.term }
      </div>
    )
  }

}

export default SearchBar;
