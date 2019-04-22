function loginValidate(){
	var lname = document.getElementById('loginid').value.length;
	var pwd = document.getElementById('passwordid').value.length;
	if(lname < 4 || pwd < 4){
		window.alert("Login Id and Password must be 3 characters long");
	}
}

function getBreakup(){
	var ctc = document.getElementById('ctc').value;

	var basic = ctc*50/100;
	document.getElementById('ctcvalue').innerHTML=basic.toFixed(2); 
	document.getElementById('ctcvalueM').innerHTML=getMonthlyValue(basic);
	
	var hra = basic*50/100;
	document.getElementById('hravalue').innerHTML=hra.toFixed(2);
	document.getElementById('hravalueM').innerHTML=getMonthlyValue(hra);

	var tran = 22000;
	document.getElementById('transportvalueM').innerHTML=getMonthlyValue(tran);
	document.getElementById('transportvalue').innerHTML=tran.toFixed(2);
	
	var med = 15000;
	document.getElementById('medicalvalueM').innerHTML=getMonthlyValue(med);
	document.getElementById('medicalvalue').innerHTML=med.toFixed(2);
	
	var lta = basic*10/100;
	document.getElementById('ltavalue').innerHTML=lta.toFixed(2);
	document.getElementById('ltavalueM').innerHTML=getMonthlyValue(lta);
	
	var special = basic*38/100;
	document.getElementById('specialvalue').innerHTML=special.toFixed(2);
	document.getElementById('specialvalueM').innerHTML=getMonthlyValue(special);
	
	var grossvalueT = basic + hra + tran + med + lta + special;
	document.getElementById('grossvalue').innerHTML=grossvalueT.toFixed(2);
	document.getElementById('grossvalueM').innerHTML=getMonthlyValue(grossvalueT);
}

function getMonthlyValue(value){
	var val = value/12;
	return val.toFixed(2);
}

window.onload = function () {
	var employes = new Array();
	employes.push(["Virat Kohli","RCB","Batsman","30"]);
	employes.push(["MS Dhoni","CSK","Batsman","37"]);
	employes.push(["Siraj Khan","RCB","Bollwer","27"]);
	employes.push(["Rishav Pant","DC","Batsman","24"]);

	for(i=0; i<employes.length; i++){
		AddRow(employes[i][0],employes[i][1],employes[i][2],employes[i][3]);
	}
};

function AddRow(name, team, role, age) {
	//Get the reference of the Table's TBODY element.
	var tBody = document.getElementById("tblCustomers").getElementsByTagName("TBODY")[0];

	//Add Row.
	row = tBody.insertRow(-1);

	//Add Name cell.
	var cell = row.insertCell(-1);
	cell.innerHTML = name;

	//Add Team cell.
	cell = row.insertCell(-1);
	cell.innerHTML = team;
	
	//Add Role cell.
	cell = row.insertCell(-1);
	cell.innerHTML = role;
	
	//Add Age cell.
	cell = row.insertCell(-1);
	cell.innerHTML = age;

	//Add Button cell.
	cell = row.insertCell(-1);
	var btnRemove = document.createElement("INPUT");
	btnRemove.type = "button";
	btnRemove.value = "Remove";
	btnRemove.setAttribute("onclick", "Remove(this);");
	cell.appendChild(btnRemove);
}

function Add() {
	var txtName = document.getElementById("txtName");
	var txtTeam = document.getElementById("txtTeam");
	var txtRole = document.getElementById("txtRole");
	var txtAge = document.getElementById("txtAge");
	
	AddRow(txtName.value, txtTeam.value, txtRole.value, txtAge.value);
	
	txtName.value = "";
	txtTeam.value = "";
	txtRole.value = "";
	txtAge.value = "";
};

function Remove(button) {
	//Determine the reference of the Row using the Button.
	var row = button.parentNode.parentNode;
	var name = row.getElementsByTagName("TD")[0].innerHTML;
	if (confirm("Do you want to delete: " + name)) {

		//Get the reference of the Table.
		var table = document.getElementById("tblCustomers");

		//Delete the Table row using it's Index.
		table.deleteRow(row.rowIndex);
	}
};