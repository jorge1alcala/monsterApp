import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/Search-box.component";
import "./styles.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        // {
        //   name: "Frankenstain",
        //   id: 'asc1' 
        // },
        // {
        //   name: 'Drakula',
        //   id: 'asc2'
        // }
      ],
      searchFields: ''
    }
    //this.handleChange = this.handleChange.bind(this);// this helps to work with the THIS keyword on onChange when theres not arrow funtion
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }
handleChange = (e) => {
  this.setState({ searchFields: e.target.value})
}

  render(){
    const { monsters, searchFields} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFields.toLowerCase()))
    
    return(
      <div className='App'>
        
         <SearchBox  
         placeholder='Search Monster' 
         handleChange={this.handleChange} 
         />

        <CardList monsters={filteredMonsters} />

        
         </div>
    )
  }
}

export default App
