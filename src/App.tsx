import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header/Header";
import "./style.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Menu from "./components/Menu/Menu";
import ScrollManager, { ScrollSection } from "./lib/ScrollManager";
const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollManager, setScrollManager] = useState<ScrollManager | null>(null)
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null)
  useEffect(() => {
    const scrollMap = new Map<ScrollSection, HTMLElement>();

    if (heroRef.current != null) { scrollMap.set(ScrollSection.HERO, heroRef.current) };
    if (aboutRef.current != null) { scrollMap.set(ScrollSection.ABOUT, aboutRef.current) };
    if (experienceRef.current != null) { scrollMap.set(ScrollSection.EXPERIENCE, experienceRef.current) };
    if (skillsRef.current != null) { scrollMap.set(ScrollSection.SKILLS, skillsRef.current) };
    setScrollManager(new ScrollManager(scrollMap));
  }, [heroRef, aboutRef, experienceRef, skillsRef])
  const scrollToSection = useMemo(() => {
    if (scrollManager != null) {
      return (arg: ScrollSection) => { setIsOpen(false); return scrollManager.scrollTo.bind(scrollManager, arg)() };
    } else {
      return (_: ScrollSection) => console.error("ScrollManager not instantiated")
    }
  }, [scrollManager])
  const menuClickHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen])
  return (
    <>
      {isOpen && <Menu scrollToSection={scrollToSection} />}
      <div className="p-4">
        <Header isOpen={isOpen} menuClickHandler={menuClickHandler} />
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
      </div>
    </>
  )
}

export default App;
