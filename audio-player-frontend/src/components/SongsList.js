import React, { Component } from "react";
import { Link } from "react-router-dom";

class SongsList extends Component {
  render() {
    const songs = this.props.songList.map((song, i) => {
      return (
        <div style={linkStyle} key={i}>
          <button
            type="button"
            className="btn btn-secondary ml-3"
            onClick={() => this.props.chooseSong(i)}>
            <i className="fas fa-play" />
          </button>
          <Link className="ml-4" to={"/" + song.id}>
            <h3 className="d-inline-block">{song.title}</h3>
          </Link>
          <br />
        </div>
      );
    });
    return (
      <div>
        {songs}
        <br />
      </div>
    );
  }
}

const linkStyle = {
  marginBottom: "15px"
};

export default SongsList;
