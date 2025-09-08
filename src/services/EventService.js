import { callApi } from "../utils/api";

export const fetchEvents = (payload) => {

    return callApi('GET', '/events', payload)
}