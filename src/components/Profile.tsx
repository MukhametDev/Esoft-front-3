import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './Layout/Header'
import MainContent from './Layout/Main'
import Footer from './Layout/Footer'

type Item = {
  id: string
  competency: string
}

const competenciesData = [
  {
    id: uuidv4(),
    competency: 'Javascript и typescript,react',
    description:
      'Javascript - язык программирования для создания веб интерфейсов.Typescript - строго типизированный javascript.React - библиотека javascript. ',
    level: '60',
  },
  {
    id: uuidv4(),
    competency: 'HTML5 и CSS3,кроссбраузерная и адаптивная верстка',
    description: 'HTML5 - язык гипертекстовой разметки.CSS3 - каскадная таблица стилей.',
    level: '90',
  },
  {
    id: uuidv4(),
    competency: 'Препроцессоры scss,less и фреймворки tailwind css, styled components',
    description: 'Данные компетенции относятся к фреймворкам css.',
    level: '60',
  },
  {
    id: uuidv4(),
    competency: 'Node js, работал с фреймворками express js и nest js',
    description: 'node js - язык программрования для написания серверной части приложения.',
    level: '40',
  },
]

const newCompetenciesData = [
  {
    id: uuidv4(),
    competency: 'Next js',
  },
  {
    id: uuidv4(),
    competency: 'TypeORM',
  },
  {
    id: uuidv4(),
    competency: 'Zustand, Mobx',
  },
  {
    id: uuidv4(),
    competency: 'Углубленно Nest js',
  },
  {
    id: uuidv4(),
    competency: 'Углубленно React',
  },
  {
    id: uuidv4(),
    competency: 'RabbitMQ',
  },
  {
    id: uuidv4(),
    competency: 'Apache Kafka',
  },
  {
    id: uuidv4(),
    competency: 'Apollo',
  },
  {
    id: uuidv4(),
    competency: 'Алгоритмы и структуры данных ',
  },
  {
    id: uuidv4(),
    competency: 'Углубленно typescript',
  },
]

interface IPropsProfile {}

const Profile: React.FC<IPropsProfile> = () => {
  const [newData, setNewData] = useState<Item[]>(newCompetenciesData)
  const [data, setData] = useState<Item[]>(competenciesData)
  const [showTextButton, setShowTextButton] = useState<boolean>(false)

  return (
    <div className=''>
      <Header />
      <MainContent
        setShowTextButton={setShowTextButton}
        showTextButton={showTextButton}
        data={data}
        newData={newData}
        setData={setData}
        setNewData={setNewData}
      />
      <Footer />
    </div>
  )
}

export default Profile
