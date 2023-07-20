import { ITrend } from '../commons/interfaces';
import api from './baseApi';


export async function getTrends(){
    return api.get<ITrend[]>('/trends');
}