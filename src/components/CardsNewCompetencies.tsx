import React from 'react'
import CardNewCompetency from './CardNewCompetency'

interface INewData {
  id: number
  competency: string
}

interface IPropsCardsNewCompetencies {
  newdata: INewData[]
}

const CardsNewCompetencies: React.FC<IPropsCardsNewCompetencies> = ({ newdata }) => {
  return (
    <ul className=' text-[14px] lg:text-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[20px] justify-center items-start mb-[30px]'>
      {newdata.map((item) => {
        return <CardNewCompetency key={item.id} content={item.competency} />
      })}
    </ul>
  )
}

export default CardsNewCompetencies
