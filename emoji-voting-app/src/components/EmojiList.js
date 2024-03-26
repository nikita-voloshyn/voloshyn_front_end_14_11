import React, { Component } from 'react';
import EmojiItem from './EmojiItem';

class EmojiList extends Component {
  render() {
    const emojis = ["😊", "😍", "😂"];
    return (
      <ul>
        {emojis.map((emoji, index) => (
          <EmojiItem key={index} emoji={emoji} count={this.props.counts[index]} incrementCount={() => this.props.incrementCount(index)} />
        ))}
      </ul>
    );
  }
}

export default EmojiList;
