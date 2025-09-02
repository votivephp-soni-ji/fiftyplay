import { callApi } from "../utils/api";

export const fetchEvents = (payload) => {

    return callApi('GET', '/auth/login', payload)
}