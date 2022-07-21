import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDhjYzg0YTU0MGMyYmM1ZTI0OGQ1MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTgzNzUzNzAsImV4cCI6MTY1ODYzNDU3MH0.CbJEFrmlrYaczUUvBRoOaBoOJuLCIsgeMcUSd9kuqUk"


export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});