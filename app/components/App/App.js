import React, { Component } from 'react';
import { styles } from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={`${styles}`}>
        <header>Header</header>
        {this.props.children}
        <footer>Footer</footer>
      </div>
    );
  }
}
