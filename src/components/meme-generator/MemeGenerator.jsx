import React, { Component } from "react";

export class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: []
    };
  }

  static getDerivedStateFromProps(props, currentState) {
    if (!props.selectedMeme) return currentState;
    let captions = [];

    for (let count = 0; count < props.selectedMeme.box_count; count++) {
      captions.push({
        text: ""
      });
    }

    return {
      captions: [...captions]
    };
  }

  generateInputTextBoxes = () => {
    let placeholders = [];
    if (this.state.captions.length === 2) {
      placeholders = ["Upper", "Lower"];
    } else {
      placeholders = ["First", "Second", "Third", "Fourth", "Fifth"];
    }
    return this.state.captions.map((caption, index) => (
      <div className="ui fluid input" key={index}>
        <input type="text" placeholder={placeholders[index] + ' text' } />
      </div>
    ));
  };

  render() {
    if (!this.props.selectedMeme) return <div className="ui modal meme-generator" />;

    return (
      <div className="ui modal meme-generator">
        <i className="close icon" />
        <div className="header">Generate Meme</div>
        <div className="image content">
          <div className="ui big image">
            <img src={this.props.selectedMeme.url} alt="" />
          </div>

          <div className="description">
            <div className="ui header">Write the captions for the meme to be generated</div>
            <div>{this.generateInputTextBoxes()}</div>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Cancel</div>
          <div className="ui positive right labeled icon button">
            Generate
            <i className="checkmark icon" />
          </div>
        </div>
      </div>
    );
  }
}
