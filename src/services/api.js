import axios, { formToJSON } from "axios";

const API_URL = "https://resume.redberryinternship.ge/api";

const headers = {
    "Content-Type": "application/json",
};

const getDegrees = () => {
    return axios.get(`${API_URL}/degrees`, {
        headers,
    });
};

const createCVHeader = {};

const createCV = (form) => {
    const formToJSONData = formToJSON(form);
    console.log("formToJSONData", formToJSONData);
    return axios.post(`${API_URL}/cvs`, formToJSONData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        // headers: {
        //     "Content-Type": "application/json",
        // },
    });
};

export { getDegrees, createCV };
