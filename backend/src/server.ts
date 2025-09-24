import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const DEFAULT_PORT = 3001;
const rawPort = process.env.PORT ?? DEFAULT_PORT;
const port = typeof rawPort === "string" ? parseInt(rawPort, 10) : rawPort;

if (Number.isNaN(port)) {
  throw new Error("Invalid PORT environment variable. Please provide a numeric value.");
}

app.listen(port, () => {
  console.log(`Backend service listening on port ${port}`);
});
