"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const pizzas_1 = __importDefault(require("./routes/pizzas"));
const drinks_1 = __importDefault(require("./routes/drinks"));
const films_1 = __importDefault(require("./routes/films"));
const app = (0, express_1.default)();
let counter = 0;
app.use((req, _res, next) => {
    if (req.method === "GET") {
        counter++;
        console.log(" GET counter :  " + counter);
    }
    next();
});
let GetCounterPizza = 0;
app.use((req, _res, next) => {
    if (req.method === "GET" && req.path === "/pizzas") {
        GetCounterPizza++;
        console.log("GET /pizzas :" + GetCounterPizza);
    }
    next();
});
let PostCounterPizza = 0;
app.use((req, _res, next) => {
    if (req.method === "POST" && req.path === "/pizzas") {
        PostCounterPizza++;
        console.log("Post/pizzas" + PostCounterPizza);
    }
    next();
});
let deleteCounterPizza = 0;
app.use((req, _res, next) => {
    if (req.method === "DELETE" && req.path === "/pizzas") {
        deleteCounterPizza++;
        console.log("Post/pizzas" + deleteCounterPizza);
    }
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/users", users_1.default);
app.use("/pizzas", pizzas_1.default);
app.use("/drinks", drinks_1.default);
app.use("/films", films_1.default);
exports.default = app;
