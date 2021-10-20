const db = require("./db");

function doesUsernameExist(name) {
    return db.any("SELECT * FROM Account WHERE name = $1", [name]).then((accounts) => {
        return accounts.length > 0;
    });
}

function doesUsernameAndPasswordExist(name, password) {
    return db
        .any(`SELECT * FROM Account WHERE name = $1 AND password = $2`, [name, password])
        .then((accounts) => {
            return accounts.length > 0;
        });
}

module.exports = {
    doesUsernameExist: doesUsernameExist,
    doesUsernameAndPasswordExist: doesUsernameAndPasswordExist,
};