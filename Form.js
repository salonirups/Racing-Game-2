class Form{
    constructor(){}
    display(){
        var title=createElement("h2");
        title.html("Racing Game by Ruhaan");
        title.position(130,50);

        var input=createInput("Please Enter Your Name");
        var button=createButton("Click here to PLAY");

        input.position(130,200);
        button.position(130,300);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var name=input.value()
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting=createElement("h3");
            greeting.html("HELLO "+name);
            greeting.position(130,160);
        })
    }
}