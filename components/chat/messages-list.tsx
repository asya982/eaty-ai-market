import React, { FC } from 'react'
import Message from './message'
import { TMessage } from '@/types/chat'

export const SenderType = ['USER', 'CHAT']

type TMessagesListProps = {
  history: TMessage[]
}

const MessagesList: FC<TMessagesListProps> = ({ history }) => {
  return (
    <div className='flex flex-col gap-4'>
      {history.map(message => (
        <Message
          key={`message${message.date}`}
          message={message.message}
          date={message.date}
          cardStyles={
            message.sender === 'USER' ? 'bg-red-200' : 'bg-yellow-200'
          }
          containerStyles={
            message.sender === 'USER' ? 'self-end items-end' : ''
          }
          recommendations={message.recommendation}
        />
      ))}
    </div>
  )
}

export default MessagesList
