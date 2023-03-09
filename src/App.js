import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Footer from './components/Footer/Footer'



import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'



function App () {
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

  console.log(characters);

  return (
    <div className='App' >
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path={`/home`} element={<Cards
                                            characters={characters}
                                            onClose={onClose}
                                            />}/>
        
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/detail/:id`} element={<Detail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
