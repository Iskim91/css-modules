import React, { Component } from 'react';
import styles from './GridItem.css';
import Badge from './Badge';
import Explorer from './Explorer';

class GridItem extends Component {

  handleClick = () => {
    this.props.updateClicked(this.props.fact.id);
  }
  render() {
    const { title, fact, clicked} = this.props.fact;
    return (
        <div className={styles.card}  onClick={this.handleClick} >
          {clicked ?
            <Explorer /> :
            <Badge />
          }
          <h2 className={styles.title}>{title}</h2>
          <article className={styles.fact}>{fact}</article>
        </div>
    );
  }
}

export default GridItem;
