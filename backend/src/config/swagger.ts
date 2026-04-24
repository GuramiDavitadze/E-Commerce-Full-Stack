import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "E-Commerce REST API documentation",
    },
    servers: [
      { url: "http://localhost:3008", desciption: "Development server" },
      {
        url: "https://e-commerce-full-stack-production-2d56.up.railway.app",
        desciption: "Production server server",
      },
    ],
    components: {
      securitySchemas: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "accessToken",
        },
      },
    },
  },
  apis: ["../routes/*.ts"],
};
export const swaggerSpec = swaggerJSDoc(options);
