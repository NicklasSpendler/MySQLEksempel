const mysql = require('mysql2');

const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'muligvisDenFedesteDatabase'
});




module.exports= function(app){

function routeData(route, table){
	app.get('/'+route, function (req, res) {
		db.query('SELECT * FROM '+table, function (err, rows) {
			if (err) {
				res.send(err)
			} else {
				res.send(rows)
			}
		})
	})
}

routeData("user", "bruger");
routeData("kategorier", "kategorier")
routeData("" ,"")

// app.get('/user', function (req, res) {
// 	db.query('SELECT * FROM bruger', function (err, rows) {
// 		if (err) {
// 			res.send(err)
// 		} else {
// 			res.send(rows)
// 		}
// 	})
// })

// app.get('/kategorier', function (req, res) {
// 	db.query('SELECT * FROM kategorier', function (err, rows) {
// 		if (err) {
// 			res.send(err)
// 		} else {
// 			res.send(rows)
// 		}
// 	})
// })

app.get('/', function(req,res){
	res.send("Niggerlas")
});
}