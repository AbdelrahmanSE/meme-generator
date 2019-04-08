import React, { Component } from "react";
import { Meme } from "../meme/Meme";
import { MemesAPI } from "../../services/memes.api";

export class MemesContainer extends Component {
  constructor(props) {
    super(props);
    this.memeAPI = new MemesAPI();
    this.state = {
      memes: []
    };
  }

  componentDidMount() {
    this.memeAPI.getMemes().then(res => {
      this.setState({
        memes: res.data.memes
      });
    });
  }

  createMemeCard() {
    return this.state.memes.map(meme => (
      <div key={meme.id} className="four wide column">
        <Meme meme={meme} />
      </div>
    ));
  }

  render() {
    return (
      <div className="ui container meme-container">
        <div className="ui stackable grid centered">{this.createMemeCard()}</div>
      </div>
    );
  }
}
