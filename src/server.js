import express from "express";
import { urlencoded, json } from "body-parser";
import apiRoutes from "./backend/apiRoutes.js";
import renderingRoutes from "./backend/renderingRoutes.js";
import passport from "passport";
import passportJwt from "passport-jwt";
import jwt from "jsonwebtoken";
import  accountService from "./Service/accountService";
import connectionString from "./backend/config.js";

const secret = "secret";
const app = express();







app.disable("x-powered-by");
app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/api", apiRoutes);
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
app.use("/", renderingRoutes);

const options = {
    jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
    secretOrKey: secret
 };


 passport.use(
     new passportJwt.Strategy(options, function (decodedJwt, next) {
         const name = decodedJwt.name;

         accountRepository
             .doesUsernameExist(name)
             .then((exists) => {
                 if (exists) {
                     next(null, name);
                 } else {
                     next(null, false);
                 }
             })
             .catch(function (error) {
                 next(error, false);
                 console.error(error);
             });
     })
 );

 app.use(passport.initialize());


 app.get("/login", (request, response) => {
     const name = request.query.name;
     const password = request.query.password;
     console.log(name, password);

     accountService
     .canUserLogin(name,password)
         .then((token) => {
             if (token) {
                 response.send({
                     message: "hello",
                     token:token
                 });
             } else {
                 response.status(400).send({
                     errors: "combination of username and password are wrong",
                 });
             }
         })
         .catch(function (error) {
             response.status(500);
             console.error(error);
         });
 });




//module.exports = {secret:secret};
export default app;