import MessagesList from '@/components/chat/messages-list'
import { Sender } from '@/enums/chat'
import { productsMock } from '@/lib/seeds/constantData'
import { TMessage } from '@/types/chat'
import { Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import React from 'react'

const products = [
  'Organic Gala Apples',
  'Organic Baby Spinach',
  'Carrots',
  'Cucumber',
  'Avocado',
]

const history: TMessage[] = [
  {
    sender: Sender.USER,
    message: 'Hello, I want something healthy for today!',
    date: new Date('2024-12-10T09:45:00'),
  },
  {
    sender: Sender.CHAT,
    message: 'Sure, do you have any allergies I should know about?',
    date: new Date('2024-12-10T09:45:01'),
  },
  {
    sender: Sender.USER,
    message: 'I am allergic to nuts',
    date: new Date('2024-12-10T09:45:30'),
  },
  {
    sender: Sender.CHAT,
    message: `You can have a dinner with Fresh Spinach Salad with Avocado Dressing! 
  Instructions: In a large salad bowl, combine spinach, apple slices, shredded carrots, and cucumber.
For the dressing, mash the avocado in a small bowl until smooth.
Mix in lemon juice, olive oil, salt, and pepper until you achieve a creamy consistency.
Pour the dressing over the salad and toss to coat evenly.
Serve immediately and enjoy a healthy, nut-free meal! Here your list of healthy products, according to your request:`,
    date: new Date('2024-12-10T09:46:30'),
    recommendation: productsMock.filter(({ name }) => products.includes(name)),
  },
]

const Chat = () => {
  return (
    <section className='m-6 flex flex-col max-h-[82vh]'>
      <div className='flex justify-between items-center border-b-2 pb-2'>
        <h1 className='font-playfair font-bold text-2xl'>Eaty AI Chat</h1>
        <div className='text-end text-md'>
          <h2>Generate you product list for today!</h2>
          <h2>Hesitate what to take? No worries, we can handle it!</h2>
        </div>
      </div>
      <section className="bg-[url('@/assets/chat.jpg')] rounded-xl flex-1 overflow-auto bg-cover p-6">
        <MessagesList history={history} />
      </section>
      <div className='flex w-full mt-4 items-center gap-3 h-full'>
        <Textarea
          classNames={{
            base: 'w-full',
          }}
          placeholder="Enter your request, f.e. 'I want something spicy today ;)'"
          variant='bordered'
          max={1000}
        />
        <Button color='warning' className='text-white'>
          Send
        </Button>
      </div>
    </section>
  )
}

export default Chat
