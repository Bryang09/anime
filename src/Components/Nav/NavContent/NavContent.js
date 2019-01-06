import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./NavContent.scss";

class NavContent extends Component {
  state = {
    query: "",
    text: ""
  };

  selectChange = e => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  onSelected = e => {
    this.setState({ animeDrop: !this.state.animeDrop });
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div
        className="NavContent"
        style={this.props.width ? { display: "flex" } : { display: "none" }}
      >
        <h2>Bryan's Anime Listings</h2>
        <div className="Navigation">
          <div className="search">
            {/* <h4 onClick={this.onAnime}>Search By Anime</h4> */}
            <form
            // style={
            //   this.state.animeDrop ? { display: "flex" } : { display: "none" }
            // }
            >
              <input
                type="text"
                placeholder={
                  this.state.text === "anime"
                    ? "Search Anime"
                    : this.state.text === "manga"
                    ? "Search Manga"
                    : "Select Option"
                }
                onChange={this.selectChange}
              />

              <Link
                to={
                  this.state.text === "anime"
                    ? { pathname: `/search/anime/${this.state.query}` }
                    : this.state.text === "manga"
                    ? { pathname: `/search/manga/${this.state.query}` }
                    : { pathname: `/` }
                }
                style={{ height: "25px", marginLeft: "10px" }}
              >
                <button
                  type="submit"
                  style={{ height: 0, width: 0, padding: 0, border: 0 }}
                />
                <img
                  src="https://img.icons8.com/windows/50/ffffff/search.png"
                  style={{ height: "25px", color: "#fff" }}
                  alt="search"
                  type="submit"
                />
              </Link>
            </form>

            <select name="" id="" onChange={this.onSelected}>
              <option value="none">-- Select Option --</option>
              <option value="anime">Anime</option>
              <option value="manga">Manga</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default NavContent;
