import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
export default function(){

   const Home = React.lazy( () => import('pages/Home'))
   const About = React.lazy( () => import('pages/About'))
   const Contact = React.lazy( () => import('pages/Contact'))

   const Loader = () => 'loading!!'

   return (
      //** NOTE place a loader component to better user experience **//
      <div className="container">
         <Suspense  fallback={<Loader/>}>
            <Switch>
               <Route path="/about"><About/></Route>
               <Route path="/contact"><Contact/></Route>
               <Route path="/"><Home/></Route>
            </Switch>
         </Suspense> 
         <style jsx>{`
            .container {
               display: flex;
               justify-content: center;
            }   
         `}</style>
      </div>
   )
}