import { callApi } from "../utils/api";

export const contactLead = (payload) => {
    return callApi("post", "/contact-lead", payload);
};
