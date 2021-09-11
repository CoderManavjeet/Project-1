canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
formula_width = 75;
formula_height = 100;
background_image = "parkingLot.jpg";
formula_image = "car2.png";
formula_x = 5;
formula_y = 225;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    formula_imgTag = new Image();
    formula_imgTag.onload = uploadformula;
    formula_imgTag.src = formula_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height)
}

function uploadformula(){
    ctx.drawImage(formula_imgTag , formula_x , formula_y, formula_width , formula_height)
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up")
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left")
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }
}

function up()
{
    if(formula_y >= 0){
        formula_y = formula_y - 10;
        console.log("When up arrow is pressed, x = " + formula_x + "| y = " + formula_y);
        uploadBackground();
        uploadformula();
    }
}

function down()
{
    if(formula_y <= 350){
        formula_y = formula_y + 10;
        console.log("When down arrow is pressed, x = " + formula_x + "| y = " + formula_y);
        uploadBackground();
        uploadformula();
    }
}
function left()
{
    if(formula_x >= 0){
        formula_x = formula_x + 10;
        console.log("When left arrow is pressed, x = " + formula_x + "| y = " + formula_y);
        uploadBackground();
        uploadformula();
    }
}
function right()
{
    if(formula_x <= 750){
        formula_x = formula_x + 10;
        console.log("When left arrow is pressed, x = " + formula_x + "| y = " + formula_y);
        uploadBackground();
        uploadformula();
    }
}