import React, { FC } from 'react';
import { ScrollSection } from '../../lib/ScrollManager';
const menuClass = "text-4xl leading-11 cursor-pointer"
type Props = {
  scrollToSection: (section: ScrollSection) => void
}
const Menu: FC<Props> = ({ scrollToSection }) => (
  <nav className="fixed z-1 w-screen h-screen flex text-white justify-center items-center" style={{ backgroundColor: '#262626' }}>
    <ul>
      <li onClick={() => scrollToSection(ScrollSection.HERO)} className={menuClass}>Landing</li>
      <li onClick={() => scrollToSection(ScrollSection.ABOUT)} className={menuClass}>About</li>
      <li onClick={() => scrollToSection(ScrollSection.EXPERIENCE)} className={menuClass}>Experience</li>
      <li onClick={() => scrollToSection(ScrollSection.SKILLS)} className={menuClass}>Skills</li>
    </ul>
  </nav >
)

export default Menu;
