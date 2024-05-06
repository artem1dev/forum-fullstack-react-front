import { LoginUser, RegisterUser } from "../interfaces/user";
import { signIn, signUp } from "./axios.service";

export const signUpNewUser = async (user: RegisterUser) => {
    try {
        const response = await signUp(user);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            throw new Error(error.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};

export const signInUser = async (user: LoginUser) => {
    try {
        const response = await signIn(user);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            throw new Error(error.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};
