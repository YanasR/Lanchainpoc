function getDetailsFromPython() 
	{
	alert("js");
	alert(document.getElementById("input").value+document.getElementById("AppList").value);
		var Service =document.getElementById("input").value;
		var App=document.getElementById("AppList").value;
		let content ="";
		content =content +"<table class=\"table table-hover\">";
		content =content +"<thead> <tr>";
		content =content +"<th scope=\"col\">Ticket No</th>";
		content =content +"<th scope=\"col\">NTS Trouble Description</th>";
		content =content +"<th scope=\"col\">Root Cause</th>";
		content =content +"<th scope=\"col\">Problem Resolution</th>";
		content =content +"</tr> </thead><tbody>";

	fetch("http://127.0.0.1:5000/"+"IAMPS?input="+Service+"&App="+App)
    .then(res => res.json() )
    .then(res1=>{
     let response =res1;
     let str =response.split(",");
     for(i=0;i<str.length;i++){
        let substr =str[i];
		let doc =substr.split(":");
		content =content +"<tr>";	
		content =content +"<th scope=\"row\">"+doc[0]+"</th>";
		content =content +"<th scope=\"row\">"+doc[1]+"</th>";
		content =content +"<th scope=\"row\">"+doc[2]+"</th>";
		content =content +"<th scope=\"row\">"+doc[3]+"</th>";
		content =content +"</tr>";
	}
	content =content +"</tbody></table>";
	document.getElementById("results").innerHTML="";  
    document.getElementById("results").innerHTML=content;
	}).catch(err=>{
      console.log('>>>',err);
    })
    }
	