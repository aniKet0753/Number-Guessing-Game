let mini=1;
let max=100;
let random=Math.floor(Math.random()*(max-mini+1));
console.log(random);
let guess;
guess=Number(guess);



document.getElementById("button").onclick = function(){
  guess=document.getElementById("input").value;
  if(isNaN(guess)){
    document.getElementById("text").textContent="PLEASE ENTER A VALID INTEGER NUMBER";
  }
  else if(guess > max || guess < mini){
    document.getElementById("text").textContent=`PLEASE ENTER NUMBER ONLY BETWEEN ${mini} AND ${max}`;
  }
  else{
    if(guess<random){
      document.getElementById("text").textContent="😥THIS GUESS IS BIT LOW, TRY HIGHER NUMBER THEN THIS😥";
    }
    else if(guess>random){
      document.getElementById("text").textContent="😟THIS GUESS IS BIT HIGHER, TRY LOWER NUMBER THEN THIS😟";
    }
    else if(guess==random){
      document.getElementById("text").textContent="YOO!..👏 CONGRATS YOU GUESS THE RIGHT NUMBER..🥂";
      confetti();
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
      confetti() ;
    }
  }
}