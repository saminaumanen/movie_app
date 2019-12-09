import React, { Component } from 'react';


class MovieTable extends Component {
    
  render(){

    return(

        <div id="city_container">
        <table>
            <tbody>
          <tr>
               <th>Movie title</th>
               <td>{this.props.title}</td>
            </tr>
            <tr>
                <th>Released</th>
                <td>{this.props.released}</td>
            </tr>
            <tr>
                <th>Rating</th>
                <td>{this.props.rating}</td>
            </tr>
            <tr>
                <th>Plot</th>
                <td>{this.props.plot}</td>
            </tr>
            </tbody>
            </table>
            {
               this.props.error && <p className="movie_error">{this.props.error}</p>
            }
        </div>
    )
}
}

export default MovieTable;