import React from 'react'
import logo from "./images/Logo.png"

function Navbar() {
  return (
    <>
    <nav className="text-white flex justify-around items-center">
        <div>
            <img src={logo}/>
        </div>

        <div>
            <ul className="flex items-center justify-between gap-[30px]">
                <li>Products</li>
                <li>Developers</li>
                <li>Company</li>
                <li>Pricing</li>
                <ul className="flex items-center justify-between gap-[30px]"><li>
                    Support</li>
                    <li><button className="bg-[#FFBC51] w-[100px] p-2 rounded-full shadow">Sign in</button></li></ul>

            </ul>
        </div>

       

    </nav>
      
    </>
  )
}

export default Navbar
