
import './App.css';
import Header from './Layout/Header/Header';
import AboutUs from './Component/AboutUs/AboutUs';
import ServicesInfo from './Component/ServicesInfo/ServicesInfo';
import Contact from './Component/Contact/Contact';
import Location from './Component/Location/Location'
import Footer from './Layout/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Switch>
        <Route path="/home"><AboutUs /></Route>
        <Route path="/servicesInfo"><ServicesInfo /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/location"><Location /></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
