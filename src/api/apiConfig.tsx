export const PATHS = {
    LOGIN: getAuthenticationPath("auth/local"),
    SIGNUP: getAuthenticationPath("auth/local/register"),
    CHANGE_PASS: getAuthenticationPath("auth/change-password"),
    CAROUSELS: getV1Path("carousel/list")
};

function getAuthenticationPath(path: string){
    return `${process.env.REACT_ENDPOINT}/api/${path}`
}

function getV1Path(path: string){
    return `${process.env.REACT_ENDPOINT}/api/v1/${path}`
}