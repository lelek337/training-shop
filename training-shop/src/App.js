import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header/>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path='/' component={indexPage} />
        <Route exact path='/about' component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
