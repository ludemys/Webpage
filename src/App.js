import { BrowserRouter as Router, Route } from 'react-router-dom'

// COMPONENTS
import Container from './components/layouts/container'

function App() {
  return (
    <Router>

      <Route exact path="/" render={ () => {
        return <Container content="index"/>
      } } />

      <Route path="/me" render={ () => {
        return <Container content="me"/>
      } } />

      <Route path="/portfolio" render={ () => {
        return <Container content="portfolio"/>
      } } />

      <Route path="/goals" render={ () => {
        return <Container content="goals"/>
      } } />

      <Route path="/contact" render={ () => {
        return <Container content="contact"/>
      } } />

    </Router>
  );
}

export default App;
