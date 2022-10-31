import axios from 'axios';
const URL_API = 'https://airlineflight.herokuapp.com';

export const searchFlights = async (origin, destiny) => {
    try {
        const {data} = await axios.get(`${URL_API}/flight?origin=${origin}&destiny=${destiny}`)
        return data;
    } catch (error) {
        return error
    }
}


// const URL__FLIGHTS = "https://sprint2-back.herokuapp.com/flights";

// export const searchFligths = async (origen) => {
//   try {
//     const {data}= await axios.get(`${URL__FLIGHTS}?origen=${origen}`)
//   console.log(data);
//     return data;
//   } catch (error) {
//     return error
//   }
// }






// // https://sprint2-back.herokuapp.com/passengers
// // https://sprint2-back.herokuapp.com/flights

//   //   let urlSearch = `${URL__FLIGHTS}?`;
//   //   for (const key in flight) {
//   //     console.log(`${key}:${flight[key]}`);
//   //     urlSearch = `${urlSearch}:${key}=${flight[key]}`;
//   //   }
//   //   console.log(urlSearch);
//   //   try {
//   //     const { data } = await axios.get(urlSearch);
//   //     console.log(data);
//   //     return data;
//   //   } catch (error) {
//   //     return [];
//   //   }
  
//   // }