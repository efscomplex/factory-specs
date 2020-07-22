import React from 'react'
import styled from 'styled-components'
import Control from 'components/base/Control'

import { getExpectedColor } from 'components/utils'
import Badge from 'components/base/Badge'

export default function({name, expected, controls=[]}){
   const nOfCtrls = controls.length
   const maxCtrls = 12
   const cols = new Array(Math.floor(nOfCtrls / maxCtrls) + 1).fill(0) 
   
   return (
      <Card>
         <Card.Header expected={expected}>
            <Badge empty/>
            <h4> {name} </h4>
            <Badge expected={expected}/>
         </Card.Header>
         <Card.Section cols={cols.length}>{ 
            cols.map( 
               (cols,i) => 
                  <Card.Body key={i}>
                     <Hd/>
                     {
                        controls.slice(i*maxCtrls, (i+1)*maxCtrls).map(
                           (control, k) => <Control key={k} {...control}/>
                        )
                     }
                  </Card.Body>
            )
         }</Card.Section>
         <style jsx>{`
            .headline {
               font-weight: bold;
            }   
            .headline:first-child { text-align: left; }
         `}</style>
      </Card>
   )
}

const Hd = () => <> 
   <span className="headline">Control</span>
   <span className="headline">Dev</span>
   <span className="headline">Dev Out Tol</span>
   <span className="headline"></span>
</>

const Card = styled.div `
   & > * {padding: 2rem;}
   border-radius: 3px;
   background-color: var(--gray);
`
Card.Header = styled.header `
   display: flex;
   justify-content: space-between;
   text-transform: capitalize;
   background-color: ${ props => getExpectedColor(props.expected) };
   color: white;
   @media (max-width: 768px) {
      text-align: center;
   }
`
Card.Body = styled.div `
   display: grid;
   grid-template-columns: repeat(3, 1fr) min-content;
   grid-gap: 1.4rem;
 
   text-align: center;
   
   background-color: var(--gray);
   color: var(--light);
`
Card.Section = styled.section`
   display:grid;
   grid-template-columns: ${ props => `repeat(${props.cols}, 1fr)`};
   grid-gap: 5rem;
   align-items: start;
`