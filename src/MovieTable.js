import React, { Component } from 'react';


class MovieTable extends Component {
    
  render(){

    return(

        <div id="city_container">
            {
               this.props.title && <p>Movie title: 
                    <span className="value">  {this.props.title}</span>                    
                </p> 
            }
            {
               this.props.released && <p>released: 
                    <span className="value">  {this.props.released}</span>                    
                </p> 
            }
            {
               this.props.rating && <p>rating: 
                    <span className="value">  {this.props.rating}</span>                    
                </p> 
            }
            {
               this.props.error && <p className="movie_error">{this.props.error}</p>
            }
        </div>
    )
}
}

export default MovieTable;