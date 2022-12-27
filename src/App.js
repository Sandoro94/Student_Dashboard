import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import HomePage from "./components/Homepage"
import Student from "./components/Student"
import Header from './containers/Header';
import Footer from './containers/Footer'




function App(){
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<HomePage/>} />
            <Route path="/:student" exact element={<Student/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
export default App;
