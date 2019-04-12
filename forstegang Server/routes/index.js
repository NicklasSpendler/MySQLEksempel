const mysql = require('mysql2');

const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'bigversbolche2'
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

app.get('/getProducts', function (req, res) {
	db.query('SELECT bolche.navn as navn, farve.navn as farve, smags_surhed.navn as smags_surhed, smags_styrke.navn as smags_styrke, smags_type.navn as smags_type, bolche.vægt as vægt, bolche.råvarepris as pris FROM `bolche` inner join farve on bolche.fk_farve = farve.id inner join smags_styrke on bolche.fk_smags_styrke = smags_styrke.id inner join smags_surhed on bolche.fk_smags_surhed = smags_surhed.id inner join smags_type on bolche.fk_smags_type = smags_type.id',[req.params.id], function (err, rows) {
		if (err) {
			res.send(err)
		} else {
			res.send(rows)
		}
	})
})

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