import React from "react"
import ReactDOM from "react-dom"
import Card from './components/card'


/*
const user = {
  firstName: 'Inyer',
  lastName: 'Marín',
  avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hello {user.firstName}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const element = <img src={user.avatar}/>*/

const container = document.getElementById('root')

ReactDOM.render(<Card/>, container)