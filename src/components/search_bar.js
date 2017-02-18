// { Compoent } <-- Create const Comonent imported from React called Component
// same as `const Component = React.Component`
import React, { Component } from 'react';

//  We need a class-based componet. More intellegent with values and methods
class SearchBar extends Component {
  // ever class based React compoent must have render component
  render() {
    return <input />;
  }
}

export default SearchBar;
