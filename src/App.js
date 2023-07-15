import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';

function App() {

   const [characters, setCharacters] = useState([])
   const { pathname } = useLocation()

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'yeival@gmail.com';
   const PASSWORD = 'yei123';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id)
      }))
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/about" element={<About />} />
            {/* <Route path='/detail/:id' element={<Detail/>}/>             */}
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         </Routes>

      </div>
   );
}

export default App;
