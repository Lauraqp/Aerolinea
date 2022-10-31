import React from 'react'
import './seats.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { protectedRoute } from '../../utils/redirect'

const Seats = () => {
  const navigate = useNavigate();


   const  listA=['A1','A2','A3','A4']
    const listB=['B1','B2','B3','B4']
    const listC=['C1','C2','C3','C4']
    const listD=['D1','D2','D3','D4']
    const getAsiento=(asiento)=>{
        
        console.log(asiento);

    }
    const [reload, setReload] = useState(false)
  const handleCloseSession = () =>{
    sessionStorage.clear();
    setReload(!reload)
  }
  useEffect(()=>{
    protectedRoute(navigate)
  }, [reload])

  return (
    <div className='div__principal'><h1 className='div__tittle'>Selecciona tus asientos</h1>
    <div className='div'>
    <section className='div__buttons'> 
    {listA.map((item,index)=>(
        <button onClick={()=>{getAsiento(item)} } key={index}> {item} </button>

    ))}
    
    </section>
    <section className='div__buttons'> 
    {listB.map((item,index)=>(
        <button onClick={()=>{getAsiento(item)} } key={index}>{item} </button>

    ))}
    </section>
    <section className='div__buttons'> 
    {listC.map((item,index)=>(
        <button onClick={()=>{getAsiento(item)} } key={index}>{item} </button>

    ))}
    </section>
    <section className='div__buttons'> 
    {listD.map((item,index)=>(
        <button onClick={()=>{getAsiento(item)} } key={index}>{item} </button>

    ))}
    </section>
    <button className='close' onClick={handleCloseSession}>Nueva Compra</button>
     </div>
    </div>
    
  )
}

export default Seats