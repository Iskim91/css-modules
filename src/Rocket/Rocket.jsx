import React, { Component } from 'react';
import styles from './Rocket.css';

export default class Rocket extends Component {
  render() {
    return (
      <div>
        <img className={styles.img} src="/shuttle.png"  alt="shuttle"/>
      </div>
    );
  }
}
