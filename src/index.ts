import express from "express";
import cors from "cors";
import helmet from "helmet"
import { configureRoutes } from "./routes";
import { config } from "dotenv";
import { corsOptions } from "./middlewares/corsOptions";
import { httpRequestsTotal } from "./routes/metrics.routes";

config();

const app = express();

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestsTotal.inc({ method: req.method, statusCode: res.statusCode });
  });
  next();
});
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

configureRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))