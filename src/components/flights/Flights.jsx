import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './flight.scss'
import briefcase from '../../images/icons/briefcase.svg'

const Flights = () => {
  const flight = JSON.parse(sessionStorage.getItem("flight")) || [];


  const navigate = useNavigate();

  const [valor, setValor] = useState(0);
  const changeValor = (item) => {
    if (item === "bagA") {
      setValor('$150,000');
    }
    if (item === "bagB") {
      setValor('$220,000');
    }
    if (item === "bagC") {
      setValor('$350,000');
    }
  };

  return (
    <>
      <div className='container-fluid flight-container row g-4'>

        <div className='col-sm-8 pt-4 ps-5'>

          <div className='title d-flex justify-content-between'> 
            <div>
              <h2><strong>Vuelo de Salida</strong></h2>
              {flight.map((element, index) => (
                <>
                  <h3 className='mt-4'>{element.departure}</h3>
                  <p className='title__country'>{element.origin} a {element.destiny}</p>
                </>
              ))}

              <h6 className='mb-3'>Selección de horarios y equipajes</h6>
            </div>
            <div>
              <button onClick={() => navigate('/')} class="btn btn-change">Cambiar Vuelo</button>
            </div>
          </div>

          <div className='row rounded g-2 shadow-lg bg-body p-3 d-flex align-items-center'>
            {flight.map((element, index) => (
              <>
                <p className='col hour d-flex flex-column align-items-center'>{element.timeDeparture}</p>

                <div className='col scale  '>
                  <p className='scale__text'>{element.duration}</p>
                  <hr></hr>
                  <p className='scale__text'>Sin escala</p>
                </div>

                <p className='col hour d-flex flex-column align-items-center'>{element.timeArrival}</p>

                <div className='col mx-2 rounded bag d-flex flex-column align-items-center'
                  onClick={() => {
                    changeValor("bagA");
                  }}>
                  <img src={briefcase} alt='briefcase icon'></img>
                  <p className='bag__text'>1 objeto personal</p>
                  <p className='bag__price'>$50,000 COP</p>
                </div>
                <div className='col me-2 rounded bag d-flex flex-column align-items-center'
                  onClick={() => {
                    changeValor("bagB");
                  }}>
                  <img src={briefcase} alt='briefcase icon'></img>
                  <p className='bag__text'>Equipaje de mano</p>
                  <p className='bag__price'>$100,000 COP</p>
                </div>
                <div className='col bag d-flex rounded flex-column align-items-center'
                  onClick={() => {
                    changeValor("bagC");
                  }}>
                  <img src={briefcase} alt='briefcase icon'></img>
                  <p className='bag__text'>Equipaje 25kg</p>
                  <p className='bag__price'>$200,000 COP</p>
                </div>
              </>
            ))}

          </div>

          <div className='title d-flex justify-content-between mt-5'>
            <div>
              <h2><strong>Vuelo de Regreso</strong></h2>
              {flight.map((element) => (
                <>
                  <h3 className='mt-4'>{element.arrival}</h3>
                  <p className='title__country'>{element.destiny} a {element.origin}</p>
                </>
              ))}

              <h6 className='mb-3'>Selección de horarios y equipajes</h6>
            </div>
            <div>
              <button onClick={() => navigate('/')} class="btn btn-change">Cambiar Vuelo</button>
            </div>
          </div>

          <div className='row rounded g-2 shadow-lg bg-body p-3 d-flex align-items-center'>
            {flight.map((element) => (
              <>
                <p className='col hour d-flex flex-column align-items-center'>{element.tdepartureBack}</p>

                <div className='col scale  '>
                  <p className='scale__text'>{element.duration}</p>
                  <hr></hr>
                  <p className='scale__text'>Sin escala</p>
                </div>

                <p className='col hour d-flex flex-column align-items-center'>{element.tarrivalBack}</p>

                <div className='col mx-2 rounded bag d-flex flex-column align-items-center'
                  onClick={() => {
                    changeValor("bagA");
                  }}>
                  <img src={briefcase} alt='briefcase icon'></img>
                  <p className='bag__text'>1 objeto personal</p>
                  <p className='bag__price'>$50,000 COP</p>
                </div>
                <div className='col me-2 rounded bag d-flex flex-column align-items-center'
                  onClick={() => {
                    changeValor("bagB");
                  }}>
                  <img src={briefcase} alt='briefcase icon'></img>
                  <p className='bag__text'>Equipaje de mano</p>
                  <p className='bag__price'>$100,000 COP</p>
                </div>
                <div className='col bag d-flex rounded flex-column align-items-center'
                  onClick={() => {
                    changeValor("bagC");
                  }}>
                  <img src={briefcase} alt='briefcase icon'></img>
                  <p className='bag__text'>Equipaje 25kg</p>
                  <p className='bag__price'>$200,000 COP</p>
                </div>
              </>
            ))}

          </div>

        </div>


        <div className='col-sm-4 column pt-4 pe-5'>
          <h6>Tu reservación</h6>

          <div className='reservation rounded'>
            <div className='d-flex justify-content-between'>
              <p>Pasajeros</p>
              <p>1 Adulto</p>
            </div>
            <p>Vuelo de salida</p>
            {flight.map((element, index) => (
              <>
              <div className='row'>
              <h2 className='col'>{element.origin}</h2>
              <h2 className='col'>{element.destiny}</h2>
            </div>
            <div className='row'>
              <p className='col mt-0 title__country'>{element.timeDeparture}</p>
              <p className='col mt-0 title__country'>{element.timeArrival}</p>
            </div>
            <p>{element.departure}</p>
              </>
            ))}
            <p className='mt-5'>Vuelo de regreso</p>
            {flight.map((element, index) => (
              <>
              <div className='row'>
              <h2 className='col'>{element.destiny}</h2>
              <h2 className='col'>{element.origin}</h2>
            </div>
            <div className='row'>
              <p className='col mt-0 title__country'>{element.tdepartureBack}</p>
              <p className='col mt-0 title__country'>{element.tarrivalBack}</p>
            </div>
            <p>{element.arrival}</p>
              </>
            ))}
            
          </div>
          <h6 className='mt-5'>Costo de vuelo</h6>

          <div className='reservation rounded'>
          {flight.map ((element, index) => (
            <>
            <div className='d-flex justify-content-between'>

              <p>Tarifa base</p>
              <p>{element.price}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Equipaje</p>
              <p>{valor}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Total</p>
              <p>{(`${element.price}+${valor}`)}</p>
            </div>
            </>
          ))}

          </div>
          <div class="d-flex justify-content-center "><button onClick={() => navigate('seats')} type="submit" class="btn btn-submit mt-5">Seleccionar asientos</button> </div>

        </div>


      </div>
      <Outlet />
    </>
  )
}

export default Flights

// const Flights = () => {
//   const navigate = useNavigate();

//   //estado para pintar información
//   const [timesFlights, setTimesFlights] = useState([])
//   const [edit, setEdit] = useState(false)

//   useEffect(()=>{
//     getData()
//   },[])

//   const getData = async () =>{
//     const flightsPrint = JSON.parse(sessionStorage.getItem("flight"));
//     const dataVuelos = await searchFligths(flightsPrint.id)
//     setTimesFlights(dataVuelos);
//   }


//   const editFlights = () =>{
//     sessionStorage.clear();
//     setEdit(!edit)
//   }

//   useEffect(()=>{
//     protectedRoute(navigate)
//   }, [edit])