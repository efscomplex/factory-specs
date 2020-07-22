import React from 'react'

export default function(){

   return (
      <footer className="text-center bg-dark text-white"> 
         <small> powered by @efscomplex </small>
         <style jsx>{`
            footer { 
               grid-area: 'footer';
               padding: 1rem;
               text-align: center;
            }
         `}</style>
      </footer>
   )
}