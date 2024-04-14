import React from 'react'

interface IPropsFooter {}

const Footer: React.FC<IPropsFooter> = () => {
  return (
    <footer className='flex justify-center fixed bottom-0 w-full h-auto'>
      <span className='font-bold'>© Все права защищены</span>
    </footer>
  )
}

export default Footer
