var budi;

function preload(){
    budi = loadImage("hahaha.jpeg");
}

function setup(){
    createCanvas(600,400);
    
    
}

function draw(){
    
    background(0);
    
    image(budi, 0, 0);
    
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col + row * width) * 4;
            
            var r = pixels[startingIndex];
            var g = pixels[startingIndex + 1];
            var b = pixels[startingIndex + 2];
            var a = pixels[startingIndex + 3];
            
            if(keyIsPressed){
                if(key=="1"){
                    gray_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="2"){
                    purple_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="3"){
                    yellow_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="4"){
                    green_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="5"){
                    cyan_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="6"){
                    red_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="7"){
                    blue_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="8"){
                    pretty_purple_filter(startingIndex, r, g, b, a);
                }
                
            }
            
    
        }
    }
    
    
    updatePixels();
}

function gray_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = g;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = g;
    pixels[startingIndex + 3] = a;
}

function purple_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r + 200;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = b + 255;
    pixels[startingIndex + 3] = a;
}

function yellow_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r + 255;
    pixels[startingIndex + 1] = g + 255;
    pixels[startingIndex + 2] = b;
    pixels[startingIndex + 3] = a;
}

function green_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r;
    pixels[startingIndex + 1] = g + 255;
    pixels[startingIndex + 2] = b;
    pixels[startingIndex + 3] = a;
}

function cyan_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r;
    pixels[startingIndex + 1] = g + 255;
    pixels[startingIndex + 2] = b + 255;
    pixels[startingIndex + 3] = a;
}

function red_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r + 255;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = b;
    pixels[startingIndex + 3] = a;
}

function blue_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = b + 255;
    pixels[startingIndex + 3] = a;
}

function pretty_purple_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r + 113;
    pixels[startingIndex + 1] = g + 27;
    pixels[startingIndex + 2] = b + 170;
    pixels[startingIndex + 3] = a;
}