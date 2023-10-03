import api from "..";
import { PATHS } from "../apiConfig";

const login = async (body: {idetifier: string, password: string}) => {
    return await api.post(PATHS.LOGIN, body)
};

const sign_up =async (body: {username: string, email: string, password: string}) => {
    return await api.post(PATHS.SIGNUP, body)
};

export default {
    login,
    sign_up
}