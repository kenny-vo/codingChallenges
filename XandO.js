// find x and o in a string

let numberX = 0;
let numberO = 0;

function getChar(string){
  for(let i=0; i<string.length; i++)
  {
    if(string.charAt(i)==='x' || string.charAt(i)==='X'){
      numberX++;
    }
    if(string.charAt(i)==='o' || string.charAt(i)==='O'){
      numberO++;
      }
  } return numberO === numberX;
}
