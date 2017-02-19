import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBonG_EHrxqUyl2ChI2V08goBBZL7BxCWw'
YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
  console.log(data);
})

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>)    
  }
}

// Take the components generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
