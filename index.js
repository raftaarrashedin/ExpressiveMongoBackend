require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

app.get('/',(req,res) => {
	res.send("kese ho, thk ho!")
})

app.get('/api/jokes',(req,res) => {
	const jokes = 
	[
	    {
	        "id": 1,
	        "title": "Sparkling Eyes",
	        "flirty_lines": "Your eyes are like stars in the night sky, sparkling and mesmerizing."
	    },
	    {
	        "id": 2,
	        "title": "Smile Magic",
	        "flirty_lines": "Your smile could light up the darkest of rooms, it's truly magical."
	    },
	    {
	        "id": 3,
	        "title": "Charm Unleashed",
	        "flirty_lines": "Do you have a map? I keep getting lost in the charm of your eyes."
	    },
	    {
	        "id": 4,
	        "title": "Heartbeat Symphony",
	        "flirty_lines": "Every time I see you, my heart beats in a rhythm only you can hear."
	    },
	    {
	        "id": 5,
	        "title": "Moonlit Beauty",
	        "flirty_lines": "You're as beautiful as the moonlit night, casting enchantment wherever you go."
	    }
	]

	res.send(jokes);

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