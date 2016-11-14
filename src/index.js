import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API key.
const API_KEY = 'AIzaSyDiUbBVWtO6hWVuMXsoAfasifa-YjjiJ1Y';



// Create a new component. this component should produce some HTML.
class App extends Component{
  constructor(props) {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      console.log('videos', videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
   return (
     <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
     </div>
   );
  }
}
// Take this component's generated html and put it on the page (in the DOM).
ReactDOM.render(<App/>, document.getElementById('App'));
