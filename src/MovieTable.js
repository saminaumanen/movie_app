import React, { Component } from 'react';


class MovieTable extends Component {
    
  render(){

    return(

        <div id="city_container">
        <table>
           <tr>
               <th>Movie title</th>
               <td>{this.props.title}</td>
            </tr>
            <tr>
                <th>released</th>
                <td>{this.props.released}</td>
            </tr>
            <tr>
                <th>rating</th>
                <td>{this.props.rating}</td>
            </tr>
            
            {
               this.props.error && <p className="movie_error">{this.props.error}</p>
            }
            
            </table>
        </div>
    )
}
}

export default MovieTable;