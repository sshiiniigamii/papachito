function f1()
{
  document.getElementById('ff22').srcdoc ="Demande a l'utilisateur une chaine de caractère et l'affiche";
  document.getElementById('ff11').srcdoc = 
  text_chain = prompt("Entrez a string: ");





  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(text_chain);
  experiment.contentWindow.document.close();


 

}

function f2()
{
  
  
  a = 22;
  b = 50;
  result = a + b;
  alert("the result is: " + result);
  document.getElementById('ff22').srcdoc ="Addition de 2 valeurs fixes";
}

function f3()
{
  document.getElementById('ff22').srcdoc ="Calcul d'une moyenne avec 3 notes fixes";
  document.getElementById('ff11').srcdoc =
  note_math = 5;
  note_hg = 6;
  note_francais= 20;
  moyenne =  (note_francais + note_math + note_hg) /3;
  alert("La moyenne est de " + moyenne);
}

function f4()
{
  document.getElementById('ff22').srcdoc ="Vérifie si le budget fixe suffit pour l'achat fixe";
  document.getElementById('ff11').srcdoc =
  budget = 3;
  achats = 2;
  if(achats <= budget)
  {
    alert("You can buy everything with the budget you have, it will let you with " + (budget - achats) + " €")
  }
  if(achats > budget)
  {
    alert("You can't buy everything with the budget you have, you need  " + math.abs(budget - achats) + " € more")
  }
}


function f5()
{
  document.getElementById('ff22').srcdoc ="Demande a l'utilisateur un prix et donne le prix ttc avec 20% de tva en moins";
  document.getElementById('ff11').srcdoc =
  prix = prompt("Give me a price: ");
  alert("Your ttc price is with 20% tva is " + prix * 0.80);
}

function f6()
{
  document.getElementById('ff22').srcdoc ="Demande a l'utilisateur un prix ainsi qu'on % de tva, le programme affiche le prix ttc";
  document.getElementById('ff11').srcdoc =
  prix = prompt("Give me a price: ");
  tva = prompt("Give me a tva %: ");
  alert("Your ttc price is " + Math.ceil(prix * ( 1 - (tva/100))));
}

function f7()
{
  document.getElementById('ff22').srcdoc ="Demande a l'utilisateur un prix ainsi qu'on % de tva, le programme affiche le prix ttc. le prix ttc est affiché en vert si le prix est supérieur a 100 sinon en rouge";
  document.getElementById('ff11').srcdoc =
  experiment.contentWindow.document.open();
  prix = prompt("Give me a price: ");
  tva = prompt("Give me a tva %: ");
  ttc = Math.ceil(prix * ( 1 - (tva/100)));
  if( ttc > 100)
  {
    experiment.contentWindow.document.body.style.color = "red";
  }
  else
  {
    experiment.contentWindow.document.body.style.color = "green";
  }
  experiment.contentWindow.document.write(ttc);
  experiment.contentWindow.document.close();
}


function f8()
{
  document.getElementById('ff22').srcdoc ="enmene sur une page ou il y a une liste de cocktail, un bouton présent sur la page permet de modifier cette liste uniquement en javascript";
  document.getElementById('ff11').srcdoc =
  experiment.setAttribute("src","other/f7.html");

}


function f9()

{
  document.getElementById('ff11').srcdoc =
  document.getElementById('ff22').srcdoc ="Affiche dans la console tout les nombres multiple de 10 jusqu'a 1000";
  for (let i = 10; i <= 1000;i+=10)
  {
    document.getElementById('ff11').srcdoc =
    console.log(i);

  }
}


function f10()
{
  document.getElementById('ff22').srcdoc ="Demande a l'utilisateur un age, le programme répond majeur si l'age est supérieur ou égal a 18 et mineur si inférieur a 18";
  document.getElementById('ff11').srcdoc =
  age = prompt("How old are you?")
  if (age >= 18)
  {
    alert('Vous etes Majeur!')
  }
  else
  {
    alert('Vous etes mineur!')
  }

}


function f11()
{
  document.getElementById('ff22').srcdoc ="Écrit dans la console tout les codes postaux possible entre 77000 et 77999";
  document.getElementById('ff11').srcdoc =
  cp = 77000;
  while (cp <= 79000)
  {
    document.getElementById('ff11').srcdoc =
    console.log(cp)
    cp++;
  }
}

function f12()
{
  document.getElementById('ff22').srcdoc ="Affiche toute la table de multiplication de 5";
  document.getElementById('ff11').srcdoc =
  n = 5;
  html_content = '';
  for(i = 0; i <= 10; i++)
  {
    document.getElementById('ff11').srcdoc =
    html_content += `${n} x ${i} = ${n * i} <br>`
  }


  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}



function f13()
{
  document.getElementById('ff22').srcdoc ="Affiche dans la console plusieurs nombre et les affichent en quantité en fonction de celui-ci";
  document.getElementById('ff11').srcdoc =
  html_content = '';
  for(i = 1; i <= 5; i++)
  {
    
    for(j = 1; j <= i; j++)
    {
      document.getElementById('ff11').srcdoc =
      html_content += i;
    }
    html_content += '<br>';
  }


  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}


function f14()
{
  document.getElementById('ff22').srcdoc ="Affiche une variable qui vaut 0 jusqu'a ce qu'elle soit égale a 20";
  document.getElementById('ff11').srcdoc =
  variable_de_mon_choix = 0;


  experiment.contentWindow.document.open();


  while (variable_de_mon_choix < 20)
  {
    document.getElementById('ff11').srcdoc =
    experiment.contentWindow.document.write(variable_de_mon_choix + "<br>");
    variable_de_mon_choix+=2;
  }
  experiment.contentWindow.document.close();
}


function f15()
{
  document.getElementById('ff22').srcdoc ="Construit un tableau";
  document.getElementById('ff11').srcdoc =
  tableau = '<table style="border: 1px solid black;">';
  column = 2;
  row = 5;

  for(i = 1; i <= row; i++)
  {
    document.getElementById('ff11').srcdoc =
    tableau += '<tr>';
    for(j = 1; j <= column; j++)
    {
      tableau += '<td style="border: 1px solid black;">?</td>'
    }
    tableau += '</tr>';
  }
  tableau += '</table>';


  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(tableau);
  experiment.contentWindow.document.close();


}

function f16()
{
  document.getElementById('ff22').srcdoc ="Demande a l'utilisateur un nombre de colonnes et de lignes, le programme trace ensuite le tableau";
  document.getElementById('ff11').srcdoc =
  tableau = '<table style="border: 1px solid black;">';
  column = prompt("How many columns do you want ?");
  row = prompt("How many rows do you want ?");

  for(i = 0; i <= row; i++)
  {
    document.getElementById('ff11').srcdoc =
    tableau += '<tr>';
    for(j = 1; j <= column; j++)
    {
     
      tableau += '<td style="border: 1px solid black;">?</td>'
    }
    tableau += '</tr>';
  }
  tableau += '</table>';


  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(tableau);
  experiment.contentWindow.document.close();


}

function f17()
{
  document.getElementById('ff22').srcdoc ="Affiche une liste de 10 nombres générés aléatoirement de 0 a 100";
  document.getElementById('ff11').srcdoc =
  html_content = '<ul>';
  random_nums = 10;
  for(i = 1; i <= random_nums; i++)
  {
    document.getElementById('ff11').srcdoc =
    html_content += '<li>' + Math.floor(Math.random() * 100) + '</li>';
  }
  html_content += '</ul>';

  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}

function f18()
{
  document.getElementById('ff22').srcdoc ="Affiche une liste de 10 nombres générés aléatoirement de 0 a 10 inclus. le programme affiche ensuite si 10 était présent dans le tirage";
  document.getElementById('ff11').srcdoc =
  html_content = '<ul>';
  random_nums = 10;
  for(i = 1; i <= random_nums; i++)
  {
    document.getElementById('ff11').srcdoc =
    random = Math.random(10);

    if (random == 10)
    {
      console.log(`${random} was what we were looking for!`);
    }
    html_content += '<li>' + random + '</li>';
  }
  html_content += '</ul>';

  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}


function f19()
{
  document.getElementById('ff22').srcdoc ="Affiche une liste de 10 nombres générés aléatoirement de 0 a 10 inclus. le programme affiche ensuite le nombre d'occurence de 10 dans la liste";
  document.getElementById('ff11').srcdoc =
  html_content = '<ul>';
  random_nums = 10;
  cptr_10 = 0;
  for(i = 1; i <= random_nums; i++)
  {
    document.getElementById('ff11').srcdoc =
    random = Math.floor(Math.random() * 11);

    if (random == 10)
    {
      console.log(`${random} was what we were looking for!`);
      cptr_10++;
    }
    html_content += '<li>' + random + '</li>';
  }
  html_content += `</ul> <br>10 was seen ${cptr_10} times`;

  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}


function f20()
{
  document.getElementById('ff22').srcdoc ="Génère aleatoirement une couleur rgb, le programme met ensuite la couleur de l'arrière plan de l'iframe avec cette dernère";
  document.getElementById('ff11').srcdoc =
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  color = `rgb(${r}, ${g}, ${b})`;

  experiment.style.backgroundColor = color;
}


