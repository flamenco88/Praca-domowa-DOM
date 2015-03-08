var osoby = [
  'Artur Delura',
  'Gosia Ksionek',
  'Michał Matulka',
  'Zuza Podwińska'
];

var tworzLista = document.createElement('ul');
document.body.appendChild(tworzLista);


for (var i = 0; i < osoby.length ; i++)
{
  var punkt = document.createElement('li');
  tworzLista.appendChild(punkt);
  punkt.innerText = osoby[i];
}


var znajdzLi = document.getElementsByTagName('li')[1];
znajdzLi.setAttribute('class','fancy');

function createElementWithText(tagElem , tresc)
{
  var tworzenieTagElem = document.createElement(tagElem);
  document.body.appendChild(tworzenieTagElem);
  tworzenieTagElem.innerText = tresc;
}
createElementWithText ('div' , 'Przykładowy blok tekstu');

function createElementWithTextv2(tagElem2 , tresc2)
{
  var tworzenieTagElem2 = document.createElement(tagElem2);
  document.body.appendChild(tworzenieTagElem2);
  //tworzenieTagElem2.innerText = tresc2;

  for (var i = 0; i < tresc2.length ; i++)
  {
    var punkt2 = document.createElement('li');
    tworzenieTagElem2.appendChild(punkt2);
    punkt2.innerText = tresc2[i];
  }
}

createElementWithTextv2 ('ol', osoby)

var znajdzLi2 = document.getElementsByTagName('li')[7];
znajdzLi2.setAttribute('class','fancy');
