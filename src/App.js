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


import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteFav } from './redux/actions/actions'



function App () {

  const dispatch  = useDispatch()
  
  const {pathname} = useLocation()
  const navigate = useNavigate()

  const username = 'nahucham@gmail.com';
  const password = '123asd';
  
  const [ characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  
  useEffect(()=>{
    !access && navigate('/');
  },[access])

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }else{
      window.alert('El usuario o contraseña son invalidos')
    } 
  }

  const logout = () =>{
    setAccess(false)
  }

  
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
    dispatch(deleteFav(id))
  }



  return (
    <div className='App' >
            {
              pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>
            }
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        {/* Tengo que ver el tema de las vistas , y el tema de pasar porops por vistas */}
        <Route path={`/home`} element={<Home
                                          characters={characters}
                                          onClose={onClose}
                                          onSearch={onSearch}
                                          />}/>  
        <Route path={'/favorites'} element={<Favorites/>}/>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/detail/:id`} element={<Detail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
