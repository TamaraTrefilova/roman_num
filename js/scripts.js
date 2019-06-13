var romanConvert= function(userInput, arrayPar){

var remainder;
var string="";
remainder=userInput;
  for (var i=0; remainder > 0; i++){

   if (remainder >= arrayPar[i][0]){
     remainder=remainder-arrayPar[i][0];
     string += arrayPar[i][1];

     i=i-1;
    }
  }
 return string;
}




var arrayArg =  [[1000, "M"], [900, "CM"], [500,"D"], [400, "CD"], [100, "C"], [90,"XC"], [50,"L"], [40,"XL"], [10,"X"], [9,"IX"], [5,"V"], [4,"IV"], [1,"I"]];





$(function(){
 $("form").submit(function(event){
   event.preventDefault();
   // debugger;
   num = parseInt($("input#numberInput").val());
   // alert(num);

 var result = romanConvert(num,arrayArg);
  // alert(result);

    $("#outputA").text(num);
    $("#outputB").text(result);

   $("#output").show();


 });

});
