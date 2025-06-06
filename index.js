var b1=new Audio("./sounds/red.mp3");
var b4=new Audio("./sounds/blue.mp3");
var b3=new Audio("./sounds/green.mp3");
var b2=new Audio("./sounds/yellow.mp3");
var b5=new Audio("./sounds/wrong.mp3");
var arr=[];
var x=0;
var user=0;
var gamestart=false;
$(document).keydown(function (e){
    if(e.key==="a" && gamestart===false){
        gamestart=true;
        $("h1").text(`round 1`);
        nextround();
    }
})



function randomize(){
    let n=Math.random()*4;
    n=Math.floor(n)+1;
    return n;
}
function sound(a){
    switch(a){
        case 1:
            b1.play();
            break;
        case 2:
            b2.play();
            break;
        case 3:
            b3.play();
            break;
        case 4:
            b4.play();
            break;
    }
}
$(".box1, .box2, .box3, .box4").click(function(){
    if (!gamestart) {
        $("h1").text("GAME OVER! Press A To Restart");
        return;
    }
        var th=$(this);
        th.animate({opacity:0.5},100).animate({opacity:1},100);
        var n=$(this).attr("id");
        if(parseInt(n)===arr[user]){
            user++;
            if(user===arr.length){
                $("h1").text(`round ${x+1}`);
                nextround();
            }
        }
        else{
            gamestart=false;
            $("h1").text("GAME OVER! Press A To Restart");
            b5.play();
            user=0;
            arr=[];
        }


    })
function showsequence(){
    x=arr.length;
    var i=x-1;
    let interval=setInterval(function(){
        var id=arr[i];
        $(`#${id}`).animate({opacity:0.5},100).animate({opacity:1},100);
        sound(id);
        i++;
        if(i>=arr.length){
            clearInterval(interval);
        }
    },600)
}
function nextround(){
    arr.push(randomize());
    user=0;
    showsequence();
}