import { getOrCreateSession } from "../../utils/sessionHistory"
import { createUserHistory, getRecommendationsApi } from "./userHistoryAPI";
import { setHotPicks } from "./userHistorySlice";


export const createUserHistoryAction = (data) => async (dispatch) => {
    const { userId } = data;
    const sessionId = !userId ? getOrCreateSession() : null;
    try {
        const payload = {
            ...(userId ? { userId } : { guestSessionId: sessionId }),
            ...data
        };

        return await createUserHistory(payload);
    } catch (error) {
        console.log(error?.message)
    }

}

export const getRecommendationsAction = (data) => async (dispatch) => {
    const userId = data
    const sessionId = !userId ? getOrCreateSession() : null;
    try {
        const payload = {
            ...(userId ? { userId } : { guestSessionId: sessionId }),
            ...data
        };
        const { top10Products } = await getRecommendationsApi(payload)
        dispatch(setHotPicks(top10Products))

    } catch (error) {
        console.log(error?.message)
    }

}