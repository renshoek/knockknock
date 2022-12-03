function getrandomStart() {

  const randomStart = start[Math.floor(Math.random() * start.length)];

  const randomReply = reply[Math.floor(Math.random() * reply.length)];

  document.getElementById("answer").innerHTML = randomStart;

  document.getElementById("answer2").innerHTML = randomStart + " who";

  document.getElementById("reply").innerHTML = randomStart + " " +  randomReply;
    
  document.getElementById("reply").style.display = "none";
      document.getElementById("reload").style.display = "none";
      document.getElementById("answer2").style.display = "block";


}

function showReply() {
  document.getElementById("reply").style.display = "block";
  document.getElementById("reload").style.display = "block";

}
