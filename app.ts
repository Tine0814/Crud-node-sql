/**
 * Property of the D&C Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

/**
 * Required External Modules
 */

// import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import registrationRoute from "./src/routes/registrationRoute";

// dotenv.config();

/**
 * App Variables
 */

// if (!process.env.PORT) {
//   process.exit(1);
// }

// const PORT: number = parseInt(process.env.PORT as string, 10);
const PORT = 7000;

const app = express();

/**
 *  App Configuration
 */
const corsOptions = {
  origin: "http://localhost:5173", // Update with your frontend origin
  credentials: true, // Allow credentials (cookies, authorization headers)
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

/**
 * Server Activation
 */
app.use("/", registrationRoute);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
