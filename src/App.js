import React, { Component } from 'react';
import MovieTable from "./MovieTable";
import MovieButton from "./MovieButton";
import logo from "./images/banner.png";
import './App.css';


//const Api_Key = "b5d69492";

class App extends Component {
  state = {
    title:"",
    released:"",
    rating:"",
    plot:"",
    error:""
  }


  getMovie = async (e) => {

    const title = e.target.elements.title.value;
    
    e.preventDefault();   
    const api_call = await fetch(`http://www.omdbapi.com/?apikey=b5d69492&t=${title}`)
    const response = await api_call.json();
    console.log(response);
    if(title ){
      this.setState({
        title: response.Title,
        released: response.Released,
        rating: response.imdbRating,
        plot: response.Plot,
        error: response.Error
      })
    }else{
      this.setState({
        error: "Movie not found..."
      })
    }
  }



  render() {

    return (
      <div id="movie_container">
      <header>
      <img src={logo} alt="Logo"/>
          <h1>Search for a movie</h1>
          </header>
          <MovieButton searchMovie={this.getMovie} />
          <MovieTable
            title={this.state.title}
            released={this.state.released}
            rating={this.state.rating}
            plot={this.state.plot}
            error={this.state.error}
            />
      </div>
    )
  }
}

export default App;
