import React, { useState, useEffect, useCallback } from 'react'
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

   const fetchData = useCallback(
      async length => {
         let data = []
         try{
            data = await getData(length)
         }catch(err){ console.log(err)}
         setFeatures(data)
      }, 
      [setFeatures]
   )
 
   const opts = Array.from(new Set(features.map( item => item.feature )))
   const nOfFeatures = Math.floor(Math.random()*100)

   useEffect(
      () => {
         setTimeout(
            () => fetchData(nOfFeatures),
            5000
         )
      },
      [fetchData, nOfFeatures]
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
