import express from "express";
import client, { collectDefaultMetrics, Registry } from "prom-client";

const register = new Registry();
collectDefaultMetrics({
  register,
});

const app = express();

app.get("/metrics", async (req, res) => {
  console.log("Metrics request: " + (await register.metrics()).length);
  res.status(200).setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
});

app.listen(8001, () => {
  console.log("Listening");
});
