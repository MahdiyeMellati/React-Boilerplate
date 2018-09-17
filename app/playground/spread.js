function add(a,b){
  return a+b
}
console.log(add(1,3));

var names=['Shiam','fateme'];
var final=['Mahdiye'];
final=[final,...names]
final.forEach(function(name)
{
  console.log('Hi '+ name);
});



var person1=['Mahdiye',26];
var person2=['Hamed',31];

function greeting(name,age)
{
  console.log(' Hi '+ name+ ' you are '+age);

  }
  greeting(...person1);
  greeting(...person2);
