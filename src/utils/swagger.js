import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import logger from "./logger.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API 매뉴얼",
      version: "1.0.0",
      contact: {
        email: "shindalsoo@naver.com",
      },
      description: `<b>Description:</b><br>
      1. The part is divided into <b>Partner, and Console</b> <br>
      2. You can call the API by receiving the <b>Auth token key</b> corresponding to each part and <b>registering it in Authorize</b><br>
      3. You can check the <b>schema</b> to know the information you need to enter.`,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer", //schema 스펠링 오류로 1일 개고생
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes.js", "./api_manual/*.yaml"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  logger.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
