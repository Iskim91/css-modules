import React, {Component} from 'react';
import Title from './Title/Title'
import Background from './Background/Background'
import Rocket from './Rocket/Rocket'
import Smoke from './Rocket/Smoke'
import Grid from './Grid/Grid'
//styles
import styles from './App.css';

import facts from '../public/NASA_facts.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: facts,
    }
  }

  updateClicked = (id) => {
    let stateCopy = this.state.facts;
    stateCopy[id].clicked = !stateCopy[id].clicked;
    this.setState({ facts: stateCopy })

  }

  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked}/>
        <Rocket />
        <Smoke />
      </div>
    )
  }
}

export default App;
