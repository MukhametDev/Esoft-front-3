import React from 'react'
import { ImCross } from 'react-icons/im'

type Item = {
  id: string
  competency: string
  description: string
  level: string
}

interface IPropsCardCompetencies {
  content: string
  description: string
  level: string
  data: Item[]
  setData: (value: Item[]) => void
  onDeleteItem: (id: string) => void
  id: string
}

const CardCompetencies: React.FC<IPropsCardCompetencies> = ({
  content,
  level,
  description,
  onDeleteItem,
  id,
}) => {
  const handleDeleteItemFromArray = () => {
    onDeleteItem(id)
  }
  return (
    <li
      key={id}
      className='flex flex-col relative hover:bg-gradient-to-r from-yellow-400 to-red-500 p-5 cursor-pointer lg:p-[30px] rounded-[10px] text-center border-solid border-b-slate-600 border-[1px] transition duration-300 transform lg:hover:-translate-y-2 md:hover:-translate-y-2 hover:text-white min-h-[100%] text-[14px] lg:text-[20px]'
    >
      {content}
      <span>Уровень владения: {level}%</span>
      <p>{description}</p>
      <ImCross
        onClick={(e) => handleDeleteItemFromArray(e)}
        className='absolute text-[14px] cursor-pointer top-[5%] right-[4%]'
      />
    </li>
  )
}

export default CardCompetencies
