var fun=function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200)
      {
           document.getElementById("demo").innerHTML = this.responseText;
           
      }
  };
  xhttp.open("POST","http://192.168.0.103:3000/mithoon",true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  var params = {name:"mithoon kumar"};
  xhttp.send("sfsd=sds&dfgd=fd");
     
    
};