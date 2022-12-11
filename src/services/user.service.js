import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

const allUsers = () => {
    return axios.get(API_URL + "admin/allusers", { headers: authHeader() });
};

const allRoles = () => {
    return axios.get(API_URL + "admin/allroles", { headers: authHeader() });
};



export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
    allUsers,
    allRoles,
};