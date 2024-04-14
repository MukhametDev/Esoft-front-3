import React, { useState, useRef } from 'react'
import CardsCompetencies from './../CardsCompetencies'
import CardsNewCompetencies from './../CardsNewCompetencies'
import Button from './../UI/Button'
import Popup from './Popup'

type Item = {
  id: string
  competency: string
  description: string
  level: string
}

interface IPropsMainContent {
  showTextButton: boolean
  data: Item[]
  newData: Item[]
  setShowTextButton: (value: boolean) => void
  setData: (value: Item[]) => void
  setNewData: (value: Item[]) => void
}

const MainContent: React.FC<IPropsMainContent> = ({
  showTextButton,
  data,
  newData,
  setShowTextButton,
  setData,
  setNewData,
}) => {
  const originalDataRef = useRef<Item[]>(data)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  console.log(data)
  const handleShowTextButton = () => {
    setShowTextButton(!showTextButton)
  }

  const handleSortElementsByLevelMoreThan50 = () => {
    const sortArr = data.filter((item) => {
      return +item.level > 50
    })
    setData(sortArr)
  }

  const handleSortElementsByLevelLessThan50 = () => {
    const sortArr = data.filter((item) => {
      return +item.level < 50
    })
    setData(sortArr)
  }

  const handleOriginalStateArray = () => {
    setData(originalDataRef.current)
  }

  const handleShowPopup = () => {
    setShowPopup(true)
  }
  return (
    <main className='text-center'>
      <div className='lg:mb-[30px] md:mb-[20px] mb-[10px] lg:flex lg:flex-row justify-between items-center md:flex md:flex-row flex flex-col'>
        <div className='flex flex-col gap-[10px]'>
          {showTextButton ? (
            <Button onClick={handleShowTextButton} text='Скрыть компетенции' />
          ) : (
            <Button onClick={handleShowTextButton} text='Показать компетенции' />
          )}
          <Button onClick={handleShowPopup} text='Создать навык' />
        </div>
        <Popup data={data} setData={setData} setShowPopup={setShowPopup} showPopup={showPopup} />
        <div className='flex flex-col gap-[10px] items-center'>
          <h3 className='md:text-[18px] lg:text-[25px] text-[14px]'>Методы сортировки</h3>
          <div className='flex flex-col gap-[5px] items-center md:flex-row md:gap-[10px] md:items-start md:flex-nowrap'>
            <Button onClick={handleSortElementsByLevelMoreThan50} text='Уровень владения > 50%' />
            <Button onClick={handleSortElementsByLevelLessThan50} text='Уровень владения < 50%' />
          </div>
          <Button onClick={handleOriginalStateArray} text='Сбросить фильтр' />
        </div>
      </div>

      {showTextButton ? (
        <CardsCompetencies setData={setData} data={data} />
      ) : (
        <p className='text-gradient bg-gradient-to-r from-red-800 via-blue-800 to-green-800 bg-clip-text text-transparent animate-gradient'>
          Нажмите на кнопку "Показать компетенции", чтобы увидеть навыки
        </p>
      )}

      <div className='text-center lg:text-[25px] text-[16px] md:text-[20px] lg:mb-[30px] md:mb-[20px] mb-[10px]'>
        Технологии, которые я хочу изучить
      </div>
      <CardsNewCompetencies newdata={newData} />
    </main>
  )
}
export default MainContent
