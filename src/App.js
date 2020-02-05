import React from 'react'
import List from './components/List'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>{'RESTful ToDo List!'}</header>
      <div className='App-content'>
        <List />
      </div>
    </div>
  )
}

export default App
