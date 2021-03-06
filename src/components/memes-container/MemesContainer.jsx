import React, { Component } from "react";
import { Meme } from "../meme/Meme";
import { MemesAPI } from "../../services/memes.api";
import { MemeGenerator } from "../meme-generator/MemeGenerator";
/* global jQuery */

export class MemesContainer extends Component {
  constructor(props) {
    super(props);
    this.memeAPI = new MemesAPI();
    this.state = {
      memes: [],
      selectedMeme: null
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
        <Meme meme={meme} onClick={this.selectMeme} />
      </div>
    ));
  }

  selectMeme = meme => {
    // Clear selected image
    this.setState({
      selectedMeme: null
    });

    // Fetch image from API
    fetch(meme.url)
      .then(response => response.blob())
      .then(blob => {
        var reader = new FileReader();
        reader.onload = res => {
          this.setState({
            selectedMeme: {
              ...meme,
              memeDataUrl: res.srcElement.result
            }
          });
        };
        reader.readAsDataURL(blob);
      });

    jQuery(".ui.modal").modal("show");
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui container meme-container">
          <div className="ui stackable grid centered">{this.createMemeCard()}</div>
        </div>
        <MemeGenerator selectedMeme={this.state.selectedMeme} />
      </React.Fragment>
    );
  }
}
