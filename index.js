document.getElementById('calculate').addEventListener("click",function(){
  var loveScore = Math.random() * 100;
  LoveScore = Math.floor(loveScore) + 1;
  if(LoveScore > 70){
      document.querySelector(".para").innerHTML = "🖤❤ Your love score is" + LoveScore + "%" + "You Love EachOther 🖤❤"
  }
  if(LoveScore > 30 && LoveScore <= 70){
      document.querySelector(".para").innerHTML = "Your love score is" + LoveScore + "%";
  }
  if(LoveScore<=30){

      document.querySelector(".para").innerHTML = "💔Your love score is" + LoveScore + "%" + "You go together like oil and water💔";
  }
});
