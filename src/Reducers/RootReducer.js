import {combineReducers} from "redux";
import Movies from "./Movies.js";
import MovieOperations from "./MovieOperations.js";
export default combineReducers ({Movies: Movies,
                                 MovieOperations: MovieOperations});