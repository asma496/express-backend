const express = require('express');
const path = require('path')
const bodyParser= require('body-parser')
const app = express();

const port = 4000
app.use(bodyParser.urlencoded({extended:true}))
app.listen(port, (req,res)=>{
    console.log('server is running', port);
})

// app.get('/', (req,res)=>{
// res.send('<h1> my first app</h1>')
// })

// app.get('/aboutus', (req,res)=>{
//     // res.send('<h1> about page</h1>')
//     res.sendFile(path.join( __dirname, 'public','aboutus.html'))
// })

// app.get('/contactus',(req,res)=>{
//     res.sendFile(path.join( __dirname,'public','contact.html'

//     ))
// })

app.use(express.static(path.join(__dirname,'public')))
app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname,'rigistration','signup.html'))
})
app.post('/signup',(req,res)=>{
    res.send(req.body)
})