var sens=prompt("Douleur");
if (sens=="Abdomen") {
    alert("appendicite")
    
} else if(sens=="Gorge"){
    alert("Fievre");
    var fievre= String;
    if (fievre=="oui") {
        alert("Rhume");
    }
    else 
    alert("Mal de gorge");
}
     else {
        alert(sens=="Aucune");
        
        var Toux=String;
        if(Toux=="non"){
            alert("rien");
        }
        else{
            alert("Fievre");
            var Fievre=String;
            if (Fievre=="oui") {
                alert("Rhume");
                
            } else {
                alert("Refroidissement");
                
            }
        }
        
    }
    

     



    
