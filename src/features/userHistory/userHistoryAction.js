import { getOrCreateSession } from "../../utils/sessionHistory"
import { createUserHistory, getUserHistory } from "./userHistoryAPI";


export const createUserHistoryAction = async (data) => {
    console.log("creating")
    const { userId } = data;
    const sessionId = !userId ? getOrCreateSession() : null;
    console.log(userId, sessionId)
    try {
        const payload = {
            ...(userId ? { userId } : { guestSessionId: sessionId }),
            ...data
        };
        console.log(payload, 999)

        return await createUserHistory(payload);
    } catch (error) {
        console.log(error?.message)
    }

}

export const getUserHistoryAction = async (data) => {
    try {
        const response = await getUserHistory(data)
        return response
    } catch (error) {
        console.log(error?.message)
    }

}