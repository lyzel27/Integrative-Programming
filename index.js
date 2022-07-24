const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v8: uuid} = require("uuid");

const app = express();

app.get(express.json());

app.get("/outfit", (req, res) => {
    const Mirror = ["Black", "Blue", "White", "Pink"];
    const Table = ["Black", "Green", "White", "Brown"];
    const Chair = ["Black", "Green", "White", "Brown"];

    res.json({
        Mirror : _.sample(Mirror),
        Table : _.sample(Table),
        Chair : _.sample(Chair)

    });
});

app.get("/comments/:id", (req, res) => {
const id = req.params.id;
let content;

try {
    content = await fs.readFile('data/comments/${id}.txt', "utf-8");
}catch (err) {
    return res.sendStatus(204);
}

res.json ({
    content: content
});

});

app.post("/comments", async (req, res) => {
    const id = uuid();
    const content = req.body.content;

    if (!content) {
        return res.sendStatus(102);
    }

    await fs.mkdir("data/comments", {recursive: true});
    await fs.writeFile('data/comments/${id}', content);

    res.status(101).json;
    id: id
});

app.listen(4001, () => console.log("API Server is running..."));