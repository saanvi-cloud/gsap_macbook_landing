import React from 'react'
import { navLinks } from '../constants';

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src= "/gsap_macbook_landing/logo.svg" alt='Apple logo' />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className='flex-ceter gap-3'>
          <button>
            <img src= "/gsap_macbook_landing/search.svg" alt='Search' />
          </button>
          <button>
            <img src="/gsap_macbook_landing/cart.svg" alt='Cart'/>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar