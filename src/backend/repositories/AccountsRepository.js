import database from "./database";

export async function getAccount(username) {
    const result = database.any("SELECT * FROM accounts WHERE name = $1", [username]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function getAllAccounts() {
    return await database.any("SELECT * FROM accounts");
};
