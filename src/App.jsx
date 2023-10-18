import { useState } from 'react'
import './App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Horoscopo from './components/Horoscopo';

function App() {
  const [startDate, setStartDate] = useState(new Date());
const capturar=(e)=>{
setStartDate(e);
}
  return (
    <>
    
      <div className='app'>
      <h2>Horoscopo React</h2>
      <p>Fecha de nacimiento</p>
      <DatePicker
      showIcon
      selected={startDate}
      onChange={capturar}
    />
    <Horoscopo fecha={startDate}/>
    </div>
    </>
  )
}

export default App
