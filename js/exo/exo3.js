


function afficher(){
	var x=5;
	for (i=1;i<=10;i++){
		var a=document.getElementById('table');
		a.innerHTML=a.innerHTML+x.toString()+"x"+i.toString()+"="+(x*i).toString()+"<br/>";
	}
}




