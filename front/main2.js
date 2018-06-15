let carta = document.getElementById('carta');
let cont = 0;

const ref = firebase.database().ref("artistas");


ref.on('value', function(data){  //on esta escuchando siempre y once no, sólo lo hace una vez
	console.log("XD", data.val())
	let dat = data.val()
	for(let i in dat){

		if(dat[i].artista == 'Musico'){
		  cont++;
          let id =  'naom'+ cont;
          console.log(id);
          let nomM = document.getElementById(id);
          nomM.innerText = dat[i].nombre;

          let idg = 'gen' + cont;
          let gen = document.getElementById(idg);
          gen.innerText = dat[i].genero;

          let idd = 'des' + cont;
          let desc = document.getElementById(idd);
          desc.innerText = dat[i].descripcion;
  
		}
	}

})
