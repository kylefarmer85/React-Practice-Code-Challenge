import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      money: 100,
      emptyPlates: [],
      index: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      const addEatenToSushis = sushis.map(sushi => {
        return {...sushi, eaten: false}
      })
      this.setState({
        sushis: addEatenToSushis
      })
    })
  }

  eatSushi = (id, price) => {
    if (price > this.state.money) {
      return alert("You don't have enough money!")
    }
    const updateEatenToTrue = this.state.sushis.map(sushiObj => {
      if (sushiObj.id === id) {
       return ( {...sushiObj, eaten: true} )
      } else {
        return sushiObj
      }
    })
    this.setState({
      sushis: updateEatenToTrue
    })

    this.setState(prevState => {
      return {
        money: prevState.money - price
      }
    }
    )

    this.setState(prevState => {
      return {
        emptyPlates: [...prevState.emptyPlates, id]
      }
    })
  }

  serveSushi = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  moreSushi = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 4
      }
    })
  }

  render() {
    
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} sushis={this.serveSushi()} moreSushi={this.moreSushi} />
        <Table money={this.state.money} emptyPlates={this.state.emptyPlates} />
      </div>
    );
  }
}

export default App;