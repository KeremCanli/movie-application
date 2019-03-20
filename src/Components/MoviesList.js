import React from "react";
import PropTypes from "prop-types";
import {Grid, Message} from "semantic-ui-react";
import {HashLoader} from "react-spinners";
import MovieCard from "./MovieCard.js";
const MoviesList=(props)=>
  {
    const EmptyMessage=(<p>There are no movies yet.</p>);
    const MoviesList=(<div>
                        <HashLoader color={"#36bdb3"} size={40} loading={props.Movies.Fetching}/>
                        {props.Movies.Error.response ? <Message negative>
                                                        <Message.Header>
                                                          We're Sorry
                                                          <p>Error retrieving data!</p>
                                                        </Message.Header>
                                                       </Message> : <Grid stackable columns={3}>{props.Movies.Movies.map (Movie=><MovieCard key={Movie._id} Movie={Movie} FDeleteMovieAll={props.FDeleteMovieAll}/>)}</Grid>}
                        {props.MovieOperations.Error.response && <Message negative>
                                                                    <Message.Header>
                                                                      We're Sorry
                                                                      <p>A problem occurred about service.</p>
                                                                    </Message.Header>
                                                                  </Message>}
                      </div>);
    return (<div>
              {props.Movies.length===0 ? EmptyMessage : MoviesList}
            </div>);
  };
MoviesList.propTypes={Movies: PropTypes.shape ({Movies: PropTypes.array.isRequired}).isRequired,
                      MovieOperations: PropTypes.shape ({Movie: PropTypes.object.isRequired}).isRequired,
                      FDeleteMovieAll: PropTypes.func.isRequired};
export default MoviesList;