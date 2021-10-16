import database from "./database";

export async function get(id) {
    const result = database.any("SELECT * FROM quotations WHERE id = $1", [id]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function getAll() {
    return await database.any("SELECT * FROM quotations");
}
