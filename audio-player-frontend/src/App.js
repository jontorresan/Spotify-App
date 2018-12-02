import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SongsList from "./components/SongsList";
import SongDetails from "./components/SongDetails";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      songList: [],
      currentSong: "",
      songId: 0,
      loading: true
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/")
    .then(res => {
      this.setState({
        songList: res.data,
        currentSong: res.data[0].source,
        loading: false
      });
    });
  }

  play = () => {
    this.myRef.current.play();
  };

  pause = () => {
    this.myRef.current.pause();
  };

  nextSong = () => {
    if (this.state.songId < this.state.songList.length - 1) {
      this.setState(
        {
          currentSong: this.state.songList[this.state.songId + 1].source,
          songId: this.state.songId + 1
        },
        () => this.myRef.current.play()
      );
    } else {
      this.setState({
        currentSong: this.state.songList[0].source,
        songId: 0
      });
    }
  };

  previousSong = () => {
    if (this.state.songId > 0) {
      this.setState(
        {
          currentSong: this.state.songList[this.state.songId - 1].source,
          songId: this.state.songId - 1
        },
        () => this.myRef.current.play()
      );
    } else {
      this.setState({
        currentSong: this.state.songList[this.state.songList.length - 1].source,
        songId: this.state.songList.length - 1
      });
    }
  };

  chooseSong = i => {
    this.setState(
      {
        currentSong: this.state.songList[i].source,
        songId: i
      },
      () => this.myRef.current.play()
    );
  };

  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h1 className="text-center mb-5 header">Jon's Music App</h1>
        <div className="container row">
          <div className="col-md-6 col-sm-12">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <SongsList
                    chooseSong={this.chooseSong}
                    songList={this.state.songList}
                  />
                )}
              />
              <Route
                path="/:songId"
                render={props => (
                  <SongDetails
                    chooseSong={this.chooseSong}
                    {...props}
                    songList={this.state.songList}
                    songs={this.props.songs}
                  />
                )}
              />
            </Switch>
          </div>
          <div className="col-md-6  col-sm-12">
            <div>
              <div>
                <h2 className="mt-2 mr-5" style={pos}>
                  Now Playing: {this.state.songList[this.state.songId].title}
                </h2>
                <div
                  className="btn-group button mt-5 mr-5"
                  style={style}
                  role="group"
                  aria-label="First group">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.play}>
                    <i className="fas fa-play" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.pause}>
                    <i className="fas fa-pause" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.previousSong}>
                    <i className="fas fa-backward" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.nextSong}>
                    <i className="fas fa-forward" />
                  </button>
                </div>
              </div>
              <audio src={this.state.currentSong} ref={this.myRef} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  position: "fixed",
  top: "70px",
  right: "0"
};
const pos = {
  position: "fixed",
  top: "60px",
  right: "0"
};
export default App;
