//Tipton Rooms Javascript 


// Event listener to run setStyles() on page load
window.addEventListener("load", setStyles);

function setStyles(){

   // variable to store the random number generated by randInt()
   var styleNum = randInt(4); 

   // variable to store the new link element node 
   var fancyStyle = document.createElement("link"); 
   fancyStyle.setAttribute("rel" , "stylesheet");
   fancyStyle.setAttribute("id", "fancySheet");
   fancyStyle.setAttribute("href", "tipton_style_" + styleNum + ".css");
   

   //attach the newStyle fragment to the document structure 
   document.head.appendChild(fancyStyle);

   // variable to store the new figure element node 
   var figbox = document.createElement("figure");
   figbox.setAttribute("id", "styleThumbs");

   // attach the figbox fragment to the doc structure 

   document.getElementById("box").appendChild(figbox);

   // loopn to inser image eleents into figure (if i were to add more syles this must be chasnged as well as the number up top) \
  for(var i = 0; i < 4; i++){
   // var to store the image element 
      var sheetImg = document.createElement("img");
      sheetImg.setAttribute("src", "rooms/Small_Suite_" + i + ".png");
      sheetImg.setAttribute("alt", "tipton_style_" + i + ".css");

      //event hsnf=dler to change the href of our links 
      sheetImg.onclick = function(e){
         document.getElementById("fancySheet").href = e.target.alt;
      }
      // attarch the image to the figure with id figBox\
      figbox.appendChild(sheetImg);

    }
//variable to store the style element 
    var thumbStyles = document.createElement("style");
    document.head.appendChild(thumbStyles);

    //refernce the stylesheet collection and add new css rules 
    document.styleSheets[document.styleSheets.length -1].insertRule(
      "figure#styleThumbs{ \
        left: 0px; \
     	position: absolute;\
        top: 160px;\
        margin-left:0px;\
        margin-bottom:4px;\
        }" 
        );
        document.styleSheets[document.styleSheets.length -1].insertRule(
        "figure#styleThumbs img { \
         outline: 1px solid white; \
         cursor: pointer; \
         opacity: 0.75; \
         }" ); 
         document.styleSheets[document.styleSheets.length -1].insertRule(
         "figure#styleThumbs img:hover { \
            outline: 2px solid green; \
            opacity: 1.0; \
         }" );
      


}


//------------------------------------------------------------------
function randInt(size) {
   return Math.floor(size*Math.random());
}