import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Router는 연결되는 컴포넌트 전체를 감싸준다


import About from "./components/About";
import Movie from "./components/Movie";
import Home from "./components/Home";
import Nav from "./components/Nav";

import './style/App.css';

// import {Home, About, Movie, Nav} from "./components"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/' component={Home} />

        <Route path='/about' component={About} />
        <Route path='/movie' component={Movie} />

        {/* <Home />
        <About />
        <Movie /> */}
      </div>
    </Router>

  );
}

export default App;
