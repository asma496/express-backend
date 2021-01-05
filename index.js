const express = require('express');
const path = require('path')
const bodyParser= require('body-parser')
const app = express();

const port =  process.env.port || 4000
app.use(bodyParser.urlencoded({extended:true}))
app.listen(port, (req,res)=>{
    console.log('server is running', port);
})

// app.get('/', (req,res)=>{
//     app.use('/public', express.static('public'))

// res.send('')
// })

// app.get('/aboutus', (req,res)=>{
//     // res.send('<h1> about page</h1>')
//     res.sendFile(path.join( __dirname, 'public','aboutus.html'))
// })

// app.get('/contactus',(req,res)=>{
//     res.sendFile(path.join( __dirname,'public','contact.html'

//     ))
// })
let users = [
    {name:'asma',id:1, email:'as@gmail.com', password:'1111'},
    {name:'madiha',id:2,email:'madiha4@gmail.com',password:'2222'},
   ]

app.use(express.static(path.join(__dirname,'public')))
app.use('/public', express.static('public'))


app.get('/signup', (req,res)=>{
    app.use('/rigistration', express.static('rigistration'))
    res.sendFile(path.join(__dirname,'rigistration','signup.html'))
})
app.post('/signup',(req,res)=>{
    // res.send(req.body)
    let{name,email,password}=req.body
    let found = users.some((item)=> item.email == email)
    if(found){
        res.send('<h1> you are already existed</h1>')
    }
    else{
        users.push({name,email,password,id:users.length+1})
        // res.send('user added')
        // res.sendFile(path.join(__dirname,'rigistration','login.html'))
        res.redirect('/login')

    }
    

})


app.get('/login', (req,res)=>{
    app.use('/rigistration', express.static('rigistration'))

    res.sendFile(path.join(__dirname,'rigistration','login.html'))
})

app.post('/login', (req,res)=>{
    let{name,email,password}=req.body
    let find = users.some((item)=> item.email == email && item.password == password)
    if(find){
        res.redirect('/')
    }
    else{
       res.send('email, password is not correct')

    }
    })





