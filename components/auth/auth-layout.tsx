import React, { FC, ReactNode } from 'react'
import logo from '@/assets/store.png'
import Image from 'next/image'
import Link from 'next/link'
import { Routes } from '@/enums/routes'

type TAuthLayoutProps = {
  children: ReactNode
  isSignUp?: boolean
  serverError?: string
}

export const AuthLayout: FC<TAuthLayoutProps> = ({
  children,
  isSignUp = false,
  serverError,
}) => {
  const title = isSignUp
    ? 'Create new account in Eaty!'
    : 'Welcome back to the Eaty!'
  return (
    <section className='flex w-full h-[90vh] gap-10 flex-col justify-center items-center'>
      <div className='flex flex-col gap-2 items-center'>
        <Link href={Routes.INDEX}>
          <Image src={logo} alt='eaty-logo' className='w-28 h-28' />
        </Link>
        <h2 className='font-playfair font-bold text-2xl'>{title}</h2>
        <p className='font-playfair'>Your AI friend in shopping</p>
      </div>
      {children}
      {serverError && <p className='text-red-500'>{serverError}</p>}
      <p>
        {isSignUp ? 'Already' : "Don't"} have an account?{' '}
        <Link
          className='text-yellow-500 underline hover:text-orange-500'
          href={isSignUp ? '/log-in' : '/sign-up'}
        >
          {isSignUp ? 'Log in' : 'Sign up'}
        </Link>
      </p>
    </section>
  )
}
