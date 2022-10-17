function calculePerimetre(){
	var r=prompt("saisir le rayon");
	var a=document.getElementById('perimetre');
	a.innerHTML=(2*Math.PI*r).toString();
}