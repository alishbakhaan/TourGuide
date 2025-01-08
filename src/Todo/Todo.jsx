import React from 'react'
import CitySpecial from './CitySpecial'
import Gallery from '@/landingpage/Gallery'
import Stories from '@/landingpage/Stories'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <div className='pt-32'>
      <TodoList/>
      <CitySpecial/>
      <Gallery/>
      <Stories/>
    </div>
  )
}

export default Todo