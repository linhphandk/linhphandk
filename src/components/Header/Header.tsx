import React, { FC, MouseEventHandler } from 'react';
import Logo from '../../../public/logo.svg'
import Menu from '../../../public/menu.svg'
import Close from '../../../public/close.svg'
type IProps = {
  menuClickHandler: MouseEventHandler<HTMLDivElement>,
  isOpen: boolean;
}
const Header: FC<IProps> = ({ menuClickHandler, isOpen }) => (
  <header className="w-full z-1 p-4 left-0 top-0 flex justify-between items-center fixed">
    <div className="w-12 md:w-12 flex items-center" >
      <Logo width="100%" height="100%" />
    </div>
    <div className="cursor-pointer w-6 md:w-8  flex items-center" onClick={menuClickHandler}>
      {isOpen ? <Close width="100%" height="100%" fill="#D4AFB9" stroke="#D4AFB9" /> : <Menu width="100%" height="100%" />}
    </div>

  </header>
)

export default Header;
