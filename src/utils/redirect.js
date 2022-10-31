
//verification sessionstorage and redirect
export const redirects = (navigate) => {
    const flightSession = sessionStorage.getItem('flight')
    if (flightSession) {
      navigate("/flights")
    } 
  };
  //redirigir rutas protegias
  export const protectedRoute = (navigate) =>{
    const flightSession = sessionStorage.getItem('flight')
    if (!flightSession) {
      navigate("/")
    } 
  }
  