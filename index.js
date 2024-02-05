require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.send("kese ho, thk ho!")
})

app.get('/aditya',(req,res) =>{
	res.send("<h2> Konse class me pdhte ho</h2>")
})

app.get('/aayein',(req,res) => {
	res.send("Favourite subject kia h tumhara???")
})

app.get('/baingan',(req,res) => {
	res.send("<h1> Kia naam h tumhara </h1>")
})
app.listen(process.env.PORT, () => {
	console.log("port is running on paanch hazar!")
})