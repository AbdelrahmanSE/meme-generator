import React from "react";

export function Header() {
  return (
    <header>
      <div className="ui stackable menu inverted segment">
        <div className="ui container">
          <div className="item">
            <i className="image outline icon" />
            Meme Generator
          </div>
          <a
            className="item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AbdelrahmanSE/meme-generator"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
