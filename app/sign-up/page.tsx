'use client'

import React, { FormEvent, useState } from 'react'
import { Form } from '@nextui-org/form'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { TUser } from '@/types/user'
import { AuthLayout } from '@/components/auth/auth-layout'
import { redirect } from 'next/navigation'
import { createUser } from '@/lib/actions/auth'

const SignUp = () => {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<TUser> & { server?: string }>({})

  const getPasswordError = (value: string) => {
    if (value.length < 8) {
      return 'Password must be 8 characters or more'
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return 'Password needs at least 1 uppercase letter'
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return 'Password needs at least 1 symbol'
    }

    return null
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as TUser

    const newErrors: Partial<TUser> = {}

    const passwordError = getPasswordError(data.password || '')

    if (passwordError) {
      newErrors.password = passwordError
    }

    if (data.name === 'admin') {
      newErrors.name = 'Nice try! Choose a different username'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    setErrors({})
    const { status, error } = await createUser(data)
    if (status === 201) redirect('/')
    setErrors(prev => ({ ...prev, server: error }))
    setIsLoading(false)
  }

  return (
    <AuthLayout isSignUp serverError={errors.server}>
      <Form
        className='w-full justify-center items-center space-y-4'
        validationBehavior='native'
        validationErrors={errors}
        onSubmit={onSubmit}
      >
        <div className='flex flex-col gap-4 max-w-md'>
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return 'Please enter your name'
              }

              return errors.name
            }}
            label='Name'
            labelPlacement='outside'
            name='name'
            placeholder='Enter your name'
          />

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
            errorMessage={getPasswordError(password)}
            isInvalid={getPasswordError(password) !== null}
            label='Password'
            labelPlacement='outside'
            name='password'
            placeholder='Enter your password'
            type='password'
            value={password}
            onValueChange={setPassword}
          />

          <div className='flex gap-4'>
            <Button
              className='w-full'
              color='warning'
              type='submit'
              style={{ color: 'white' }}
              isLoading={isLoading}
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </AuthLayout>
  )
}

export default SignUp
