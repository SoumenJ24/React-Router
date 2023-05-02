import React from "react";
import Shop from "./Shop";
import About from "./About";
import Error from "./Error";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <h1>My Home Page</h1>
            <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            <Navbar />
        </>
    );
}
