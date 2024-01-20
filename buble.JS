var score=0;
var time = 60;
var val;

 function mb()
{
    var bt=""

for(var i=1; i<=100; i++)
{
    var val=Math.floor(Math.random()*10);
    bt += `<div class="blb">${val}</div>`
}
document.querySelector(".dot").innerHTML = bt;
}


function runin(){
    
var settime = setInterval(function(){
if(0<time)
{
    time--;
    document.querySelector("#tm").textContent=time;
}
else{
    clearInterval(settime)
    
    document.querySelector(".dot").innerHTML="<h1>Game Over</h1>"
}
},1000)

}

function hit()
{
    val=Math.floor(Math.random()*10);
    document.querySelector("#yn").textContent=val;
}


function inscore(){
         score += 10;
           document.querySelector("#mn").textContent = score;
        }

function onscore(){
            score -= 5;
              document.querySelector("#mn").textContent = score;
           }




    document.querySelector(".dot").addEventListener("click",function(e)
    {
        var num = Number(e.target.textContent)
        if(val === num)
        {
            inscore();
            hit();
            mb();
        }
        else
        {
            onscore();
        }
    })

hit();
runin();
mb();