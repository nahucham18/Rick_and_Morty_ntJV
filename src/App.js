import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState } from 'react'


function App () {

  const [ characters, setCharacters] = useState([])
  
  const onSearch = (id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            let newArray = characters.map(char=>char.id)
            let idArray = data.id;

            (newArray.includes(idArray)) 
            ?  window.alert('Ya hay un personaje con ese ID') 
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
    <div className='App' style={{ padding: '25px' }}>
      <Nav  onSearch={onSearch}
            />

      <Cards
          characters={characters}
          onClose={onClose}
        />
    </div>
  )
}

export default App
