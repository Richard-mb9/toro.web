import api from "./baseApi";

interface IDataAuthenticate {
    email: string;
    password: string;
}

interface IAuthResponse {
    access_token: string;
    token_type: string;
}

export async function authenticate(data: IDataAuthenticate){
    return api.post<IAuthResponse>('/auth', data)
}