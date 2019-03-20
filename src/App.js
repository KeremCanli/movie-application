import React from "react";
import {Route} from "react-router-dom";
import {Container} from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./Components/Header.js";
import HomePage from "./Components/Pages/HomePage.js";
import MoviesPage from "./Components/Pages/MoviesPage.js";
import MovieOperationsPage from "./Components/Pages/MovieOperationsPage.js";
import Footer from "./Components/Footer.js";
class App extends React.Component
  {
    render ()
      {
        return (<div className="App">
                  <Header/>
                  <Container text>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/movies" component={MoviesPage}/>
                    <Route path="/movieoperations" exact component={MovieOperationsPage}/>
                    <Route path="/movieoperations/:id" component={MovieOperationsPage}/>
                  </Container>
                  <Footer/>
                </div>);
      }
  }
export default App;