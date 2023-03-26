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
import { useDispatch, useSelector } from 'react-redux'
import { deleteCharacter, deleteFav } from './redux/actions/actions'
import { addCharacter } from './redux/actions/actions'



function App () {

  const dispatch  = useDispatch()
  
  const {pathname} = useLocation()
  const navigate = useNavigate()

  const username = 'nahucham@gmail.com';
  const password = '123asd';
  
  const {homeCharacters} = useSelector(state => state)

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

    const URL_BASE = "http://localhost:3001/rickandmorty"    
    //http://localhost:3001/rickandmorty/character/4
    // const API_KEY = "ef19ec2c194a.fa1ee29143e598093d2f"
    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
          data.key=data.id;
          console.log(data.key);
          console.log(data);
          if (data.name) {
            let newArray = homeCharacters.map(char=>char.id)
            console.log(newArray);
            let idArray = data.id;
            console.log(idArray);

            if(newArray.includes(idArray)){
              window.alert('Ya hay un personaje con ese ID') 
            }else{
              dispatch(addCharacter(data))
            }
              
          } else {
            window.alert('No hay personajes con ese ID');
          }
      });
  }

  return (
    <div className='App' >
            {
              pathname !== '/' && <Nav logout={logout}/>
            }
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        {/* Tengo que ver el tema de las vistas , y el tema de pasar porops por vistas */}
        <Route path={`/home`} element={<Home onSearch={onSearch}/>}/>  
        <Route path={'/favorites'} element={<Favorites/>}/>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/detail/:id`} element={<Detail/>}/>
        <Route path={`/404`} element={<div>fallo 404</div>}/>
      <Route path='*' element={<Favorites/>}/>
        
        
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
