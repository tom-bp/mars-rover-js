import database from "./database";

export async function doesUsernameExist(name) {
    const result = await database.any("SELECT * FROM Account WHERE name = $1", [name]);

    return result.length > 0;
}

export async function doesUsernameAndPasswordExist(name, password) {
    const result = await database.any(`SELECT * FROM Account WHERE name = $1 AND password = $2`, [
        name,
        password,
    ]);

    return result.length > 0;
}
