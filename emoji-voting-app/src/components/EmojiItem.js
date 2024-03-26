import React, { Component } from 'react';

class EmojiItem extends Component {
  render() {
    return (
      <li>
        <span onClick={this.props.incrementCount}>{this.props.emoji}</span>
        <span>{this.props.count}</span>
      </li>
    );
  }
}

export default EmojiItem;
