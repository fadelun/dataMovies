import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import ListMovies from "./components/ListMovies";
import {Container} from 'react-bootstrap';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      movies : [],
      name : ''
    }
  }

  componentDidMount(){
    axios.get("http://www.omdbapi.com/?s=iron man&apikey=a5f2548a")
    .then(res => {
      
      const data = res.data
      this.setState({ movies : data })
      // console.log(this.state.movies)
    })
    .catch(err =>console.log("ADA EROR LUR, " + err))
  }

  handleChange = (event) =>{
    this.setState({
      name : [event.target.value]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`http://www.omdbapi.com/?s=${this.state.name}&apikey=a5f2548a`)
    .then(res => {
      
      const data = res.data
      this.setState({ movies : data })
      console.log(data)
    })
    .catch(err =>console.log("ADA EROR LUR, " + err))
  }


  render(){
    const { movies } = this.state;
    return(
    <div className="App">
      <Container>
            <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
           <ListMovies movies={movies} />
        </Container>
      </div>
    )}
}


export default App;
