export interface DbResult {
    users?: DbUser[];
    items?: DbItem[];
    accounts?: DbAccount[];
    purchases?: DbPurchase[];
}

export interface DbUser {
    user_id: number;
    first_name: string;
    last_name: string;
    password: string;
}

export interface DbAccount {
    account_id: number;
    user_id: number; //typeof DbUser.user_id
    user_money: number;
}

export interface DbItem {
    item_id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface DbPurchase {
    purchase_id: number;
    purchase_quantity: number;
    item_id: number;
    user_id: number;
}

export interface DbQueryResponse {
    query: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
}
