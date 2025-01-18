import { writeFileSync } from "fs";
import { printSchema } from "graphql";
import { schema } from "../schema";
import { fileURLToPath } from "url";
import path, { resolve } from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

writeFileSync(resolve(__dirname, "../../schema.graphql"), printSchema(schema));

process.exit();
