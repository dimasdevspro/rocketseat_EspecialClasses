const fs = require('fs')
const data = require('./data.json')

exports.post = function (req, res){

const keys = Object.keys(req.body) 
    
    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }    

fs.writeFile("data.json", JSON.stringify(data), function(err){
    if (err) return res.send("Write file error!")

        return res.redirect("/teachers")
})

}