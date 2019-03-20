import Axios from "axios";
import {ApiBase} from "../Config/Environment.js";
export const CAddMovieStart="CAddMovieStart";
export const CAddMovie="CAddMovie";
export const CAddMovieError="CAddMovieError";
export const CUpdateMovieFetchStart="CUpdateMovieFetchStart";
export const CUpdateMovieFetch="CUpdateMovieFetch";
export const CUpdateMovieUpdateStart="CUpdateMovieUpdateStart";
export const CUpdateMovieUpdate="CUpdateMovieUpdate";
export const CUpdateMovieError="CUpdateMovieError";
export const CDeleteMovie="CDeleteMovie";
export const CDeleteMovieFetch="CDeleteMovieFetch";
export const CDeleteMovieError="CDeleteMovieError";
export function FAddMovieAll (Title, Cover)
  {
    return dispatch=>{dispatch ({type: CAddMovieStart});
                      setTimeout (()=>{Axios.post (`${ApiBase}/movies`, {"title": Title, "cover": Cover}).then (Result=>Result.data).then (data=>dispatch ({type: CAddMovie,
                                                                                                                                                            Payload: data.movie})).catch (Error=>dispatch ({type: CAddMovieError,
                                                                                                                                                                                                            Payload: Error}));}, 1000);}
  }
export function FUpdateMovieFetchAll (ID)
  {
    return dispatch=>{dispatch ({type: CUpdateMovieFetchStart});
                      setTimeout (()=>{Axios.get (`${ApiBase}/movies/${ID}`).then (Result=>Result.data).then (data=>dispatch ({type: CUpdateMovieFetch,
                                                                                                                               Payload: data.movie})).catch (Error=>dispatch ({type: CUpdateMovieError,
                                                                                                                                                                               Payload: Error}));}, 1000);}
  }
export function FUpdateMovieUpdateAll (ID, Title, Cover)
  {
    return dispatch=>{dispatch ({type: CUpdateMovieUpdateStart});
                      setTimeout (()=>{Axios.put (`${ApiBase}/movies/${ID}`, {"title": Title, "cover": Cover}).then (Result=>Result.data).then (data=>dispatch ({type: CUpdateMovieUpdate,
                                                                                                                                                                 Payload: data.movie})).catch (Error=>dispatch ({type: CUpdateMovieError,
                                                                                                                                                                                                                 Payload: Error}));}, 1000);}
  }
export function FDeleteMovieAll (ID)
  {
    return dispatch=>{Axios.delete (`${ApiBase}/movies/${ID}`).then (Result=>Result.data).then (data=>{dispatch ({type: CDeleteMovie,
                                                                                                                  Payload: Object.assign ({}, {ID})});
                                                                                                       dispatch ({type: CDeleteMovieFetch,
                                                                                                                  Payload: Object.assign ({}, {ID})});}).catch (Error=>dispatch ({type: CDeleteMovieError,
                                                                                                                                                                                  Payload: Error}));}
  }