import Axios from "axios";
import {ApiBase} from "../Config/Environment.js";
export const CFetchMoviesStart="CFetchMoviesStart";
export const CFetchMovies="CFetchMovies";
export const CFetchMoviesError="CFetchMoviesError";
export function FFetchMoviesAll ()
  {
    return dispatch=>{dispatch ({type: CFetchMoviesStart});
                      Axios.get (`${ApiBase}/movies`).then (Result=>Result.data).then (data=>dispatch ({type: CFetchMovies,
                                                                                                        Payload: data.movies})).catch (Error=>dispatch ({type: CFetchMoviesError,
                                                                                                                                                         Payload: Error}));};
  }