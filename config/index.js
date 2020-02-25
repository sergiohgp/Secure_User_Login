module.exports = {
    port: process.env.port || 3000,
    mongo_uri: process.env.mongo_uri || 'mongodb://127.0.0.1:27017/instaclone',
    secret: process.env.secret || 'CodingIsCool'
}