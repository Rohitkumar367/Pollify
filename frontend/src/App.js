import React from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import LoginForm from './pages/Auth/LoginForm'
import SignUpForm from './pages/Auth/SignUpForm'
import Home from './pages/Dashboard/Home'
import CreatePoll from './pages/Dashboard/CreatePoll'
import MyPolls from './pages/Dashboard/MyPolls'
import VotedPolls from './pages/Dashboard/VotedPolls'
import Bookmarks from './pages/Dashboard/Bookmarks'
import Nothing from './pages/Auth/Nothing'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path='/begin' element={<Nothing/>}/>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/signup' element={<SignUpForm/>} />
          <Route path='/dashboard' element={<Home/>} />
          <Route path='/create-poll' element={<CreatePoll/>} />
          <Route path='/my-polls' element={<MyPolls/>} />
          <Route path='/voted-polls' element={<VotedPolls/>} />
          <Route path='/bookmarked-polls' element={<Bookmarks/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (<Navigate to="/dashboard" />):(<Navigate to="/begin" />)
}

