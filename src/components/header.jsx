import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <span className='text-4xl text-gray-200 text-center hidden sm:block'>ForcusDoList</span>
      <GiHamburgerMenu className="text-2xl text-gray-200 sm:hidden" />
      <CgProfile className="text-2xl sm:text-5xl text-gray-200 " />
    </header>

  )
}

export default Header;