/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './main.scss'

const Main = () => {
  return (
    <div className='container p-5 mt-5'>
<h2 className='mb-4 mt-5'>Pago seguro</h2>
<div className='col-md-12 p-4 border d-flex justify-content-between shadow-lg pago rnd'>
  <article>
    <p>Tarjeta de crédito de débito y pago electrónico</p>
    <div className='d-flex gap-4'>
      <img src='https://cdn-icons-png.flaticon.com/512/349/349228.png' width='50' height='30'></img>
      <img src='https://expotur-eco.com/wp-content/uploads/2020/05/PayPal-Logo.png' width='50' height='30'></img>
      <img src='https://www.oafondos.com.mx/assets/Imagenes2/invex.jpg' width='50' height='30'></img>
      <img src='https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg' width='50' height='30'></img>
    </div>
  </article>
  <article className='mt-3'>
    <p>Efectivo en cualquiera de las sucursales participantes</p>
    <div className='d-flex gap-4'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png' width='50' height='30'></img>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/1200px-7-eleven_logo.svg.png' width='30' height='30'></img>
      <img src='https://1000marcas.net/wp-content/uploads/2020/02/Walmart-logo-1.jpg' width='50' height='30'></img>
      <img src='https://us.smilemate.com/internal-api/v1/assets/5d666327-f0f6-4018-8121-5ab3b90e9af9' width='50' height='30'></img>
    </div>
  </article>
</div>
<h2 className='mt-5 mb-4'>Servicios disponibles</h2>
<div className='d-flex justify-content-between pago'>
  <article className='d-flex flex-column align-items-center p-4 border shadow-lg col-md-2 rnd mb-3'>
  <img src='https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovertransportation.svg' width='100' height='100'></img>
  <p className='mt-4 h6'>Transporte</p>
  <p className='text-center'>Renta un auto o reserva un shuttle.</p>
  </article>
  <article className='d-flex flex-column align-items-center p-4 border shadow-lg col-md-2 mb-3 rnd'>
  <img src='https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoveryavas.svg' width='100' height='100'></img>
  <p className='mt-4 h6'>Vuelos + Hoteles</p>
  <p className='text-center'>Encuentra las mejores ofertas para tu viaje.</p>
  </article>
  <article className='d-flex flex-column align-items-center p-4 border shadow-lg col-md-2 mb-3 rnd'>
  <img src='https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovergroups.svg' width='100' height='100'></img>
  <p className='mt-4 h6'>Grupos</p>
  <p className='text-center'>Obten una cotización para grupos de más de 9 personas.</p>
  </article>
  <article className='d-flex flex-column align-items-center p-4 border shadow-lg col-md-2 mb-3 rnd'>
  <img src='https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoverhotels.svg' width='100' height='100'></img>
  <p className='mt-4 h6'>Hoteles</p>
  <p className='text-center'>Reserva cualquier habitación en cualquier parte del mundo.</p>
  </article>
  <article className='d-flex flex-column align-items-center p-4 border shadow-lg col-md-2 mb-3 rnd'>
  <img src='https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovercargo.svg' width='100' height='100'></img>
  <p className='mt-4 h6'>Carga</p>
  <p className='text-center'>Contamos con un servicio de carga y mensajería.</p>
  </article>
</div>
</div>
  )
}

export default Main
