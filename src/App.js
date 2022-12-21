import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import HomePage from "./components/Homepage"
import Student from "./components/Student"

//import {Routes, Route, Switch, Link} from "react-router-dom"
//import Footer from './containers/Footer'

/*
function App(){
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Switch>
            <Route path='/' exact component={HomePage} />
          </Switch>

          <Switch>
            <Route path="/:student" component={Student} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
*/
function App(){
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' exact component={HomePage} />
          </Routes>

          <Routes>
            <Route path="/:student" component={Student} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
/*
function App() {
  return (
    <div className="App">
      <Header />
      <DataContainer />
      <Footer />
    </div>
  );
}
*/
export default App;
