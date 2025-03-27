'use client'

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
import TopNavbar from './Navbar'

function Wrapper({ children }: { children: React.ReactNode }) {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false)

  const toggleSidebar = () => setNavIsOpen((prev) => !prev)

  return (
    <div className="h-screen relative">
      {/* Overlay covering everything except the sidebar */}
      <div className="relative  flex flex-col flex-[5%] z-400">
          <Sidebar isOpen={navIsOpen} />
          
        </div>
      {navIsOpen && (
        <div
          onClick={() => setNavIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-10"
        />
      )}

      {/* Top Navbar (now under overlay) */}
      <div className={`relative ${navIsOpen ? 'z-0' : 'z-50'}`}>
        <TopNavbar  toggleSidebar={toggleSidebar}/>
      </div>

      <div className="flex mt-[8%] relative z-0">
        {/* Sidebar (stays above overlay) */}
        <div className="relative  flex flex-col flex-[5%] z-400">
          <Sidebar isOpen={navIsOpen} />
          {!navIsOpen && (
            <Menu
              onClick={toggleSidebar}
              className="w-6 md:flex hidden h-6 fixed top-6 left-6 cursor-pointer md:mt-[5%] mt-[20%] "
            />
          )}
        </div>

        {/* Main Content (now under overlay) */}
        <div className="flex flex-[95%] items-center w-full -z-0">{children}</div>
      </div>
    </div>
  )
}

export default Wrapper
