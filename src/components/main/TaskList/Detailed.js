import React from 'react'
import { useDispatch } from 'react-redux'

// IMAGES
import Info from '../../../images/info.svg'
import Trash from '../../../images/trash.svg'
import Check from '../../../images/check.svg'

import { setDeleteId, setDeleteAction } from '../../../features/taskList'

const Detailed = (props) => {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    const id = e.currentTarget.id
    const action = "remove"

    dispatch(setDeleteId({value: id}))
    dispatch(setDeleteAction({value: action}))

  }

  const handleDone = (e) => {
    const id = e.currentTarget.id
    const action = "finish"

    dispatch(setDeleteId({value: id}))
    dispatch(setDeleteAction({value: action}))

  }

  return (
    <div className='bg-side w-full h-auto mt-7 border-l-4 border-barney rounded text-white font-poppins task-list-detailed py-4 pl-6'>

      <h2 className='ml-3 task-name-detailed'>Task: <span className='opacity-50'>{props.task}</span></h2>

      <h2 className='ml-3 task-subject-detailed'>Subject: <span className='opacity-50'>{props.subject}</span></h2>

      <h2 className='ml-3 task-created-detailed'>Date Created: <span className='opacity-50'>{props.created}</span></h2>

      <h2 className='task-deadline-detailed ml-5'>Deadline: <span className='p-2 bg-[#22222E]'>{props.deadline}</span></h2>

      <img src={Trash} alt="Trash" className='w-6 task-delete-detailaed ml-3 cursor-pointer' id={props.id} onClick={handleDelete}></img>

      <div className='w-fit h-auto flex justify-center items-center border-2 border-bOutline p-3 px-6 task-done-detailed mr-5 cursor-pointer hover:bg-green-700 hover:border-green-700 transition-all ease-in-out' id={props.id} onClick={handleDone}>
        <img src={Check} alt="Check" className='w-4 h-4'></img>
        <h2 className='ml-2'>Done</h2>
      </div>
    </div>
  )
}

export default Detailed