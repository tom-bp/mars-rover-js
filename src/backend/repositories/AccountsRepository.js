import database from "./database";

export async function doesUsernameExist(username) {
    const result = await database.any("SELECT * FROM accounts WHERE username = $1", [username]);
    return result.length > 0;
}

export async function doesUsernameAndPasswordExist(name,username, password) {
    const result = await database.any(`SELECT * FROM accounts WHERE name = $1 AND username = $2 AND password = $3`, [
        name,
        username,
        password,
    ]);

    return result.length > 0;
}

export async function addUserToDatabase(name, username, password) {
    await database.any(
      `INSERT INTO accounts (name, username, password) VALUES ($1, $2, $3);`,
      [name, username, password]
    );
}