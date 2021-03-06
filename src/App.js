import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// COMPONENTS
import Container from './components/layouts/container'

class App extends Component
{
  render = () =>
  {
    return (
      <Router>
  
        <Route exact path="/" render={ () => {
          return <Container content="index" title="Luciano Della Savia | Software developer specialized on web" />
        } } />
  
        <Route path="/me" render={ () => {
          return <Container content="me" title="Who is Luciano | About me" />
        } } />
  
        <Route path="/portfolio" render={ () => {
          return <Container content="portfolio" title="Luciano's portfolio | My repository of projects on GitHub" />
        } } />
  
        <Route path="/goals" render={ () => {
          return <Container content="goals" title="Luciano's goals | My future view" />
        } } />
  
        <Route path="/contact" render={ () => {
          return <Container content="contact" title="Contact me | Luciano" />
        } } />
  
      </Router>
    );
  }
}

export default App;
