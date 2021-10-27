import pgp from "pg-promise";
import {connectionString} from "../config.js";

const database = pgp()(connectionString);

export default database;
