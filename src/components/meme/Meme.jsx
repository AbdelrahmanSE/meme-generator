import React, { Component } from "react";

export class Meme extends Component {
  
  onMemeClick = () => {
    this.props.onClick(this.props.meme);
  }

  
  render() {
    let style = {
      backgroundImage: `url(${this.props.meme.url})`
    };
    return (
      <div className="ui centered card meme-card" onClick={this.onMemeClick}>
        <div className="meme-image" style={style} />
        <div className="content">
          <div className="description">{this.props.meme.name}</div>
        </div>
      </div>
    );
  }
}
