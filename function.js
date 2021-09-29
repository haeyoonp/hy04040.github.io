

$(document).ready(function () { 
  if ($('#main').children().length == 0){
      $("#main").load("home.html"); 
    }
 });



function openPage(pageName) {
  tabcontent = document.getElementsByClassName("tabcontent");
   $("#main").load(pageName+".html"); 
}

