import express from "express"
import config from "config"
import logger from "./utils/logger.js"
import connect from './utils/connect.js'
import routes from "./routes.js";
import deserializeUser from "./middleware/deserializeUser.js";
import swaggerDocs from "./utils/swagger.js";

const port = config.get("port");
const app = express();
app.use(express.json()); //req.body값을 갖어올수있음
app.use(deserializeUser);

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  await connect();
  routes(app);
  swaggerDocs(app, port);
})