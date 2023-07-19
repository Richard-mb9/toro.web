import api from "./baseApi";

interface ICreateUser {
    email: string;
    password: string;
    name: string;
    cpf: string;
}

interface IResponseCreateUser {
    id: number
}

export async function createUser(data:ICreateUser){
    return api.post<IResponseCreateUser>('/users', data)
}