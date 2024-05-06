export interface LoginUser {
    login: string;
    password: string;
}

export interface RegisterUser extends LoginUser {
    confirmPassword: string;
}
