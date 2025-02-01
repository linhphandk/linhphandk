import React, {FC} from 'react';
import Logo from '../../../public/logo.svg'
import Menu from '../../../public/menu.svg'
const Header: FC = ()=>(
  <header className="w-full p-11 left-0 top-0 flex justify-between items-center fixed">
  <div className="w-24 md:w-12 h-24 md:h-12">
  <Logo />
  </div>
  <div className="w-12 md:w-8 h-12 md:h-8">
  <Menu/>
  </div>

  </header>
)

export default Header;
