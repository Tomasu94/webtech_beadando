function submitForm(){
	var form= document.getElementById("registrationForm");

	var vnev= form["Vezetéknév"].value;
	var knev= form["Keresztnév"].value;
	var kor= form["kor"].value;
	var nem= form["nem"].value;

	var info= "Vezetéknév"+vnev+"&Keresztnév"+knev+"&Kor"+kor+"&Nem"+nem;
	sendJSON(info);

}



			function validateForm() {
   			 var vnev = document.forms["registrationForm"]["vnev"].value;
    		if (vnev == "") {
      		  alert("Add meg a vezetékneved!");
        		return false;
   				 }

   			var knev = document.forms["registrationForm"]["knev"].value;
    		if (knev == "") {
      		  alert("Add meg a keresztneved!");
        		return false;
        	}

        	var age = document.forms["registrationForm"]["age"].value;
    		if (age <=0) {
      		  alert("Add meg az életkorod! (0-nál nagyobbnak kell lennie!)");
        		return false;
        	}

        	var gender = document.forms["registrationForm"]["gender"].value;
    		if (gender != 'male' && gender != 'female') {
      		  alert("Válaszd ki a nemed!");
        		return false;
    }
}



jQuery(function(){
	readJSON=function(){
		document.getElementById("tableDiv").style.display = "inline-block";
		$.ajax({
			url:"jayson.json",
			type:"GET",
			dataType:"JSON",
			context: this,
			success:function(data){

				$("#tableDiv").empty();
				var innertable=$("<table style='border:solid'></table>").attr('id', 'innertable');
				for(i in data){
					innertable.append("<tr><td>"+data[i].Vnev+"</td><td>"+data[i].Knev+"</td><td>"+data[i].Kor+"</td><td>"+data[i].Nem+"</td></tr>");
				}
				$("#tableDiv").append(innertable);
			}
		}
		)
	}
}
)


jQuery(function(){
	sendJSON= function(info){
		var info= info; 
		$.ajax({
			url:"jayson.json",
			type:"POST",
			contentType: 'application/json; charset=utf-8',
			data: info,
			async: true,
			success:function(data){
				window.alert("A regisztráció végrehajtódott!");
			}
		}
		)
	}
}
)