'use server'

import { createSession, deleteSession } from '@/lib/services/sessions'
import { User } from '@/models/User'
import { TLoginInfoDto } from '@/types/dto/user.dto'
import { TUser } from '@/types/user'
import { comparePasswords, hashPassword } from '@/utils/passwordHelpers'
import { getUserByEmail } from './users'
import { Errors, Status } from '@/constants/api_response'
import { createAction } from '@/utils/actions'
import { TApiResponse } from '@/types/api'

export const createUser = async (userData: TUser): Promise<TApiResponse> => {
  return await createAction(async () => {
    const isAlreadyExists = await getUserByEmail(userData.email)

    if (isAlreadyExists)
      return {
        status: Status.BAD_REQUEST,
        error: Errors.ALREADY_EXISTS('User'),
      }

    userData.password = await hashPassword(userData.password)

    const user = await User.create(userData)

    await createSession((user._id as string).toString(), user.name)

    return { status: Status.CREATED }
  })
}

export const login = async (userDTO: TLoginInfoDto): Promise<TApiResponse> => {
  return await createAction(async () => {
    const user = await getUserByEmail(userDTO.email)

    if (!user) {
      return { status: Status.NOT_FOUND }
    }

    const checkedPassword = await comparePasswords(
      userDTO.password,
      user.password,
    )

    if (!checkedPassword) {
      return {
        status: Status.INVALID_CREDENTIALS,
        error: Errors[Status.INVALID_CREDENTIALS] as string,
      }
    }

    await createSession(user._id.toString(), user.name)

    return { status: Status.SUCCESS }
  })
}

export async function logout() {
  deleteSession()
}
