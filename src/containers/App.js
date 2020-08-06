import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary.js'
import Scroll from '../components/Scroll.js';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''   
          }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}))
    }
    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})

    }
    render(){
            const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (!this.state.robots.length){
            return <h1 className='tc f1'>Loading....</h1>
        } else{
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                    </Scroll>
                </div>
                )
        }
        
 }
}  
export default App;