const Connection = require('../connection/mysql.js');

var userPost = (req,res) => {
    var user = req.body; //{Name:"Abel Garcia",Salary:1000.0,Position:"developer"}
    Connection.query('INSERT INTO users SET ?',user,(err,response) => {
        if(err) res.status(400).json(err);
        else res.status(200).json({'insertID:':response.insertId});
    });
};

var userGet = (req,res) => {
    Connection.query('SELECT * FROM users',(err,response) => {
        if(err) res.status(400).json(err);
        else res.status(200).json(response);
    });
};

var userPut = (req,res) => {
    var set = req.body.set
    var IdUser = {IdUser:req.body.IdUser}
    Connection.query('UPDATE users SET ? WHERE ?',[set,IdUser],(err,response) => {
        if(err) res.status(400).json(err);
        else res.status(200).json(response);
    });
};

var userDelete = (req,res) => {
    var IdUser = {IdUser:req.body.IdUser};
    Connection.query('DELETE FROM users WHERE ?',IdUser,(err,response) => {
        if(err) res.status(400).json(err);
        else res.status(200).json(response);
    });
};


module.exports =  {
    post:userPost,
    get:userGet,
    put:userPut,
    delete:userDelete
};