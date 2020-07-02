import React, {Suspense, lazy} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import {Switch, Route} from 'react-router-dom';
import Loading from "./components/Loading";
import "antd/dist/antd.css"

const Home = lazy(() => import('./views/home.js'));
const About = lazy(() => import('./views/about.js'));
const History = lazy(() => import('./views/history.js'));
const Login = lazy(()=>import('./views/login.js'));
const Register = lazy(()=>import('./views/register.js'));

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
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
