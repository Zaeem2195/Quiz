import React ,{useState} from 'react'
import Store from '../Store'
import CelciusTool from './ComponentsRedux/Celcius'
import FarenheitTool from "./ComponentsRedux/Farenheit"


function ReduxPractise() { 

  const [Celcius, setCelcius] = useState('')
  const [Farenheit, setFarenheit] = useState('')
  const [state, setstate] = useState('')
  
  const setFarenheitvalue=(e)=>{
    setstate('f')
    setFarenheit(e.target.value)
    
  }
  const setCelciusvalue=(e)=>{
    setstate('c')
    setCelcius(e.target.value)
  }
    
  return (
    <div>    
    <CelciusTool method={setCelciusvalue}  valueFar={Farenheit} valueCel={Celcius} state={state}/>
    <FarenheitTool method={setFarenheitvalue}  valueCel={Celcius} valueFar={Farenheit} state={state}/>
    </div>
  )
   
}

export default ReduxPractise
