import { secret } from "../config";
import * as AccountsRepository from "../repositories/AccountsRepository";
import NotFoundError from "../errors/NotFoundError.js";
import jwt from "jsonwebtoken"

export function getTokenForUser(name, password) {
    return AccountsRepository.doesUsernameAndPasswordExist(name, password).then((canLogin) => {
        if (canLogin) {
            return createTokenForUser(name);
        }
        return undefined
    });
}
function createTokenForUser(name) {
    return jwt.sign({ name: name }, secret);
}

