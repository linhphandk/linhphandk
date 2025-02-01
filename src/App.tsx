import React, { FC } from "react";
import Header from "./components/Header/Header";
import "./style.css";
import Hero from "./sections/Hero";
const App:FC = ()=>(
  <div className="p-11 h-screen">
  <Header />
  <Hero />
  </div>
)

export default App;
