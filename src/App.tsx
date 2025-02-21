import React from "react";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./App.css";
import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import SearchPage from "./pages/search-page/search-page";
import BasketPage from "./pages/basket/basket-page";

interface RouterProps {}

function App(props: RouterProps) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/basketPage" element={<BasketPage />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <Header />
    //   <Main />
    // </div>
  );
}

export default App;
