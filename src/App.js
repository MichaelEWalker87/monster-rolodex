import React, { Component } from 'react';

import {CardList} from "./componets/card-list/card-list.componet.jsx";
import { SearchBox } from './componets/search-box/search-box.componet.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    }

  
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  
  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value})
  }

  render(){
    const { monsters, searchFeild } = this.state; //desstruure of monsters 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase())
    );

    return (
      <div className='App'>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
