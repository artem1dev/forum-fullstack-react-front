import axios from "axios";
import { LoginUser, RegisterUser } from "../interfaces/user";

export const signUp = async (user: RegisterUser) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL_V_1_1}/auth/register`, user);
        return response; // This will include the response data, status, and other information
    } catch (error) {
        // Handle or throw the error as needed
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const signIn = async (user: LoginUser) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL_V_1_1}/auth/login`, user);
        return response; // This will include the response data, status, and other information
    } catch (error) {
        // Handle or throw the error as needed
        console.error("Error fetching users:", error);
        throw error;
    }
};
