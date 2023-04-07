import './App.css'
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Footer from './components/Footer/Footer'

import Home from './views/Home/Home'
import Error from './views/Error/Error'
import Favorites from './views/Favorites/Favorites'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'



function App () {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {access} = useSelector(state => state)

  useEffect(()=>{
    !access && navigate('/rickandmorty');
  },[])


  return (
    <div className='App' >
            {
              pathname !== '/rickandmorty' && <Nav />
            }
      <Routes>
        <Route path='/rickandmorty' element={<Form/>}/>
        <Route path={`/rickandmorty/home`} element={<Home/>}/>  
        <Route path={'/rickandmorty/favorites'} element={<Favorites/>}/>
        <Route path={`/rickandmorty/about`} element={<About/>}/>
        <Route path={`/rickandmorty/detail/:id`} element={<Detail/>}/>
        <Route path={`/rickandmorty/favorites/detail/:id`} element={<Detail/>}/>
        <Route path={`/rickandmorty/404`} element={<div>fallo 404</div>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
