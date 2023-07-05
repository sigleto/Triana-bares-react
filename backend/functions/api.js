import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "../backend/routes/routes.js";

const app = express();

mongoose.connect("mongodb+srv://sigleto:mongoDos2ª@cluster0.yj61bca.mongodb.net/formulario?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(router);

const handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, "");
  const segments = path.split("/").filter((e) => e);
  const [functionName] = segments;

  const method = event.httpMethod.toLowerCase();
  if (method === "options") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: "",
    };
  }

  if (functionName === "api") {
    const response = await new Promise((resolve, reject) => {
      const proxyEvent = {
        ...event,
        path: `/${segments.slice(1).join("/")}`,
      };

      app.use((req, res) => {
        Object.assign(req, proxyEvent);
        app.handle(req, res);
      });

      const callback = (error, body) => {
        if (error) reject(error);
        resolve({
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
        });
      };

      app.handle(proxyEvent, null, callback);
    });

    return response;
  }

  return {
    statusCode: 404,
    body: "Not Found",
  };
};

export { handler };
