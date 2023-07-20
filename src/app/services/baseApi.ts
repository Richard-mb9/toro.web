import axios, {InternalAxiosRequestConfig, AxiosResponse} from 'axios';
import {camelizeKeys, decamelizeKeys} from 'humps';


import {BASE_URL} from '../../environment';
import { auth } from '../commons/security';

const createApi = ()=>{
    const api = axios.create({
        baseURL: BASE_URL,
        headers: {'Authorization': `Bearer ${auth.accessToken}`}
    });
    
    api.interceptors.response.use((response: AxiosResponse)=>{
        if(response.data && response.headers['Content-Type'] === 'application/json'){
            response.data = camelizeKeys(response.data);
        }
        return response
    })
    
    api.interceptors.request.use((config: InternalAxiosRequestConfig)=>{
        const newConfig = {...config}
    
        if(newConfig.headers && newConfig.headers['Content-Type'] === 'multipart/form-data'){
            return config;
        }
        if(config.params){
            newConfig.params = decamelizeKeys(config.params);
        }
        if(config.data){
            newConfig.data = decamelizeKeys(config.data);
        }
        return newConfig;
    });

    return api
}

export default createApi();