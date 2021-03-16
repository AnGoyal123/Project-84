canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = backgroundUpload;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = car1Upload;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = car2Upload;
    car2_imgTag.src = car2_image;
}

function backgroundUpload(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function car1Upload(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height)
}

function car2Upload(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height)
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '38')
    {
        car1_up ()
        console.log("up")
    }

    if(keyPressed == '40')
    {
        car1_down ()
        console.log("down")
    }

    if(keyPressed == '39')
    {
        car1_right ()
        console.log("right")
    }

    if(keyPressed == '37')
    {
        car1_left ()
        console.log("left")
    }

    if(keyPressed == '87')
    {
        car2_up ()
        console.log("W")
    }

    if(keyPressed == '83')
    {
        car2_down ()
        console.log("S")
    }

    if(keyPressed == '68')
    {
        car2_right ()
        console.log("D")
    }

    if(keyPressed == '65')
    {
        car2_left ()
        console.log("A")
    }
}