const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.send("kese ho, thk ho!")
})

app.listen(5000, () => {
	console.log("port is running on paanch hazar!")
})