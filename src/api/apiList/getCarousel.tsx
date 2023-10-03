import api from "..";
import { PATHS } from "../apiConfig";

const get_list =async (params: any) => {
    return await api.get(PATHS.CAROUSELS, params);
};

export default {
    get_list
}