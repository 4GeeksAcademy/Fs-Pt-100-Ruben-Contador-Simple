import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0

const root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
  const oneVal = Math.floor(counter/1)
  const twoVal = Math.floor(counter/10)
  const threeVal = Math.floor(counter/100)
  const fourVal = Math.floor(counter/1000)
  const fiveVal = Math.floor(counter/10000)

  root.render(
  <React.StrictMode>
    <Home one = {oneVal} two = {twoVal} three = {threeVal} four = {fourVal} five = {fiveVal}/>
  </React.StrictMode>,
  )
  counter++
}, 1000)




