import React, { Component } from "react";
import Quiz from "./Components/Quiz";
import ToDo from "./Components/ToDo";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import ReduxPractise from "./Components/ReduxPractise";
import RecipeApp from "./Components/ComponentsRecipeApp/RecipeApp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ToDo} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/redux-practise" component={ReduxPractise} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
