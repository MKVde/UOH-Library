


function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Chevy"){
		var optionArray = ["|","camaro|Camaro","corvette|Corvette","impala|Impala"];
	} else if(s1.value == "Dodge"){
		var optionArray = ["|","avenger|Avenger","challenger|Challenger","charger|Charger"];
	} else if(s1.value == "Ford"){
		var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}

function Populate(s2, s3) {
	var s2 = document.getElementById(s2);
	var s3 = document.getElementById(s3);
	s3.innerHTML = "";
	if (s2.value == populate(s1,s2)) {
		var optionArray = ["|", "camaro|Camaro", "corvette|Corvette", "impala|Impala"];
	} else if (s2.value == populate(s1,s2)) {
		var optionArray = ["|", "avenger|Avenger", "challenger|Challenger", "charger|Charger"];
	} else if (s2.value == populate(s1,s2)) {
		var optionArray = ["|", "mustang|Mustang", "shelby|Shelby"];
	}
	for (var option in optionArray) {
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s3.options.add(newOption);
	}
}



