function plotit1(){
	
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		
		var Service = Service.replace(/\W/g, '');
		var App=document.getElementById("AppList").value;
	
		if(App=="Selct"){
		
		App=document.getElementById("PrimaryApp").value;
		
		
		}					
		var url="http://localhost:5000/"+"IAMPS?input="+Service+"&App="+App;
	
		
		document.getElementById("tab1").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		}
		
	function plotit2(){
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		var App=document.getElementById("AppList").value;
		if(App=="Selct"){
		
		App=document.getElementById("PrimaryApp").value;
		
		
		}		
							
		var url="http://localhost:5000/"+"TTOR?input="+Service+"&App="+App;
		
	
		document.getElementById("tab3").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		}
	function plotit3(){
	
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");

		var url="http://localhost:5000/"+"Documentsearch?input="+Service;
			
	
		document.getElementById("tab2").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		}
	
	function plotit4(){
	
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		var App=document.getElementById("AppList").value;
		var url="http://localhost:5000/"+"AOTS?input="+Service+"&App="+App;
	
			
		document.getElementById("tab4").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		
		}
	
	function plotit5(){
	
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		
		var Additionalid=document.getElementById("AdditionalId").value;
		
		
		
		
		if(Additionalid == 6)
		{
			var appInfo=document.getElementById("info").value;
			
			
			
		}
		else 
		{
		
		   
		    
		  
		   var   appInfo = 'Choose';
		
		   var additionalinfo=document.getElementById("info").value;
		   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
		   
		   var Service = Service + "_" + additionalinfo1;
		}
		
	
		
		
		if(document.getElementById("AdditionalId1")!=null)
		{
			var Additionalid1=document.getElementById("AdditionalId1").value;
			
			alert(Additionalid1);
		
			
			
			
			if(Additionalid1 == 'Application')
			{
				var appInfo=document.getElementById("info1").value;
				
				alert(appInfo);
				
				
				
			}
			else 
			{
			
			
			   
			if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			var additionalinfo=document.getElementById("info1").value;
			var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId2")!=null)
		    
		{
		    var Additionalid2=document.getElementById("AdditionalId2").value;
			
			if(Additionalid2 == 'Application')
			{
				var appInfo=document.getElementById("info2").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info2").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId3")!=null)
		{
			var Additionalid3=document.getElementById("AdditionalId3").value;
			
			if(Additionalid3 == 'Application')
			{
				var appInfo=document.getElementById("info3").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info3").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId4")!=null)
		{
			var Additionalid4=document.getElementById("AdditionalId4").value;
			if(Additionalid4 == 'Application')
			{
				var appInfo=document.getElementById("info4").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info4").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId5")!=null)
		{
			var Additionalid5=document.getElementById("AdditionalId5").value;
			if(Additionalid5 == 'Application')
			{
				var appInfo=document.getElementById("info5").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info5").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId6")!=null)
		{
			
			var Additionalid6=document.getElementById("AdditionalId6").value;
			
			if(Additionalid6 == 'Application')
			{
				var appInfo=document.getElementById("info6").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info6").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId7")!=null)
		{
			
			var Additionalid7=document.getElementById("AdditionalId7").value;
			if(Additionalid7 == 'Application')
			{
				var appInfo=document.getElementById("info7").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info7").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId8")!=null)
		{
			
			var Additionalid8=document.getElementById("AdditionalId8").value;
			if(Additionalid8 == 'Application')
			{
				var appInfo=document.getElementById("info8").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info8").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId9")!=null)
		{
			
			var Additionalid9=document.getElementById("AdditionalId9").value;
			
			if(Additionalid9 == 'Application')
			{
				var appInfo=document.getElementById("info9").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info9").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId10")!=null)
		{
			
			var Additionalid10=document.getElementById("AdditionalId10").value;
			if(Additionalid10 == 'Application')
			{
				var appInfo=document.getElementById("info10").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info10").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId11")!=null)
		{
			
			var Additionalid11=document.getElementById("AdditionalId11").value;
			
			if(Additionalid11 == 'Application')
			{
				var appInfo=document.getElementById("info11").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info11").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId12")!=null)
		{
			
			
			var Additionalid12=document.getElementById("AdditionalId12").value;
			if(Additionalid12 == 'Application')
			{
				var appInfo=document.getElementById("info12").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info12").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId13")!=null)
		{
			
			
			var Additionalid13=document.getElementById("AdditionalId13").value;
			if(Additionalid13 == 'Application')
			{
				var appInfo=document.getElementById("info13").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info13").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId14")!=null)
		{
			
			
			var Additionalid14=document.getElementById("AdditionalId14").value;
			if(Additionalid14 == 'Application')
			{
				var appInfo=document.getElementById("info14").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info14").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId15")!=null)
		{
			
			var Additionalid15=document.getElementById("AdditionalId15").value;
			if(Additionalid15 == 'Application')
			{
				var appInfo=document.getElementById("info15").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info15").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId16")!=null)
		{
			
			var Additionalid16=document.getElementById("AdditionalId16").value;
			if(Additionalid16 == 'Application')
			{
				var appInfo=document.getElementById("info16").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info16").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId17")!=null)
		{
			
			
			var Additionalid17=document.getElementById("AdditionalId17").value;
			if(Additionalid17 == 'Application')
			{
				var appInfo=document.getElementById("info17").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info17").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId18")!=null)
		{
			
			var Additionalid18=document.getElementById("AdditionalId18").value;
			if(Additionalid18 == 'Application')
			{
				var appInfo=document.getElementById("info18").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info18").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId19")!=null)
		{
			
			
			var Additionalid19=document.getElementById("AdditionalId19").value;
			if(Additionalid19 == 'Application')
			{
				var appInfo=document.getElementById("info19").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info19").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		
		alert(appInfo);
		alert(Service);
		
		var url="http://localhost:5000/"+"IAMPSupdate?input="+Service+"&App="+appInfo;
		
		alert(appInfo);
	
			
		document.getElementById("tab1").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		
		}
		
	function plotit6(){
		
		var Service1 =document.getElementById("srch").value;
		var Service = Service1.replace(/ /g,"_");
		
		
					
		var url="http://localhost:5000/"+"ExtractiveSummary?input="+Service;
		
		
		document.getElementById("tab6").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		}
		
		
	function plotit7(){
		
		
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		
		var Service = Service.replace(/\W/g, '');
		var App=document.getElementById("AppList").value;
		
					
		var url="http://localhost:5000/"+"TDP?input="+Service+"&App="+App;
	  
		
		document.getElementById("tab5").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		}
		
	function plotit8(){
	
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		
		var Additionalid=document.getElementById("AdditionalId").value;
		
		
		
		
		if(Additionalid == 6)
		{
			var appInfo=document.getElementById("info").value;
			
			
			
		}
		else 
		{
		  
		   var   appInfo = 'Choose';
		
		   var additionalinfo=document.getElementById("info").value;
		   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
		   
		   var Service = Service + "_" + additionalinfo1;
		}
		
	
		
		
		if(document.getElementById("AdditionalId1")!=null)
		{
			var Additionalid1=document.getElementById("AdditionalId1").value;
			
			alert(Additionalid1);
		
			alert("TTOR");
			
			
			if(Additionalid1 == 'Application')
			{
				var appInfo=document.getElementById("info1").value;
				
				alert(appInfo);
				alert("TTOR");
				
				
			}
			else 
			{
			
			
			   
			if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			var additionalinfo=document.getElementById("info1").value;
			var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId2")!=null)
		    
		{
		    var Additionalid2=document.getElementById("AdditionalId2").value;
			
			if(Additionalid2 == 'Application')
			{
				var appInfo=document.getElementById("info2").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info2").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId3")!=null)
		{
			var Additionalid3=document.getElementById("AdditionalId3").value;
			
			if(Additionalid3 == 'Application')
			{
				var appInfo=document.getElementById("info3").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info3").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId4")!=null)
		{
			var Additionalid4=document.getElementById("AdditionalId4").value;
			if(Additionalid4 == 'Application')
			{
				var appInfo=document.getElementById("info4").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info4").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId5")!=null)
		{
			var Additionalid5=document.getElementById("AdditionalId5").value;
			if(Additionalid5 == 'Application')
			{
				var appInfo=document.getElementById("info5").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info5").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId6")!=null)
		{
			
			var Additionalid6=document.getElementById("AdditionalId6").value;
			
			if(Additionalid6 == 'Application')
			{
				var appInfo=document.getElementById("info6").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info6").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId7")!=null)
		{
			
			var Additionalid7=document.getElementById("AdditionalId7").value;
			if(Additionalid7 == 'Application')
			{
				var appInfo=document.getElementById("info7").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info7").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId8")!=null)
		{
			
			var Additionalid8=document.getElementById("AdditionalId8").value;
			if(Additionalid8 == 'Application')
			{
				var appInfo=document.getElementById("info8").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info8").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId9")!=null)
		{
			
			var Additionalid9=document.getElementById("AdditionalId9").value;
			
			if(Additionalid9 == 'Application')
			{
				var appInfo=document.getElementById("info9").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info9").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId10")!=null)
		{
			
			var Additionalid10=document.getElementById("AdditionalId10").value;
			if(Additionalid10 == 'Application')
			{
				var appInfo=document.getElementById("info10").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info10").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId11")!=null)
		{
			
			var Additionalid11=document.getElementById("AdditionalId11").value;
			
			if(Additionalid11 == 'Application')
			{
				var appInfo=document.getElementById("info11").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info11").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId12")!=null)
		{
			
			
			var Additionalid12=document.getElementById("AdditionalId12").value;
			if(Additionalid12 == 'Application')
			{
				var appInfo=document.getElementById("info12").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info12").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId13")!=null)
		{
			
			
			var Additionalid13=document.getElementById("AdditionalId13").value;
			if(Additionalid13 == 'Application')
			{
				var appInfo=document.getElementById("info13").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info13").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId14")!=null)
		{
			
			
			var Additionalid14=document.getElementById("AdditionalId14").value;
			if(Additionalid14 == 'Application')
			{
				var appInfo=document.getElementById("info14").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info14").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId15")!=null)
		{
			
			var Additionalid15=document.getElementById("AdditionalId15").value;
			if(Additionalid15 == 'Application')
			{
				var appInfo=document.getElementById("info15").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info15").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId16")!=null)
		{
			
			var Additionalid16=document.getElementById("AdditionalId16").value;
			if(Additionalid16 == 'Application')
			{
				var appInfo=document.getElementById("info16").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info16").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId17")!=null)
		{
			
			
			var Additionalid17=document.getElementById("AdditionalId17").value;
			if(Additionalid17 == 'Application')
			{
				var appInfo=document.getElementById("info17").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info17").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId18")!=null)
		{
			
			var Additionalid18=document.getElementById("AdditionalId18").value;
			if(Additionalid18 == 'Application')
			{
				var appInfo=document.getElementById("info18").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info18").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId19")!=null)
		{
			
			
			var Additionalid19=document.getElementById("AdditionalId19").value;
			if(Additionalid19 == 'Application')
			{
				var appInfo=document.getElementById("info19").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info19").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		
		alert(appInfo);
		alert(Service);
		
		var url="http://localhost:5000/"+"TTORupdate?input="+Service+"&App="+appInfo;
		
		alert(appInfo);
	
			
		document.getElementById("tab3").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		
		}

	function plotit9(){
	
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		
		var Additionalid=document.getElementById("AdditionalId").value;
		
		
		
		
		if(Additionalid == 6)
		{
			var appInfo=document.getElementById("info").value;
			
			
			
		}
		else 
		{
		
		   
		    
		  
		   var   appInfo = 'Choose';
		
		   var additionalinfo=document.getElementById("info").value;
		   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
		   
		   var Service = Service + "_" + additionalinfo1;
		}
		
	
		
		
		if(document.getElementById("AdditionalId1")!=null)
		{
			var Additionalid1=document.getElementById("AdditionalId1").value;
			
			alert(Additionalid1);
		
			
			
			
			if(Additionalid1 == 'Application')
			{
				var appInfo=document.getElementById("info1").value;
				
				alert(appInfo);
				
				
				
			}
			else 
			{
			
			
			   
			if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			var additionalinfo=document.getElementById("info1").value;
			var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId2")!=null)
		    
		{
		    var Additionalid2=document.getElementById("AdditionalId2").value;
			
			if(Additionalid2 == 'Application')
			{
				var appInfo=document.getElementById("info2").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info2").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId3")!=null)
		{
			var Additionalid3=document.getElementById("AdditionalId3").value;
			
			if(Additionalid3 == 'Application')
			{
				var appInfo=document.getElementById("info3").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info3").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId4")!=null)
		{
			var Additionalid4=document.getElementById("AdditionalId4").value;
			if(Additionalid4 == 'Application')
			{
				var appInfo=document.getElementById("info4").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info4").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId5")!=null)
		{
			var Additionalid5=document.getElementById("AdditionalId5").value;
			if(Additionalid5 == 'Application')
			{
				var appInfo=document.getElementById("info5").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info5").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId6")!=null)
		{
			
			var Additionalid6=document.getElementById("AdditionalId6").value;
			
			if(Additionalid6 == 'Application')
			{
				var appInfo=document.getElementById("info6").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info6").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId7")!=null)
		{
			
			var Additionalid7=document.getElementById("AdditionalId7").value;
			if(Additionalid7 == 'Application')
			{
				var appInfo=document.getElementById("info7").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info7").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId8")!=null)
		{
			
			var Additionalid8=document.getElementById("AdditionalId8").value;
			if(Additionalid8 == 'Application')
			{
				var appInfo=document.getElementById("info8").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info8").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId9")!=null)
		{
			
			var Additionalid9=document.getElementById("AdditionalId9").value;
			
			if(Additionalid9 == 'Application')
			{
				var appInfo=document.getElementById("info9").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info9").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId10")!=null)
		{
			
			var Additionalid10=document.getElementById("AdditionalId10").value;
			if(Additionalid10 == 'Application')
			{
				var appInfo=document.getElementById("info10").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info10").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId11")!=null)
		{
			
			var Additionalid11=document.getElementById("AdditionalId11").value;
			
			if(Additionalid11 == 'Application')
			{
				var appInfo=document.getElementById("info11").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info11").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId12")!=null)
		{
			
			
			var Additionalid12=document.getElementById("AdditionalId12").value;
			if(Additionalid12 == 'Application')
			{
				var appInfo=document.getElementById("info12").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info12").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId13")!=null)
		{
			
			
			var Additionalid13=document.getElementById("AdditionalId13").value;
			if(Additionalid13 == 'Application')
			{
				var appInfo=document.getElementById("info13").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info13").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId14")!=null)
		{
			
			
			var Additionalid14=document.getElementById("AdditionalId14").value;
			if(Additionalid14 == 'Application')
			{
				var appInfo=document.getElementById("info14").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info14").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId15")!=null)
		{
			
			var Additionalid15=document.getElementById("AdditionalId15").value;
			if(Additionalid15 == 'Application')
			{
				var appInfo=document.getElementById("info15").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info15").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId16")!=null)
		{
			
			var Additionalid16=document.getElementById("AdditionalId16").value;
			if(Additionalid16 == 'Application')
			{
				var appInfo=document.getElementById("info16").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info16").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId17")!=null)
		{
			
			
			var Additionalid17=document.getElementById("AdditionalId17").value;
			if(Additionalid17 == 'Application')
			{
				var appInfo=document.getElementById("info17").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info17").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId18")!=null)
		{
			
			var Additionalid18=document.getElementById("AdditionalId18").value;
			if(Additionalid18 == 'Application')
			{
				var appInfo=document.getElementById("info18").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info18").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId19")!=null)
		{
			
			
			var Additionalid19=document.getElementById("AdditionalId19").value;
			if(Additionalid19 == 'Application')
			{
				var appInfo=document.getElementById("info19").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info19").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		
		alert(appInfo);
		alert(Service);
		
		var url="http://localhost:5000/"+"AOTSupdate?input="+Service+"&App="+appInfo;
		
		alert(appInfo);
	
			
		document.getElementById("tab4").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		
		}
		
		
	function plotit10(){
	
		var Service1 =document.getElementById("textSearch").value;
		var Service = Service1.replace(/ /g,"_");
		
		var Additionalid=document.getElementById("AdditionalId").value;
		
		
		
		
		if(Additionalid == 6)
		{
			var appInfo=document.getElementById("info").value;
			
			
			
		}
		else 
		{
		
		   
		    
		  
		   var   appInfo = 'Choose';
		
		   var additionalinfo=document.getElementById("info").value;
		   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
		   
		   var Service = Service + "_" + additionalinfo1;
		}
		
	
		
		
		if(document.getElementById("AdditionalId1")!=null)
		{
			var Additionalid1=document.getElementById("AdditionalId1").value;
			
			alert(Additionalid1);
		
			
			
			
			if(Additionalid1 == 'Application')
			{
				var appInfo=document.getElementById("info1").value;
				
				alert(appInfo);
				
				
				
			}
			else 
			{
			
			
			   
			if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			var additionalinfo=document.getElementById("info1").value;
			var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId2")!=null)
		    
		{
		    var Additionalid2=document.getElementById("AdditionalId2").value;
			
			if(Additionalid2 == 'Application')
			{
				var appInfo=document.getElementById("info2").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info2").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}
		
		if(document.getElementById("AdditionalId3")!=null)
		{
			var Additionalid3=document.getElementById("AdditionalId3").value;
			
			if(Additionalid3 == 'Application')
			{
				var appInfo=document.getElementById("info3").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info3").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId4")!=null)
		{
			var Additionalid4=document.getElementById("AdditionalId4").value;
			if(Additionalid4 == 'Application')
			{
				var appInfo=document.getElementById("info4").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info4").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId5")!=null)
		{
			var Additionalid5=document.getElementById("AdditionalId5").value;
			if(Additionalid5 == 'Application')
			{
				var appInfo=document.getElementById("info5").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info5").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId6")!=null)
		{
			
			var Additionalid6=document.getElementById("AdditionalId6").value;
			
			if(Additionalid6 == 'Application')
			{
				var appInfo=document.getElementById("info6").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info6").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId7")!=null)
		{
			
			var Additionalid7=document.getElementById("AdditionalId7").value;
			if(Additionalid7 == 'Application')
			{
				var appInfo=document.getElementById("info7").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info7").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId8")!=null)
		{
			
			var Additionalid8=document.getElementById("AdditionalId8").value;
			if(Additionalid8 == 'Application')
			{
				var appInfo=document.getElementById("info8").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info8").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId9")!=null)
		{
			
			var Additionalid9=document.getElementById("AdditionalId9").value;
			
			if(Additionalid9 == 'Application')
			{
				var appInfo=document.getElementById("info9").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info9").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId10")!=null)
		{
			
			var Additionalid10=document.getElementById("AdditionalId10").value;
			if(Additionalid10 == 'Application')
			{
				var appInfo=document.getElementById("info10").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info10").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId11")!=null)
		{
			
			var Additionalid11=document.getElementById("AdditionalId11").value;
			
			if(Additionalid11 == 'Application')
			{
				var appInfo=document.getElementById("info11").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info11").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId12")!=null)
		{
			
			
			var Additionalid12=document.getElementById("AdditionalId12").value;
			if(Additionalid12 == 'Application')
			{
				var appInfo=document.getElementById("info12").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info12").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId13")!=null)
		{
			
			
			var Additionalid13=document.getElementById("AdditionalId13").value;
			if(Additionalid13 == 'Application')
			{
				var appInfo=document.getElementById("info13").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info13").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId14")!=null)
		{
			
			
			var Additionalid14=document.getElementById("AdditionalId14").value;
			if(Additionalid14 == 'Application')
			{
				var appInfo=document.getElementById("info14").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info14").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId15")!=null)
		{
			
			var Additionalid15=document.getElementById("AdditionalId15").value;
			if(Additionalid15 == 'Application')
			{
				var appInfo=document.getElementById("info15").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info15").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId16")!=null)
		{
			
			var Additionalid16=document.getElementById("AdditionalId16").value;
			if(Additionalid16 == 'Application')
			{
				var appInfo=document.getElementById("info16").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info16").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		if(document.getElementById("AdditionalId17")!=null)
		{
			
			
			var Additionalid17=document.getElementById("AdditionalId17").value;
			if(Additionalid17 == 'Application')
			{
				var appInfo=document.getElementById("info17").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info17").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId18")!=null)
		{
			
			var Additionalid18=document.getElementById("AdditionalId18").value;
			if(Additionalid18 == 'Application')
			{
				var appInfo=document.getElementById("info18").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info18").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		if(document.getElementById("AdditionalId19")!=null)
		{
			
			
			var Additionalid19=document.getElementById("AdditionalId19").value;
			if(Additionalid19 == 'Application')
			{
				var appInfo=document.getElementById("info19").value;
				
				
				
			}else {
			
			  
			   if(appInfo == 'undefined')
			   {
			  
			    var   appInfo = 'Choose';
			   }
			
			   var additionalinfo=document.getElementById("info19").value;
			   var additionalinfo1 = additionalinfo.replace(/ /g,"_");
			   
			   var Service = Service + "_" + additionalinfo1;
			}
		}	
		
		
		
		alert(appInfo);
		alert(Service);
		
		var url="http://localhost:5000/"+"TDPupdate?input="+Service+"&App="+appInfo;
		
		alert(appInfo);
	
			
		document.getElementById("tab5").innerHTML='<object width="1150" height="275" data='+url+'></object>';
		
		
		}

		
	function setFilter(){
	
		var Service =document.getElementById("textSearch").value;
		
		var url2="http://localhost:5000/"+"PDisplay?input="+Service;
		
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", url2, false ); // false for synchronous request
		xmlHttp.send( null );
		D2= xmlHttp.responseText;
		
		 document.getElementById("APP").value=D2;
		
		
		}
		function setFilter2(){
	
		var Service =document.getElementById("input").value;
		
		
					
		var url2="http://localhost:5000/"+"PDeliver?input="+Service;
		
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", url2, false ); // false for synchronous request
		xmlHttp.send( null );
		D2= xmlHttp.responseText;
		
		 document.getElementById("Solution1").value=D2;
		
		
		}
		function filterSearch(){
	
		var Service =document.getElementById("solution3").value;
		var Service2 =document.getElementById("Del1").value;
		var Service3 =document.getElementById("input").value;
		
		var App =document.getElementById("APP").value;
		var Dname =document.getElementById("Solution1").value;
		var Dtype =document.getElementById("DN").value;
		
		
		
		var url2="http://localhost:5000/"+"FSearch?input="+Service+"&App="+App+"&DN="+Dname+"&DT="+Dtype;
		
		if (Service !="NA"){
				url2="http://localhost:5000/"+"FSearch?input="+Service+"&App="+App+"&DN="+Dname+"&DT="+Dtype;
		
		}else if (Service2 !="NA"){
				url2="http://localhost:5000/"+"FSearch?input="+Service2+"&App="+App+"&DN="+Dname+"&DT="+Dtype
		}else{
				url2="http://localhost:5000/"+"FSearch?input="+Service3+"&App="+App+"&DN="+Dname+"&DT="+Dtype
				
		}
		
		
		document.getElementById("leaving").innerHTML='<object width="100" height="200" data='+url2+'></object>';
		
		
		}
	