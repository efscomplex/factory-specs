import React from 'react'
import { getExpectedColor } from 'components/utils'

export default function({expected, empty}){

   const color = getExpectedColor(expected) 
   const isNulish = typeof expected === 'undefined'

   let badge = '!'
   if (!isNulish && !expected) {
      badge = 'X'
   } else if ( !isNulish ){
      badge = '✓'
   } else if ( empty ) {
      badge = ''
   }

   const badgeStyle = {
      color,
      backgroundColor: empty ? 'transparent' :  'white',
      border: `2px solid ${empty ? 'white' : color}`
   }

   return (
      <div className="badge" style={badgeStyle}>
         {badge}
         <style jsx>{`
            .badge {
               font-size: 18px;
               border-radius: 50%;
               padding: 12px;
               height: 1rem;
               width: 1rem;
               display: flex;
               justify-content: center;
               align-items: center;
            }
         `}</style>
      </div>
   )
}