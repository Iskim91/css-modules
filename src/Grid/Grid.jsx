import React, { Component } from 'react';
import GridItem from './GridItem';

import styles from './Grid.css';
import mediaStyles from './Media.css';
import cx from 'classnames';

export default class Grid extends Component {
  renderFacts() {
    return this.props.facts.map(item => {
      return <GridItem fact={item} key={item.id} updateClicked={this.props.updateClicked} />
    })
  }

  render() {
    return (
      <section className={cx(styles.grid, mediaStyles.grid)}>
        {this.renderFacts()}
      </section>
    );
  }
}
