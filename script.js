function time(){
    let time = new Date();
    console.log(time);
    let timeZone =  document.querySelector(".bottum-child_1");
    timeZone.innerHTML = time;
 }
 
 setInterval(time);