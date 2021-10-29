import express from "express";
import { urlencoded, json } from "body-parser";
import apiRoutes from "./backend/apiRoutes.js";
import renderingRoutes from "./backend/renderingRoutes.js";
import passport from "passport";
import passportJwt from "passport-jwt";
import { getAccount } from "./backend/repositories/AccountsRepository.js";

const options = {
    jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
    secretOrKey: "secret",
};
passport.use(
    new passportJwt.Strategy(options, function (decodedJwt, next) {
        const username = decodedJwt.username;
        getAccount(username)
            .then(function (account) {
                if (account !== undefined) {
                    next(null, account);
                } else {
                    return next(null, false);
                }
            })
            .catch(function (error) {
                next(error, false);
                console.error(error);
            });
    })
);
const app = express();

app.use(passport.initialize());
app.disable("x-powered-by");
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/api", apiRoutes);
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
app.use("/", renderingRoutes);

export default app;