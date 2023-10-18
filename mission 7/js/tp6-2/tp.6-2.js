function calcul_moyenne(){
    var n1= prompt("donner la premiere note");
    var n2= prompt("donner la deuxieme note");
    var n3= prompt("donner la troisieme note");

    var somme = Number(n1)+Number(n2)+Number(n3);
     
    document.write ("voici la somme: "+somme+" <br>")
    var moyenne=somme/3;

    document.write ("voici la moyenne: "+moyenne+"<br>")

    if (moyenne<10)
    document.write ("vous etes redoublant");
   else
   document.write ("vous etes admis")

  
 }
 function test_couleur(){
    let c =prompt("donner une couleur")
    if (c == "rouge" || c == "ROUGE" || c == "R"){
        document.body.style.background = "red"
    }
    else if (c == "bleu" || c == "bleu" || c=="B"){
        document.body.style.background = "blue"
    }
    else{
        document.write ("couleur non compris")

    }
}
function test_age(){
    var a= prompt("donner votre age")
    if (a<18){
    document.write ("vous etes mineur")
    document.bgColor="red"
}
    else{
    document.write("vous etes majeur")
    document.bgColor="green"
}
}
function simple_affichage(){
   var  name = prompt('donner votre nom');
    var famillyName = prompt('donner votre prenom');
    document.write('<div sryle="margin:auto; width:300px; border:2px solid blue;">');
    document.write('Bonjour' + name + famillyName);
    document.write('</div>');
    
}