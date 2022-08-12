import React, { Component } from 'react'
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Signup"
//import Form from './Form';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isregestered: false,
      message: "",
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/Signin" element={<SignIn />} />
          </Routes>
        </div>
      </Router>

    )
  }
}
export default App;
