import { config } from "dotenv";
config();

import { join } from "path";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import * as HTTP from "http";
import { builder } from "./schema";
const shouldExit = process.env.EXIT_AFTER_START === "y";

const checkValidEnv = Object.values(process.env).find((v) => v !== undefined && /^".*";$/.test(v));
if (checkValidEnv && !shouldExit) {
    const keys = Object.keys(process.env).filter(
        (v) => process.env[v] !== undefined && /^".*";$/.test(process.env[v]!)
    );
    console.log(`Environment variable [${keys.join(", ")}] ENDS WITH semicolon(;)!`);
    process.exit(0);
}

const schema = builder.toSchema();
const apollo = new ApolloServer({
    schema,
});

const app = express();
app.use(express.json({ limit: "100mb" }));
const http = HTTP.createServer(app);
app.use(express.static(join(__dirname, "static")));

const PORT = process.env.PORT || 3000;

const server = async () => {
    await apollo.start();
    apollo.applyMiddleware({ app });

    if (!shouldExit) {
        http.listen(PORT, () => {
            console.log(`🚀 GraphQL service ready at http://localhost:${PORT}/graphql`);
        });
    } else {
        console.log("server run done.");
        process.exit(0);
    }
};
server();
