import React, { FC } from "react";
import Header from "./components/Header/Header";
import "./style.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
const App:FC = ()=>(
  <div className="p-4">
  <Header />
  <Hero />
  <About />
  <Experience />
  <Skills/>
  </div>
)

export default App;
