import {CFetchMoviesStart, CFetchMovies, CFetchMoviesError} from "../Actions/Movies.js";
import {CDeleteMovieFetch} from "../Actions/MovieOperations.js";
const InitialState={Fetching: false,
                    Movies: [],
                    Error: {}};
export default (State=InitialState, Action)=>
  {
    switch (Action.type)
      {
        case CFetchMoviesStart:
        return {...State,
                Movies: [],
                Fetching: true};
        case CFetchMovies:
        return {...State,
                Fetching: false,
                Movies: Action.Payload};
        case CFetchMoviesError:
        return {...State,
                Fetching: false,
                Error: Action.Payload};
        case CDeleteMovieFetch:
        return {...State,
                Movies: State.Movies.filter (Item=>Item._id!==Action.Payload.ID)};
        default:
        return State;
      }   
  }