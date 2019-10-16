import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import VideoList from "./video-list";
import axios from "axios";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=fd2d47060ea9a5f87185ba4cbb3fcf5f";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {}
    };
  }

  /**
   * Requêtes Ajax sont écrites ici :
   */
  componentWillMount() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(
      function(response) {
        console.log("-----");
        console.log("", response);
        console.log("-----");
        this.setState({ movies: response.data.results.slice(1, 6) });
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}
export default App;
