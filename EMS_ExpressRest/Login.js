const exp = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = exp();

app.use(exp.json());
app.use(cors())

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Project_db"
});

con.connect(function(err){
    if(!err){
        console.log("Connection Established!");
    }
    else
        console.log("rejected : "+err.toString());
})

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    const sql = "SELECT * FROM users WHERE username=? AND password=?";
    const values = [username, password];

    con.query(sql, values, (err, result) => {

        if (err) {
            console.log("Login Failed", err);
            return res.status(500).json({
                message: "Database Error"
            });
        }
        if (result.length === 1) {

            console.log("Login Successful");

            return res.status(200).json({
                user: {
                    userid: result[0].userid,
                    username: result[0].username
                },
                token: "abc123"
            });

        } else {

            return res.status(401).json({
                message: "Username or Password does not match"
            });

        }
    });
});

app.listen(3000, function(){
    console.log("Server started!!")
})