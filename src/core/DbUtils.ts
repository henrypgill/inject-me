import axios from "axios";
import { DbAccount, DbItem, DbPurchase, DbResult, DbUser } from "./DbTypes";

export async function fetchAllData() {
    console.log("fetching all data");
    // const url = "https://inject-me-server.onrender.com/all-data/"
    const url = "http://localhost:4000/all-data/";
    const users = await axios
        .get<DbUser[]>(url + "users")
        .then((response) => response.data);
    const items = await axios
        .get<DbItem[]>(url + "items")
        .then((response) => response.data);
    const accounts = await axios
        .get<DbAccount[]>(url + "accounts")
        .then((response) => response.data);
    const purchases = await axios
        .get<DbPurchase[]>(url + "purchases")
        .then((response) => response.data);

    const allData: DbResult = {
        users: users,
        items: items,
        accounts: accounts,
        purchases: purchases,
    };

    return allData;
}
