import React, { Component } from "react";

export class Meme extends Component {
  render() {
    let style = {
      backgroundImage: `url(${this.props.meme.url})`
    };
    return (
      <div className="ui centered card meme-card">
        <div className="meme-image" style={style}>
        </div>
        <div className="content">
          <div className="description">{this.props.meme.name}</div>
        </div>
      </div>
    );
  }
}
