'use client'

import React, { FormEvent, useState } from 'react'

import { redirect, useSearchParams } from 'next/navigation'
import { Form } from '@nextui-org/form'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

import { login } from '@/lib/actions/auth'
import { TLoginInfoDto } from '@/types/dto/user.dto'
import { AuthLayout } from '@/components/auth/auth-layout'
import { XOctagon } from '@geist-ui/icons'

export default function Login() {
  const redirected = useSearchParams()?.get('redirected')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ server?: string }>({})

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as TLoginInfoDto

    const { status, error } = await login(data)
    if (status === 200) redirect('/')
    setErrors({ server: error })
    setIsLoading(false)
  }

  return (
    <AuthLayout serverError={errors.server}>
      {redirected && (
        <div className='flex absolute bg-red-500/35 p-5 text-gray-700 gap-3 rounded-md top-7'>
          <XOctagon color='red' /> You should login first!
        </div>
      )}
      <Form
        className='justify-center items-center w-full space-y-4'
        validationBehavior='native'
        onSubmit={onSubmit}
      >
        <div className='flex flex-col gap-4 max-w-md'>
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return 'Please enter your email'
              }
              if (validationDetails.typeMismatch) {
                return 'Please enter a valid email address'
              }
            }}
            label='Email'
            labelPlacement='outside'
            name='email'
            placeholder='Enter your email'
            type='email'
          />

          <Input
            isRequired
            label='Password'
            labelPlacement='outside'
            name='password'
            placeholder='Enter your password'
            type='password'
          />

          <Button
            className='w-full'
            color='warning'
            type='submit'
            isLoading={isLoading}
            style={{ color: 'white' }}
          >
            Log in
          </Button>
        </div>
      </Form>
    </AuthLayout>
  )
}
