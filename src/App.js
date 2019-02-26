import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';
import Product from './components/pages/Product';
import About from './components/pages/About';
import Faq from './components/pages/Faq';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Faq" component={Faq} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
