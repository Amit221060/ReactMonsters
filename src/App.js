import React from 'react';
import './App.css';
import CardList from '../src/Components/CradListComponnet/CardList.Component'
import Search from '../src/Components/Search/Search.Component'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchedMonster:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(monstersdata => this.setState({ monsters: monstersdata }))
  }
  render() {
   const {monsters,searchedMonster} = this.state;
   const toShowMonsters = monsters.filter(
     data => data.name.toLocaleLowerCase().includes(searchedMonster.toLocaleLowerCase()) );
    return (
    <div className="App">
      <h1>Monster Boys</h1>
      <Search placeholder='Search Monster'  onChange = {e =>this.setState({searchedMonster: e.target.value})}/>
      <CardList monsters={toShowMonsters} />
    </div>
    );
  }

}

export default App;
