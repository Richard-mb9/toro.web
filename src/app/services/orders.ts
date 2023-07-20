import api from './baseApi';

interface ICreateOrder {
    symbol: string;
    amount: number;
}

interface IResponseCreateOrder{
    order: number
}

export async function createOrder(data: ICreateOrder){
    return api.post<IResponseCreateOrder>('/order', data)
}