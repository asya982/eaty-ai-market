import { Status } from "@/constants/api_response";
import { getUserProducts, orderProducts } from "@/lib/actions/orders";
import { decrypt } from "@/lib/services/sessions";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const orderDTO = req.body; // Parse data from the client
            const session = req.cookies.session
            const { userId } = await decrypt(session);
            if (!userId) res.status(Status.NOT_FOUND);
            const response = await orderProducts(orderDTO, userId);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ status: "SERVER_ERROR", error: error.message });
        }
    }

    if (req.method === "GET") {
        try {
            const session = req.cookies.session
            const { userId } = await decrypt(session);
            if (!userId) res.status(Status.NOT_FOUND);
            const response = await getUserProducts(userId);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ status: "SERVER_ERROR", error: error.message });
        }
    }

    res.status(405).json({ status: "METHOD_NOT_ALLOWED" });
}