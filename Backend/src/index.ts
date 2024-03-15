import express from 'express';
import genRoutes from "./routes/gen.routes"
import dotenv from "dotenv";
import helmet from 'helmet';
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(genRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
