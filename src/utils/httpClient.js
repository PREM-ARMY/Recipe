import axios from "axios";
export const httpClient = axios.create({
    baseURL: `https://dummyjson.com/recipes`,
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("authToken")}` || null,
    },
});