import React from 'react'
import { Coffee } from '@geist-ui/icons'

const Loading = () => {
  return (
    <div className='w-full h-[45vh] flex justify-center items-center gap-4 flex-col'>
      <Coffee className='animate-pulse' size={36} />
      <p className='text-gray-600'>Give us a second</p>
    </div>
  )
}

export default Loading
