import React from 'react'

interface IPropsButton {
  text: string
  onClick: () => void
}

const Button: React.FC<IPropsButton> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='focus:bg-red-500 text-[#f4f4f4]  bg-[#47e000] p-[10px] rounded-[10px] lg:text-[18px] text-[14px]'
    >
      {text}
    </button>
  )
}

export default Button
