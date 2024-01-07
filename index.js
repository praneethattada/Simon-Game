var level=0;
var gameseq=[];
var userseq=[];
$("body").on("keypress",function(){
   if(level==0)
   gamelevel();

}   
);
$("body").on("touchstart",function(){
    if(level==0)
    gamelevel();
 
 });
$(".btn").click(function() {
    userseq.push($(this).attr("id"));
    check(userseq.length-1);
});
function check(current)
{
if(gameseq[current]==userseq[current]){
    if(gameseq.length==userseq.length){
    setTimeout(function () {
        gamelevel();
      }, 500);
    }
}

else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    start();

}
}
function gamelevel(){
    userseq=[];
    level++;
    $("#level-title").text("Level " + level);
    var num=Math.floor(Math.random()*4)+1;
    gameseq.push(num);
    playSound(num)
    $("."+num).addClass("pressed");
    setTimeout(function (){
        $("."+num).removeClass("pressed");
    },100);

}
function start()
    {
        level =0;
        gameseq=[]

    }
    function playSound(file){
        var audio= new Audio(file + ".mp3");
        audio.play();

    }
