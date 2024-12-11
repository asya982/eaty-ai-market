"use server";
import dbConnect from "@/lib/dbConnect";
import { createSession, deleteSession } from "@/lib/services/sessions";
import User from "@/models/User";
import { TLoginInfoDto } from "@/types/dto/user.dto";
import { TUser } from "@/types/user";
import bcrypt from "bcrypt";

export const createUser = async (userData: TUser) => {
  try {
    await dbConnect();
    const isAlreadyExists = await User.findOne(userData);
    if (isAlreadyExists) return { status: 400 };

    userData.password = await bcrypt.hash(userData.password, 10);

    const user = await User.create(userData);
    await createSession(user._id);
    return { status: 201, name: user.name };
  } catch (error) {
    return { status: 400, error };
  }
};

export const login = async (userDTO: TLoginInfoDto) => {
  try {
    const user = await User.findOne(userDTO);
    if (!user) {
      return { status: 404 };
    }
    await createSession(user._id);
    return { status: 200 };
  } catch (error) {
    return { status: 400, error };
  }
};

export async function logout() {
  deleteSession();
}
