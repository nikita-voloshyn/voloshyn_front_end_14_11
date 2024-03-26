import React, { Component } from 'react';
import EmojiList from './EmojiList';

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [0, 0, 0],
      showResults: false
    };
  }

  incrementCount = (index) => {
    const newCounts = [...this.state.counts];
    newCounts[index]++;
    this.setState({ counts: newCounts });
  };

  calculateWinner = () => {
    const maxCount = Math.max(...this.state.counts);
    return this.state.counts.indexOf(maxCount);
  };

  handleShowResults = () => {
    this.setState({ showResults: true });
  };

  render() {
    return (
      <div>
        <h1>Emoji Voting</h1>
        <EmojiList counts={this.state.counts} incrementCount={this.incrementCount} />
        {!this.state.showResults && <button onClick={this.handleShowResults}>Show Results</button>}
        {this.state.showResults && <p>The winner is: {String.fromCodePoint(0x1F600 + this.calculateWinner())}</p>}
      </div>
    );
  }
}

export default EmojiVoting;
