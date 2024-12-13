"use server";
import dbConnect from "@/lib/dbConnect";
import { createSession, deleteSession } from "@/lib/services/sessions";
import User from "@/models/User";
import { TLoginInfoDto } from "@/types/dto/user.dto";
import { TUser } from "@/types/user";
import { comparePasswords, hashPassword } from "@/utils/passwordHelpers";
import { getUserByEmail } from "./users";
import { Errors, Status } from "@/constants/api_response";
import { seedDatabase } from "../seeds/seed";

export const createUser = async (userData: TUser) => {
  try {
    await dbConnect();
    await seedDatabase()
    const isAlreadyExists = await getUserByEmail(userData.email);

    if (isAlreadyExists) return { status: Status.BAD_REQUEST, error: Errors.ALREADY_EXISTS('User') };

    userData.password = await hashPassword(userData.password);

    const user = await User.create(userData);

    await createSession(user._id, user.name);

    return { status: Status.CREATED, name: user.name };
  } catch (error) {
    return { status: Status.SERVER_ERROR, error: error.message };
  }
};

export const login = async (userDTO: TLoginInfoDto) => {
  try {
    await dbConnect();
    const user = await getUserByEmail(userDTO.email);

    if (!user) {
      return { status: Status.NOT_FOUND };
    }

    const checkedPassword = (await comparePasswords(userDTO.password, user.password))

    if (!checkedPassword) {
      throw { status: Status.INVALID_CREDENTIALS, error: Errors[Status.INVALID_CREDENTIALS] }
    }

    await createSession(user._id, user.name);

    return { status: Status.SUCCESS };
  } catch (error) {
    return { status: Status.SERVER_ERROR, error: error };
  }
};

export async function logout() {
  deleteSession();
}
