export interface IAsset {
    symbol: string;
    name: string;
    current_price: number;
}

export interface IPurchasedAsset {
    symbol: string;
    name: string;
    current_price: number;
    quantity: number
}


export interface ITrend {
    current_price: number;
    symbol: string;
    sold: number;
    name: string;
}


export interface IUserPosition{
    checking_account_amount: number;
    positions: IPurchasedAsset[];
    consolidated: number;
}

export interface IAccountData {
    account: string;
    branch: string;
    name: string;
}