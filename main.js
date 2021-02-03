var images =["Dad.jpg","Mom.jpeg","Brother (2).jpg","Sis.jpeg","Mee.jpeg","me_ssis.jpeg","familyy.jpeg"];
var names = ["Father : Arshad Ahmed Khan","Mother : Tahniyath Jahan","Brother : Musab Ahmed Khan Umair","Sister : Asima Iffath","Me : Faiza Sabahath","Me and my sister❤️","Family💖"]
var i=0;
function changeimage(){
  document.getElementById("Names").innerHTML=names[i];
  document.getElementById("album").src=images[i];
  i++;
  if(i==7){i=0;}
}