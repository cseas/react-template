import express from "express";
import path from "path";
import serialize from "serialize-javascript";
import appSettings from "../appsettings.json";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req: express.Request, res: express.Response) {
  return res.send("pong");
});

app.get("/", function (req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.get("/data.js", function (req: express.Request, res: express.Response) {
  res.send(
    `window.SERVER_DATA=${serialize(appSettings.clientSettings, {
      isJSON: true,
    })}`
  );
});

// keep this at the end so it doesn't override other routes
app.use(express.static(path.join(__dirname, "../build")));

app.listen(PORT, () => {
  console.log(`🚀 Server ready at port: ${PORT}`);
});
