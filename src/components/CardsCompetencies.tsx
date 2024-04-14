import React from 'react'
import CardCompetencies from './CardCompetencies'

interface IData {
  id: string
  competency: string
  level: string
  description: string
}

interface IPropsCardsCompetencies {
  data: IData[]
  setData: (value: IData[]) => void
}

const CardsCompetencies: React.FC<IPropsCardsCompetencies> = ({ data, setData }) => {
  const handleDeleteItemFromArray = (id) => {
    const filteredData = data.filter((item) => item.id !== id)
    setData(filteredData)
  }
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:gap-4 gap-2 h-auto items-center justify-center md:mb-[20px] mb-[10px] lg:mb-[30px] text-center'>
      {data.map((item) => {
        return (
          <CardCompetencies
            key={item.id}
            description={item.description}
            level={item.level}
            content={item.competency}
            id={item.id}
            onDeleteItem={handleDeleteItemFromArray}
          />
        )
      })}
    </ul>
  )
}

export default CardsCompetencies
