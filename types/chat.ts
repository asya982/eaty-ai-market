import { Sender } from "@/enums/chat";
import { TProducts } from "./products";

export type TMessage = {
    sender: Sender;
    message: string;
    date: Date;
    recommendation?: TProducts[]
}