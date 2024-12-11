import { TUser } from "@/types/user";

export type TLoginInfoDto = Omit<TUser, 'name'>