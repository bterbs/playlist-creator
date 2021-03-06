import { Component } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList.js";
class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList tracks={this.props.playListTracks} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
