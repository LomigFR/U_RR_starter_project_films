import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Search a film...",
      intervalBeforeRequest: 1000,
      lockRequest: false
    };
  }

  handleChange = event => {
    this.setState({
      searchText: event.target.value
    });
    if (!this.state.lockRequest) {
      this.setState({
        lockRequest: true
      });
      setTimeout(
        function() {
          this.search();
        }.bind(this),
        this.state.intervalBeforeRequest
      );
    }
  };

  handleOnClick = () => {
    this.search();
  };

  search() {
    this.props.callback(this.state.searchText);
    this.setState({
      lockRequest: false
    });
  }

  /**
   * Search bar avec attributs BootStrap et responsive
   */
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 input-group">
          <input
            onKeyUp={this.handleChange}
            type="text"
            className="form-control input-lg"
            placeholder={this.state.placeHolder}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleOnClick}>
              Go
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
