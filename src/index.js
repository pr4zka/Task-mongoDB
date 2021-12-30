import app from "./app";
import './database';
import {PORT} from "./config";
import "babel-polyfill";

app.listen(PORT);
console.log("server on port", PORT);
