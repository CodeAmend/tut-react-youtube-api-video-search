import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC4xBBgyXJmLMPvgxABg6hRcUzIpARUJhw'

class App extends Component {

  constructor(props) {
    super(props)

    // selectedVideo set to null, because at this time, YTSearch won't be done.
    this.state = {
      videos: [],
      selectedVideo: null
    }

    // YTSearch is asychronous, component will render before request is done
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })

  }

  render() {
    return (
      <div>
        <SearchBar />
        {/* selectedVideo has an initial state null. */}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          // child components have access to set Apps selectedVideo state.
          onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo })}}
          videos={this.state.videos}
        />
      </div>)
  }
}

// Take the components generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
