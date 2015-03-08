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
