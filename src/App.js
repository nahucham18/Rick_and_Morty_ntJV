import './App.css'
import Form from './components/Form/Form'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Footer from './components/Footer/Footer'

import Home from './views/Home/Home'
import Error from './views/Error/Error'

import { useLocation } from 'react-router-dom'


import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'



function App () {

  const {pathname} = useLocation()
  const [ characters, setCharacters] = useState([])
  
  const onSearch = (id)=>{
    const URL_BASE = "https://rickandmortyapi.com/api"
    const API_KEY = "ef19ec2c194a.fa1ee29143e598093d2f"

    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            let newArray = characters.map(char=>char.id)
            let idArray = data.id;

            (newArray.includes(idArray)) 
            ? window.alert('Ya hay un personaje con ese ID') 
            : setCharacters((characters) => [...characters, data]) 

          } else {
            window.alert('No hay personajes con ese ID');
          }
      });
  }

  const onClose = (id) =>{
    setCharacters(characters.filter((char)=>char.id !== id))
  }

  return (
    <div className='App' >
            {
              pathname !== '/' && <Nav onSearch={onSearch}/>
            }
      <Routes>
        <Route path='/' element={<Form/>}/>
        {/* Tengo que ver el tema de las vistas , y el tema de pasar porops por vistas */}
        <Route path={`/home`} element={<Home
                                          characters={characters}
                                          onClose={onClose}
                                          />}/>        
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/detail/:id`} element={<Detail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
