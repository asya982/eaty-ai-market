import { Status } from "@/constants/api_response";
import dbConnect from "@/lib/dbConnect";
import { verifySession } from "@/lib/services/sessions";

export const createAction = async (callback: () => Promise<any>, isProtected = false) => {
    try {
        if (isProtected) {
            const { isAuth } = await verifySession()
            if (!isAuth) return { status: Status.FORBIDDEN }
        }
        await dbConnect();
        return await callback()
    } catch (error) {
        return { status: Status.SERVER_ERROR, error: error.message };
    }
}