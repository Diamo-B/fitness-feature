import express from 'express';
import genRoutes from "./routes/gen.routes"
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(genRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
