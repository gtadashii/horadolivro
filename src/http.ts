import express from "express";
import cors from "cors";
import { createServer } from "http";
import path from "path";

import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (request, response) => {
  return response.render("html/index.html");
})

const http = createServer(app); // Criando o protocolo HTTP

app.use(express.json());

app.use(cors({ origin: '*', credentials: true }));

app.use(routes);

export { http };