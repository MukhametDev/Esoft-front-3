import React from 'react'

interface IPropsCardNewCompetency {
  content: string
}

const CardNewCompetency: React.FC<IPropsCardNewCompetency> = ({ content }) => {
  return (
    <li className='min-h-[100%] text-center cursor-pointer lg:p-[30px] md:p-[25px] p-[20px] rounded-[10px] text-center border-solid border-b-slate-600 border-[1px] hover:text-white text-gray-800 transition duration-300 transform hover:scale-100 bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 md:hover:scale-105'>
      {content}
    </li>
  )
}

export default CardNewCompetency
