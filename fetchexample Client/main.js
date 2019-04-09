console.log('test', );

fetch('http://localhost:3333/kategorier')
.then(function(response) {
    return response.json();
  })
	.then((data)=>{
		console.log('', data);
	});