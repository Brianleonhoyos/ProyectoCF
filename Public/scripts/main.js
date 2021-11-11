/* var info;
var socket = io();

socket.on("arduino:data", function (data) {
  console.log(data);
  //info = parseInt(data.value);
  info = (data.value);
  //console.log(info);
  // var a = info === "1";
  //console.log(a);
  let listabotones = info.split('\r\n');
  BotonUno = listabotones[0]
  BotonDos = listabotones[1]
  BotonTres = listabotones[2]
  BotonCuatro = listabotones[3]
  if (BotonUno == 0) {
    key = 'd'
    getKeyIndex(key)
    console.log(key)
  } else if (BotonDos == 0) {
    key = 'f'
    getKeyIndex(key)
    console.log(key)
  } else if (BotonTres == 0) {
    key = 'j'
    getKeyIndex(key)
    console.log(key)
  } else if (BotonCuatro == 0) {
    key = 'k'
    getKeyIndex(key)
    console.log(key)
  }
  //console.log(listabotones)
}); */