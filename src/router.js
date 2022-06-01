import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { PlaceList, PlaceDetail } from './pages'
import { Header, Sidebar } from './components'

import './App.css'
export const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <RecoilRoot>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<PlaceList />} />
            <Route path="/place-detail" element={<PlaceDetail />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </React.StrictMode>
  )
}
