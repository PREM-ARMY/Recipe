import axios from "axios";

const baseUrl = `https://dummyjson.com/`

export const httpClient = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("authToken")}` || null,
    },
});