import User, { IUser } from "@/models/User";

export const getUserByEmail = async (email: string) => {
    const user = await User.findOne<IUser>({ email }).lean().exec();
    if (!user) return null;
    return user
}