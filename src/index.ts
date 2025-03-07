import express from "express";
import cors from "cors";
import helmet from "helmet"
import { config } from "dotenv";
import { router } from "./routes";
import { EmailAlreadyExistsError } from "./errors/UserErrors";
import { corsOptions } from "./middlewares/corsOptions";

config();

if (config()) {
  throw new EmailAlreadyExistsError("Email already exists")
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

app.use("/api", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))