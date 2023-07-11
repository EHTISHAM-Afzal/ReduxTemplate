import React from 'react'

import { Outlet , Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>
        </div>
      </section>
    </nav>
    <Outlet/>
    </>
    )
}

export default NavBar