import React, { Component } from "react";

export default class SvgContainer extends Component {

  render() {
    if (!this.props.meme) return null;

    var wrh = this.props.meme.width / this.props.meme.height;
    var newWidth = 600;
    var newHeight = newWidth / wrh;
    const textStyle = {
      fontFamily: "Impact",
      fontSize: "50px",
      textTransform: "uppercase",
      fill: "#FFF",
      stroke: "#000",
      userSelect: "none"
    };


    return (
      <svg
        width={newWidth}
        height={newHeight}
        xmlns="http://www.w3.org/2000/svg"
        xmlnshlink="http://www.w3.org/1999/xlink"
      >
        <image
          ref={el => {
            this.imageRef = el;
          }}
          xlinkHref={this.props.meme.memeDataUrl}
          width="100%" height="100%"
        />
        <text
          //   style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
          //   x={this.state.topX}
          //   y={this.state.topY}
          dominantBaseline="middle"
          textAnchor="middle"
          onMouseDown={event => this.handleMouseDown(event, "top")}
          onMouseUp={event => this.handleMouseUp(event, "top")}
        >
          {/* {this.state.toptext} */}
        </text>
        <text
          style={textStyle}
          dominantBaseline="middle"
          textAnchor="middle"
          //   x={this.state.bottomX}
          //   y={this.state.bottomY}
          onMouseDown={event => this.handleMouseDown(event, "bottom")}
          onMouseUp={event => this.handleMouseUp(event, "bottom")}
        >
          {/* {this.state.bottomtext} */}
        </text>
      </svg>
    );
  }
}
