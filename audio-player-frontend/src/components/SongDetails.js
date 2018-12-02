import React, { Component } from "react";

class SongDetails extends Component {
  render() {
    const songInfo = this.props.songList.find(song => {
      return String(song.id) === this.props.match.params.songId;
    });
    return (
      <div>
        <h3 className="d-inline-block mb-4">{songInfo.title}</h3>
        <button
          type="button"
          className="btn btn-secondary ml-4"
          onClick={() => this.props.chooseSong(songInfo.id)}>
          <i className="fas fa-play" />
        </button>
        <audio
          id={this.props.songList.id}
          type="audio/mp3"
          src={songInfo.source}
        />
        <h3>Artist</h3>
        <p>{songInfo.artist}</p>
        <h3>Description</h3>
        <p>{songInfo.description}</p>
      </div>
    );
  }
}

export default SongDetails;
