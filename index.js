// EXPRESS APP
const express = require('express');

// PATH
const path = require('path');

// DB
const db = require('./config');

// body parser
const bodyParser = require('body-parser');

// POST
const port = parseInt(process.env.port) || 4000;

// EXPRESS APP
const app =express();

// Router
const route = express.Router();

app.use(
    route,
    express.json,
    bodyParser.urlencoded({ extended: false}),
)

router.get('/', (req,res)=> {
    res.statusCode(200).send('WELL DONE SIBA');
})
// Home or /
route.get('/', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname,'./view/index.html'));
})
// 
route.get('/users', (req,res)=> {
    const strQry =
    `SELECT  firstName, lastName, emailAdd, country FROM Users;`
    // db 
    db.query(strQry, (err,data)=>{
        if(err)throw err;
        res.status(200).json( {result: data});
    })
});

// Register
route.post('/register', (req,res)=> {
    let detail = req.body;
    console.log(detail);
    // sql query
    const strQry = 
    `INSERT INTO Users SET ?;`;
    db.query(strQry, [detail], (err)=> {
        if(err) {
            res.status(400).json({err});
        }else {
            res.status(200).json({msg: "A user record was used"})
        }
    })
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

// Update
route.put('user/:id', bodyParser.json(), (req, res) => {
    let data =req.body;
    const strQry = 
    `UPDATE Users SET ? WHERE id = ?;`
})
db.query(strQry, [data, req.params.id],
    (err)=> {
        if(err) throw err;
        res.status(200).json( {msg: "A row was affected"})
    })










route.put('/update', (req, res) => {
    let detail = req.body;
    const strQry =
    `UPDATE Users
    SET firstName = ?
    WHERE firstName = ?;
    `
    db.query(strQry, [detail], (err) => {
        if (err) {
            res.status(400).json({err});
        } else {
            res.status(200).json({msg: "A record has been updated"})
        }
    })
})
route.delete('/destroy', (req, res) => {
    let detail = req.body;
    const strQry =
    `DELETE FROM Users
    WHERE firstName = ? ;
    `
    db.query(strQry, [detail], (err) => {
        if (err) {
            res.status(400).json({err});
        } else {
            res.status(200).json({msg: "A record has been deleted"})
        }
    })
})

route.patch('/login') 









