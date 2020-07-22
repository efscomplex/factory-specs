import React from 'react'
import styled from 'styled-components'
import Badge from 'components/base/Badge'

function Control({name, dev, devOutTol, expected}){

   return (
      <>
         <span className="controlField"> {name} </span>
         <span> {dev} </span>
         <span> {devOutTol} </span>
         <Badge expected={expected}/>
         <style jsx>{`
            .controlField {
               text-align: left;
            }
         `}</style>
      </>
   )
}

export default styled(Control)`
   text-align: center;

   span:first-child {
      text-align: left;
   }
`