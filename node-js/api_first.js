const http=require('http');

const usersData=[
    {name:"John",age:30},
    {name:"Jane",age:25},
    {name:"Doe",age:22}
];

server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(usersData));
    res.end();
}).listen(10225);