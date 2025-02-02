import React, {FC} from 'react';
import Logo from '../../../public/logo.svg'
import Menu from '../../../public/menu.svg'
const Header: FC = ()=>(
  <header className="w-full p-4 left-0 top-0 flex justify-between items-center fixed">
  <div className="w-12 md:w-12 flex items-center">
  <Logo width="100%" height="100%" />
  </div>
  <div className="w-6 md:w-8  flex items-center">
  <Menu width="100%" height="100%" />
  </div>

  </header>
)

export default Header;
