function codageCesar(){
	var ch=prompt("saisir une chaine");
	var recod='';
	for(i=1;i<=ch.length();i++){
		if (ch=","||ch=";"||ch="("||ch=")"||ch="."||ch="?"||ch="!"||ch="'"||ch='"'||ch=":") {
			var a=chaine.charCodeAt(i);
		recod=recod+String.fromCharCode(a);
		}
		else{
			var a=chaine.charCodeAt(i);
		recod=recod+String.fromCharCode(a+1);
		}
	}
	var b=document.getElementById('source');
	var c=document.getElementById('cible');
	b.innerHTML=b.innerHTMLch;
	c.innerHTML=recod;

}