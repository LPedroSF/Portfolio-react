import React from 'react'

function scroll() {
  window.scrollTo(0, 1500)
}

function Nav() {
  return (
    <nav>
      <div className = "logo">LPSF</div>
      <ul className = "nav__link--list">
        <li className="nav__link">
          <button onClick = {scroll} className ="
            nav__link--anchor 
            link__hover-effect 
            link__hover-effect--black
          ">
            Projects
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav