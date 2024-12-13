import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'
import { decrypt } from '@/lib/services/sessions'
import { Routes } from '@/enums/routes'

const protectedRoutes = [Routes.CART, Routes.CHAT] as string[]

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(
      new URL(`${Routes.LOG_IN}?redirected=true`, req.nextUrl),
    )
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
