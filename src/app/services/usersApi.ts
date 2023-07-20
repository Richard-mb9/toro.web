import { IAccountData, IUserPosition } from "../commons/interfaces";
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
    return api.post<IResponseCreateUser>('/users', data);
}

export async function getPosition(){
    return api.get<IUserPosition>('/users/position');
}

export async function getAccountData(){
    return api.get<IAccountData>('/users/account');
}