import React from "react";
import {connect} from "react-redux";
import MovieForm from "../MovieForm.js";
import {FAddMovieAll, FUpdateMovieFetchAll, FUpdateMovieUpdateAll} from "../../Actions/MovieOperations.js";
class MovieOperationsPage extends React.Component
  {
    render ()
      {
        return (<div>
                  <h2>{!this.props.match.params.id ? "Add Movie" : "Update Movie"}</h2>
                  <MovieForm MovieOperations={this.props.MovieOperations} MatchParamsID={this.props.match.params.id} FAddMovieAll={this.props.FAddMovieAll} FUpdateMovieUpdateAll={this.props.FUpdateMovieUpdateAll}/>
                </div>);
      }
    componentDidMount ()
      {
        if (this.props.match.params.id)
          {
            this.props.FUpdateMovieFetchAll (this.props.match.params.id);
          }
      }
  }
const mapStateToProps=(State)=>
  {
    return {MovieOperations: State.MovieOperations};
  }
const mapDispatchToProps={FAddMovieAll: FAddMovieAll,
                          FUpdateMovieFetchAll: FUpdateMovieFetchAll,
                          FUpdateMovieUpdateAll: FUpdateMovieUpdateAll};
export default connect (mapStateToProps, mapDispatchToProps)(MovieOperationsPage);