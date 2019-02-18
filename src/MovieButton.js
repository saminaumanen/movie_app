import React, { Component } from "react";

class MovieButton extends Component {
  render(){

    return(
            <form onSubmit = {this.props.searchMovie}>
                <input type="text" id="title" placeholder="Movie..."/><br></br>
                <button id="searchButton">Search</button>
            </form>
    )
}
}

export default MovieButton;