import axio from "axios";

const api = axio.create({
    baseURL: "http://localhost:3333/",
});

export default api;
