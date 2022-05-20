function Leer(filtro, valor) {
  var dato=[];
  var jsonData = require("./Almacen.json");

  for (const i of jsonData.words) {
    let Nombre="Nombre : "+i.nombre;
    let ID="Id : "+i.id;
    let Edad="Edad : "+i.edad;
    if(filtro=="id" && parseInt(valor, 10)==i.id){
      
      dato.push(ID)
      dato.push(Nombre)
      dato.push(Edad)
    }
    if(filtro=="nombre" && valor==i.nombre){
      
      dato.push(ID)
      dato.push(Nombre)
      dato.push(Edad)
    }
    if(filtro=="edad" && parseInt(valor,10)==i.edad){

      dato.push(ID)
      dato.push(Nombre)
      dato.push(Edad)
    }
  }   
  return(
    dato
  );
}

export default Leer;
