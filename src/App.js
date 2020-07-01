import React, {Suspense, lazy} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import {Switch, Route} from 'react-router-dom';
import Loading from "./components/Loading";
// import Loading from "./components/Loading";


// import Home from "./views/home";
// import About from "./views/about";
// import History from "./views/history";
const Home = lazy(() => import('./views/home.js'));
const About = lazy(() => import('./views/about.js'));
const History = lazy(() => import('./views/history.js'));

console.log(Loading);
function App() {
  return (
    <>
      <Header/>
      <main>
      <Suspense fallback={Loading()}>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/history' component={History}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
