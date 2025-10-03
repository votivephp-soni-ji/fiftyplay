import { callApi } from "../utils/api";

export const contactLead = (payload) => {
    return callApi("post", "/contact-lead", payload);
};

export const fetchNotifications = () => {
    return callApi("GET", "/notifications");
}

