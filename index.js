const express = require('express')

const app = express()
const student = require('./student/studentList.json')

// const post = require('./post')
const port =process.env.PORT || 5050

app.post('/student/studentList',(req,res)=>{
    res.json(student)
})


app.get('/', (req,res) => {
    res.send("Api is running")
})

app.listen(port, ()=> console.log("Server is running"))