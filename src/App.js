
import React from 'react';
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';
import './App.css';
import Card from './card';
import "./index.css"

const App = () => {
    let counter = 0
    setInterval(function () {
      const four = Math.floor(counter / 10000)
      const three = Math.floor(counter / 1000)
      const two = Math.floor(counter / 100)
      const one = Math.floor(counter / 10)
      counter++

      return (ReactDOM.render(<Card digitone={one} digittwo = {two} digitthree = {three} digitfour = {four} />, document.querySelector('#root')))} 
    , 100)

  

}

export default App



