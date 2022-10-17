


function afficheLesTables(){
	for (n=1;n<=10;n++){
		var b=document.getElementById('tables1a10');
		b.innerHTML=b.innerHTML+"Table de "+n.toString()+" : "+"<br/>";
		table(n);
	}
}

function table(n){
	for (i=1;i<=10;i++){
		var a=document.getElementById('tables1a10');
		a.innerHTML=a.innerHTML+n.toString()+"x"+i.toString()+"="+(n*i).toString()+"<br/>";
	}

}




