export interface IAsset {
    symbol: string;
    name: string;
    price: number;
}

export interface IPurchasedAsset {
    symbol: string;
    name: string;
    price: number;
    quantity: number
}