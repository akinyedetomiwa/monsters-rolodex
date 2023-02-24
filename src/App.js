import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/card-list/search-box/search-box.component';
class App extends Component {
  //component is a property on react //it is part of a react library
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    // this.handleChange = this.handleChange.bind(this);b
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
    // .then((users) => console.log(users));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
// you can write your own method on our class component
// lexxical scoping - when you call the this. in an arrow function it binds with the class app
//
