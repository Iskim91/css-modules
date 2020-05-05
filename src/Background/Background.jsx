import React, { Component } from 'react';
import styles from './Background.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.stars}></div>
        <div className={styles.alpha}></div>
        <div className={styles.nebula}></div>
      </div>
    );
  }
}
