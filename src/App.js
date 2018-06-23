import React, { Component } from 'react';
import './App.css';
import Beers from './components/Beers';

class App extends Component {

  state = {
    beers: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/beers')
      .then(response => response.json())
      .then(beersData => { 
        const beers = beersData.map(beer => {
          return {
              id: beer.id,
              name: beer.name,
              tagline: beer.tagline,
              description: beer.description,
              imageURL: beer.image_url
            }
        })
        this.setState(() => { 
          return {
            beers
          }
        })
      })
      .catch(err => console.log(err))
  }
    
  handleDeleteBeer = () => {

  }
  
  render() {

    if (!this.state.beers) {
      return <div>Loading beers...</div>
    }

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Beer App</h1>
          </header>
        </div>
        <Beers props={this.state} />
      </div> 

    ) 
  }
} 

export default App;
