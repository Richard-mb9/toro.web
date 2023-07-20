export interface IAsset {
    symbol: string;
    name: string;
    current_price: number;
}

export interface IPurchasedAsset {
    symbol: string;
    name: string;
    price: number;
    quantity: number
}

export interface ITrend {
    current_price: number;
    symbol: string;
    sold: number;
    name: string;
}