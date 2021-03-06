import "./SearchResults.css";
import TrackList from "../TrackList/TrackList.js";

const SearchResults = (props) => (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList tracks={props.searchResults} />
  </div>
);

export default SearchResults;
