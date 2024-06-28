const fs = require("fs")
const user = fs.readFileSync("./contents/first-txt", "utf8")
const users = fs.readFileSync("./contents/second-text", "utf8")
const result = fs.writeFileSync("./contents/result-text", 
     "Hello,am Emmanuel Moiwoh Jr a developer and designer at ZIT","utf8")
console.log(user,users,result)
