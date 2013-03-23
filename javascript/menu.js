function homeButtonMouseOver()
        {
            document.getElementById("homeButton").style.box-shadow="10px 10px 5px #000";
            document.getElementById("homeButton").style.color="blue";

            	
        }
        
		function drinkFunction()
        {
            document.getElementById("menuHeading").innerHTML="Hot Drinks";
            document.getElementById("menuContent").innerHTML="Caffe Latte'.......60<br>Cappuccino .......60<br>Brewed Coffee ...30<br>Americano ........40<br>Caffee Mocha ....80</div>";
            document.getElementById("rightMenuHeading").style.display="block";
            document.getElementById("rightMenuContent").style.display="block";
			document.getElementById("foodSubNav").style.color="black";
			document.getElementById("foodSubNav").style.fontWeight="normal";
			document.getElementById("drinkSubNav").style.color="white";
			document.getElementById("drinkSubNav").style.fontWeight="bold";			
			document.getElementById("menuTitle").innerHTML="Drink Menu";
			document.getElementById("rightSubMenuBoxSelected").style.backgroundColor="#FC0";
		
		
        }
		function leftSubMenuMouseOver(){
			if(document.getElementById("drinkSubNav").style.fontWeight=="bold"){			
			document.getElementById("leftSubMenuBoxSelected").style.backgroundColor="#FC0";
            document.getElementById("drinkSubNav").style.color="white";}
			else{
				document.getElementById("leftSubMenuBoxSelected").style.backgroundColor="#FC9";
				}
			}

		function leftSubMenuMouseOut(){
			
			if(document.getElementById("drinkSubNav").style.fontWeight=="bold"){
			document.getElementById("drinkSubNav").style.color="white";
			document.getElementById("leftSubMenuBoxSelected").style.backgroundColor="#FC9";
			}
			else{
			document.getElementById("drinkSubNav").style.color="black";
			document.getElementById("leftSubMenuBoxSelected").style.backgroundColor="#FC0";
	
				}				
		}
		function rightSubMenuMouseOver(){	
			document.getElementById("foodSubNav").style.color="white";
			if(document.getElementById("foodSubNav").style.fontWeight=="bold"){
			document.getElementById("foodSubNav").style.color="white";
			document.getElementById("rightSubMenuBoxSelected").style.backgroundColor="#FC0";
			}
			else{
			document.getElementById("foodSubNav").style.color="black";
			document.getElementById("rightSubMenuBoxSelected").style.backgroundColor="#FC9";
	
				}	
			
		}
		function rightSubMenuMouseOut(){			
		
			
			if(document.getElementById("foodSubNav").style.fontWeight=="bold"){
			document.getElementById("foodSubNav").style.color="white";
			document.getElementById("rightSubMenuBoxSelected").style.backgroundColor="#FC9";
			}
			else{
			document.getElementById("foodSubNav").style.color="black";
            document.getElementById("rightSubMenuBoxSelected").style.backgroundColor="#FC0";
	
				}
			
		}