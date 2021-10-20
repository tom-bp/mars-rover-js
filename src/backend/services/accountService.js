import { secret } from "../config";
import * as AccountsRepository from "../repositories/AccountsRepository";

export function doesUsernameAndPasswordExist(name, password) {
    AccountsRepository.doesUsernameAndPasswordExist(name, password).then((canLogin) => {
        if (canLogin) {
            return createTokenForUser(name);
        }
        return null;
    });
}
function createTokenForUser(name) {
    return jwt.sign({ name: name }, secret);
}
