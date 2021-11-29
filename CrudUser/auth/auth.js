const crypto = require('crypto')

function createHash(input) {
    return crypto.createHash("sha256").update(input, "binary").digest("base64");
}

function createSalt(){
    return crypto.randomBytes(8).toString("base64")
}

module.exports = {createHash, createSalt}