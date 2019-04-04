import React from "react";
import { Meme } from "../meme/Meme";

export function MemesContainer() {
  return (
    <div className="ui container meme-container">
      <div className="ui grid">
        <div className="four wide column">
          <Meme />
        </div>
        <div className="four wide column">
          <Meme />
        </div>
        <div className="four wide column">
          <Meme />
        </div>
        <div className="four wide column">
          <Meme />
        </div>
        <div className="four wide column">
          <Meme />
        </div>
        <div className="four wide column">
          <Meme />
        </div>
        <div className="four wide column">
          <Meme />
        </div>
        <div className="four wide column">
          <Meme />
        </div>
      </div>
    </div>
  );
}
