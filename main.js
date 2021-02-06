var canvas= new fabric.Canvas('myCanvas')
var player_x=10
var player_y=10
var block_image_width=30
var block_image_height=30
var object_player=""
var object_block=""

function player_update()
{
    fabric.Image.fromURL('player.png', function(Img){
        object_player=Img
        object_player.scaleToWidth(150)
        object_player.scaleToHeight(140)
        object_player.set({
            top: player_y,
            left: player_x
        })
        canvas.add(object_player)
    })
}
function block_update(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        object_block=Img
        object_block.scaleToWidth(block_image_width)
        object_block.scaleToHeight(block_image_height)
        object_block.set({
            top: player_y,
            left: player_x
        })
        canvas.add(object_block)
    })
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
    keyPressed = e.keyCode
    if (e.shiftKey == true && keyPressed=='80')
    {
        console.log("Shift and p key pressed together")
        block_image_width = block_image_width + 10
        block_image_height = block_image_height + 10
        document.getElementById("Current_Width").innerHTML=block_image_width
        document.getElementById("Current_Height").innerHTML=block_image_height
    }
    if (e.shiftKey == true && keyPressed=='77')
    {
        console.log("Shift and m key pressed together")
        block_image_width = block_image_width - 10
        block_image_height = block_image_height - 10
        document.getElementById("Current_Width").innerHTML=block_image_width
        document.getElementById("Current_Height").innerHTML=block_image_height
    }


    if(keyPressed == '38')
    {
        up()
        console.log("up")
    }
    if(keyPressed == '40')
    {
        down()
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left()
        console.log("left")
    }
    if(keyPressed == '39')
    {
        right()
        console.log("right")
    }
//----BLOCK IF CONDITIONS----//

    if(keyPressed == '84')
    {
        block_update("trunk.jpg")
        console.log("t")
    }
    if(keyPressed == '68')
    {
        block_update("dark_green.png")
        console.log("d")
    }
    if(keyPressed == '76')
    {
        block_update("light_green.png")
        console.log("l")
    }
    if(keyPressed == '71')
    {
        block_update("ground.jpg")
        console.log("g")
    }
    if(keyPressed == '84')
    {
        block_update("trunk.jpg")
        console.log("t")
    }
    if(keyPressed == '87')
    {
        block_update("wall.jpg")
        console.log("w")
    }
    if(keyPressed == '84')
    {
        block_update("trunk.jpg")
        console.log("t")
    }
    if(keyPressed == '89')
    {
        block_update("yellow_wall.png")
        console.log("y")
    }
    if(keyPressed == '82')
    {
        block_update("roof.jpg")
        console.log("r")
    }
    if(keyPressed == '67')
    {
        block_update("cloud.jpg")
        console.log("c")
    }
    if(keyPressed == '85')
    {
        block_update("unique.png")
        console.log("u")
    }
}

//--- Class number 3 code ---//

function up()
{
    if(player_y>0)
    {
    player_y= player_y-block_image_height
    console.log(player_y)
    canvas.remove(object_player)
    player_update()
    }
}

function down()
{
    if(player_y<480)
    {
    player_y= player_y+block_image_height
    console.log(player_y)
    canvas.remove(object_player)
    player_update()
    }
}

function right()
{
    if(player_x<880)
    {
    player_x= player_x+block_image_height
    console.log(player_x)
    canvas.remove(object_player)
    player_update()
    }
}

function left()
{
    if(player_x>0)
    {
    player_x= player_x-block_image_height
    console.log(player_x)
    canvas.remove(object_player)
    player_update()
    }
}

var bgcolor = ""
function bgchange()
{
    bgcolor=document.getElementById("dropdown").value;
    console.log(bgcolor)
    document.getElementById("myCanvas").style.backgroundColor=bgcolor
}