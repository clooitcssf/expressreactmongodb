const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mongoclient = require("mongodb").MongoClient
const app = express()
app.use(cors())
app.use(bodyparser.json())

app.get("/api/data", (req, res) => {
    mongoclient.connect("mongodb://localhost:27017", (err, client) => {
        var db = client.db("test")
        db.collection("people", (err, collection) => {
            collection.find().toArray((err, result) => {
                if (err) {
                    throw err
                }
                res.json(result)
            })

        })
    })

})
app.get("/api/input", (req, res) => {
    var json = {
        name: req.query.name,
        quote: req.query.quote
    }

    mongoclient.connect("mongodb://localhost:27017", (err, client) => {
        var db = client.db("test")
        db.collection("people", (err, collection) => { 
            collection.insertOne(json)
        })
    })
})
app.post("/api/postinput",(req,res)=>{
    console.log("thisworks")
    console.log(req.body)
    var json = {
        name:req.body.name,
        quote:req.body.quote
    }
    console.log(json)
    mongoclient.connect("mongodb://localhost:27017", (err, client) => {
        var db = client.db("test")
        db.collection("people", (err, collection) => { 
            collection.insertOne(json)
        })
    })
})
const port = 5001
app.listen(port)