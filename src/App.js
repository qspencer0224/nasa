import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NasaPics from './models/NasaPics';

function App() {


 const [nasa, setNasa] = useState("")

 const key = "a7cDqjKpVnGECUEkl68ByGftlrbHfmE6PkzJgVSS"

 const getImage = async () =>{
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
  const data = await response.json();
  console.log(data);
    
    setNasa(data)
 }

 useEffect(() =>{
  getImage()
 }, [])




  return (
    <div className="App">
      <h1>Hello World</h1>
        <NasaPics />
        <img src={nasa.url} />
        <h1>{nasa.title}</h1>
        {nasa.explanation}
    </div>
  );
}

export default App;
