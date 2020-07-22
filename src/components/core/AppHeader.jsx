import React from 'react'
import { NavLink as Link } from 'react-router-dom'

export default function(){
   return (
      <header className="App-header p-3 bg-dark text-white">
         <Link to="/" activeClassName="abbFrontendAssignment">
            <h1 className="text-center">ABB Frontend Assignment</h1>
         </Link>
         <nav>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
         </nav>
         <style jsx>{`
            header {
               display: flex;
               justify-content: space-between;
               align-items: center;
            }
            a { color: inherit; }
            a:hover {
               text-decoration: none;
               opacity: .8;
               color: var(--teal);
            }
            .active {
               color: var(--teal);
            }
            nav > * {
               margin-right: 1rem;
            }
         `}</style>
      </header>
   )
}