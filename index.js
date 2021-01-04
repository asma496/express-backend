const express = require('express');
const path = require('path')
const app = express();

const port = 4000

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
app.use(express.static(path.join(__dirname,'rigistration')))