const Conn = require('pg').Pool

const conn = new Conn({
    "user":"postgres",
    "password":"1234",
    "host":"localhost",
    "port":54321,
    "database":"todolist"
});

module.exports = conn;