import faker from 'faker'
import { QualityType } from 'components/utils'

const features = ['seam', 'slot', 'hole']
const names = ['x', 'y', 'z', 'diameter']

export const getRandomItem = (items, module) => {
   let i = (Math.random() * 1000)
   i = Math.floor(i) % module
   
   return items[i]
}
export default function getData(length){
   let data = new Array(length).fill(0)

   data = data.map( item => (
      {
         feature: getRandomItem(features, 3),
         name: getRandomItem(names, 4),
         dev: faker.random.number(),
         devOutTol: faker.random.number(),
         expected: getRandomItem(
            [QualityType.ERROR,QualityType.SUCCESS,QualityType.WARNING],
            3
         )
      }
   ))

   return data
}