'use client'
import React from 'react'

import { Accordion, AccordionItem } from '@nextui-org/accordion'

export const AccordionSection = () => {
  return (
    <section className='flex mt-[20vh] p-5 h-[50vh] items-center justify-evenly'>
      <Accordion className='w-3/6'>
        <AccordionItem
          key='1'
          aria-label='Accordion 1'
          title='Personalized Recommendations'
        >
          <p>
            Powered by advanced AI, Eaty suggests products based on your
            preferences, shopping history, and dietary needs.
          </p>
        </AccordionItem>
        <AccordionItem
          key='2'
          aria-label='Accordion 2'
          title='Simplified Search'
        >
          <p>
            Use our intuitive filters and search tools to browse products by
            categories, brands, or even ingredients.
          </p>
        </AccordionItem>
        <AccordionItem
          key='3'
          aria-label='Accordion 3'
          title='Smart Shopping List'
        >
          <p>
            Tell our chatbot what you need, and it will generate a curated
            shopping list for you in seconds.
          </p>
        </AccordionItem>
      </Accordion>
      <h3 className='text-4xl font-playfair underline'>Why Choose Eaty?</h3>
    </section>
  )
}
