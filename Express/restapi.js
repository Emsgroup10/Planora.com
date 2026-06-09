let exp = require("express");
let app = exp();
let cors = require("cors");
app.listen(3000, function () {
  console.log("Server Started at 3000 port");
});

let mysql = require("mysql2");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4936",
  database: "project_db",
});
app.use(exp.json());
app.use(cors());
con.connect(function (err) {
  if (!err) {
    console.log("Connection established");
  } else {
    console.log("Connection rejected");
  }
});
//routes

//route for login
app.post('/login' ,function(req,res){
    
    let query = "select * from users where username = ? and password = ?"
    con.query(query, [req.body.username, req.body.password], function(err,result) {
         if(!err) {
	 	if(result.length === 1)
	            res.status(200).json({user: {userid: result[0].userid, username:result[0].username, role: result[0].roleid }, token:"abc123"});
                else
	            res.status(404).send("login failed");
         } 
	 else{
              res.staus(500).send("Could not fetch data");
         }
    })
})

/*app.post('/register' ,function(req,res){
    
    
})*/



app.all('/*splat', function(req,res) {
    res.send("Invalid URL");
})
