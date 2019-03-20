import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MoviesList from "../MoviesList.js";
import {FFetchMoviesAll} from "../../Actions/Movies.js";
import {FDeleteMovieAll} from "../../Actions/MovieOperations.js";
class MoviesPage extends React.Component
  {
    static propTypes={Movies: PropTypes.object.isRequired};
    render ()
      {
        return (<div>
                  <h2>Movies</h2>
                  <MoviesList Movies={this.props.Movies} MovieOperations={this.props.MovieOperations} FDeleteMovieAll={this.props.FDeleteMovieAll}></MoviesList>
                </div>);
      }
    componentDidMount ()
      {
        this.props.FFetchMoviesAll ();
      }
  }
const mapStateToProps=(State)=>
  {
    return {Movies: State.Movies,
            MovieOperations: State.MovieOperations};
  }
const mapDispatchToProps={FFetchMoviesAll: FFetchMoviesAll,
                          FDeleteMovieAll: FDeleteMovieAll};
export default connect (mapStateToProps, mapDispatchToProps)(MoviesPage);