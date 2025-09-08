import { callApi } from "../utils/api";

export const fetchEvents = (payload) => {

    return callApi('GET', '/events', payload)
}

export const eventDetail = (id) => {

    return callApi('GET', `/event/${id}`)
}