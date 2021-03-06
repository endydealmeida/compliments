const express = require("express");
const path = require("path");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

const compliments = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "Good job",
    "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

app.get("/compliment", function (req, res) {
    res
        .json({
            compliment: getRandomCompliment()
        })
        .end();
});

const insults = [
    "Fuck you",
    "Piece of shit",
    "Jerk",
    "Fucking idiot",
    "Dork",
    "Cunt",
    "Bastard",
    "Scumbag",
    "Motherfucker",
    "Idiot"
];

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

app.get("/insult", function (req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
});

const brinsults = [
    "Trouxa",
    "Vai se foder",
    "Arrombado",
    "Seu pai chora no banho",
    "Me paga um babão",
    "Vai tomar no cu",
    "Zé buceta",
    "Broxa",
    "Estojo de pica",
    "Cu de apertar linguiça"
];

function getRandomBrInsult() {
    const randomIndex = Math.floor(Math.random() * brinsults.length);
    return brinsults[randomIndex];
}

app.get("/brinsult", function (req, res) {
    res
        .json({
            brinsult: getRandomBrInsult()
        })
        .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");