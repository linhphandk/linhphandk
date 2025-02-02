import React, { FC } from "react";
import Header from "./components/Header/Header";
import "./style.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
const App:FC = ()=>(
  <div className="p-4">
  <Header />
  <Hero />
  <About />
  </div>
)

export default App;
