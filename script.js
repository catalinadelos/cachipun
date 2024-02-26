
//FUNCION AL BOTON
$("#boton").on("click",function(){

  const jugada_usuario=$("#img_usuario").attr("name")
  const jugada_cpu = Math.ceil(Math.random()*3)


  if ((parseInt(jugada_usuario) >= 1) && (parseInt(jugada_usuario)<=3)){
    cambiar_imagen(jugada_cpu)
    jugar_cachipun(jugada_usuario,jugada_cpu)
  }else{
    alert("Haga click sobre piedra papel o tijeras para jugar")
  }

})

function cambiar_imagen(jugada_cpu){
  if (parseInt(jugada_cpu) == 1){
    $("#img_cpu").attr("src","img/piedra.jpg")

  }else if(parseInt(jugada_cpu) == 2){
    $("#img_cpu").attr("src","img/papel.jpg")

  }else{
    $("#img_cpu").attr("src","img/tijeras.jpg")
  }
}


$(".jugada").click(function(){
  const seleccion=$(this).attr("src")
  const num_seleccion=$(this).attr("name")
  $("#img_usuario").attr("src",seleccion)
  $("#img_usuario").attr("name",num_seleccion)
  $("#img_cpu").attr("src","img/inicio.jpg")
});


function punto_usuario(){
  const puntaje = $("#score_usuario").html()
  const sumatoria = parseInt(puntaje) + 1
  $("#score_usuario").html(sumatoria)
}


function punto_cpu(){
  const puntaje = $("#score_cpu").html()
  const sumatoria = parseInt(puntaje) + 1
  $("#score_cpu").html(sumatoria)
}


function jugar_cachipun(jugada_usuario,jugada_cpu){
  // Si el usuario jugó piedra 
  if (jugada_usuario == 1) {
    // y la CPU jugó piedra
    if (jugada_cpu == 1) {
      alert('Ambos empatan con piedra');
      punto_usuario()
      punto_cpu()
    }
    // y la CPU jugó papel
    else if (jugada_cpu == 2) {
      alert('La CPU le ganó con PAPEL');
      punto_cpu()
    }
    // y la CPU jugó tijera
    else {
      alert('Usted gana PIEDRA contra TIJERAS');
      punto_usuario()
    }
  }
  // Si el usuario juega papel
  else if (jugada_usuario == 2) {
    // y la CPU eligió piedra
    if (jugada_cpu == 1) {
      alert("Usted gana PAPEL contra PIEDRA");
      punto_usuario()
    }
    // y la CPU elige papel
    else if (jugada_cpu == 2) {
      alert("Ambos empatan con PAPEL");
      punto_usuario()
      punto_cpu()
    }
    // y la CPU elige TIJERA
    else {
      alert("Usted pierde PAPEL contra TIJERA");
      punto_cpu()
    }
  }
  // Usuario elige TIJERA
  else if (jugada_usuario == 3) {
    // y la CPU eligió piedra
    if (jugada_cpu == 1) {
      alert("Usted pierde TIJERA contra PIEDRA");
      punto_cpu()
    }
    // y la CPU elige papel
    else if (jugada_cpu == 2) {
      alert("Usted gana TIJERA contra PAPEL");
      punto_usuario()
    }
    // y la CPU elige TIJERA
    else {
      alert("Ambos empatan con TIJERAS");
      punto_usuario()
      punto_cpu()
    }
  }

}

