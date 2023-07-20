import api from './baseApi';

import { IAsset } from '../commons/interfaces';

export async function listAssets(){
    return api.get<IAsset[]>("/assets")
}