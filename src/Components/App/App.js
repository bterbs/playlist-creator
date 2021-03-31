import "./App.css";
import { Component } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { id: 1, name: "Brittany", artist: "Bon Jovi", album: "Winning" },
        { id: 2, name: "Larry", artist: "Bon Jovi", album: "Tomorrow" },
      ],
      playListName: "Summer Jamz",
      playListTracks: [
        { id: 1, name: "Hello", artist: "AeroSmith", album: "Greatest Hits" },
        { id: 2, name: "Good Bye", artist: "The Beetles", album: "Help!" },
        { id: 3, name: "Still here", artist: "Abba", album: "Disco Fever" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist
              playListName={this.state.playListName}
              playListTracks={this.state.playListTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
