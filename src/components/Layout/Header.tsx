import React from 'react'
import photo from './../../images/unnamed.jpg'

interface IPropsHeader {}

const Header: React.FC<IPropsHeader> = () => {
  return (
    <header className='flex flex-col items-center justify-center text-center lg:mb-[30px] md:mb-[20px] mb-[10px]'>
      <img className='rounded-[50%] w-[20vw] pt-[20px] h-auto' src={photo} alt='photo_profile' />
      <h2 className='lg:text-[30px] md:text-[25px] text-[16px] font-bold   bold lg:mb-[30px]'>
        Жанбеков Мухаметжан Жабаевич
      </h2>
      <div className='lg:text-[25px] text-[16px] md:text-[20px]'>Мои компетенции</div>
    </header>
  )
}

export default Header
