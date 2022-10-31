import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Flights from "../components/flights/Flights";

// import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Seats from "../components/seats/Seats";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="flights" element={<Flights />} />
                <Route path="flights/seats" element={<Seats />} />


            </Routes>
        </BrowserRouter>
    )
}

export default Router;