import React, { useState, useEffect } from 'react'
import Feature from 'components/base/FeatureCard'
import getData, { getRandomItem } from 'services/'


const filterBy = (items, name) => items.filter(
   item => item.feature === name
)
export default function(){
   const [
      features,
      setFeatures
   ] = useState([])

   const fetchData = length => {
      let data = getData(length)
      setFeatures(data)
   }
   const opts = Array.from(new Set(features.map( item => item.feature )))
   console.log(opts)
   useEffect(
      () => {
         setInterval(
            fetchData(20),
            5000
         )
      },
      []
   )

   return (
      <main>{
            opts.map(
               (opt, i) => <Feature key={i} name={opt} expected={getRandomItem([true, false, undefined],3)} controls={filterBy(features, opt)}/>
            )
         }
         
         <style jsx>{`
            main {
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
            }
            main > * {
               margin: 1rem;
            }
         `}</style>
      </main>
   )
}
