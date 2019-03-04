var username = prompt('Enter user name');

var withnumber = false;

var myresult = "";

for(var i=0;i<username.length;i++) {

  if(username.charAt(i).match(/[0-9]/)){ 
    withnumber = true;
    break;
  }
}

if (withnumber){
  for(var i=0;i<username.length;i++){
    if (i%2 == 0){
      myresult += username.charAt(i).toUpperCase();
    }
    else
    {
      myresult += username.charAt(i).toLowerCase();
    }
  }
}
else{
  myresult = username.split("").reverse().join("");
}

var container = document.getElementById("Main");

var element = document.createElement("div");
element.innerHTML = myresult;
container.appendChild(element).inn;