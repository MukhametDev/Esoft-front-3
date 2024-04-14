import React, { useState } from 'react'
import Button from '../UI/Button'
import { ImCross } from 'react-icons/im'
import { v4 as uuidv4 } from 'uuid'

type Item = {
  id: number
  competency: string
  description: string
  level: string
}

interface IPropsPopup {
  showPopup: boolean
  setShowPopup: (value: boolean) => void
  data: Item[]
  setData: (value: Item[]) => void
}

const Popup: React.FC<IPropsPopup> = ({ showPopup, setShowPopup, setData, data }) => {
  const [newData, setNewData] = useState<Item>({
    id: 0,
    competency: '',
    description: '',
    level: '',
  })

  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewData((prevData) => ({
      ...prevData,
      id: uuidv4(),
      [name]: value,
    }))
  }

  const handleAddDataToArray = () => {
    const updatedData = [...data, newData]
    setData(updatedData)
    setNewData({
      id: uuidv4(),
      competency: '',
      description: '',
      level: '',
    })
    setShowSuccessPopup(true)
  }

  return (
    <>
      {showPopup && (
        <div className='fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-[30px] rounded-lg relative'>
            <h2 className='mb-[10px] text-[20px]'>Форма создания навыка</h2>
            <ImCross
              onClick={handleClosePopup}
              className='absolute cursor-pointer top-[2%] right-[2%]'
            />
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleAddDataToArray()
              }}
              className='flex flex-col gap-[15px]'
            >
              <input
                name='competency'
                value={newData.competency}
                onChange={handleInputChange}
                className='block w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-indigo-500 p-[5px] border-solid border-[1px]'
                type='text'
                placeholder='Введите название навыка'
              />
              <textarea
                name='description'
                value={newData.description}
                onChange={handleInputChange}
                className='block w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-indigo-500 p-[5px] border-solid border-[1px]'
                placeholder='Введите описание компетенции'
              ></textarea>
              <input
                name='level'
                value={newData.level}
                onChange={handleInputChange}
                type='number'
                className='p-[5px] border-solid border-[1px] appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-indigo-500'
                placeholder='Введите уровень владения данным навыком'
              />
              <Button type='submit' text='Создать' />
            </form>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className='fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-[30px] rounded-lg relative'>
            <h2 className='mb-[10px] text-[20px]'>Успешно создано!</h2>
            <Button onClick={() => setShowSuccessPopup(false)} text='Закрыть' />
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
