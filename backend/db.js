const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

var db = new JsonDB(new Config("myDataBase", true, true, '/'));

try {
    db.getData("/index");
} catch {
    db.push("/index", 0);
}

db.push("/todo[]");
db.delete("/todo[-1]");

module.exports = db;