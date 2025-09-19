import { callApi } from "../utils/api";

export const fetchEvents = (params) => {

    return callApi('GET', '/events', {}, params)
}

export const eventDetail = (id) => {

    return callApi('GET', `/event/${id}`)
}

export const collectedAmount = (id) => {

    return callApi('GET', `/event/${id}/collected-amount`)
}

export const reserveTicket = (payload) => {

    return callApi('POST', `/reserve-ticket`, payload)
}