const http = require("http");
const fs = require("fs");
const url = require("url");
const mime = require("mime");
const path = require("path")
http.createServer((req,res)=>{
    let pathName = url.parse(req.url).pathname;
    if(pathName == "/"){
        pathName = "liniu.html";
    }
    let extName = path.extname(pathName);
    fs.readFile(path.join(__dirname,pathName),(err,data)=>{
        if(err){
            console.log(err);
        } else {
            res.writeHead(200,{"Content-Type":mime.getType(extName),"charset":"utf-8"});
            res.write(data);
            res.end();
        }
    })
}).listen(3000)