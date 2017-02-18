import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBonG_EHrxqUyl2ChI2V08goBBZL7BxCWw'

// Create a new component this component should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>)
}

// Take the components generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
