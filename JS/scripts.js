let repository  = [
  {name: "Venusaur ",  height:10, type:"Grass",},
  {name: "Charizard ", height:14, type:"Fire"},
  {name: "Blastoise ", height: 19, type:"Water"}
];

for(let a=0; a<repository.length; a++){
  if(repository[a].height > 15){
      document.write(repository[a].name +'(height:'+repository[a].height+')' +'- Wow, that’s big!');}
  else{
      document.write(repository[a].name +'(height:'+repository[a].height+')');
      document.write("<br>");
    }

}
