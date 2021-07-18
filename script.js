"use strict";
let son=prompt("element nechta");
let cars={

}
let car={

};
let json="{";
for(let i=1; i<=son; i++){
  alert(i+"->massivga qiymat bermoqchiman")
  for(let j=1; j<=2; j++){
    let key=prompt(j+"->key ga qiymat beryabman");
    let value=prompt(j+"->value ga qiymat beryabman");
    json +='"'+key+'"'+':'+'"'+value+'"'
    if(json!=2) json+=","
    car[j]=json;
    
  }
  cars[i]=car[i]; 
 
}
document.write(cars);