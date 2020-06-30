import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./views/home";
import About from "./views/about";
import History from "./views/history";
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/history' component={History}/>
        <Route path='/about' component={About} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
