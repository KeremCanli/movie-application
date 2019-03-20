import {CAddMovieStart, CAddMovie, CAddMovieError, CUpdateMovieFetchStart, CUpdateMovieFetch, CUpdateMovieUpdateStart, CUpdateMovieUpdate, CUpdateMovieError, CDeleteMovie, CDeleteMovieError} from "../Actions/MovieOperations.js";
const InitialState={Fetching: false,
                    Movie: {},
                    Error: {}};
export default (State=InitialState, Action)=>
  {
    switch (Action.type)
      {
        case CAddMovieStart:
        return {...State,
                Fetching: true};
        case CAddMovie:
        return {...State,
                Fetching: false,
                Movie: Action.Payload};
        case CAddMovieError:
        return {...State,
                Fetching: false,
                Error: Action.Payload};
        case CUpdateMovieFetchStart:
        return {...State,
                Movie: {}, // Bu komut eklenmezse ekleme işleminden sonra yapılan update işlemlerinde update edilecek film çekilene kadar en son eklenen filmi gösteriyor.
                Fetching: true};
        case CUpdateMovieFetch:
        return {...State,
                Fetching: false,
                Movie: Action.Payload};
        case CUpdateMovieUpdateStart:
        return {...State,
                Fetching: true};
        case CUpdateMovieUpdate:
        return {...State,
                Fetching: false,
                Movie: Action.Payload};
        case CUpdateMovieError:
        return {...State,
                Fetching: false,
                Error: Action.Payload};
        case CDeleteMovie:
        return {...State,
                Movie: Action.Payload};
        case CDeleteMovieError:
        return {...State,
                Error: Action.Payload};
        default:
        return State;
      }
  }